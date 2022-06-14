 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


function parse(str) {
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

endpoint.coreResources = {};

endpoint.coreResources.balance = {};

endpoint.coreResources.balance.get = function(httpOptions) {
	var url = parse('/v1/balance');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.balanceTransactions = {};

endpoint.coreResources.balanceTransactions.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/balance_transactions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.balanceTransactions.list = function(httpOptions) {
	var url = parse('/v1/balance_transactions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.charges = {};

endpoint.coreResources.charges.create = function(httpOptions) {
	var url = parse('/v1/charges');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.charges.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/charges/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.charges.update = function(id, httpOptions) {
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

endpoint.coreResources.charges.list = function(httpOptions) {
	var url = parse('/v1/charges');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.customers = {};

endpoint.coreResources.customers.create = function(httpOptions) {
	var url = parse('/v1/customers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.customers.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.customers.update = function(id, httpOptions) {
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

endpoint.coreResources.customers.list = function(httpOptions) {
	var url = parse('/v1/customers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.disputes = {};

endpoint.coreResources.disputes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.disputes.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.disputes.close = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/disputes/:id/close', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.disputes.list = function(httpOptions) {
	var url = parse('/v1/disputes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.events = {};

endpoint.coreResources.events.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/events/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.events.list = function(httpOptions) {
	var url = parse('/v1/events');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.files = {};

endpoint.coreResources.files.create = function(httpOptions) {
	var url = parse('https://files.stripe.com/v1/files');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.files.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/files/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.files.getAll = function(httpOptions) {
	var url = parse('/v1/files');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.fileLinks = {};

endpoint.coreResources.fileLinks.create = function(httpOptions) {
	var url = parse('/v1/file_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.fileLinks.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/file_links/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.fileLinks.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/file_links/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.fileLinks.list = function(httpOptions) {
	var url = parse('/v1/file_links');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.mandates = {};

endpoint.coreResources.mandates.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/mandates/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.paymentIntents = {};

endpoint.coreResources.paymentIntents.create = function(httpOptions) {
	var url = parse('/v1/payment_intents');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.paymentIntents.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_intents/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.paymentIntents.update = function(id, httpOptions) {
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

endpoint.coreResources.paymentIntents.list = function(httpOptions) {
	var url = parse('/v1/payment_intents');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.setupIntents = {};

endpoint.coreResources.setupIntents.create = function(httpOptions) {
	var url = parse('/v1/setup_intents');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.setupIntents.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/setup_intents/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.setupIntents.update = function(id, httpOptions) {
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

endpoint.coreResources.setupIntents.list = function(httpOptions) {
	var url = parse('/v1/setup_intents');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.setupAttempts = {};

endpoint.coreResources.setupAttempts.list = function(httpOptions) {
	var url = parse('/v1/setup_attempts');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.payouts = {};

endpoint.coreResources.payouts.create = function(httpOptions) {
	var url = parse('/v1/payouts');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.payouts.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.payouts.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.payouts.list = function(httpOptions) {
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

endpoint.coreResources.payouts.reverse = {};

endpoint.coreResources.payouts.reverse.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payouts/:id/reverse', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.refunds = {};

endpoint.coreResources.refunds.create = function(httpOptions) {
	var url = parse('/v1/refunds');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.refunds.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/refunds/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.refunds.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/refunds/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.refunds.list = function(httpOptions) {
	var url = parse('/v1/refunds');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.coreResources.tokens = {};

endpoint.coreResources.tokens.create = function(httpOptions) {
	var url = parse('/v1/tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.coreResources.tokens.retrieve = function(id, httpOptions) {
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

endpoint.paymentMethods.paymentMethods.create = function(httpOptions) {
	var url = parse('/v1/payment_methods');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_methods/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.paymentMethods.list = function(httpOptions) {
	var url = parse('/v1/payment_methods');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.customers = {};

endpoint.paymentMethods.customers.paymentMethods = {};

endpoint.paymentMethods.customers.paymentMethods.get = function(customer, httpOptions) {
	if (!customer) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customer].');
		return;
	}
	var url = parse('/v1/customers/:customer/payment_methods', [customer]);
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

endpoint.paymentMethods.customers.sources.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.verify = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id/verify', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.delete = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/sources/:id', [id, id2]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.getBankAccount = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources?object=bank_account', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.customers.sources.getCard = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/sources?object=card', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.sources = {};

endpoint.paymentMethods.sources.create = function(httpOptions) {
	var url = parse('/v1/sources');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentMethods.sources.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sources/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentMethods.sources.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sources/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products = {};

endpoint.products.products = {};

endpoint.products.products.create = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.products.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.products.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.products.list = function(httpOptions) {
	var url = parse('/v1/products');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.products.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/products/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.products.prices = {};

endpoint.products.prices.create = function(httpOptions) {
	var url = parse('/v1/prices');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.prices.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/prices/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.prices.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/prices/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.prices.list = function(httpOptions) {
	var url = parse('/v1/prices');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.coupons = {};

endpoint.products.coupons.create = function(httpOptions) {
	var url = parse('/v1/coupons');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.coupons.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.coupons.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.coupons.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/coupons/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.products.coupons.list = function(httpOptions) {
	var url = parse('/v1/coupons');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.promotionCodes = {};

endpoint.products.promotionCodes.create = function(httpOptions) {
	var url = parse('/v1/promotion_codes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.promotionCodes.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/promotion_codes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.promotionCodes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/promotion_codes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.promotionCodes.list = function(httpOptions) {
	var url = parse('/v1/promotion_codes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.customers = {};

endpoint.products.customers.discount = {};

endpoint.products.customers.discount.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/discount', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing = {};

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

endpoint.products.taxCodes = {};

endpoint.products.taxCodes.list = function(httpOptions) {
	var url = parse('/v1/tax_codes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.taxCodes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tax_codes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.taxRates = {};

endpoint.products.taxRates.create = function(httpOptions) {
	var url = parse('/v1/tax_rates');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.taxRates.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tax_rates/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.taxRates.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/tax_rates/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.taxRates.list = function(httpOptions) {
	var url = parse('/v1/tax_rates');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.shippingRates = {};

endpoint.products.shippingRates.create = function(httpOptions) {
	var url = parse('/v1/shipping_rates');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.shippingRates.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/shipping_rates/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.products.shippingRates.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/shipping_rates/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.products.shippingRates.list = function(httpOptions) {
	var url = parse('/v1/shipping_rates');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.checkout = {};

endpoint.checkout.checkout = {};

endpoint.checkout.checkout.sessions = {};

endpoint.checkout.checkout.sessions.create = function(httpOptions) {
	var url = parse('/v1/checkout/sessions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.checkout.checkout.sessions.expire = {};

endpoint.checkout.checkout.sessions.expire.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/checkout/sessions/:id/expire', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.checkout.checkout.sessions.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/checkout/sessions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes = {};

endpoint.billing.creditNotes.post = function(httpOptions) {
	var url = parse('/v1/credit_notes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.checkout.checkout.sessions.list = function(httpOptions) {
	var url = parse('/v1/checkout/sessions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.checkout.checkout.sessions.lineItems = {};

endpoint.checkout.checkout.sessions.lineItems.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/checkout/sessions/:id/line_items', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentLinks = {};

endpoint.paymentLinks.create = function(httpOptions) {
	var url = parse('/v1/payment_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentLinks.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_links/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentLinks.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_links/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.paymentLinks.list = function(httpOptions) {
	var url = parse('/v1/payment_links');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.paymentLinks.lineItems = {};

endpoint.paymentLinks.lineItems.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/payment_links/:id/line_items', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes.preview = {};

endpoint.billing.creditNotes.preview.get = function(httpOptions) {
	var url = parse('/v1/credit_notes/preview');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes.create = function(httpOptions) {
	var url = parse('/v1/credit_notes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.creditNotes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/credit_notes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/credit_notes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.creditNotes.lines = {};

endpoint.billing.creditNotes.lines.get = function(creditNote, httpOptions) {
	if (!creditNote) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [creditNote].');
		return;
	}
	var url = parse('/v1/credit_notes/:credit_note/lines', [creditNote]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.creditNotes.preview.lines = {};

endpoint.billing.creditNotes.preview.lines.get = function(httpOptions) {
	var url = parse('/v1/credit_notes/preview/lines');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
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

endpoint.billing.creditNotes.list = function(httpOptions) {
	var url = parse('/v1/credit_notes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers = {};

endpoint.billing.customers.balanceTransactions = {};

endpoint.billing.customers.balanceTransactions.create = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/balance_transactions', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/balance_transactions/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/balance_transactions/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.balanceTransactions.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/balance_transactions', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.billingPortal = {};

endpoint.billing.billingPortal.sessions = {};

endpoint.billing.billingPortal.sessions.create = function(httpOptions) {
	var url = parse('/v1/billing_portal/sessions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.billingPortal.configurations = {};

endpoint.billing.billingPortal.configurations.create = function(httpOptions) {
	var url = parse('/v1/billing_portal/configurations');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.billingPortal.configurations.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/billing_portal/configurations/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.billingPortal.configurations.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/billing_portal/configurations/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.billingPortal.configurations.list = function(httpOptions) {
	var url = parse('/v1/billing_portal/configurations');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.taxIds = {};

endpoint.billing.customers.taxIds.create = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.customers.taxIds.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.customers.taxIds.delete = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids/:id', [id, id2]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.billing.customers.taxIds.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/customers/:id/tax_ids', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices = {};

endpoint.billing.invoices.create = function(httpOptions) {
	var url = parse('/v1/invoices');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoices.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoices/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoices.update = function(id, httpOptions) {
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

endpoint.billing.invoices.list = function(httpOptions) {
	var url = parse('/v1/invoices');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoiceitems = {};

endpoint.billing.invoiceitems.create = function(httpOptions) {
	var url = parse('/v1/invoiceitems');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.invoiceitems.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/invoiceitems/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.invoiceitems.update = function(id, httpOptions) {
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

endpoint.billing.invoiceitems.list = function(httpOptions) {
	var url = parse('/v1/invoiceitems');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.plans = {};

endpoint.billing.plans.create = function(httpOptions) {
	var url = parse('/v1/plans');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.plans.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/plans/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.plans.update = function(id, httpOptions) {
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

endpoint.billing.plans.list = function(httpOptions) {
	var url = parse('/v1/plans');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.quotes = {};

endpoint.billing.quotes.create = function(httpOptions) {
	var url = parse('/v1/quotes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.quotes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.quotes.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.quotes.finalize = {};

endpoint.billing.quotes.finalize.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id/finalize', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.quotes.accept = {};

endpoint.billing.quotes.accept.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id/accept', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.quotes.cancel = {};

endpoint.billing.quotes.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.quotes.pdf = {};

endpoint.billing.quotes.pdf.get = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('https://files.stripe.com/v1/quotes/:id/pdf', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.quotes.list = function(httpOptions) {
	var url = parse('/v1/quotes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.quotes.lineItems = {};

endpoint.billing.quotes.lineItems.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id/line_items', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.quotes.computedUpfrontLineItems = {};

endpoint.billing.quotes.computedUpfrontLineItems.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/quotes/:id/computed_upfront_line_items', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptions.create = function(httpOptions) {
	var url = parse('/v1/subscriptions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptions.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscriptions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptions.update = function(id, httpOptions) {
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

endpoint.billing.subscriptions.list = function(httpOptions) {
	var url = parse('/v1/subscriptions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems = {};

endpoint.billing.subscriptionItems.create = function(httpOptions) {
	var url = parse('/v1/subscription_items');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionItems.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_items/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems.update = function(id, httpOptions) {
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

endpoint.billing.subscriptionItems.list = function(httpOptions) {
	var url = parse('/v1/subscription_items');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionSchedules = {};

endpoint.billing.subscriptionSchedules.create = function(httpOptions) {
	var url = parse('/v1/subscription_schedules');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/subscription_schedules/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionSchedules.update = function(id, httpOptions) {
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

endpoint.billing.subscriptionSchedules.list = function(httpOptions) {
	var url = parse('/v1/subscription_schedules');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.billing.subscriptionItems.usageRecords = {};

endpoint.billing.subscriptionItems.usageRecords.create = function(id, httpOptions) {
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

endpoint.connect.accounts.create = function(httpOptions) {
	var url = parse('/v1/accounts');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.update = function(id, httpOptions) {
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

endpoint.connect.accounts.list = function(httpOptions) {
	var url = parse('/v1/accounts');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.loginLinks = {};

endpoint.connect.loginLinks.create = function(httpOptions) {
	var url = parse('/v1/login_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accountLinks = {};

endpoint.connect.accountLinks.create = function(httpOptions) {
	var url = parse('/v1/account_links');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees = {};

endpoint.connect.applicationFees.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.list = function(httpOptions) {
	var url = parse('/v1/application_fees');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.refunds = {};

endpoint.connect.applicationFees.refunds.create = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.applicationFees.refunds.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/application_fees/:id/refunds', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.capabilities = {};

endpoint.connect.accounts.capabilities.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.capabilities.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.capabilities.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/capabilities', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.countrySpecs = {};

endpoint.connect.countrySpecs.list = function(httpOptions) {
	var url = parse('/v1/country_specs');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.countrySpecs.retrieve = function(id, httpOptions) {
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

endpoint.connect.accounts.externalAccounts.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.delete = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts/:id', [id, id2]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.listAllBankAccounts = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts?object=bank_account', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.externalAccounts.listAllCards = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/external_accounts?object=card', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.persons = {};

endpoint.connect.accounts.persons.create = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/persons', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.persons.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/persons/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.accounts.persons.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/persons/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.accounts.persons.delete = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/accounts/:id/persons/:id', [id, id2]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.connect.accounts.persons.list = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/accounts/:id/persons', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.topups = {};

endpoint.connect.topups.create = function(httpOptions) {
	var url = parse('/v1/topups');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.topups.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/topups/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.topups.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/topups/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.topups.list = function(httpOptions) {
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

endpoint.connect.transfers.create = function(httpOptions) {
	var url = parse('/v1/transfers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.list = function(httpOptions) {
	var url = parse('/v1/transfers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.reversals = {};

endpoint.connect.transfers.reversals.create = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.reversals.retrieve = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals/:id', [id, id2]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.connect.transfers.reversals.update = function(id, id2, httpOptions) {
	if (!id || !id2) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id,id2].');
		return;
	}
	var url = parse('/v1/transfers/:id/reversals/:id', [id, id2]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.connect.transfers.reversals.list = function(id, httpOptions) {
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

endpoint.fraud.radar.earlyFraudWarnings.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/early_fraud_warnings/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.earlyFraudWarnings.list = function(httpOptions) {
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

endpoint.fraud.reviews.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/reviews/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.reviews.list = function(httpOptions) {
	var url = parse('/v1/reviews');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueLists = {};

endpoint.fraud.radar.valueLists.create = function(httpOptions) {
	var url = parse('/v1/radar/value_lists');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.radar.valueLists.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/radar/value_lists/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueLists.update = function(id, httpOptions) {
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

endpoint.fraud.radar.valueLists.list = function(httpOptions) {
	var url = parse('/v1/radar/value_lists');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.fraud.radar.valueListItems = {};

endpoint.fraud.radar.valueListItems.create = function(httpOptions) {
	var url = parse('/v1/radar/value_list_items');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.fraud.radar.valueListItems.retrieve = function(id, httpOptions) {
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

endpoint.fraud.radar.valueListItems.list = function(httpOptions) {
	var url = parse('/v1/radar/value_list_items');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing = {};

endpoint.issuing.authorizations = {};

endpoint.issuing.authorizations.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.authorizations.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.authorizations.approve = {};

endpoint.issuing.authorizations.approve.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id/approve', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.authorizations.decline = {};

endpoint.issuing.authorizations.decline.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/authorizations/:id/decline', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.authorizations.list = function(httpOptions) {
	var url = parse('/v1/issuing/authorizations');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.cardholders = {};

endpoint.issuing.cardholders.create = function(httpOptions) {
	var url = parse('/v1/issuing/cardholders');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.cardholders.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cardholders/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.cardholders.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cardholders/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.cardholders.list = function(httpOptions) {
	var url = parse('/v1/issuing/cardholders');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.cards = {};

endpoint.issuing.cards.create = function(httpOptions) {
	var url = parse('/v1/issuing/cards');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.cards.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cards/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.cards.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/cards/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.cards.list = function(httpOptions) {
	var url = parse('/v1/issuing/cards');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.disputes = {};

endpoint.issuing.disputes.create = function(httpOptions) {
	var url = parse('/v1/issuing/disputes');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.disputes.submit = {};

endpoint.issuing.disputes.submit.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/disputes/:id/submit', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.disputes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/disputes/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.disputes.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/disputes/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.disputes.list = function(httpOptions) {
	var url = parse('/v1/issuing/disputes');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.transactions = {};

endpoint.issuing.transactions.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/transactions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.issuing.transactions.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/issuing/transactions/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.issuing.transactions.list = function(httpOptions) {
	var url = parse('/v1/issuing/transactions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal = {};

endpoint.terminal.connectionTokens = {};

endpoint.terminal.connectionTokens.create = function(httpOptions) {
	var url = parse('/v1/terminal/connection_tokens');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.locations = {};

endpoint.terminal.locations.create = function(httpOptions) {
	var url = parse('/v1/terminal/locations');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.locations.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.locations.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.locations.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/locations/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.terminal.locations.list = function(httpOptions) {
	var url = parse('/v1/terminal/locations');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.readers = {};

endpoint.terminal.readers.create = function(httpOptions) {
	var url = parse('/v1/terminal/readers');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.readers.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.terminal.readers.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.terminal.readers.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/terminal/readers/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.terminal.readers.list = function(httpOptions) {
	var url = parse('/v1/terminal/readers');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy = {};

endpoint.legacy.orders = {};

endpoint.legacy.orders.create = function(httpOptions) {
	var url = parse('/v1/orders');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.pay = {};

endpoint.legacy.orders.pay.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id/pay', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.list = function(httpOptions) {
	var url = parse('/v1/orders');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.returns = {};

endpoint.legacy.orders.returns.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/orders/:id/returns', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.orderReturns = {};

endpoint.legacy.orders.orderReturns.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/order_returns/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.orderReturns.list = function(httpOptions) {
	var url = parse('/v1/order_returns');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.skus = {};

endpoint.legacy.orders.skus.create = function(httpOptions) {
	var url = parse('/v1/skus');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.skus.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.skus.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.legacy.orders.skus.list = function(httpOptions) {
	var url = parse('/v1/skus');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.legacy.orders.skus.delete = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/skus/:id', [id]);
	sys.logs.debug('[Stripe] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.sigma = {};

endpoint.sigma.scheduledQueryRuns = {};

endpoint.sigma.scheduledQueryRuns.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/sigma/scheduled_query_runs/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.sigma.sigma = {};

endpoint.sigma.sigma.scheduledQueryRuns = {};

endpoint.sigma.sigma.scheduledQueryRuns.list = function(httpOptions) {
	var url = parse('/v1/sigma/scheduled_query_runs');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.reporting = {};

endpoint.reporting.reportRuns = {};

endpoint.reporting.reportRuns.create = function(httpOptions) {
	var url = parse('/v1/reporting/report_runs');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.reporting.reportRuns.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/reporting/report_runs/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.reporting.reportRuns.list = function(httpOptions) {
	var url = parse('/v1/reporting/report_runs');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.reporting.reportTypes = {};

endpoint.reporting.reportTypes.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/reporting/report_types/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.reporting.reportTypes.list = function(httpOptions) {
	var url = parse('/v1/reporting/report_types');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.identity = {};

endpoint.identity.verificationSessions = {};

endpoint.identity.verificationSessions.create = function(httpOptions) {
	var url = parse('/v1/identity/verification_sessions');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.identity.verificationSessions.list = function(httpOptions) {
	var url = parse('/v1/identity/verification_sessions');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.identity.verificationSessions.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/identity/verification_sessions/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.identity.verificationSessions.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/identity/verification_sessions/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.identity.verificationSessions.cancel = {};

endpoint.identity.verificationSessions.cancel.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/identity/verification_sessions/:id/cancel', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.identity.verificationSessions.redact = {};

endpoint.identity.verificationSessions.redact.post = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/identity/verification_sessions/:id/redact', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.identity.verificationReports = {};

endpoint.identity.verificationReports.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/identity/verification_reports/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.identity.verificationReports.list = function(httpOptions) {
	var url = parse('/v1/identity/verification_reports');
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks = {};

endpoint.webhooks.webhookEndpoints = {};

endpoint.webhooks.webhookEndpoints.create = function(httpOptions) {
	var url = parse('/v1/webhook_endpoints');
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.retrieve = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/webhook_endpoints/:id', [id]);
	sys.logs.debug('[Stripe] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.update = function(id, httpOptions) {
	if (!id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
		return;
	}
	var url = parse('/v1/webhook_endpoints/:id', [id]);
	sys.logs.debug('[Stripe] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.webhookEndpoints.list = function(httpOptions) {
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

