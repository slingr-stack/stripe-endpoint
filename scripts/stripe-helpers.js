//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is generated with stripe/gen/gen-stripe-helpers.js      //
//                                                                      //
//            Fri Nov 22 2019 10:44:08 GMT-0300 (Argentina Standard Time)                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


var urlsData = {
	"coreResources.balance.get": {
		"0": "/v1/balance"
	},
	"coreResources.balanceTransactions.get": {
		"0": "/v1/balance_transactions",
		"1": "/v1/balance_transactions/:id"
	},
	"coreResources.charges.post": {
		"0": "/v1/charges",
		"1": "/v1/charges/:id"
	},
	"coreResources.charges.get()": {
		"0": "/v1/charges?ids=222",
		"1": "/v1/charges/:id?ids=222"
	},
	"coreResources.charges.capture.post": {
		"1": "/v1/charges/:id/capture"
	},
	"coreResources.customers.post": {
		"0": "/v1/customers",
		"1": "/v1/customers/:id"
	},
	"coreResources.customers.get": {
		"0": "/v1/customers",
		"1": "/v1/customers/:id"
	},
	"coreResources.customers.delete": {
		"1": "/v1/customers/:id"
	},
	"coreResources.disputes.get": {
		"0": "/v1/disputes",
		"1": "/v1/disputes/:id"
	},
	"coreResources.disputes.post": {
		"1": "/v1/disputes/:id"
	},
	"coreResources.disputes.close.post": {
		"1": "/v1/disputes/:id/close"
	},
	"coreResources.events.get": {
		"0": "/v1/events",
		"1": "/v1/events/:id"
	},
	"coreResources.files.get": {
		"0": "/v1/files",
		"1": "/v1/files/:id"
	},
	"coreResources.fileLinks.post": {
		"0": "/v1/file_links",
		"1": "/v1/file_links/:id"
	},
	"coreResources.fileLinks.get": {
		"0": "/v1/file_links",
		"1": "/v1/file_links/:id"
	},
	"coreResources.paymentIntents.post": {
		"0": "/v1/payment_intents",
		"1": "/v1/payment_intents/:id"
	},
	"coreResources.paymentIntents.get": {
		"0": "/v1/payment_intents",
		"1": "/v1/payment_intents/:id"
	},
	"coreResources.paymentIntents.confirm.post": {
		"1": "/v1/payment_intents/:id/confirm"
	},
	"coreResources.paymentIntents.capture.post": {
		"1": "/v1/payment_intents/:id/capture"
	},
	"coreResources.paymentIntents.cancel.post": {
		"1": "/v1/payment_intents/:id/cancel"
	},
	"coreResources.setupIntents.post": {
		"0": "/v1/setup_intents",
		"1": "/v1/setup_intents/:id"
	},
	"coreResources.setupIntents.get": {
		"0": "/v1/setup_intents",
		"1": "/v1/setup_intents/:id"
	},
	"coreResources.setupIntents.confirm.post": {
		"1": "/v1/setup_intents/:id/confirm"
	},
	"coreResources.setupIntents.cancel.post": {
		"1": "/v1/setup_intents/:id/cancel"
	},
	"coreResources.payouts.post": {
		"0": "/v1/payouts",
		"1": "/v1/payouts/:id"
	},
	"coreResources.payouts.get": {
		"0": "/v1/payouts",
		"1": "/v1/payouts/:id"
	},
	"coreResources.payouts.cancel.post": {
		"1": "/v1/payouts/:id/cancel"
	},
	"coreResources.products.post": {
		"0": "/v1/products",
		"1": "/v1/products/:id"
	},
	"coreResources.products.get": {
		"0": "/v1/products",
		"1": "/v1/products/:id"
	},
	"coreResources.products.delete": {
		"1": "/v1/products/:id"
	},
	"coreResources.refunds.post": {
		"0": "/v1/refunds",
		"1": "/v1/refunds/:id"
	},
	"coreResources.refunds.get": {
		"0": "/v1/refunds",
		"1": "/v1/refunds/:id"
	},
	"coreResources.tokens.post": {
		"0": "/v1/tokens"
	},
	"coreResources.tokens.get": {
		"1": "/v1/tokens/:id"
	},
	"paymentMethods.paymentMethods.post": {
		"0": "/v1/payment_methods",
		"1": "/v1/payment_methods/:id"
	},
	"paymentMethods.paymentMethods.get": {
		"0": "/v1/payment_methods",
		"1": "/v1/payment_methods/:id"
	},
	"paymentMethods.paymentMethods.attach.post": {
		"1": "/v1/payment_methods/:id/attach"
	},
	"paymentMethods.paymentMethods.detach.post": {
		"1": "/v1/payment_methods/:id/detach"
	},
	"paymentMethods.customers.sources.post": {
		"1": "/v1/customers/:id/sources",
		"2": "/v1/customers/:id/sources/:id"
	},
	"paymentMethods.customers.sources.get": {
		"1": "/v1/customers/:id/sources?object=card",
		"2": "/v1/customers/:id/sources/:id"
	},
	"paymentMethods.customers.sources.verify.post": {
		"2": "/v1/customers/:id/sources/:id/verify"
	},
	"paymentMethods.customers.sources.delete": {
		"2": "/v1/customers/:id/sources/:id"
	},
	"paymentMethods.sources.post": {
		"0": "/v1/sources",
		"1": "/v1/sources/:id"
	},
	"paymentMethods.sources.get": {
		"1": "/v1/sources/:id"
	},
	"checkout.checkout.sessions.post": {
		"0": "/v1/checkout/sessions"
	},
	"checkout.checkout.sessions.get": {
		"1": "/v1/checkout/sessions/:id"
	},
	"billing.coupons.post": {
		"0": "/v1/coupons",
		"1": "/v1/coupons/:id"
	},
	"billing.coupons.get": {
		"0": "/v1/coupons",
		"1": "/v1/coupons/:id"
	},
	"billing.coupons.delete": {
		"1": "/v1/coupons/:id"
	},
	"billing.creditNotes.post": {
		"0": "/v1/credit_notes",
		"1": "/v1/credit_notes/:id"
	},
	"billing.creditNotes.get": {
		"0": "/v1/credit_notes",
		"1": "/v1/credit_notes/:id"
	},
	"billing.creditNotes.void.post": {
		"1": "/v1/credit_notes/:id/void"
	},
	"billing.customers.balanceTransactions.post": {
		"1": "/v1/customers/:customer/balance_transactions",
		"2": "/v1/customers/:customer/balance_transactions/:transaction"
	},
	"billing.customers.balanceTransactions.get": {
		"2": "/v1/customers/:customer/balance_transactions/:transaction"
	},
	"billing.customers.balanceTransactions .get": {
		"1": "/v1/customers/:customer/balance_transactions "
	},
	"billing.customers.taxIds.post": {
		"1": "/v1/customers/:id/tax_ids"
	},
	"billing.customers.taxIds.get": {
		"1": "/v1/customers/:id/tax_ids",
		"2": "/v1/customers/:id/tax_ids/:id"
	},
	"billing.customers.taxIds.delete": {
		"2": "/v1/customers/:id/tax_ids/:id"
	},
	"billing.customers.discount.delete": {
		"1": "/v1/customers/:id/discount"
	},
	"billing.subscriptions.discount.delete": {
		"1": "/v1/subscriptions/:id/discount"
	},
	"billing.invoices.post": {
		"0": "/v1/invoices",
		"1": "/v1/invoices/:id"
	},
	"billing.invoices.get": {
		"0": "/v1/invoices",
		"1": "/v1/invoices/:id"
	},
	"billing.invoices.delete": {
		"1": "/v1/invoices/:id"
	},
	"billing.invoices.finalize.post": {
		"1": "/v1/invoices/:id/finalize"
	},
	"billing.invoices.pay.post": {
		"1": "/v1/invoices/:id/pay"
	},
	"billing.invoices.send.post": {
		"1": "/v1/invoices/:id/send"
	},
	"billing.invoices.void.post": {
		"1": "/v1/invoices/:id/void"
	},
	"billing.invoices.markUncollectible.post": {
		"1": "/v1/invoices/:id/mark_uncollectible"
	},
	"billing.invoices.lines.get": {
		"1": "/v1/invoices/:id/lines"
	},
	"billing.invoices.upcoming.get": {
		"0": "/v1/invoices/upcoming"
	},
	"billing.invoices.upcoming.lines.get": {
		"0": "/v1/invoices/upcoming/lines"
	},
	"billing.invoiceitems.post": {
		"0": "/v1/invoiceitems",
		"1": "/v1/invoiceitems/:id"
	},
	"billing.invoiceitems.get": {
		"0": "/v1/invoiceitems",
		"1": "/v1/invoiceitems/:id"
	},
	"billing.invoiceitems.delete": {
		"1": "/v1/invoiceitems/:id"
	},
	"billing.plans.post": {
		"0": "/v1/plans",
		"1": "/v1/plans/:id"
	},
	"billing.plans.get": {
		"0": "/v1/plans",
		"1": "/v1/plans/:id"
	},
	"billing.plans.delete": {
		"1": "/v1/plans/:id"
	},
	"billing.products.post": {
		"0": "/v1/products",
		"1": "/v1/products/:id"
	},
	"billing.products.get": {
		"0": "/v1/products",
		"1": "/v1/products/:id"
	},
	"billing.products.delete": {
		"1": "/v1/products/:id"
	},
	"billing.subscriptions.post": {
		"0": "/v1/subscriptions",
		"1": "/v1/subscriptions/:id"
	},
	"billing.subscriptions.get": {
		"0": "/v1/subscriptions",
		"1": "/v1/subscriptions/:id"
	},
	"billing.subscriptions.delete": {
		"1": "/v1/subscriptions/:id"
	},
	"billing.subscriptionItems.post": {
		"0": "/v1/subscription_items",
		"1": "/v1/subscription_items/:id"
	},
	"billing.subscriptionItems.get": {
		"0": "/v1/subscription_items",
		"1": "/v1/subscription_items/:id"
	},
	"billing.subscriptionItems.delete": {
		"1": "/v1/subscription_items/:id"
	},
	"billing.subscriptionSchedules.post": {
		"0": "/v1/subscription_schedules",
		"1": "/v1/subscription_schedules/:id"
	},
	"billing.subscriptionSchedules.get": {
		"0": "/v1/subscription_schedules",
		"1": "/v1/subscription_schedules/:id"
	},
	"billing.subscriptionSchedules.cancel.post": {
		"1": "/v1/subscription_schedules/:id/cancel"
	},
	"billing.subscriptionSchedules.release.post": {
		"1": "/v1/subscription_schedules/:id/release"
	},
	"billing.taxRates.post": {
		"0": "/v1/tax_rates",
		"1": "/v1/tax_rates/:id"
	},
	"billing.taxRates.get": {
		"0": "/v1/tax_rates",
		"1": "/v1/tax_rates/:id"
	},
	"billing.subscriptionItems.usageRecords.post": {
		"1": "/v1/subscription_items/:id/usage_records"
	},
	"billing.subscriptionItems.usageRecordSummaries.get": {
		"1": "/v1/subscription_items/:id/usage_record_summaries"
	},
	"connect.accounts.post": {
		"0": "/v1/accounts",
		"1": "/v1/accounts/:id"
	},
	"connect.accounts.get": {
		"0": "/v1/accounts",
		"1": "/v1/accounts/:id"
	},
	"connect.accounts.delete": {
		"1": "/v1/accounts/:id"
	},
	"connect.accounts.reject.post": {
		"1": "/v1/accounts/:id/reject"
	},
	"connect.accounts.loginLinks.post": {
		"1": "/v1/accounts/:id/login_links"
	},
	"connect.accountLinks.post": {
		"0": "/v1/account_links"
	},
	"connect.applicationFees.get": {
		"0": "/v1/application_fees",
		"1": "/v1/application_fees/:id"
	},
	"connect.applicationFees.refunds.post": {
		"1": "/v1/application_fees/:id/refunds",
		"2": "/v1/application_fees/:id/refunds/:id"
	},
	"connect.applicationFees.refunds.get": {
		"1": "/v1/application_fees/:id/refunds",
		"2": "/v1/application_fees/:id/refunds/:id"
	},
	"connect.accounts.capabilities.post": {
		"2": "/v1/accounts/:id/capabilities/:id"
	},
	"connect.accounts.capabilities.get": {
		"1": "/v1/accounts/:id/capabilities"
	},
	"connect.countrySpecs.get": {
		"0": "/v1/country_specs",
		"1": "/v1/country_specs/:id"
	},
	"connect.accounts.externalAccounts.post": {
		"1": "/v1/accounts/:id/external_accounts",
		"2": "/v1/accounts/:id/external_accounts/:id"
	},
	"connect.accounts.externalAccounts.get": {
		"1": "/v1/accounts/:id/external_accounts?object=card",
		"2": "/v1/accounts/:id/external_accounts/:id"
	},
	"connect.accounts.externalAccounts.delete": {
		"2": "/v1/accounts/:id/external_accounts/:id"
	},
	"connect.topups.post": {
		"0": "/v1/topups",
		"1": "/v1/topups/:id"
	},
	"connect.topups.get": {
		"0": "/v1/topups",
		"1": "/v1/topups/:id"
	},
	"connect.topups.cancel.post": {
		"1": "/v1/topups/:id/cancel"
	},
	"connect.transfers.post": {
		"0": "/v1/transfers",
		"1": "/v1/transfers/:id"
	},
	"connect.transfers.get": {
		"0": "/v1/transfers",
		"1": "/v1/transfers/:id"
	},
	"connect.transfers.reversals.post": {
		"1": "/v1/transfers/:id/reversals",
		"2": "/v1/transfers/:id/reversals/:id"
	},
	"connect.transfers.reversals.get": {
		"1": "/v1/transfers/:id/reversals",
		"2": "/v1/transfers/:id/reversals/:id"
	},
	"fraud.radar.earlyFraudWarnings.get": {
		"0": "/v1/radar/early_fraud_warnings",
		"1": "/v1/radar/early_fraud_warnings/:id"
	},
	"fraud.reviews.approve.post": {
		"1": "/v1/reviews/:id/approve"
	},
	"fraud.reviews.get": {
		"0": "/v1/reviews",
		"1": "/v1/reviews/:id"
	},
	"fraud.radar.valueLists.post": {
		"0": "/v1/radar/value_lists",
		"1": "/v1/radar/value_lists/:id"
	},
	"fraud.radar.valueLists.get": {
		"0": "/v1/radar/value_lists",
		"1": "/v1/radar/value_lists/:id"
	},
	"fraud.radar.valueLists.delete": {
		"1": "/v1/radar/value_lists/:id"
	},
	"fraud.radar.valueListItems.post": {
		"0": "/v1/radar/value_list_items"
	},
	"fraud.radar.valueListItems.get": {
		"0": "/v1/radar/value_list_items",
		"1": "/v1/radar/value_list_items/:id"
	},
	"fraud.radar.valueListItems.delete": {
		"1": "/v1/radar/value_list_items/:id"
	},
	"issuing.issuing.authorizations.get": {
		"0": "/v1/issuing/authorizations",
		"1": "/v1/issuing/authorizations/:id"
	},
	"issuing.issuing.authorizations.post": {
		"1": "/v1/issuing/authorizations/:id"
	},
	"issuing.issuing.authorizations.approve.post": {
		"1": "/v1/issuing/authorizations/:id/approve"
	},
	"issuing.issuing.authorizations.decline.post": {
		"1": "/v1/issuing/authorizations/:id/decline"
	},
	"issuing.issuing.cardholders.post": {
		"0": "/v1/issuing/cardholders",
		"1": "/v1/issuing/cardholders/:id"
	},
	"issuing.issuing.cardholders.get": {
		"0": "/v1/issuing/cardholders",
		"1": "/v1/issuing/cardholders/:id"
	},
	"issuing.issuing.cards.post": {
		"0": "/v1/issuing/cards",
		"1": "/v1/issuing/cards/:id"
	},
	"issuing.issuing.cards.get": {
		"0": "/v1/issuing/cards",
		"1": "/v1/issuing/cards/:id"
	},
	"issuing.issuing.cards.details.get": {
		"1": "/v1/issuing/cards/:id/details"
	},
	"issuing.issuing.disputes.post": {
		"0": "/v1/issuing/disputes",
		"1": "/v1/issuing/disputes/:id"
	},
	"issuing.issuing.disputes.get": {
		"0": "/v1/issuing/disputes",
		"1": "/v1/issuing/disputes/:id"
	},
	"issuing.issuing.transactions.get": {
		"0": "/v1/issuing/transactions",
		"1": "/v1/issuing/transactions/:id"
	},
	"issuing.issuing.transactions.post": {
		"1": "/v1/issuing/transactions/:id"
	},
	"terminal.terminal.connectionTokens.post": {
		"0": "/v1/terminal/connection_tokens"
	},
	"terminal.terminal.locations.post": {
		"0": "/v1/terminal/locations",
		"1": "/v1/terminal/locations/:id"
	},
	"terminal.terminal.locations.get": {
		"0": "/v1/terminal/locations",
		"1": "/v1/terminal/locations/:id"
	},
	"terminal.terminal.locations.delete": {
		"1": "/v1/terminal/locations/:id"
	},
	"terminal.terminal.readers.post": {
		"0": "/v1/terminal/readers",
		"1": "/v1/terminal/readers/:id"
	},
	"terminal.terminal.readers.get": {
		"0": "/v1/terminal/readers",
		"1": "/v1/terminal/readers/:id"
	},
	"terminal.terminal.readers.delete": {
		"1": "/v1/terminal/readers/:id"
	},
	"orders.orders.post": {
		"0": "/v1/orders",
		"1": "/v1/orders/:id"
	},
	"orders.orders.get": {
		"0": "/v1/orders",
		"1": "/v1/orders/:id"
	},
	"orders.orders.pay.post": {
		"1": "/v1/orders/:id/pay"
	},
	"orders.orders.returns.post": {
		"1": "/v1/orders/:id/returns"
	},
	"orders.orderReturns.get": {
		"0": "/v1/order_returns",
		"1": "/v1/order_returns/:id"
	},
	"orders.skus.post": {
		"0": "/v1/skus",
		"1": "/v1/skus/:id"
	},
	"orders.skus.get": {
		"0": "/v1/skus",
		"1": "/v1/skus/:id"
	},
	"orders.skus.delete": {
		"1": "/v1/skus/:id"
	},
	"sigma.sigma.scheduledQueryRuns.get": {
		"0": "/v1/sigma/scheduled_query_runs",
		"1": "/v1/sigma/scheduled_query_runs/:id"
	},
	"webhooks.webhookEndpoints.post": {
		"0": "/v1/webhook_endpoints",
		"1": "/v1/webhook_endpoints/:id"
	},
	"webhooks.webhookEndpoints.get": {
		"0": "/v1/webhook_endpoints",
		"1": "/v1/webhook_endpoints/:id"
	},
	"webhooks.webhookEndpoints.delete": {
		"1": "/v1/webhook_endpoints/:id"
	}
};

