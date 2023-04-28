////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.charges = {};

endpoint.charges.capture = {};

endpoint.customers = {};

endpoint.disputes = {};

endpoint.disputes.close = {};

endpoint.fileLinks = {};

endpoint.paymentIntents = {};

endpoint.paymentIntents.confirm = {};

endpoint.paymentIntents.capture = {};

endpoint.paymentIntents.cancel = {};

endpoint.setupIntents = {};

endpoint.setupIntents.confirm = {};

endpoint.setupIntents.cancel = {};

endpoint.payouts = {};

endpoint.payouts.cancel = {};

endpoint.products = {};

endpoint.refunds = {};

endpoint.tokens = {};

endpoint.paymentMethods = {};

endpoint.paymentMethods.attach = {};

endpoint.paymentMethods.detach = {};

endpoint.customers.sources = {};

endpoint.customers.sources.verify = {};

endpoint.sources = {};

endpoint.checkout = {};

endpoint.checkout.sessions = {};

endpoint.coupons = {};

endpoint.creditNotes = {};

endpoint.creditNotes.void = {};

endpoint.customers.balanceTransactions = {};

endpoint.customers.taxIds = {};

endpoint.invoices = {};

endpoint.invoices.finalize = {};

endpoint.invoices.pay = {};

endpoint.invoices.send = {};

endpoint.invoices.void = {};

endpoint.invoices.markUncollectible = {};

endpoint.invoiceitems = {};

endpoint.plans = {};

endpoint.subscriptions = {};

endpoint.subscriptionItems = {};

endpoint.subscriptionSchedules = {};

endpoint.subscriptionSchedules.cancel = {};

endpoint.subscriptionSchedules.release = {};

endpoint.taxRates = {};

endpoint.subscriptionItems.usageRecords = {};

endpoint.accounts = {};

endpoint.accounts.reject = {};

endpoint.accounts.loginLinks = {};

endpoint.accountLinks = {};

endpoint.applicationFees = {};

endpoint.applicationFees.refunds = {};

endpoint.accounts.capabilities = {};

endpoint.accounts.externalAccounts = {};

endpoint.topups = {};

endpoint.topups.cancel = {};

endpoint.transfers = {};

endpoint.transfers.reversals = {};

endpoint.reviews = {};

endpoint.reviews.approve = {};

endpoint.radar = {};

endpoint.radar.valueLists = {};

endpoint.radar.valueListItems = {};

endpoint.issuing = {};

endpoint.issuing.authorizations = {};

endpoint.issuing.authorizations.approve = {};

endpoint.issuing.authorizations.decline = {};

endpoint.issuing.cardholders = {};

endpoint.issuing.cards = {};

endpoint.issuing.disputes = {};

endpoint.issuing.transactions = {};

endpoint.terminal = {};

endpoint.terminal.connectionTokens = {};

endpoint.terminal.locations = {};

endpoint.terminal.readers = {};

endpoint.orders = {};

endpoint.orders.pay = {};

endpoint.orders.returns = {};

endpoint.skus = {};

endpoint.webhookEndpoints = {};

endpoint.balance = {};

endpoint.balanceTransactions = {};

endpoint.events = {};

endpoint.files = {};

endpoint.invoices.lines = {};

endpoint.invoices.upcoming = {};

endpoint.invoices.upcoming.lines = {};

endpoint.subscriptionItems.usageRecordSummaries = {};

endpoint.countrySpecs = {};

endpoint.radar.earlyFraudWarnings = {};

endpoint.issuing.cards.details = {};

endpoint.orderReturns = {};

endpoint.sigma = {};

endpoint.sigma.scheduledQueryRuns = {};

endpoint.customers.discount = {};

endpoint.subscriptions.discount = {};

