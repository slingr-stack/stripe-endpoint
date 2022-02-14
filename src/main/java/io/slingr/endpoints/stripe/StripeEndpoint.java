package io.slingr.endpoints.stripe;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.net.Webhook;
import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.EndpointWebService;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Locale;
import java.util.concurrent.Semaphore;

import static java.lang.Integer.*;


/**
 * <p>Stripe endpoint
 * <p>
 * API Reference: https://stripe.com/docs/api
 *
 * <p>Created by hpacini on 09/25/19.
 */
@SlingrEndpoint(name = "stripe", functionPrefix = "_")
public class StripeEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(StripeEndpoint.class);
    private static String API_URL = "https://api.stripe.com";
    public int MAX_CONCURRENT_CALLS;
    public int MAX_RETRIES;
    private int TIME_SLOT;

    public Semaphore semaphore;

    @EndpointProperty
    private String publishableKey;

    @EndpointProperty
    private String secretKey;

    @EndpointProperty
    private Boolean checkWebhooksSign;

    @EndpointProperty
    private String webhooksSecret;

    @EndpointProperty
    private String maxConcurrentCalls;

    @EndpointProperty
    private String maxRetries;

    @EndpointProperty
    private String timeSlot;

    public StripeEndpoint() {
    }

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        MAX_CONCURRENT_CALLS = parseInt(maxConcurrentCalls);
        MAX_RETRIES = parseInt(maxRetries);
        TIME_SLOT = parseInt(timeSlot);
        
        semaphore = new Semaphore(MAX_CONCURRENT_CALLS, true);

        httpService().setupBearerAuthenticationHeader(secretKey);
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {

        try {

            if (Boolean.TRUE.equals(checkWebhooksSign)) {
                String payload = request.getRawBody();
                String sigHeader = request.getHeader("Stripe-Signature");
                if (sigHeader == null) {
                    sigHeader = request.getHeader("stripe-signature");
                }
                Webhook.Signature.verifyHeader(payload, sigHeader, webhooksSecret, 300L);
            }

            final Json json = HttpService.defaultWebhookConverter(request);
            if (request.getMethod().equals(RestMethod.POST)) {
                if (request.getBody() != null) {
                    json.set("body", request.getBody());
                }

                // send the webhook event
                events().send(HttpService.WEBHOOK_EVENT, json);

            }

        } catch (SignatureVerificationException e) {
            // Invalid signature
            Json json = Json.map();
            json.set("type", "error");
            json.set("code", 400);
            json.set("message", e.getMessage());
            json.set("webhookBody", request.getBody());
            appLogs().warn("Stripe Webhook discarded because Signature did not match.",json);
        } catch (Exception ex) {
            // Invalid payload
            Json json = Json.map();
            json.set("type", "error");
            json.set("code", 500);
            json.set("message", ex.getMessage());
            json.set("webhookBody", request.getBody());
            appLogs().warn("Stripe Webhook discarded because invalid payload.",json);
        }

        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) throws InterruptedException {
        return makeBackoffRequest(request, "GET");
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) throws InterruptedException {
        return makeBackoffRequest(request, "PUT");
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) throws InterruptedException {
        return makeBackoffRequest(request, "PATCH");
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) throws InterruptedException {
        return makeBackoffRequest(request, "POST");
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) throws InterruptedException {
        return makeBackoffRequest(request, "DELETE");
    }

    private void setContentType(FunctionRequest request, boolean formEncoded) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        if (formEncoded) {
            headers.set("Content-Type", "application/x-www-form-urlencoded");
        } else {
            headers.set("Content-Type", "application/json");
        }
        body.set("headers", headers);
    }

    private Json makeBackoffRequest(FunctionRequest request, String reqMethod) throws InterruptedException {
        semaphore.acquire();
        try {
            reqMethod = reqMethod.toUpperCase(Locale.ROOT);
            int retryNum = 0;
            while (true) {
                try {
                    switch (reqMethod) {
                        case "GET":
                            setContentType(request, false);
                            return defaultGetRequest(request);
                        case "PATCH":
                            setContentType(request, true);
                            return defaultPatchRequest(request);
                        case "PUT":
                            setContentType(request, true);
                            return defaultPutRequest(request);
                        case "POST":
                            setContentType(request, true);
                            return defaultPostRequest(request);
                        case "DELETE":
                            setContentType(request, false);
                            return defaultDeleteRequest(request);
                    }
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        retryNum++;
                        if (ExponentialBackoffService.shouldRetry(retryNum,MAX_RETRIES)) {
                            ExponentialBackoffService.waitRandom(retryNum, TIME_SLOT);
                        } else {
                            throw e;
                        }
                    } else {
                        throw e;
                    }
                }
            }
        } finally {
            semaphore.release();
        }
    }

}
