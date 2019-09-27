var fs = require('fs');

var FILE_NAME = "stripe-helpers.js";
var NAMESPACE = "endpoint.";
var CODE = '';

var urlsData = {};

var API_DESCRIPTOR = {
    "coreResources": [
        {"method": "GET", "URL": "/v1/balance"},
        {"method": "GET", "URL": "/v1/balance_transactions/:id"},
        {"method": "GET", "URL": "/v1/balance_transactions"},
        {"method": "POST", "URL": "/v1/charges"},
        {"method": "GET", "URL": "/v1/charges/:id"},
        {"method": "POST", "URL": "/v1/charges/:id"},
        {"method": "POST", "URL": "/v1/charges/:id/capture"},
        {"method": "GET", "URL": "/v1/charges"},
        {"method": "POST", "URL": "/v1/customers"},
        {"method": "GET", "URL": "/v1/customers/:id"},
        {"method": "POST", "URL": "/v1/customers/:id"},
        {"method": "DELETE", "URL": "/v1/customers/:id"},
        {"method": "GET", "URL": "/v1/customers"},
        {"method": "GET", "URL": "/v1/disputes/:id"},
        {"method": "POST", "URL": "/v1/disputes/:id"},
        {"method": "POST", "URL": "/v1/disputes/:id/close"},
        {"method": "GET", "URL": "/v1/disputes"},
        {"method": "GET", "URL": "/v1/events/:id"},
        {"method": "GET", "URL": "/v1/events"},
        // { "POST": "https://files.stripe.com/v1/files"},
        {"method": "GET", "URL": "/v1/files/:id"},
        {"method": "GET", "URL": "/v1/files"},
        {"method": "POST", "URL": "/v1/file_links"},
        {"method": "GET", "URL": "/v1/file_links/:id"},
        {"method": "POST", "URL": "/v1/file_links/:id"},
        {"method": "GET", "URL": "/v1/file_links"},
        {"method": "POST", "URL": "/v1/payment_intents"},
        {"method": "GET", "URL": "/v1/payment_intents/:id"},
        {"method": "POST", "URL": "/v1/payment_intents/:id"},
        {"method": "POST", "URL": "/v1/payment_intents/:id/confirm"},
        {"method": "POST", "URL": "/v1/payment_intents/:id/capture"},
        {"method": "POST", "URL": "/v1/payment_intents/:id/cancel"},
        {"method": "GET", "URL": "/v1/payment_intents"},
        {"method": "POST", "URL": "/v1/setup_intents"},
        {"method": "GET", "URL": "/v1/setup_intents/:id"},
        {"method": "POST", "URL": "/v1/setup_intents/:id"},
        {"method": "POST", "URL": "/v1/setup_intents/:id/confirm"},
        {"method": "POST", "URL": "/v1/setup_intents/:id/cancel"},
        {"method": "GET", "URL": "/v1/setup_intents"},
        {"method": "POST", "URL": "/v1/payouts"},
        {"method": "GET", "URL": "/v1/payouts/:id"},
        {"method": "POST", "URL": "/v1/payouts/:id"},
        {"method": "GET", "URL": "/v1/payouts"},
        {"method": "POST", "URL": "/v1/payouts/:id/cancel"},
        {"method": "POST", "URL": "/v1/products"},
        {"method": "GET", "URL": "/v1/products/:id"},
        {"method": "POST", "URL": "/v1/products/:id"},
        {"method": "GET", "URL": "/v1/products"},
        {"method": "DELETE", "URL": "/v1/products/:id"},
        {"method": "POST", "URL": "/v1/refunds"},
        {"method": "GET", "URL": "/v1/refunds/:id"},
        {"method": "POST", "URL": "/v1/refunds/:id"},
        {"method": "GET", "URL": "/v1/refunds"},
        {"method": "POST", "URL": "/v1/tokens"},
        {"method": "POST", "URL": "/v1/tokens"},
        {"method": "POST", "URL": "/v1/tokens"},
        {"method": "POST", "URL": "/v1/tokens"},
        {"method": "POST", "URL": "/v1/tokens"},
        {"method": "GET", "URL": "/v1/tokens/:id"}
    ],
    "paymentMethods": [
        {"method": "POST", "URL": "/v1/payment_methods"},
        {"method": "GET", "URL": "/v1/payment_methods/:id"},
        {"method": "POST", "URL": "/v1/payment_methods/:id"},
        {"method": "GET", "URL": "/v1/payment_methods"},
        {"method": "POST", "URL": "/v1/payment_methods/:id/attach"},
        {"method": "POST", "URL": "/v1/payment_methods/:id/detach"},
        {"method": "POST", "URL": "/v1/customers/:id/sources"},
        {"method": "GET", "URL": "/v1/customers/:id/sources/:id"},
        {"method": "POST", "URL": "/v1/customers/:id/sources/:id"},
        {"method": "POST", "URL": "/v1/customers/:id/sources/:id/verify"},
        {"method": "DELETE", "URL": "/v1/customers/:id/sources/:id"},
        {"method": "GET", "URL": "/v1/customers/:id/sources?object=card"},
        {"method": "POST", "URL": "/v1/sources"},
        {"method": "GET", "URL": "/v1/sources/:id"},
        {"method": "POST", "URL": "/v1/sources/:id"},
        {"method": "POST", "URL": "/v1/customers/:id/sources"},
        {"method": "DELETE", "URL": "/v1/customers/:id/sources/:id"}
    ],
    "checkout": [
        {"method": "POST", "URL": "/v1/checkout/sessions"},
        {"method": "GET", "URL": "/v1/checkout/sessions/:id"},
    ],
    "billing": [
        {"method": "POST", "URL": "/v1/coupons"},
        {"method": "GET", "URL": "/v1/coupons/:id"},
        {"method": "POST", "URL": "/v1/coupons/:id"},
        {"method": "DELETE", "URL": "/v1/coupons/:id"},
        {"method": "GET", "URL": "/v1/coupons"},
        {"method": "POST", "URL": "/v1/credit_notes"},
        {"method": "GET", "URL": "/v1/credit_notes/:id"},
        {"method": "POST", "URL": "/v1/credit_notes/:id"},
        {"method": "POST", "URL": "/v1/credit_notes/:id/void"},
        {"method": "GET", "URL": "/v1/credit_notes"},
        {"method": "POST", "URL": "/v1/customers/:customer/balance_transactions"},
        {"method": "GET", "URL": "/v1/customers/:customer/balance_transactions/:transaction"},
        {"method": "POST", "URL": "/v1/customers/:customer/balance_transactions/:transaction"},
        {"method": "GET", "URL": "/v1/customers/:customer/balance_transactions "},
        {"method": "POST", "URL": "/v1/customers/:id/tax_ids"},
        {"method": "GET", "URL": "/v1/customers/:id/tax_ids/:id"},
        {"method": "DELETE", "URL": "/v1/customers/:id/tax_ids/:id"},
        {"method": "GET", "URL": "/v1/customers/:id/tax_ids"},
        {"method": "DELETE", "URL": "/v1/customers/:id/discount"},
        {"method": "DELETE", "URL": "/v1/subscriptions/:id/discount"},
        {"method": "POST", "URL": "/v1/invoices"},
        {"method": "GET", "URL": "/v1/invoices/:id"},
        {"method": "POST", "URL": "/v1/invoices/:id"},
        {"method": "DELETE", "URL": "/v1/invoices/:id"},
        {"method": "POST", "URL": "/v1/invoices/:id/finalize"},
        {"method": "POST", "URL": "/v1/invoices/:id/pay"},
        {"method": "POST", "URL": "/v1/invoices/:id/send"},
        {"method": "POST", "URL": "/v1/invoices/:id/void"},
        {"method": "POST", "URL": "/v1/invoices/:id/mark_uncollectible"},
        {"method": "GET", "URL": "/v1/invoices/:id/lines"},
        {"method": "GET", "URL": "/v1/invoices/upcoming"},
        {"method": "GET", "URL": "/v1/invoices/upcoming/lines"},
        {"method": "GET", "URL": "/v1/invoices"},
        {"method": "POST", "URL": "/v1/invoiceitems"},
        {"method": "GET", "URL": "/v1/invoiceitems/:id"},
        {"method": "POST", "URL": "/v1/invoiceitems/:id"},
        {"method": "DELETE", "URL": "/v1/invoiceitems/:id"},
        {"method": "GET", "URL": "/v1/invoiceitems"},
        {"method": "POST", "URL": "/v1/plans"},
        {"method": "GET", "URL": "/v1/plans/:id"},
        {"method": "POST", "URL": "/v1/plans/:id"},
        {"method": "DELETE", "URL": "/v1/plans/:id"},
        {"method": "GET", "URL": "/v1/plans"},
        {"method": "POST", "URL": "/v1/products"},
        {"method": "GET", "URL": "/v1/products/:id"},
        {"method": "POST", "URL": "/v1/products/:id"},
        {"method": "GET", "URL": "/v1/products"},
        {"method": "DELETE", "URL": "/v1/products/:id"},
        {"method": "POST", "URL": "/v1/subscriptions"},
        {"method": "GET", "URL": "/v1/subscriptions/:id"},
        {"method": "POST", "URL": "/v1/subscriptions/:id"},
        {"method": "DELETE", "URL": "/v1/subscriptions/:id"},
        {"method": "GET", "URL": "/v1/subscriptions"},
        {"method": "POST", "URL": "/v1/subscription_items"},
        {"method": "GET", "URL": "/v1/subscription_items/:id"},
        {"method": "POST", "URL": "/v1/subscription_items/:id"},
        {"method": "DELETE", "URL": "/v1/subscription_items/:id"},
        {"method": "GET", "URL": "/v1/subscription_items"},
        {"method": "POST", "URL": "/v1/subscription_schedules"},
        {"method": "GET", "URL": "/v1/subscription_schedules/:id"},
        {"method": "POST", "URL": "/v1/subscription_schedules/:id"},
        {"method": "POST", "URL": "/v1/subscription_schedules/:id/cancel"},
        {"method": "POST", "URL": "/v1/subscription_schedules/:id/release"},
        {"method": "GET", "URL": "/v1/subscription_schedules"},
        {"method": "POST", "URL": "/v1/tax_rates"},
        {"method": "GET", "URL": "/v1/tax_rates/:id"},
        {"method": "POST", "URL": "/v1/tax_rates/:id"},
        {"method": "GET", "URL": "/v1/tax_rates"},
        {"method": "POST", "URL": "/v1/subscription_items/:id/usage_records"},
        {"method": "GET", "URL": "/v1/subscription_items/:id/usage_record_summaries"},
    ],
    "connect": [
        {"method": "POST", "URL": "/v1/accounts"},
        {"method": "GET", "URL": "/v1/accounts/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id"},
        {"method": "DELETE", "URL": "/v1/accounts/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id/reject"},
        {"method": "GET", "URL": "/v1/accounts"},
        {"method": "POST", "URL": "/v1/accounts/:id/login_links"},
        {"method": "POST", "URL": "/v1/account_links"},
        {"method": "GET", "URL": "/v1/application_fees/:id"},
        {"method": "GET", "URL": "/v1/application_fees"},
        {"method": "POST", "URL": "/v1/application_fees/:id/refunds"},
        {"method": "GET", "URL": "/v1/application_fees/:id/refunds/:id"},
        {"method": "POST", "URL": "/v1/application_fees/:id/refunds/:id"},
        {"method": "GET", "URL": "/v1/application_fees/:id/refunds"},
        {"method": "POST", "URL": "/v1/accounts/:id/capabilities/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id/capabilities/:id"},
        {"method": "GET", "URL": "/v1/accounts/:id/capabilities"},
        {"method": "GET", "URL": "/v1/country_specs"},
        {"method": "GET", "URL": "/v1/country_specs/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id/external_accounts"},
        {"method": "GET", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "DELETE", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "GET", "URL": "/v1/accounts/:id/external_accounts?object=bank_account"},
        {"method": "POST", "URL": "/v1/accounts/:id/external_accounts"},
        {"method": "GET", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "POST", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "DELETE", "URL": "/v1/accounts/:id/external_accounts/:id"},
        {"method": "GET", "URL": "/v1/accounts/:id/external_accounts?object=card"},
        {"method": "POST", "URL": "/v1/topups"},
        {"method": "GET", "URL": "/v1/topups/:id"},
        {"method": "POST", "URL": "/v1/topups/:id"},
        {"method": "GET", "URL": "/v1/topups"},
        {"method": "POST", "URL": "/v1/topups/:id/cancel"},
        {"method": "POST", "URL": "/v1/transfers"},
        {"method": "GET", "URL": "/v1/transfers/:id"},
        {"method": "POST", "URL": "/v1/transfers/:id"},
        {"method": "GET", "URL": "/v1/transfers"},
        {"method": "POST", "URL": "/v1/transfers/:id/reversals"},
        {"method": "GET", "URL": "/v1/transfers/:id/reversals/:id"},
        {"method": "POST", "URL": "/v1/transfers/:id/reversals/:id"},
        {"method": "GET", "URL": "/v1/transfers/:id/reversals"}
    ],
    "fraud": [
        {"method": "GET", "URL": "/v1/radar/early_fraud_warnings/:id"},
        {"method": "GET", "URL": "/v1/radar/early_fraud_warnings"},
        {"method": "POST", "URL": "/v1/reviews/:id/approve"},
        {"method": "GET", "URL": "/v1/reviews/:id"},
        {"method": "GET", "URL": "/v1/reviews"},
        {"method": "POST", "URL": "/v1/radar/value_lists"},
        {"method": "GET", "URL": "/v1/radar/value_lists/:id"},
        {"method": "POST", "URL": "/v1/radar/value_lists/:id"},
        {"method": "DELETE", "URL": "/v1/radar/value_lists/:id"},
        {"method": "GET", "URL": "/v1/radar/value_lists"},
        {"method": "POST", "URL": "/v1/radar/value_list_items"},
        {"method": "GET", "URL": "/v1/radar/value_list_items/:id"},
        {"method": "DELETE", "URL": "/v1/radar/value_list_items/:id"},
        {"method": "GET", "URL": "/v1/radar/value_list_items"}
    ],
    "issuing": [
        {"method": "GET", "URL": "/v1/issuing/authorizations/:id"},
        {"method": "POST", "URL": "/v1/issuing/authorizations/:id"},
        {"method": "POST", "URL": "/v1/issuing/authorizations/:id/approve"},
        {"method": "POST", "URL": "/v1/issuing/authorizations/:id/decline"},
        {"method": "GET", "URL": "/v1/issuing/authorizations"},
        {"method": "POST", "URL": "/v1/issuing/cardholders"},
        {"method": "GET", "URL": "/v1/issuing/cardholders/:id"},
        {"method": "POST", "URL": "/v1/issuing/cardholders/:id"},
        {"method": "GET", "URL": "/v1/issuing/cardholders"},
        {"method": "POST", "URL": "/v1/issuing/cards"},
        {"method": "GET", "URL": "/v1/issuing/cards/:id"},
        {"method": "GET", "URL": "/v1/issuing/cards/:id/details"},
        {"method": "POST", "URL": "/v1/issuing/cards/:id"},
        {"method": "GET", "URL": "/v1/issuing/cards"},
        {"method": "POST", "URL": "/v1/issuing/disputes"},
        {"method": "GET", "URL": "/v1/issuing/disputes/:id"},
        {"method": "POST", "URL": "/v1/issuing/disputes/:id"},
        {"method": "GET", "URL": "/v1/issuing/disputes"},
        {"method": "GET", "URL": "/v1/issuing/transactions/:id"},
        {"method": "POST", "URL": "/v1/issuing/transactions/:id"},
        {"method": "GET", "URL": "/v1/issuing/transactions"}
    ],
    "terminal": [
        {"method": "POST", "URL": "/v1/terminal/connection_tokens"},
        {"method": "POST", "URL": "/v1/terminal/locations"},
        {"method": "GET", "URL": "/v1/terminal/locations/:id"},
        {"method": "POST", "URL": "/v1/terminal/locations/:id"},
        {"method": "DELETE", "URL": "/v1/terminal/locations/:id"},
        {"method": "GET", "URL": "/v1/terminal/locations"},
        {"method": "POST", "URL": "/v1/terminal/readers"},
        {"method": "GET", "URL": "/v1/terminal/readers/:id"},
        {"method": "POST", "URL": "/v1/terminal/readers/:id"},
        {"method": "DELETE", "URL": "/v1/terminal/readers/:id"},
        {"method": "GET", "URL": "/v1/terminal/readers"}
    ],
    "orders": [
        {"method": "POST", "URL": "/v1/orders"},
        {"method": "GET", "URL": "/v1/orders/:id"},
        {"method": "POST", "URL": "/v1/orders/:id"},
        {"method": "POST", "URL": "/v1/orders/:id/pay"},
        {"method": "GET", "URL": "/v1/orders"},
        {"method": "POST", "URL": "/v1/orders/:id/returns"},
        {"method": "GET", "URL": "/v1/order_returns/:id"},
        {"method": "GET", "URL": "/v1/order_returns"},
        {"method": "POST", "URL": "/v1/skus"},
        {"method": "GET", "URL": "/v1/skus/:id"},
        {"method": "POST", "URL": "/v1/skus/:id"},
        {"method": "GET", "URL": "/v1/skus"},
        {"method": "DELETE", "URL": "/v1/skus/:id"},
    ],
    "sigma": [
        {"method": "GET", "URL": "/v1/sigma/scheduled_query_runs/:id"},
        {"method": "GET", "URL": "/v1/sigma/scheduled_query_runs"}
    ],
    "webhooks": [
        {"method": "POST", "URL": "/v1/webhook_endpoints"},
        {"method": "GET", "URL": "/v1/webhook_endpoints/:id"},
        {"method": "POST", "URL": "/v1/webhook_endpoints/:id"},
        {"method": "GET", "URL": "/v1/webhook_endpoints"},
        {"method": "DELETE", "URL": "/v1/webhook_endpoints/:id"}
    ]

};


