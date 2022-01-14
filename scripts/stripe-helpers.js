 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var parse = function parse(str) {
    try {
        if (arguments.length > 1) {
            let args = arguments[1], i = 0;
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
};

endpoint.coreResources = {};

endpoint.coreResources.balance = {};

endpoint.coreResources.balance.get = function(httpOptions) {
	var url = parse('/v1/balance');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.balanceTransactions = {};

endpoint.coreResources.balanceTransactions.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/balance_transactions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.balanceTransactions.get = function(httpOptions) {
	var url = parse('/v1/balance_transactions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.charges = {};

endpoint.coreResources.charges.post = function(httpOptions) {
	var url = parse('/v1/charges');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.charges.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/charges/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.charges.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/charges/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.charges.capture = {};

endpoint.coreResources.charges.capture.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/charges/:id/capture', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.charges.get = function(httpOptions) {
	var url = parse('/v1/charges');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.customers = {};

endpoint.coreResources.customers.post = function(httpOptions) {
	var url = parse('/v1/customers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.customers.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.customers.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.customers.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.coreResources.customers.get = function(httpOptions) {
	var url = parse('/v1/customers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.disputes = {};

endpoint.coreResources.disputes.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.disputes.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.disputes.close = {};

endpoint.coreResources.disputes.close.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id/close', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.disputes.get = function(httpOptions) {
	var url = parse('/v1/disputes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.events = {};

endpoint.coreResources.events.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/events/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.events.get = function(httpOptions) {
	var url = parse('/v1/events');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.files = {};

endpoint.coreResources.files.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/files/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.files.get = function(httpOptions) {
	var url = parse('/v1/files');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.fileLinks = {};

endpoint.coreResources.fileLinks.post = function(httpOptions) {
	var url = parse('/v1/file_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.fileLinks.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/file_links/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.fileLinks.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/file_links/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.fileLinks.get = function(httpOptions) {
	var url = parse('/v1/file_links');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.paymentIntents = {};

endpoint.coreResources.paymentIntents.post = function(httpOptions) {
	var url = parse('/v1/payment_intents');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.paymentIntents.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.confirm = {};

endpoint.coreResources.paymentIntents.confirm.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id/confirm', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.capture = {};

endpoint.coreResources.paymentIntents.capture.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id/capture', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.cancel = {};

endpoint.coreResources.paymentIntents.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.get = function(httpOptions) {
	var url = parse('/v1/payment_intents');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.setupIntents = {};

endpoint.coreResources.setupIntents.post = function(httpOptions) {
	var url = parse('/v1/setup_intents');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.setupIntents.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/setup_intents/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.setupIntents.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/setup_intents/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.setupIntents.confirm = {};

endpoint.coreResources.setupIntents.confirm.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/setup_intents/:id/confirm', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.setupIntents.cancel = {};

endpoint.coreResources.setupIntents.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/setup_intents/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.setupIntents.get = function(httpOptions) {
	var url = parse('/v1/setup_intents');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.payouts = {};

endpoint.coreResources.payouts.post = function(httpOptions) {
	var url = parse('/v1/payouts');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.payouts.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.payouts.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.payouts.get = function(httpOptions) {
	var url = parse('/v1/payouts');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.payouts.cancel = {};

endpoint.coreResources.payouts.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.products = {};

endpoint.coreResources.products.post = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.products.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.products.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.products.get = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.products.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.coreResources.refunds = {};

endpoint.coreResources.refunds.post = function(httpOptions) {
	var url = parse('/v1/refunds');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.refunds.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/refunds/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.refunds.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/refunds/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.refunds.get = function(httpOptions) {
	var url = parse('/v1/refunds');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.tokens = {};

endpoint.coreResources.tokens.post = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.post = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.post = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.post = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.post = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tokens/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods = {};

endpoint.paymentMethods.paymentMethods = {};

endpoint.paymentMethods.paymentMethods.post = function(httpOptions) {
	var url = parse('/v1/payment_methods');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.get = function(httpOptions) {
	var url = parse('/v1/payment_methods');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.attach = {};

endpoint.paymentMethods.paymentMethods.attach.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id/attach', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.detach = {};

endpoint.paymentMethods.paymentMethods.detach.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id/detach', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers = {};

endpoint.paymentMethods.customers.sources = {};

endpoint.paymentMethods.customers.sources.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.verify = {};

endpoint.paymentMethods.customers.sources.verify.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id/verify', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.delete = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources?object=card', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.sources = {};

endpoint.paymentMethods.sources.post = function(httpOptions) {
	var url = parse('/v1/sources');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.sources.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sources/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.sources.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sources/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.delete = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.checkout = {};

endpoint.checkout.checkout = {};

endpoint.checkout.checkout.sessions = {};

endpoint.checkout.checkout.sessions.post = function(httpOptions) {
	var url = parse('/v1/checkout/sessions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.checkout.checkout.sessions.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/checkout/sessions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing = {};

endpoint.billing.coupons = {};

endpoint.billing.coupons.post = function(httpOptions) {
	var url = parse('/v1/coupons');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.coupons.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.coupons.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.coupons.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.coupons.get = function(httpOptions) {
	var url = parse('/v1/coupons');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes = {};

endpoint.billing.creditNotes.post = function(httpOptions) {
	var url = parse('/v1/credit_notes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.creditNotes.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/credit_notes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/credit_notes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.creditNotes.void = {};

endpoint.billing.creditNotes.void.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/credit_notes/:id/void', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.creditNotes.get = function(httpOptions) {
	var url = parse('/v1/credit_notes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers = {};

endpoint.billing.customers.balanceTransactions = {};

endpoint.billing.customers.balanceTransactions.post = function(customer, httpOptions) {
	if (!customer) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customer].');
		return;
	}
	var url = parse('/v1/customers/:customer/balance_transactions', [customer]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.get = function(customer, transaction, httpOptions) {
	if (!customer || !transaction) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customer,transaction].');
		return;
	}
	var url = parse('/v1/customers/:customer/balance_transactions/:transaction', [customer, transaction]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.post = function(customer, transaction, httpOptions) {
	if (!customer || !transaction) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customer,transaction].');
		return;
	}
	var url = parse('/v1/customers/:customer/balance_transactions/:transaction', [customer, transaction]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.get = function(customer, httpOptions) {
	if (!customer) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customer].');
		return;
	}
	var url = parse('/v1/customers/:customer/balance_transactions', [customer]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.taxIds = {};

endpoint.billing.customers.taxIds.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.taxIds.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.taxIds.delete = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids/:id', [id, id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.customers.taxIds.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.discount = {};

endpoint.billing.customers.discount.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/discount', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.subscriptions = {};

endpoint.billing.subscriptions.discount = {};

endpoint.billing.subscriptions.discount.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscriptions/:id/discount', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.invoices = {};

endpoint.billing.invoices.post = function(httpOptions) {
	var url = parse('/v1/invoices');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.invoices.finalize = {};

endpoint.billing.invoices.finalize.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/finalize', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.pay = {};

endpoint.billing.invoices.pay.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/pay', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.send = {};

endpoint.billing.invoices.send.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/send', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.void = {};

endpoint.billing.invoices.void.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/void', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.markUncollectible = {};

endpoint.billing.invoices.markUncollectible.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/mark_uncollectible', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.lines = {};

endpoint.billing.invoices.lines.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id/lines', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices.upcoming = {};

endpoint.billing.invoices.upcoming.get = function(httpOptions) {
	var url = parse('/v1/invoices/upcoming');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices.upcoming.lines = {};

endpoint.billing.invoices.upcoming.lines.get = function(httpOptions) {
	var url = parse('/v1/invoices/upcoming/lines');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices.get = function(httpOptions) {
	var url = parse('/v1/invoices');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoiceitems = {};

endpoint.billing.invoiceitems.post = function(httpOptions) {
	var url = parse('/v1/invoiceitems');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoiceitems.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoiceitems/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoiceitems.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoiceitems/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoiceitems.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoiceitems/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.invoiceitems.get = function(httpOptions) {
	var url = parse('/v1/invoiceitems');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.plans = {};

endpoint.billing.plans.post = function(httpOptions) {
	var url = parse('/v1/plans');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.plans.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/plans/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.plans.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/plans/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.plans.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/plans/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.plans.get = function(httpOptions) {
	var url = parse('/v1/plans');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.products = {};

endpoint.billing.products.post = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.products.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.products.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.products.get = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.products.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.subscriptions.post = function(httpOptions) {
	var url = parse('/v1/subscriptions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptions.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscriptions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptions.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscriptions/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptions.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscriptions/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.subscriptions.get = function(httpOptions) {
	var url = parse('/v1/subscriptions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems = {};

endpoint.billing.subscriptionItems.post = function(httpOptions) {
	var url = parse('/v1/subscription_items');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionItems.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionItems.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.subscriptionItems.get = function(httpOptions) {
	var url = parse('/v1/subscription_items');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionSchedules = {};

endpoint.billing.subscriptionSchedules.post = function(httpOptions) {
	var url = parse('/v1/subscription_schedules');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_schedules/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_schedules/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.cancel = {};

endpoint.billing.subscriptionSchedules.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_schedules/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.release = {};

endpoint.billing.subscriptionSchedules.release.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_schedules/:id/release', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.get = function(httpOptions) {
	var url = parse('/v1/subscription_schedules');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.taxRates = {};

endpoint.billing.taxRates.post = function(httpOptions) {
	var url = parse('/v1/tax_rates');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.taxRates.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tax_rates/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.taxRates.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tax_rates/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.taxRates.get = function(httpOptions) {
	var url = parse('/v1/tax_rates');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems.usageRecords = {};

endpoint.billing.subscriptionItems.usageRecords.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id/usage_records', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionItems.usageRecordSummaries = {};

endpoint.billing.subscriptionItems.usageRecordSummaries.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id/usage_record_summaries', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect = {};

endpoint.connect.accounts = {};

endpoint.connect.accounts.post = function(httpOptions) {
	var url = parse('/v1/accounts');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connect.accounts.reject = {};

endpoint.connect.accounts.reject.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/reject', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.get = function(httpOptions) {
	var url = parse('/v1/accounts');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.loginLinks = {};

endpoint.connect.accounts.loginLinks.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/login_links', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accountLinks = {};

endpoint.connect.accountLinks.post = function(httpOptions) {
	var url = parse('/v1/account_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees = {};

endpoint.connect.applicationFees.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.get = function(httpOptions) {
	var url = parse('/v1/application_fees');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.refunds = {};

endpoint.connect.applicationFees.refunds.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.capabilities = {};

endpoint.connect.accounts.capabilities.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.capabilities.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.capabilities.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.countrySpecs = {};

endpoint.connect.countrySpecs.get = function(httpOptions) {
	var url = parse('/v1/country_specs');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.countrySpecs.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/country_specs/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts = {};

endpoint.connect.accounts.externalAccounts.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.delete = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts?object=bank_account', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.delete = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts?object=card', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.topups = {};

endpoint.connect.topups.post = function(httpOptions) {
	var url = parse('/v1/topups');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.topups.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/topups/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.topups.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/topups/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.topups.get = function(httpOptions) {
	var url = parse('/v1/topups');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.topups.cancel = {};

endpoint.connect.topups.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/topups/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers = {};

endpoint.connect.transfers.post = function(httpOptions) {
	var url = parse('/v1/transfers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.get = function(httpOptions) {
	var url = parse('/v1/transfers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.reversals = {};

endpoint.connect.transfers.reversals.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.reversals.get = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals/:id', [id, id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.reversals.post = function(id, id, httpOptions) {
	if (!id || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals/:id', [id, id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.reversals.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud = {};

endpoint.fraud.radar = {};

endpoint.fraud.radar.earlyFraudWarnings = {};

endpoint.fraud.radar.earlyFraudWarnings.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/early_fraud_warnings/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.earlyFraudWarnings.get = function(httpOptions) {
	var url = parse('/v1/radar/early_fraud_warnings');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.reviews = {};

endpoint.fraud.reviews.approve = {};

endpoint.fraud.reviews.approve.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/reviews/:id/approve', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.reviews.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/reviews/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.reviews.get = function(httpOptions) {
	var url = parse('/v1/reviews');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueLists = {};

endpoint.fraud.radar.valueLists.post = function(httpOptions) {
	var url = parse('/v1/radar/value_lists');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.radar.valueLists.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_lists/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueLists.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_lists/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.radar.valueLists.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_lists/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.fraud.radar.valueLists.get = function(httpOptions) {
	var url = parse('/v1/radar/value_lists');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueListItems = {};

endpoint.fraud.radar.valueListItems.post = function(httpOptions) {
	var url = parse('/v1/radar/value_list_items');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.radar.valueListItems.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_list_items/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueListItems.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_list_items/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.fraud.radar.valueListItems.get = function(httpOptions) {
	var url = parse('/v1/radar/value_list_items');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing = {};

endpoint.issuing.issuing = {};

endpoint.issuing.issuing.authorizations = {};

endpoint.issuing.issuing.authorizations.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.authorizations.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.authorizations.approve = {};

endpoint.issuing.issuing.authorizations.approve.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id/approve', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.authorizations.decline = {};

endpoint.issuing.issuing.authorizations.decline.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id/decline', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.authorizations.get = function(httpOptions) {
	var url = parse('/v1/issuing/authorizations');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.cardholders = {};

endpoint.issuing.issuing.cardholders.post = function(httpOptions) {
	var url = parse('/v1/issuing/cardholders');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.cardholders.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cardholders/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.cardholders.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cardholders/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.cardholders.get = function(httpOptions) {
	var url = parse('/v1/issuing/cardholders');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.cards = {};

endpoint.issuing.issuing.cards.post = function(httpOptions) {
	var url = parse('/v1/issuing/cards');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.cards.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cards/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.cards.details = {};

endpoint.issuing.issuing.cards.details.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cards/:id/details', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.cards.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cards/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.cards.get = function(httpOptions) {
	var url = parse('/v1/issuing/cards');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.disputes = {};

endpoint.issuing.issuing.disputes.post = function(httpOptions) {
	var url = parse('/v1/issuing/disputes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.disputes.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/disputes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.disputes.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/disputes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.disputes.get = function(httpOptions) {
	var url = parse('/v1/issuing/disputes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.transactions = {};

endpoint.issuing.issuing.transactions.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/transactions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.issuing.transactions.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/transactions/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.issuing.transactions.get = function(httpOptions) {
	var url = parse('/v1/issuing/transactions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal = {};

endpoint.terminal.terminal = {};

endpoint.terminal.terminal.connectionTokens = {};

endpoint.terminal.terminal.connectionTokens.post = function(httpOptions) {
	var url = parse('/v1/terminal/connection_tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.terminal.locations = {};

endpoint.terminal.terminal.locations.post = function(httpOptions) {
	var url = parse('/v1/terminal/locations');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.terminal.locations.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.terminal.locations.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.terminal.locations.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.terminal.terminal.locations.get = function(httpOptions) {
	var url = parse('/v1/terminal/locations');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.terminal.readers = {};

endpoint.terminal.terminal.readers.post = function(httpOptions) {
	var url = parse('/v1/terminal/readers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.terminal.readers.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.terminal.readers.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.terminal.readers.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.terminal.terminal.readers.get = function(httpOptions) {
	var url = parse('/v1/terminal/readers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders = {};

endpoint.orders.orders = {};

endpoint.orders.orders.post = function(httpOptions) {
	var url = parse('/v1/orders');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.orders.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.orders.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.orders.pay = {};

endpoint.orders.orders.pay.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id/pay', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.orders.get = function(httpOptions) {
	var url = parse('/v1/orders');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.orders.returns = {};

endpoint.orders.orders.returns.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id/returns', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.orderReturns = {};

endpoint.orders.orderReturns.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/order_returns/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.orderReturns.get = function(httpOptions) {
	var url = parse('/v1/order_returns');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.skus = {};

endpoint.orders.skus.post = function(httpOptions) {
	var url = parse('/v1/skus');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.skus.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.skus.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.orders.skus.get = function(httpOptions) {
	var url = parse('/v1/skus');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.orders.skus.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.sigma = {};

endpoint.sigma.sigma = {};

endpoint.sigma.sigma.scheduledQueryRuns = {};

endpoint.sigma.sigma.scheduledQueryRuns.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sigma/scheduled_query_runs/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sigma.sigma.scheduledQueryRuns.get = function(httpOptions) {
	var url = parse('/v1/sigma/scheduled_query_runs');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks = {};

endpoint.webhooks.webhookEndpoints = {};

endpoint.webhooks.webhookEndpoints.post = function(httpOptions) {
	var url = parse('/v1/webhook_endpoints');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/webhook_endpoints/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/webhook_endpoints/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.get = function(httpOptions) {
	var url = parse('/v1/webhook_endpoints');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/webhook_endpoints/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

