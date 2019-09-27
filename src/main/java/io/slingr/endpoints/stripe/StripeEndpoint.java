package io.slingr.endpoints.stripe;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


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

    @EndpointProperty
    private String publishableKey;

    @EndpointProperty
    private String secretKey;

    public StripeEndpoint() {
    }

    @Override
    public String getApiUri() {
        return API_URL;
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        logger.info(String.format("GET [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, false);
        try {
            return defaultGetRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        logger.info(String.format("PUT [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, true);
        try {
            return defaultPutRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        logger.info(String.format("PATCH [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, true);
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        logger.info(String.format("POST [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, true);
        try {
            return defaultPostRequest(request);
        } catch (EndpointException e) {
            throw e;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        logger.info(String.format("DELETE [%s]", request.getJsonParams().string("path")));
        setRequestConfig(request, false);
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException e) {
            throw e;
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