endpoint.charges.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/charges');
			break;
		case 1:
			url = parse('/charges/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.charges.capture.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/charges/:id/capture', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.customers.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/customers');
			break;
		case 1:
			url = parse('/customers/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.disputes.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/disputes/:id', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.disputes.close.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/disputes/:id/close', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.fileLinks.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/file_links');
			break;
		case 1:
			url = parse('/file_links/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.paymentIntents.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/payment_intents');
			break;
		case 1:
			url = parse('/payment_intents/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.paymentIntents.confirm.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payment_intents/:id/confirm', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.paymentIntents.capture.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payment_intents/:id/capture', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.paymentIntents.cancel.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payment_intents/:id/cancel', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.setupIntents.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/setup_intents');
			break;
		case 1:
			url = parse('/setup_intents/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.setupIntents.confirm.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/setup_intents/:id/confirm', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.setupIntents.cancel.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/setup_intents/:id/cancel', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.payouts.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/payouts');
			break;
		case 1:
			url = parse('/payouts/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.payouts.cancel.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payouts/:id/cancel', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.products.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/products');
			break;
		case 1:
			url = parse('/products/:id', [id]);
			break;
		case 0:
			url = parse('/products');
			break;
		case 1:
			url = parse('/products/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.refunds.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/refunds');
			break;
		case 1:
			url = parse('/refunds/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.tokens.post = function(httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/tokens');
			break;
		case 0:
			url = parse('/tokens');
			break;
		case 0:
			url = parse('/tokens');
			break;
		case 0:
			url = parse('/tokens');
			break;
		case 0:
			url = parse('/tokens');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.paymentMethods.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/payment_methods');
			break;
		case 1:
			url = parse('/payment_methods/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.paymentMethods.attach.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payment_methods/:id/attach', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.paymentMethods.detach.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/payment_methods/:id/detach', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.customers.sources.post = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/customers/:id/sources', [id]);
			break;
		case 2:
			url = parse('/customers/:id/sources/:id', [id, id2]);
			break;
		case 1:
			url = parse('/customers/:id/sources', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.customers.sources.verify.post = function(id, id2, httpOptions) {
    if (!id || !id2) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
        return;
    }
    var url = parse('/customers/:id/sources/:id/verify', [id, id2]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sources.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/sources');
			break;
		case 1:
			url = parse('/sources/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.checkout.sessions.post = function(httpOptions) {
    var url = parse('/checkout/sessions');
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.coupons.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/coupons');
			break;
		case 1:
			url = parse('/coupons/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.creditNotes.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/credit_notes');
			break;
		case 1:
			url = parse('/credit_notes/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.creditNotes.void.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/credit_notes/:id/void', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.customers.balanceTransactions.post = function(customer, transaction, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/customers/:customer/balance_transactions', [customer]);
			break;
		case 2:
			url = parse('/customers/:customer/balance_transactions/:transaction', [customer, transaction]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.customers.taxIds.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/customers/:id/tax_ids', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoices.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/invoices');
			break;
		case 1:
			url = parse('/invoices/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.invoices.finalize.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/finalize', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoices.pay.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/pay', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoices.send.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/send', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoices.void.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/void', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoices.markUncollectible.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/mark_uncollectible', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.invoiceitems.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/invoiceitems');
			break;
		case 1:
			url = parse('/invoiceitems/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.plans.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/plans');
			break;
		case 1:
			url = parse('/plans/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.subscriptions.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/subscriptions');
			break;
		case 1:
			url = parse('/subscriptions/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.subscriptionItems.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/subscription_items');
			break;
		case 1:
			url = parse('/subscription_items/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.subscriptionSchedules.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/subscription_schedules');
			break;
		case 1:
			url = parse('/subscription_schedules/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.subscriptionSchedules.cancel.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscription_schedules/:id/cancel', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.subscriptionSchedules.release.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscription_schedules/:id/release', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.taxRates.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/tax_rates');
			break;
		case 1:
			url = parse('/tax_rates/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.subscriptionItems.usageRecords.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscription_items/:id/usage_records', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.accounts.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/accounts');
			break;
		case 1:
			url = parse('/accounts/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.accounts.reject.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accounts/:id/reject', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.accounts.loginLinks.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accounts/:id/login_links', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.accountLinks.post = function(httpOptions) {
    var url = parse('/account_links');
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.applicationFees.refunds.post = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/application_fees/:id/refunds', [id]);
			break;
		case 2:
			url = parse('/application_fees/:id/refunds/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.accounts.capabilities.post = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 2:
			url = parse('/accounts/:id/capabilities/:id', [id, id2]);
			break;
		case 2:
			url = parse('/accounts/:id/capabilities/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.accounts.externalAccounts.post = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/accounts/:id/external_accounts', [id]);
			break;
		case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		case 1:
			url = parse('/accounts/:id/external_accounts', [id]);
			break;
		case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.topups.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/topups');
			break;
		case 1:
			url = parse('/topups/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.topups.cancel.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/topups/:id/cancel', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.transfers.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/transfers');
			break;
		case 1:
			url = parse('/transfers/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.transfers.reversals.post = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/transfers/:id/reversals', [id]);
			break;
		case 2:
			url = parse('/transfers/:id/reversals/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.reviews.approve.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/reviews/:id/approve', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.radar.valueLists.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/radar/value_lists');
			break;
		case 1:
			url = parse('/radar/value_lists/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.radar.valueListItems.post = function(httpOptions) {
    var url = parse('/radar/value_list_items');
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.issuing.authorizations.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/issuing/authorizations/:id', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.issuing.authorizations.approve.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/issuing/authorizations/:id/approve', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.issuing.authorizations.decline.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/issuing/authorizations/:id/decline', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.issuing.cardholders.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/issuing/cardholders');
			break;
		case 1:
			url = parse('/issuing/cardholders/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.issuing.cards.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/issuing/cards');
			break;
		case 1:
			url = parse('/issuing/cards/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.issuing.disputes.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/issuing/disputes');
			break;
		case 1:
			url = parse('/issuing/disputes/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.issuing.transactions.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/issuing/transactions/:id', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.terminal.connectionTokens.post = function(httpOptions) {
    var url = parse('/terminal/connection_tokens');
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.terminal.locations.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/terminal/locations');
			break;
		case 1:
			url = parse('/terminal/locations/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.terminal.readers.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/terminal/readers');
			break;
		case 1:
			url = parse('/terminal/readers/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.orders.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/orders');
			break;
		case 1:
			url = parse('/orders/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.orders.pay.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/orders/:id/pay', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.orders.returns.post = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/orders/:id/returns', [id]);
    sys.logs.debug('[stripe] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.skus.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/skus');
			break;
		case 1:
			url = parse('/skus/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.webhookEndpoints.post = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 0:
			url = parse('/webhook_endpoints');
			break;
		case 1:
			url = parse('/webhook_endpoints/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.balance.get = function(httpOptions) {
    var url = parse('/balance');
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.balanceTransactions.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/balance_transactions/:id', [id]);
			break;
		case 0:
			url = parse('/balance_transactions');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.charges.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/charges/:id', [id]);
			break;
		case 0:
			url = parse('/charges');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.customers.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/customers/:id', [id]);
			break;
		case 0:
			url = parse('/customers');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.disputes.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/disputes/:id', [id]);
			break;
		case 0:
			url = parse('/disputes');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.events.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/events/:id', [id]);
			break;
		case 0:
			url = parse('/events');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.files.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/files/:id', [id]);
			break;
		case 0:
			url = parse('/files');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.fileLinks.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/file_links/:id', [id]);
			break;
		case 0:
			url = parse('/file_links');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.paymentIntents.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/payment_intents/:id', [id]);
			break;
		case 0:
			url = parse('/payment_intents');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.setupIntents.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/setup_intents/:id', [id]);
			break;
		case 0:
			url = parse('/setup_intents');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.payouts.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/payouts/:id', [id]);
			break;
		case 0:
			url = parse('/payouts');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.products.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/products/:id', [id]);
			break;
		case 0:
			url = parse('/products');
			break;
		case 1:
			url = parse('/products/:id', [id]);
			break;
		case 0:
			url = parse('/products');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.refunds.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/refunds/:id', [id]);
			break;
		case 0:
			url = parse('/refunds');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.tokens.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/tokens/:id', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.paymentMethods.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/payment_methods/:id', [id]);
			break;
		case 0:
			url = parse('/payment_methods');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.customers.sources.get = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/customers/:id/sources/:id', [id, id2]);
			break;
		case 1:
			url = parse('/customers/:id/sources?object=card', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sources.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/sources/:id', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.checkout.sessions.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/checkout/sessions/:id', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.coupons.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/coupons/:id', [id]);
			break;
		case 0:
			url = parse('/coupons');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.creditNotes.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/credit_notes/:id', [id]);
			break;
		case 0:
			url = parse('/credit_notes');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.customers.balanceTransactions.get = function(customer, transaction, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/customers/:customer/balance_transactions/:transaction', [customer, transaction]);
			break;
		case 1:
			url = parse('/customers/:customer/balance_transactions', [customer]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.customers.taxIds.get = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/customers/:id/tax_ids/:id', [id, id2]);
			break;
		case 1:
			url = parse('/customers/:id/tax_ids', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.invoices.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/invoices/:id', [id]);
			break;
		case 0:
			url = parse('/invoices');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.invoices.lines.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id/lines', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.invoices.upcoming.get = function(httpOptions) {
    var url = parse('/invoices/upcoming');
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.invoices.upcoming.lines.get = function(httpOptions) {
    var url = parse('/invoices/upcoming/lines');
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.invoiceitems.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/invoiceitems/:id', [id]);
			break;
		case 0:
			url = parse('/invoiceitems');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.plans.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/plans/:id', [id]);
			break;
		case 0:
			url = parse('/plans');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.subscriptions.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/subscriptions/:id', [id]);
			break;
		case 0:
			url = parse('/subscriptions');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.subscriptionItems.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/subscription_items/:id', [id]);
			break;
		case 0:
			url = parse('/subscription_items');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.subscriptionSchedules.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/subscription_schedules/:id', [id]);
			break;
		case 0:
			url = parse('/subscription_schedules');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.taxRates.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/tax_rates/:id', [id]);
			break;
		case 0:
			url = parse('/tax_rates');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.subscriptionItems.usageRecordSummaries.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscription_items/:id/usage_record_summaries', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.accounts.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/accounts/:id', [id]);
			break;
		case 0:
			url = parse('/accounts');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.applicationFees.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/application_fees/:id', [id]);
			break;
		case 0:
			url = parse('/application_fees');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.applicationFees.refunds.get = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/application_fees/:id/refunds/:id', [id, id2]);
			break;
		case 1:
			url = parse('/application_fees/:id/refunds', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.accounts.capabilities.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accounts/:id/capabilities', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.countrySpecs.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/country_specs');
			break;
		case 1:
			url = parse('/country_specs/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.accounts.externalAccounts.get = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		case 1:
			url = parse('/accounts/:id/external_accounts?object=bank_account', [id]);
			break;
		case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		case 1:
			url = parse('/accounts/:id/external_accounts?object=card', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.topups.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/topups/:id', [id]);
			break;
		case 0:
			url = parse('/topups');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.transfers.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/transfers/:id', [id]);
			break;
		case 0:
			url = parse('/transfers');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.transfers.reversals.get = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/transfers/:id/reversals/:id', [id, id2]);
			break;
		case 1:
			url = parse('/transfers/:id/reversals', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.radar.earlyFraudWarnings.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/radar/early_fraud_warnings/:id', [id]);
			break;
		case 0:
			url = parse('/radar/early_fraud_warnings');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.reviews.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/reviews/:id', [id]);
			break;
		case 0:
			url = parse('/reviews');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.radar.valueLists.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/radar/value_lists/:id', [id]);
			break;
		case 0:
			url = parse('/radar/value_lists');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.radar.valueListItems.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/radar/value_list_items/:id', [id]);
			break;
		case 0:
			url = parse('/radar/value_list_items');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.issuing.authorizations.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/issuing/authorizations/:id', [id]);
			break;
		case 0:
			url = parse('/issuing/authorizations');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.issuing.cardholders.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/issuing/cardholders/:id', [id]);
			break;
		case 0:
			url = parse('/issuing/cardholders');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.issuing.cards.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/issuing/cards/:id', [id]);
			break;
		case 0:
			url = parse('/issuing/cards');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.issuing.cards.details.get = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/issuing/cards/:id/details', [id]);
    sys.logs.debug('[stripe] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.issuing.disputes.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/issuing/disputes/:id', [id]);
			break;
		case 0:
			url = parse('/issuing/disputes');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.issuing.transactions.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/issuing/transactions/:id', [id]);
			break;
		case 0:
			url = parse('/issuing/transactions');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.terminal.locations.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/terminal/locations/:id', [id]);
			break;
		case 0:
			url = parse('/terminal/locations');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.terminal.readers.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/terminal/readers/:id', [id]);
			break;
		case 0:
			url = parse('/terminal/readers');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.orders.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/orders/:id', [id]);
			break;
		case 0:
			url = parse('/orders');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.orderReturns.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/order_returns/:id', [id]);
			break;
		case 0:
			url = parse('/order_returns');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.skus.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/skus/:id', [id]);
			break;
		case 0:
			url = parse('/skus');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sigma.scheduledQueryRuns.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/sigma/scheduled_query_runs/:id', [id]);
			break;
		case 0:
			url = parse('/sigma/scheduled_query_runs');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.webhookEndpoints.get = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/webhook_endpoints/:id', [id]);
			break;
		case 0:
			url = parse('/webhook_endpoints');
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.customers.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/customers/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.products.delete = function(id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/products/:id', [id]);
			break;
		case 1:
			url = parse('/products/:id', [id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._delete(options);
};

endpoint.customers.sources.delete = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/customers/:id/sources/:id', [id, id2]);
			break;
		case 2:
			url = parse('/customers/:id/sources/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._delete(options);
};

endpoint.coupons.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/coupons/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.customers.taxIds.delete = function(id, id2, httpOptions) {
    if (!id || !id2) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
        return;
    }
    var url = parse('/customers/:id/tax_ids/:id', [id, id2]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.customers.discount.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/customers/:id/discount', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.subscriptions.discount.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscriptions/:id/discount', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.invoices.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoices/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.invoiceitems.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/invoiceitems/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.plans.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/plans/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.subscriptions.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscriptions/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.subscriptionItems.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/subscription_items/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.accounts.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/accounts/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.accounts.externalAccounts.delete = function(id, id2, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		case 2:
			url = parse('/accounts/:id/external_accounts/:id', [id, id2]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[stripe] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._delete(options);
};

endpoint.radar.valueLists.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/radar/value_lists/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.radar.valueListItems.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/radar/value_list_items/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.terminal.locations.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/terminal/locations/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.terminal.readers.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/terminal/readers/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.skus.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/skus/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.webhookEndpoints.delete = function(id, httpOptions) {
    if (!id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }
    var url = parse('/webhook_endpoints/:id', [id]);
    sys.logs.debug('[stripe] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}