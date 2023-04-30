step.createPaymentIntentsStripe = function (inputs) {

    var inputsLogic = {
        currency: inputs.currency || "",
        amount: inputs.amount || 0,
    };

    var options = {
        path: "/v1/payment_intents",
        body: inputsLogic
    }

    return endpoint._post(options);

}