var analyzeParams = function (args) {
    var paramsSize = 0;
    var params = [];
    var argumentsObj = null;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] != 'object') {
            paramsSize++;
            params.push(args[i]);
        } else {
            argumentsObj = args[i];
        }

    }
    return {
        paramsSize: paramsSize,
        argumentsObj: argumentsObj,
        params: params
    };
};

var getUrl = function (url, params, args, argsToPath) {

    if (!url) {
        return null;
    }

    if (params.length > 0) {
        var i = 0;
        url = url.replace(/:(\w+)/g, function () {
            return params[i++];
        });
    }

    if (args && argsToPath) {
        var tmp = Object.keys(args).map(function (k) {
            return encodeURIComponent(k) + '=' + args[k];
        }).join('&');

        if (url.split("\?").length > 1) {
            url += '&' + tmp;
        } else {
            url += '?' + tmp;
        }
    }

    return url;
};

endpoint.coreResources = {};
endpoint.coreResources.balance = {};
endpoint.coreResources.balance.get = function() {
	var obj = urlsData['coreResources.balance.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.balanceTransactions = {};
endpoint.coreResources.balanceTransactions.get = function() {
	var obj = urlsData['coreResources.balanceTransactions.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.charges = {};
endpoint.coreResources.charges.post = function() {
	var obj = urlsData['coreResources.charges.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.charges.get = function() {
	var obj = urlsData['coreResources.charges.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.charges.capture = {};
endpoint.coreResources.charges.capture.post = function() {
	var obj = urlsData['coreResources.charges.capture.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.customers = {};
endpoint.coreResources.customers.post = function() {
	var obj = urlsData['coreResources.customers.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.customers.get = function() {
	var obj = urlsData['coreResources.customers.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.customers.delete = function() {
	var obj = urlsData['coreResources.customers.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.coreResources.disputes = {};
endpoint.coreResources.disputes.get = function() {
	var obj = urlsData['coreResources.disputes.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.disputes.post = function() {
	var obj = urlsData['coreResources.disputes.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.disputes.close = {};
endpoint.coreResources.disputes.close.post = function() {
	var obj = urlsData['coreResources.disputes.close.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.events = {};
endpoint.coreResources.events.get = function() {
	var obj = urlsData['coreResources.events.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.files = {};
endpoint.coreResources.files.get = function() {
	var obj = urlsData['coreResources.files.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.fileLinks = {};
endpoint.coreResources.fileLinks.post = function() {
	var obj = urlsData['coreResources.fileLinks.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.fileLinks.get = function() {
	var obj = urlsData['coreResources.fileLinks.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.paymentIntents = {};
endpoint.coreResources.paymentIntents.post = function() {
	var obj = urlsData['coreResources.paymentIntents.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.paymentIntents.get = function() {
	var obj = urlsData['coreResources.paymentIntents.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.paymentIntents.confirm = {};
endpoint.coreResources.paymentIntents.confirm.post = function() {
	var obj = urlsData['coreResources.paymentIntents.confirm.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.paymentIntents.capture = {};
endpoint.coreResources.paymentIntents.capture.post = function() {
	var obj = urlsData['coreResources.paymentIntents.capture.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.paymentIntents.cancel = {};
endpoint.coreResources.paymentIntents.cancel.post = function() {
	var obj = urlsData['coreResources.paymentIntents.cancel.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.setupIntents = {};
endpoint.coreResources.setupIntents.post = function() {
	var obj = urlsData['coreResources.setupIntents.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.setupIntents.get = function() {
	var obj = urlsData['coreResources.setupIntents.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.setupIntents.confirm = {};
endpoint.coreResources.setupIntents.confirm.post = function() {
	var obj = urlsData['coreResources.setupIntents.confirm.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.setupIntents.cancel = {};
endpoint.coreResources.setupIntents.cancel.post = function() {
	var obj = urlsData['coreResources.setupIntents.cancel.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.payouts = {};
endpoint.coreResources.payouts.post = function() {
	var obj = urlsData['coreResources.payouts.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.payouts.get = function() {
	var obj = urlsData['coreResources.payouts.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.payouts.cancel = {};
endpoint.coreResources.payouts.cancel.post = function() {
	var obj = urlsData['coreResources.payouts.cancel.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.products = {};
endpoint.coreResources.products.post = function() {
	var obj = urlsData['coreResources.products.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.products.get = function() {
	var obj = urlsData['coreResources.products.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.products.delete = function() {
	var obj = urlsData['coreResources.products.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.coreResources.refunds = {};
endpoint.coreResources.refunds.post = function() {
	var obj = urlsData['coreResources.refunds.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.refunds.get = function() {
	var obj = urlsData['coreResources.refunds.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.coreResources.tokens = {};
endpoint.coreResources.tokens.post = function() {
	var obj = urlsData['coreResources.tokens.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.coreResources.tokens.get = function() {
	var obj = urlsData['coreResources.tokens.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.paymentMethods = {};
endpoint.paymentMethods.paymentMethods = {};
endpoint.paymentMethods.paymentMethods.post = function() {
	var obj = urlsData['paymentMethods.paymentMethods.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.paymentMethods.get = function() {
	var obj = urlsData['paymentMethods.paymentMethods.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.paymentMethods.paymentMethods.attach = {};
endpoint.paymentMethods.paymentMethods.attach.post = function() {
	var obj = urlsData['paymentMethods.paymentMethods.attach.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.paymentMethods.detach = {};
endpoint.paymentMethods.paymentMethods.detach.post = function() {
	var obj = urlsData['paymentMethods.paymentMethods.detach.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.customers = {};
endpoint.paymentMethods.customers.sources = {};
endpoint.paymentMethods.customers.sources.post = function() {
	var obj = urlsData['paymentMethods.customers.sources.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.customers.sources.get = function() {
	var obj = urlsData['paymentMethods.customers.sources.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.paymentMethods.customers.sources.verify = {};
endpoint.paymentMethods.customers.sources.verify.post = function() {
	var obj = urlsData['paymentMethods.customers.sources.verify.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.customers.sources.delete = function() {
	var obj = urlsData['paymentMethods.customers.sources.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.paymentMethods.sources = {};
endpoint.paymentMethods.sources.post = function() {
	var obj = urlsData['paymentMethods.sources.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.paymentMethods.sources.get = function() {
	var obj = urlsData['paymentMethods.sources.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.checkout = {};
endpoint.checkout.checkout = {};
endpoint.checkout.checkout.sessions = {};
endpoint.checkout.checkout.sessions.post = function() {
	var obj = urlsData['checkout.checkout.sessions.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.checkout.checkout.sessions.get = function() {
	var obj = urlsData['checkout.checkout.sessions.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing = {};
endpoint.billing.coupons = {};
endpoint.billing.coupons.post = function() {
	var obj = urlsData['billing.coupons.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.coupons.get = function() {
	var obj = urlsData['billing.coupons.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.coupons.delete = function() {
	var obj = urlsData['billing.coupons.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.creditNotes = {};
endpoint.billing.creditNotes.post = function() {
	var obj = urlsData['billing.creditNotes.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.creditNotes.get = function() {
	var obj = urlsData['billing.creditNotes.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.creditNotes.void = {};
endpoint.billing.creditNotes.void.post = function() {
	var obj = urlsData['billing.creditNotes.void.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.customers = {};
endpoint.billing.customers.balanceTransactions = {};
endpoint.billing.customers.balanceTransactions.post = function() {
	var obj = urlsData['billing.customers.balanceTransactions.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.customers.balanceTransactions.get = function() {
	var obj = urlsData['billing.customers.balanceTransactions.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.customers.balanceTransactions  = {};
endpoint.billing.customers.balanceTransactions .get = function() {
	var obj = urlsData['billing.customers.balanceTransactions .get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.customers.taxIds = {};
endpoint.billing.customers.taxIds.post = function() {
	var obj = urlsData['billing.customers.taxIds.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.customers.taxIds.get = function() {
	var obj = urlsData['billing.customers.taxIds.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.customers.taxIds.delete = function() {
	var obj = urlsData['billing.customers.taxIds.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.customers.discount = {};
endpoint.billing.customers.discount.delete = function() {
	var obj = urlsData['billing.customers.discount.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.subscriptions = {};
endpoint.billing.subscriptions.discount = {};
endpoint.billing.subscriptions.discount.delete = function() {
	var obj = urlsData['billing.subscriptions.discount.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.invoices = {};
endpoint.billing.invoices.post = function() {
	var obj = urlsData['billing.invoices.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.get = function() {
	var obj = urlsData['billing.invoices.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.invoices.delete = function() {
	var obj = urlsData['billing.invoices.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.invoices.finalize = {};
endpoint.billing.invoices.finalize.post = function() {
	var obj = urlsData['billing.invoices.finalize.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.pay = {};
endpoint.billing.invoices.pay.post = function() {
	var obj = urlsData['billing.invoices.pay.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.send = {};
endpoint.billing.invoices.send.post = function() {
	var obj = urlsData['billing.invoices.send.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.void = {};
endpoint.billing.invoices.void.post = function() {
	var obj = urlsData['billing.invoices.void.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.markUncollectible = {};
endpoint.billing.invoices.markUncollectible.post = function() {
	var obj = urlsData['billing.invoices.markUncollectible.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoices.lines = {};
endpoint.billing.invoices.lines.get = function() {
	var obj = urlsData['billing.invoices.lines.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.invoices.upcoming = {};
endpoint.billing.invoices.upcoming.get = function() {
	var obj = urlsData['billing.invoices.upcoming.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.invoices.upcoming.lines = {};
endpoint.billing.invoices.upcoming.lines.get = function() {
	var obj = urlsData['billing.invoices.upcoming.lines.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.invoiceitems = {};
endpoint.billing.invoiceitems.post = function() {
	var obj = urlsData['billing.invoiceitems.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.invoiceitems.get = function() {
	var obj = urlsData['billing.invoiceitems.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.invoiceitems.delete = function() {
	var obj = urlsData['billing.invoiceitems.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.plans = {};
endpoint.billing.plans.post = function() {
	var obj = urlsData['billing.plans.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.plans.get = function() {
	var obj = urlsData['billing.plans.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.plans.delete = function() {
	var obj = urlsData['billing.plans.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.products = {};
endpoint.billing.products.post = function() {
	var obj = urlsData['billing.products.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.products.get = function() {
	var obj = urlsData['billing.products.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.products.delete = function() {
	var obj = urlsData['billing.products.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.subscriptions.post = function() {
	var obj = urlsData['billing.subscriptions.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.subscriptions.get = function() {
	var obj = urlsData['billing.subscriptions.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.subscriptions.delete = function() {
	var obj = urlsData['billing.subscriptions.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.subscriptionItems = {};
endpoint.billing.subscriptionItems.post = function() {
	var obj = urlsData['billing.subscriptionItems.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.subscriptionItems.get = function() {
	var obj = urlsData['billing.subscriptionItems.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.subscriptionItems.delete = function() {
	var obj = urlsData['billing.subscriptionItems.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.billing.subscriptionSchedules = {};
endpoint.billing.subscriptionSchedules.post = function() {
	var obj = urlsData['billing.subscriptionSchedules.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.subscriptionSchedules.get = function() {
	var obj = urlsData['billing.subscriptionSchedules.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.subscriptionSchedules.cancel = {};
endpoint.billing.subscriptionSchedules.cancel.post = function() {
	var obj = urlsData['billing.subscriptionSchedules.cancel.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.subscriptionSchedules.release = {};
endpoint.billing.subscriptionSchedules.release.post = function() {
	var obj = urlsData['billing.subscriptionSchedules.release.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.taxRates = {};
endpoint.billing.taxRates.post = function() {
	var obj = urlsData['billing.taxRates.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.taxRates.get = function() {
	var obj = urlsData['billing.taxRates.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.billing.subscriptionItems.usageRecords = {};
endpoint.billing.subscriptionItems.usageRecords.post = function() {
	var obj = urlsData['billing.subscriptionItems.usageRecords.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.billing.subscriptionItems.usageRecordSummaries = {};
endpoint.billing.subscriptionItems.usageRecordSummaries.get = function() {
	var obj = urlsData['billing.subscriptionItems.usageRecordSummaries.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect = {};
endpoint.connect.accounts = {};
endpoint.connect.accounts.post = function() {
	var obj = urlsData['connect.accounts.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.accounts.get = function() {
	var obj = urlsData['connect.accounts.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.accounts.delete = function() {
	var obj = urlsData['connect.accounts.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.connect.accounts.reject = {};
endpoint.connect.accounts.reject.post = function() {
	var obj = urlsData['connect.accounts.reject.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.accounts.loginLinks = {};
endpoint.connect.accounts.loginLinks.post = function() {
	var obj = urlsData['connect.accounts.loginLinks.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.accountLinks = {};
endpoint.connect.accountLinks.post = function() {
	var obj = urlsData['connect.accountLinks.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.applicationFees = {};
endpoint.connect.applicationFees.get = function() {
	var obj = urlsData['connect.applicationFees.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.applicationFees.refunds = {};
endpoint.connect.applicationFees.refunds.post = function() {
	var obj = urlsData['connect.applicationFees.refunds.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.applicationFees.refunds.get = function() {
	var obj = urlsData['connect.applicationFees.refunds.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.accounts.capabilities = {};
endpoint.connect.accounts.capabilities.post = function() {
	var obj = urlsData['connect.accounts.capabilities.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.accounts.capabilities.get = function() {
	var obj = urlsData['connect.accounts.capabilities.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.countrySpecs = {};
endpoint.connect.countrySpecs.get = function() {
	var obj = urlsData['connect.countrySpecs.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.accounts.externalAccounts = {};
endpoint.connect.accounts.externalAccounts.post = function() {
	var obj = urlsData['connect.accounts.externalAccounts.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.accounts.externalAccounts.get = function() {
	var obj = urlsData['connect.accounts.externalAccounts.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.accounts.externalAccounts.delete = function() {
	var obj = urlsData['connect.accounts.externalAccounts.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.connect.topups = {};
endpoint.connect.topups.post = function() {
	var obj = urlsData['connect.topups.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.topups.get = function() {
	var obj = urlsData['connect.topups.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.topups.cancel = {};
endpoint.connect.topups.cancel.post = function() {
	var obj = urlsData['connect.topups.cancel.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.transfers = {};
endpoint.connect.transfers.post = function() {
	var obj = urlsData['connect.transfers.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.transfers.get = function() {
	var obj = urlsData['connect.transfers.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.connect.transfers.reversals = {};
endpoint.connect.transfers.reversals.post = function() {
	var obj = urlsData['connect.transfers.reversals.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.connect.transfers.reversals.get = function() {
	var obj = urlsData['connect.transfers.reversals.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.fraud = {};
endpoint.fraud.radar = {};
endpoint.fraud.radar.earlyFraudWarnings = {};
endpoint.fraud.radar.earlyFraudWarnings.get = function() {
	var obj = urlsData['fraud.radar.earlyFraudWarnings.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.fraud.reviews = {};
endpoint.fraud.reviews.approve = {};
endpoint.fraud.reviews.approve.post = function() {
	var obj = urlsData['fraud.reviews.approve.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.fraud.reviews.get = function() {
	var obj = urlsData['fraud.reviews.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.fraud.radar.valueLists = {};
endpoint.fraud.radar.valueLists.post = function() {
	var obj = urlsData['fraud.radar.valueLists.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.fraud.radar.valueLists.get = function() {
	var obj = urlsData['fraud.radar.valueLists.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.fraud.radar.valueLists.delete = function() {
	var obj = urlsData['fraud.radar.valueLists.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.fraud.radar.valueListItems = {};
endpoint.fraud.radar.valueListItems.post = function() {
	var obj = urlsData['fraud.radar.valueListItems.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.fraud.radar.valueListItems.get = function() {
	var obj = urlsData['fraud.radar.valueListItems.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.fraud.radar.valueListItems.delete = function() {
	var obj = urlsData['fraud.radar.valueListItems.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.issuing = {};
endpoint.issuing.issuing = {};
endpoint.issuing.issuing.authorizations = {};
endpoint.issuing.issuing.authorizations.get = function() {
	var obj = urlsData['issuing.issuing.authorizations.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.authorizations.post = function() {
	var obj = urlsData['issuing.issuing.authorizations.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.authorizations.approve = {};
endpoint.issuing.issuing.authorizations.approve.post = function() {
	var obj = urlsData['issuing.issuing.authorizations.approve.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.authorizations.decline = {};
endpoint.issuing.issuing.authorizations.decline.post = function() {
	var obj = urlsData['issuing.issuing.authorizations.decline.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.cardholders = {};
endpoint.issuing.issuing.cardholders.post = function() {
	var obj = urlsData['issuing.issuing.cardholders.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.cardholders.get = function() {
	var obj = urlsData['issuing.issuing.cardholders.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.cards = {};
endpoint.issuing.issuing.cards.post = function() {
	var obj = urlsData['issuing.issuing.cards.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.cards.get = function() {
	var obj = urlsData['issuing.issuing.cards.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.cards.details = {};
endpoint.issuing.issuing.cards.details.get = function() {
	var obj = urlsData['issuing.issuing.cards.details.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.disputes = {};
endpoint.issuing.issuing.disputes.post = function() {
	var obj = urlsData['issuing.issuing.disputes.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.issuing.issuing.disputes.get = function() {
	var obj = urlsData['issuing.issuing.disputes.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.transactions = {};
endpoint.issuing.issuing.transactions.get = function() {
	var obj = urlsData['issuing.issuing.transactions.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.issuing.issuing.transactions.post = function() {
	var obj = urlsData['issuing.issuing.transactions.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.terminal = {};
endpoint.terminal.terminal = {};
endpoint.terminal.terminal.connectionTokens = {};
endpoint.terminal.terminal.connectionTokens.post = function() {
	var obj = urlsData['terminal.terminal.connectionTokens.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.terminal.terminal.locations = {};
endpoint.terminal.terminal.locations.post = function() {
	var obj = urlsData['terminal.terminal.locations.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.terminal.terminal.locations.get = function() {
	var obj = urlsData['terminal.terminal.locations.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.terminal.terminal.locations.delete = function() {
	var obj = urlsData['terminal.terminal.locations.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.terminal.terminal.readers = {};
endpoint.terminal.terminal.readers.post = function() {
	var obj = urlsData['terminal.terminal.readers.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.terminal.terminal.readers.get = function() {
	var obj = urlsData['terminal.terminal.readers.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.terminal.terminal.readers.delete = function() {
	var obj = urlsData['terminal.terminal.readers.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.orders = {};
endpoint.orders.orders = {};
endpoint.orders.orders.post = function() {
	var obj = urlsData['orders.orders.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.orders.get = function() {
	var obj = urlsData['orders.orders.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.orders.orders.pay = {};
endpoint.orders.orders.pay.post = function() {
	var obj = urlsData['orders.orders.pay.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.orders.returns = {};
endpoint.orders.orders.returns.post = function() {
	var obj = urlsData['orders.orders.returns.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.orderReturns = {};
endpoint.orders.orderReturns.get = function() {
	var obj = urlsData['orders.orderReturns.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.orders.skus = {};
endpoint.orders.skus.post = function() {
	var obj = urlsData['orders.skus.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.orders.skus.get = function() {
	var obj = urlsData['orders.skus.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.orders.skus.delete = function() {
	var obj = urlsData['orders.skus.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

endpoint.sigma = {};
endpoint.sigma.sigma = {};
endpoint.sigma.sigma.scheduledQueryRuns = {};
endpoint.sigma.sigma.scheduledQueryRuns.get = function() {
	var obj = urlsData['sigma.sigma.scheduledQueryRuns.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.webhooks = {};
endpoint.webhooks.webhookEndpoints = {};
endpoint.webhooks.webhookEndpoints.post = function() {
	var obj = urlsData['webhooks.webhookEndpoints.post'];
	var params = analyzeParams(arguments);
	var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
	return endpoint.post(url, params.argumentsObj);
};

endpoint.webhooks.webhookEndpoints.get = function() {
	var obj = urlsData['webhooks.webhookEndpoints.get'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.get(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.get(url);
	}
};

endpoint.webhooks.webhookEndpoints.delete = function() {
	var obj = urlsData['webhooks.webhookEndpoints.delete'];
	var params = analyzeParams(arguments);
	if (params.argumentsObj && (typeof params.argumentsObj.headers == 'object' || typeof params.argumentsObj.body == 'object' || typeof params.argumentsObj.params == 'object')) {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, false);
		return endpoint.delete(url, params.argumentsObj);
	} else {
		var url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, true);
		return endpoint.delete(url);
	}
};