var convertUrls = function (url) {

    var convertedUrl = url;

    convertedUrl = convertedUrl.replace(/{/gi, ':');
    convertedUrl = convertedUrl.replace(/}/gi, '');

    return convertedUrl;
};

var camelCase = function (input) {
    return input.toLowerCase().replace(/_(.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
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

var makeEndpointsHelpers = function () {

    for (var namespace in API_DESCRIPTOR) {

        var API_DESC = API_DESCRIPTOR[namespace];

        for (var i in API_DESC) {

            var objDes = API_DESC[i];

            var numVars = 0;
            var fnNames = [];
            var newPath = '';
            var url = convertUrls(objDes.URL);

            var tmpUrl = url.split("\?")[0];
            var urlParts = tmpUrl.split('/');
            for (var p in urlParts) {
                if (urlParts[p] != "" && urlParts[p] != "v1") {
                    if (urlParts[p].substr(0, 1) == ':') {
                        numVars++;
                        newPath += '/%s'
                    } else {
                        fnNames.push(urlParts[p]);
                        newPath += '/' + urlParts[p];
                    }
                }
            }

            var functionName = namespace;
            functionName += "." + camelCase(fnNames.join('.'));
            functionName += "." + objDes.method.toLowerCase();
            if (!urlsData[functionName]) {
                urlsData[functionName] = {};
            }

            urlsData[functionName][numVars] = url;

        }

    }


    var tmpObj = {};
    var tmpCode = '';
    var path = '';

    for (var i in urlsData) {

        path = '';
        var urlPart = i.split("\.");

        for (var j = 0; j < urlPart.length; j++) {

            path += (j == 0) ? urlPart[0] : '.' + urlPart[j];

            if (!tmpObj[path]) {
                tmpObj[path] = {};
                if (j < urlPart.length - 1) {
                    tmpCode += NAMESPACE + path + ' = {};\n';
                } else {

                    var method = urlPart[j];
                    var caller = method;
                    var transfromArguments = 'true';
                    if (method === 'get' || method === 'delete') {
                        caller += '(url)';
                        transfromArguments = 'true';
                    } else {
                        caller += '(url, params.argumentsObj)'
                        transfromArguments = 'false';
                    }

                    var fn = `function() {
\tvar obj = urlsData['${i}'];
\tvar params = analyzeParams(arguments);
\tvar url = getUrl(obj[params.paramsSize], params.params, params.argumentsObj, ${transfromArguments});
\treturn endpoint.${caller};
};`;

                    tmpCode += NAMESPACE + path + ' = ' + fn + '\n\n';
                }
            }
        }
    }

    CODE += tmpCode;

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//    This file is generated with stripe/gen/gen-stripe-helpers.js      //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//            ' + new Date() + '                   //\n';
    MESSAGE += '//                                                                      //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////\n';

    var HELPERS = 'var analyzeParams = ' + analyzeParams.toString() + ';\n\n';
    HELPERS += 'var getUrl = ' + getUrl.toString() + ';\n\n';
    CODE = MESSAGE + '\n\nvar urlsData = ' + JSON.stringify(urlsData, null, "\t") + ';\n\n' + HELPERS + '' + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});