step.createPaymentStripe = function (inputs) {

    var inputsLogic = {
        currency: inputs.currency || "",
        amount: inputs.amount || 0,
    };

    var options = {
        path: "/payment_intents",
        body: inputsLogic
    }

    return endpoint._post(options);

}