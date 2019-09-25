package io.slingr.endpoints.stripe;

import io.slingr.endpoints.HttpEndpoint;
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
 * API Reference:
 *
 * <p>Created by hpacini on 09/25/19.
 */
@SlingrEndpoint(name = "stripe")
public class StripeEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(StripeEndpoint.class);

    @EndpointProperty
    private String publishableKey;

    @EndpointProperty
    private String secretKey;

    public StripeEndpoint() {
    }

    @Override
    public String getApiUri() {
        return null;
    }


    @EndpointFunction(name = "_httpGet")
    public Json httpGet(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return Json.map();
    }

    @EndpointFunction(name = "_httpPost")
    public Json httpPost(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return Json.map();

    }

    @EndpointFunction(name = "_httpPut")
    public Json httpPut(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return Json.map();

    }

    @EndpointFunction(name = "_httpDelete")
    public Json httpDelete(FunctionRequest functionRequest) {

        Json functionParams = functionRequest.getJsonParams();
        return Json.map();

    }



}
