step.listAllPaymentIntentsStripe = function (inputs) {

	var params = {
		customer : inputs.customer || ""
	};

	var options = {
		path: "/v1/payment_intents",
		params: params.customer || []
	}

	return endpoint._get(options);

}