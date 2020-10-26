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
    private static int WAIT_WHEN_RATE_LIMIT = 5000;
    public int MAX_CONCURRENT_CALLS;
    public int MAX_RETRIES;
    public Semaphore semaphore;
    private Boolean checkWebhooksSign;

    @EndpointProperty
    private String publishableKey;

    @EndpointProperty
    private String secretKey;

    @EndpointProperty
    private String maxConcurrentCalls;
    private Boolean checkWebhooksSign;

    @EndpointProperty
    private String webhooksSecret;

    @EndpointProperty
    private String maxRetries;

    public StripeEndpoint() {
    }


    @Override
    public String getApiUri() {
        return API_URL;
    }

    @Override
    public void endpointStarted() {
        MAX_CONCURRENT_CALLS = Integer.parseInt(maxConcurrentCalls);
        MAX_RETRIES = Integer.parseInt(maxRetries);
        semaphore = new Semaphore(MAX_CONCURRENT_CALLS, true);
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
            events().send(HttpService.WEBHOOK_EVENT, json);
        } catch (Exception ex) {
            // Invalid payload
            Json json = Json.map();
            json.set("type", "error");
            json.set("code", 500);
            json.set("message", ex.getMessage());
            events().send(HttpService.WEBHOOK_EVENT, json);
        }

        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) throws InterruptedException {
        semaphore.acquire();
        try {
            logger.info(String.format("GET [%s]", request.getJsonParams().string("path")));
            setRequestConfig(request, false);
            int retries = 0;
            while (true) {
                try {
                    return defaultGetRequest(request);
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        if (retries >= MAX_RETRIES) {
                            throw e;
                        } else {
                            // wait a few seconds and retry
                            Thread.sleep(WAIT_WHEN_RATE_LIMIT);
                            retries++;
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

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) throws InterruptedException {
        semaphore.acquire();
        try {
            logger.info(String.format("PUT [%s]", request.getJsonParams().string("path")));
            setRequestConfig(request, true);
            int retries = 0;
            while (true) {
                try {
                    return defaultPutRequest(request);
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        if (retries >= MAX_RETRIES) {
                            throw e;
                        } else {
                            // wait a few seconds and retry
                            Thread.sleep(WAIT_WHEN_RATE_LIMIT);
                            retries++;
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

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) throws InterruptedException {
        semaphore.acquire();
        try {
            logger.info(String.format("PATCH [%s]", request.getJsonParams().string("path")));
            setRequestConfig(request, true);
            int retries = 0;
            while (true) {
                try {
                    return defaultPatchRequest(request);
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        if (retries >= MAX_RETRIES) {
                            throw e;
                        } else {
                            // wait a few seconds and retry
                            Thread.sleep(WAIT_WHEN_RATE_LIMIT);
                            retries++;
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

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) throws InterruptedException {
        semaphore.acquire();
        try {
            logger.info(String.format("POST [%s]", request.getJsonParams().string("path")));
            setRequestConfig(request, true);
            int retries = 0;
            while (true) {
                try {
                    return defaultPostRequest(request);
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        if (retries >= MAX_RETRIES) {
                            throw e;
                        } else {
                            // wait a few seconds and retry
                            Thread.sleep(WAIT_WHEN_RATE_LIMIT);
                            retries++;
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

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) throws InterruptedException {
        semaphore.acquire();
        try {
            logger.info(String.format("DELETE [%s]", request.getJsonParams().string("path")));
            setRequestConfig(request, false);
            int retries = 0;
            while (true) {
                try {
                    return defaultDeleteRequest(request);
                } catch (EndpointException e) {
                    if (e.getReturnCode() == 429) {
                        if (retries >= MAX_RETRIES) {
                            throw e;
                        } else {
                            // wait a few seconds and retry
                            Thread.sleep(WAIT_WHEN_RATE_LIMIT);
                            retries++;
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

    private void setRequestConfig(FunctionRequest request, boolean formEncoded) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "Bearer " + secretKey);
        if (formEncoded) {
            headers.set("Content-Type", "application/x-www-form-urlencoded");
        } else {
            headers.set("Content-Type", "application/json");
        }
        body.set("headers", headers);
    }

}
