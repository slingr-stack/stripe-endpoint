step.cancelPaymentIntentsStripe = function (inputs) {

	var inputLogics = {
		intent: inputs.intent || "",
	};

	var body = {
		cancellation_reason: inputs.cancellationReason || "",
	};

	var options = {
		path: "/v1/payment_intents/"+inputLogics.intent+"/cancel",
		body: body.cancellation_reason || []
	}

	return endpoint._post(options);
}