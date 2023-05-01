---
title: Stripe endpoint
keywords: 
last_updated: September 27, 2019
tags: []
summary: "Detailed description of the API of the Stripe endpoint."
---

## Overview

Stripe helps you create any type of payments flow—from e-commerce to 
recurring billing and everything in between. The Stripe endpoint has the following features:

- Interact with Stripe API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.stripe.get('/v1/customers');
```

However you probably want to use the shortcuts:

```js
var res = app.endpoints.stripe.coreResources.customers.get();
```

These shortcuts are based on the [Stripe REST API](https://stripe.com/docs/api).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

First you will need to setup an account in Stripe. Then you will be able to configure the endpoint you will
need to generate an API key  and secret. You can find more information about that [here](https://stripe.com/docs/api/authentication).

### API key

The public key can be generated in the dashboard of your Stripe app. Just copy the generated API publishable key to this field.


### API secret

This is the API secret generated at same time the API key. Just copy the generated API secret to this field.


### Webhook URL

This is the URL you should configure for webhooks in Stripe. 

### Check webhooks sign

Stripe can optionally sign the webhook events it sends to your endpoints by including a signature in each event’s 
Stripe-Signature header. This allows you to verify that the events were sent by Stripe, not by a third party. Check
[Webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

### Webhooks secret

Before you can verify signatures, you need to retrieve your endpoint’s secret from your Dashboard’s Webhooks settings. 
Select an endpoint that you want to obtain the secret for, then click the Click to reveal button.

## Javascript API

The Javascript API of the Stripe endpoint has three pieces:

- **HTTP request**: this allows to make regular HTTP requests like `GET`, `POST` or `PUT` to the API.
- **Shortcuts**: these are helpers to make HTTP request to the API in a more convenient way.

### HTTP requests

You can make `GET`, `POST`, `PUT`, and `DELETE` request to the 
[Stripe API](https://stripe.com/docs/api) like this:

```js
var customers = app.endpoints.stripe.get('/v1/customers');
var customersByEmail = app.endpoints.stripe.get('/v1/customers?email=test@example.com');
```

Please take a look at the documentation of the [HTTP endpoint]({{site.baseurl}}/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

Instead of having to use the generic HTTP methods, you can make use of the shortcuts provided in the endpoint. These
shortcuts follow these rules:

- **Path sections get converted to namespaces**: for example if the method is POST `~/v1/payment_intents/:id/confirm` in section Core Resources 
  it is converted to `app.endpoints.stripe.coreResources.paymentIntents.confirm.post(...)`. 
- **If they have dashes, we should convert them to camel case**: GET `~/v1/payment_intents` is converted to 
  `app.endpoints.stripe.coreResources.paymentIntents.get()`. 
- **HTTP method is appended at the end of the method**: for example if the method is `GET`, you will see a method with 
  the suffix `.get(...)`.  
  This is the mapping of names:
  - `GET`: `get`
  - `POST`: `create`
  - `PUT`: `update`
  - `PATCH`: `update`
  - `DELETE`: `delete`
- **Path variables become method parameters**: if the method has variables in the path, they will become parameters for 
  the method. For example `GET ~/v1/customers/:id` will become 
  `app.endpoints.stripe.coreResources.customers.get("234")` where :id is 123.
- **Additional parameters or body are sent in the last param as JSON**: if the method accepts more parameters or it 
  allows to send a body, that will be sent in the last parameter. For example the method `POST ~/v1/customers/:id`, 
  so it will become `app.endpoints.stripe.coreResources.customers.post("123", {...})`.
  
Here are some URLs of the REST API and their corresponding shortcut:

```js
// GET customers
var res = app.endpoints.stripe.coreResources.customers.get();

// POST customers - Create
var res = app.endpoints.stripe.coreResources.customers.post({"description": "Some customer", "source":"tok_visa"});
log(JSON.stringify(res));

// POST customers - Update
var res = app.endpoints.stripe.coreResources.customers.post("cus_Ft5ridQiZvXSzJ", {"description": "Some customer 2", "source":"tok_visa"});
log(JSON.stringify(res));

// GET customers - Search by email
var res = app.endpoints.stripe.coreResources.customers.get({'email': 'test@example.com'});
log(JSON.stringify(res));
log(res.data.length);
```

## Events

### Webhook

Stripe's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://stripe.com/docs/webhooks/setup) for more information on how to configure them.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

# Stripe v2.0.0

# Javascript API

The Javascript API of the stripe endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET`,`DELETE` requests to the [stripe API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.stripe.post('/v1/issuing/disputes', body)
var response = app.endpoints.stripe.post('/v1/issuing/disputes')
var response = app.endpoints.stripe.get('/v1/treasury/received_credits')
var response = app.endpoints.stripe.delete('/v1/webhook_endpoints/:webhook_endpoint')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v1/account_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accountLinks.post(body)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.post(body)
```
---
* API URL: '/v1/accounts/:account'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.post(body)
```
---
* API URL: '/v1/accounts/:account/capabilities/:capability'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.capabilities.post(account, capability, body)
```
---
* API URL: '/v1/accounts/:account/external_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.externalAccounts.post(body)
```
---
* API URL: '/v1/accounts/:account/external_accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.externalAccounts.post(account, body)
```
---
* API URL: '/v1/accounts/:account/login_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.loginLinks.post(account, body)
```
---
* API URL: '/v1/accounts/:account/reject'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.reject.post(account, body)
```
---
* API URL: '/v1/application_fees/:id/refund'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.applicationFees.refund.post(id, body)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.applicationFees.refunds.post(body)
```
---
* API URL: '/v1/application_fees/:fee/refunds/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.applicationFees.refunds.post(fee, body)
```
---
* API URL: '/v1/charges'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.charges.post(body)
```
---
* API URL: '/v1/charges/:charge'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.charges.post(body)
```
---
* API URL: '/v1/charges/:charge/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.charges.capture.post(charge, body)
```
---
* API URL: '/v1/checkout/sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.checkout.sessions.post(body)
```
---
* API URL: '/v1/checkout/sessions/:session/expire'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.checkout.sessions.expire.post(session, body)
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.coupons.post(body)
```
---
* API URL: '/v1/coupons/:coupon'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.coupons.post(body)
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.creditNotes.post(body)
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.creditNotes.post(body)
```
---
* API URL: '/v1/credit_notes/:id/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.creditNotes.void.post(id, body)
```
---
* API URL: '/v1/customers/:customer/balance_transactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.balanceTransactions.post(body)
```
---
* API URL: '/v1/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.balanceTransactions.post(customer, body)
```
---
* API URL: '/v1/customers/:customer/cash_balance'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.cashBalance.post(customer, body)
```
---
* API URL: '/v1/billing_portal/configurations'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.billingPortal.configurations.post(body)
```
---
* API URL: '/v1/billing_portal/configurations/:configuration'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.billingPortal.configurations.post(body)
```
---
* API URL: '/v1/billing_portal/sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.billingPortal.sessions.post(body)
```
---
* API URL: '/v1/customers/:customer/tax_ids'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.taxIds.post(customer, body)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.post(body)
```
---
* API URL: '/v1/customers/:customer'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.post(body)
```
---
* API URL: '/v1/disputes/:dispute'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.disputes.post(dispute, body)
```
---
* API URL: '/v1/disputes/:dispute/close'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.disputes.close.post(dispute, body)
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.fileLinks.post(body)
```
---
* API URL: '/v1/file_links/:link'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.fileLinks.post(body)
```
---
* API URL: 'https://files.stripe.com/v1/files'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.files.post(body)
```
---
* API URL: '/v1/financial_connections/accounts/:account/disconnect'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.financialConnections.accounts.disconnect.post(account, body)
```
---
* API URL: '/v1/financial_connections/accounts/:account/refresh'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.financialConnections.accounts.refresh.post(account, body)
```
---
* API URL: '/v1/financial_connections/sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.financialConnections.sessions.post(body)
```
---
* API URL: '/v1/identity/verification_sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.post(body)
```
---
* API URL: '/v1/identity/verification_sessions/:session'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.post(body)
```
---
* API URL: '/v1/identity/verification_sessions/:session/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.cancel.post(session, body)
```
---
* API URL: '/v1/identity/verification_sessions/:session/redact'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.redact.post(session, body)
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoiceitems.post(body)
```
---
* API URL: '/v1/invoiceitems/:invoiceitem'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoiceitems.post(body)
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.post(body)
```
---
* API URL: '/v1/invoices/:invoice'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.post(body)
```
---
* API URL: '/v1/invoices/:invoice/finalize'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.finalize.post(invoice, body)
```
---
* API URL: '/v1/invoices/:invoice/mark_uncollectible'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.markUncollectible.post(invoice, body)
```
---
* API URL: '/v1/invoices/:invoice/pay'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.pay.post(invoice, body)
```
---
* API URL: '/v1/invoices/:invoice/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.send.post(invoice, body)
```
---
* API URL: '/v1/invoices/:invoice/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.invoices.void.post(invoice, body)
```
---
* API URL: '/v1/issuing/authorizations/:authorization'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.authorizations.post(authorization, body)
```
---
* API URL: '/v1/issuing/authorizations/:authorization/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.authorizations.approve.post(authorization, body)
```
---
* API URL: '/v1/issuing/authorizations/:authorization/decline'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.authorizations.decline.post(authorization, body)
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.cardholders.post(body)
```
---
* API URL: '/v1/issuing/cardholders/:cardholder'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.cardholders.post(body)
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.cards.post(body)
```
---
* API URL: '/v1/issuing/cards/:card'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.cards.post(body)
```
---
* API URL: '/v1/test_helpers/issuing/cards/:card/shipping/fail'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.issuing.cards.shipping.fail.post(card, body)
```
---
* API URL: '/v1/test_helpers/issuing/cards/:card/shipping/return'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.issuing.cards.shipping.return.post(card, body)
```
---
* API URL: '/v1/test_helpers/issuing/cards/:card/shipping/ship'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.issuing.cards.shipping.ship.post(card, body)
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.disputes.post(body)
```
---
* API URL: '/v1/issuing/disputes/:dispute'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.disputes.post(body)
```
---
* API URL: '/v1/issuing/disputes/:dispute/submit'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.disputes.submit.post(dispute, body)
```
---
* API URL: '/v1/issuing/transactions/:transaction'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.issuing.transactions.post(transaction, body)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.post(body)
```
---
* API URL: '/v1/payment_intents/:intent'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.post(body)
```
---
* API URL: '/v1/payment_intents/:intent/apply_customer_balance'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.applyCustomerBalance.post(intent, body)
```
---
* API URL: '/v1/payment_intents/:intent/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.cancel.post(intent, body)
```
---
* API URL: '/v1/payment_intents/:intent/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.capture.post(intent, body)
```
---
* API URL: '/v1/payment_intents/:intent/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.confirm.post(intent, body)
```
---
* API URL: '/v1/payment_intents/:intent/increment_authorization'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.incrementAuthorization.post(intent, body)
```
---
* API URL: '/v1/payment_intents/:intent/verify_microdeposits'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentIntents.verifyMicrodeposits.post(intent, body)
```
---
* API URL: '/v1/payment_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentLinks.post(body)
```
---
* API URL: '/v1/payment_links/:payment_link'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentLinks.post(body)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentMethods.post(body)
```
---
* API URL: '/v1/payment_methods/:payment_method'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentMethods.post(body)
```
---
* API URL: '/v1/payment_methods/:payment_method/attach'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentMethods.attach.post(paymentMethod, body)
```
---
* API URL: '/v1/payment_methods/:payment_method/detach'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.paymentMethods.detach.post(paymentMethod, body)
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.payouts.post(body)
```
---
* API URL: '/v1/payouts/:payout'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.payouts.post(body)
```
---
* API URL: '/v1/payouts/:payout/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.payouts.cancel.post(payout, body)
```
---
* API URL: '/v1/payouts/:payout/reverse'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.payouts.reverse.post(payout, body)
```
---
* API URL: '/v1/accounts/:account/persons'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.persons.post(body)
```
---
* API URL: '/v1/accounts/:account/persons/:person'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.accounts.persons.post(account, body)
```
---
* API URL: '/v1/prices'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.prices.post(body)
```
---
* API URL: '/v1/prices/:price'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.prices.post(body)
```
---
* API URL: '/v1/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.products.post(body)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.products.post(body)
```
---
* API URL: '/v1/promotion_codes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.promotionCodes.post(body)
```
---
* API URL: '/v1/promotion_codes/:promotion_code'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.promotionCodes.post(body)
```
---
* API URL: '/v1/quotes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.quotes.post(body)
```
---
* API URL: '/v1/quotes/:quote'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.quotes.post(body)
```
---
* API URL: '/v1/quotes/:quote/accept'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.quotes.accept.post(quote, body)
```
---
* API URL: '/v1/quotes/:quote/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.quotes.cancel.post(quote, body)
```
---
* API URL: '/v1/quotes/:quote/finalize'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.quotes.finalize.post(quote, body)
```
---
* API URL: '/v1/reviews/:review/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.reviews.approve.post(review, body)
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.radar.valueLists.post(body)
```
---
* API URL: '/v1/radar/value_lists/:value_list'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.radar.valueLists.post(body)
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.radar.valueListItems.post(body)
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.refunds.post(body)
```
---
* API URL: '/v1/refunds/:refund'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.refunds.post(body)
```
---
* API URL: '/v1/reporting/report_runs'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.reporting.reportRuns.post(body)
```
---
* API URL: '/v1/apps/secrets'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.apps.secrets.post(body)
```
---
* API URL: '/v1/apps/secrets/delete'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.apps.secrets.delete.post(body)
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.setupIntents.post(body)
```
---
* API URL: '/v1/setup_intents/:intent'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.setupIntents.post(body)
```
---
* API URL: '/v1/setup_intents/:intent/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.setupIntents.cancel.post(intent, body)
```
---
* API URL: '/v1/setup_intents/:intent/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.setupIntents.confirm.post(intent, body)
```
---
* API URL: '/v1/setup_intents/:intent/verify_microdeposits'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.setupIntents.verifyMicrodeposits.post(intent, body)
```
---
* API URL: '/v1/shipping_rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.shippingRates.post(body)
```
---
* API URL: '/v1/shipping_rates/:shipping_rate_token'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.shippingRates.post(body)
```
---
* API URL: '/v1/skus'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.skus.post(body)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.skus.post(body)
```
---
* API URL: '/v1/customers/:customer/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.sources.post(body)
```
---
* API URL: '/v1/customers/:customer/sources/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.sources.post(customer, body)
```
---
* API URL: '/v1/customers/:customer/sources/:id/verify'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.customers.sources.verify.post(customer, id, body)
```
---
* API URL: '/v1/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.sources.post(body)
```
---
* API URL: '/v1/sources/:source'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.sources.post(body)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionItems.post(body)
```
---
* API URL: '/v1/subscription_items/:item'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionItems.post(body)
```
---
* API URL: '/v1/subscription_items/:subscription_item/usage_records'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionItems.usageRecords.post(subscriptionItem, body)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.post(body)
```
---
* API URL: '/v1/subscription_schedules/:schedule'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.post(body)
```
---
* API URL: '/v1/subscription_schedules/:schedule/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.cancel.post(schedule, body)
```
---
* API URL: '/v1/subscription_schedules/:schedule/release'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.release.post(schedule, body)
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptions.post(body)
```
---
* API URL: '/v1/subscriptions/:subscription_exposed_id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.subscriptions.post(body)
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.taxRates.post(body)
```
---
* API URL: '/v1/tax_rates/:tax_rate'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.taxRates.post(body)
```
---
* API URL: '/v1/terminal/configurations'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.configurations.post(body)
```
---
* API URL: '/v1/terminal/configurations/:configuration'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.configurations.post(body)
```
---
* API URL: '/v1/terminal/connection_tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.connectionTokens.post(body)
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.locations.post(body)
```
---
* API URL: '/v1/terminal/locations/:location'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.locations.post(body)
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.post(body)
```
---
* API URL: '/v1/terminal/readers/:reader'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.post(body)
```
---
* API URL: '/v1/terminal/readers/:reader/cancel_action'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.cancelAction.post(reader, body)
```
---
* API URL: '/v1/terminal/readers/:reader/process_payment_intent'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.processPaymentIntent.post(reader, body)
```
---
* API URL: '/v1/terminal/readers/:reader/process_setup_intent'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.processSetupIntent.post(reader, body)
```
---
* API URL: '/v1/terminal/readers/:reader/set_reader_display'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.terminal.readers.setReaderDisplay.post(reader, body)
```
---
* API URL: '/v1/test_helpers/terminal/readers/:reader/present_payment_method'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.terminal.readers.presentPaymentMethod.post(reader, body)
```
---
* API URL: '/v1/test_helpers/test_clocks'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.testClocks.post(body)
```
---
* API URL: '/v1/test_helpers/test_clocks/:test_clock/advance'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.testClocks.advance.post(testClock, body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.tokens.post(body)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.topups.post(body)
```
---
* API URL: '/v1/topups/:topup'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.topups.post(body)
```
---
* API URL: '/v1/topups/:topup/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.topups.cancel.post(topup, body)
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.transfers.reversals.post(body)
```
---
* API URL: '/v1/transfers/:transfer/reversals/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.transfers.reversals.post(transfer, body)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.transfers.post(body)
```
---
* API URL: '/v1/transfers/:transfer'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.transfers.post(body)
```
---
* API URL: '/v1/treasury/credit_reversals'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.creditReversals.post(body)
```
---
* API URL: '/v1/treasury/debit_reversals'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.debitReversals.post(body)
```
---
* API URL: '/v1/treasury/financial_accounts/:financial_account/features'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.features.post(financialAccount, body)
```
---
* API URL: '/v1/treasury/financial_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.post(body)
```
---
* API URL: '/v1/treasury/financial_accounts/:financial_account'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.post(body)
```
---
* API URL: '/v1/test_helpers/treasury/inbound_transfers/:id/fail'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.inboundTransfers.fail.post(id, body)
```
---
* API URL: '/v1/test_helpers/treasury/inbound_transfers/:id/succeed'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.inboundTransfers.succeed.post(id, body)
```
---
* API URL: '/v1/treasury/inbound_transfers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.inboundTransfers.post(body)
```
---
* API URL: '/v1/treasury/inbound_transfers/:inbound_transfer/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.inboundTransfers.cancel.post(inboundTransfer, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_payments/:id/fail'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundPayments.fail.post(id, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_payments/:id/post'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundPayments.post.post(id, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_payments/:id/return'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundPayments.return.post(id, body)
```
---
* API URL: '/v1/treasury/outbound_payments'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.outboundPayments.post(body)
```
---
* API URL: '/v1/treasury/outbound_payments/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.outboundPayments.cancel.post(id, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/fail'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundTransfers.fail.post(outboundTransfer, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/post'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundTransfers.post.post(outboundTransfer, body)
```
---
* API URL: '/v1/test_helpers/treasury/outbound_transfers/:outbound_transfer/return'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.outboundTransfers.return.post(outboundTransfer, body)
```
---
* API URL: '/v1/treasury/outbound_transfers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.outboundTransfers.post(body)
```
---
* API URL: '/v1/treasury/outbound_transfers/:outbound_transfer/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.treasury.outboundTransfers.cancel.post(outboundTransfer, body)
```
---
* API URL: '/v1/test_helpers/treasury/received_credits'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.receivedCredits.post(body)
```
---
* API URL: '/v1/test_helpers/treasury/received_debits'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.testHelpers.treasury.receivedDebits.post(body)
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.webhookEndpoints.post(body)
```
---
* API URL: '/v1/webhook_endpoints/:webhook_endpoint'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.v1.webhookEndpoints.post(body)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.get()
```
---
* API URL: '/v1/accounts/:account'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.get()
```
---
* API URL: '/v1/accounts/:account/capabilities'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.capabilities.get()
```
---
* API URL: '/v1/accounts/:account/capabilities/:capability'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.capabilities.get(account)
```
---
* API URL: '/v1/accounts/:account/external_accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.externalAccounts.get()
```
---
* API URL: '/v1/accounts/:account/external_accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.externalAccounts.get(account)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.applicationFees.refunds.get()
```
---
* API URL: '/v1/application_fees/:fee/refunds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.applicationFees.refunds.get(fee)
```
---
* API URL: '/v1/application_fees'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.applicationFees.get()
```
---
* API URL: '/v1/application_fees/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.applicationFees.get()
```
---
* API URL: '/v1/balance'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.balance.get()
```
---
* API URL: '/v1/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.balanceTransactions.get()
```
---
* API URL: '/v1/balance_transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.balanceTransactions.get()
```
---
* API URL: '/v1/charges'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.charges.get()
```
---
* API URL: '/v1/charges/:charge'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.charges.get()
```
---
* API URL: '/v1/charges/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.charges.search.get()
```
---
* API URL: '/v1/checkout/sessions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.checkout.sessions.get()
```
---
* API URL: '/v1/checkout/sessions/:session'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.checkout.sessions.get()
```
---
* API URL: '/v1/checkout/sessions/:session/line_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.checkout.sessions.lineItems.get(session)
```
---
* API URL: '/v1/country_specs'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.countrySpecs.get()
```
---
* API URL: '/v1/country_specs/:country'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.countrySpecs.get()
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.coupons.get()
```
---
* API URL: '/v1/coupons/:coupon'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.coupons.get()
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.creditNotes.get()
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.creditNotes.get()
```
---
* API URL: '/v1/credit_notes/preview'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.creditNotes.preview.get()
```
---
* API URL: '/v1/credit_notes/preview/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.creditNotes.preview.lines.get()
```
---
* API URL: '/v1/credit_notes/:credit_note/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.creditNotes.lines.get(creditNote)
```
---
* API URL: '/v1/customers/:customer/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.balanceTransactions.get()
```
---
* API URL: '/v1/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.balanceTransactions.get(customer)
```
---
* API URL: '/v1/customers/:customer/cash_balance'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.cashBalance.get(customer)
```
---
* API URL: '/v1/customers/:customer/cash_balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.cashBalanceTransactions.get()
```
---
* API URL: '/v1/customers/:customer/cash_balance_transactions/:transaction'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.cashBalanceTransactions.get(customer)
```
---
* API URL: '/v1/billing_portal/configurations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.billingPortal.configurations.get()
```
---
* API URL: '/v1/billing_portal/configurations/:configuration'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.billingPortal.configurations.get()
```
---
* API URL: '/v1/customers/:customer/tax_ids'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.taxIds.get()
```
---
* API URL: '/v1/customers/:customer/tax_ids/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.taxIds.get(customer)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.get()
```
---
* API URL: '/v1/customers/:customer'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.get()
```
---
* API URL: '/v1/customers/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.search.get()
```
---
* API URL: '/v1/customers/:customer/payment_methods/:payment_method'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.paymentMethods.get(customer)
```
---
* API URL: '/v1/customers/:customer/payment_methods'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.paymentMethods.get()
```
---
* API URL: '/v1/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.disputes.get()
```
---
* API URL: '/v1/disputes/:dispute'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.disputes.get()
```
---
* API URL: '/v1/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.events.get()
```
---
* API URL: '/v1/events/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.events.get()
```
---
* API URL: '/v1/exchange_rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.exchangeRates.get()
```
---
* API URL: '/v1/exchange_rates/:rate_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.exchangeRates.get()
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.fileLinks.get()
```
---
* API URL: '/v1/file_links/:link'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.fileLinks.get()
```
---
* API URL: '/v1/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.files.get()
```
---
* API URL: '/v1/files/:file'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.files.get()
```
---
* API URL: '/v1/financial_connections/accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.financialConnections.accounts.get()
```
---
* API URL: '/v1/financial_connections/accounts/:account'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.financialConnections.accounts.get()
```
---
* API URL: '/v1/financial_connections/sessions/:session'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.financialConnections.sessions.get(session)
```
---
* API URL: '/v1/identity/verification_reports'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.identity.verificationReports.get()
```
---
* API URL: '/v1/identity/verification_reports/:report'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.identity.verificationReports.get()
```
---
* API URL: '/v1/identity/verification_sessions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.get()
```
---
* API URL: '/v1/identity/verification_sessions/:session'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.identity.verificationSessions.get()
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoiceitems.get()
```
---
* API URL: '/v1/invoiceitems/:invoiceitem'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoiceitems.get()
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.get()
```
---
* API URL: '/v1/invoices/:invoice'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.get()
```
---
* API URL: '/v1/invoices/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.search.get()
```
---
* API URL: '/v1/invoices/upcoming'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.upcoming.get()
```
---
* API URL: '/v1/invoices/upcoming/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.upcoming.lines.get()
```
---
* API URL: '/v1/invoices/:invoice/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.invoices.lines.get(invoice)
```
---
* API URL: '/v1/issuing/authorizations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.authorizations.get()
```
---
* API URL: '/v1/issuing/authorizations/:authorization'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.authorizations.get()
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.cardholders.get()
```
---
* API URL: '/v1/issuing/cardholders/:cardholder'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.cardholders.get()
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.cards.get()
```
---
* API URL: '/v1/issuing/cards/:card'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.cards.get()
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.disputes.get()
```
---
* API URL: '/v1/issuing/disputes/:dispute'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.disputes.get()
```
---
* API URL: '/v1/issuing/transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.transactions.get()
```
---
* API URL: '/v1/issuing/transactions/:transaction'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.issuing.transactions.get()
```
---
* API URL: '/v1/mandates/:mandate'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.mandates.get(mandate)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentIntents.get()
```
---
* API URL: '/v1/payment_intents/:intent'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentIntents.get()
```
---
* API URL: '/v1/payment_intents/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentIntents.search.get()
```
---
* API URL: '/v1/payment_links'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentLinks.get()
```
---
* API URL: '/v1/payment_links/:payment_link'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentLinks.get()
```
---
* API URL: '/v1/payment_links/:payment_link/line_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentLinks.lineItems.get(paymentLink)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentMethods.get()
```
---
* API URL: '/v1/payment_methods/:payment_method'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.paymentMethods.get()
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.payouts.get()
```
---
* API URL: '/v1/payouts/:payout'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.payouts.get()
```
---
* API URL: '/v1/accounts/:account/persons'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.persons.get()
```
---
* API URL: '/v1/accounts/:account/persons/:person'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.accounts.persons.get(account)
```
---
* API URL: '/v1/prices'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.prices.get()
```
---
* API URL: '/v1/prices/:price'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.prices.get()
```
---
* API URL: '/v1/prices/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.prices.search.get()
```
---
* API URL: '/v1/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.products.get()
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.products.get()
```
---
* API URL: '/v1/products/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.products.search.get()
```
---
* API URL: '/v1/promotion_codes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.promotionCodes.get()
```
---
* API URL: '/v1/promotion_codes/:promotion_code'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.promotionCodes.get()
```
---
* API URL: '/v1/quotes/:quote/computed_upfront_line_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.quotes.computedUpfrontLineItems.get(quote)
```
---
* API URL: '/v1/quotes/:quote/line_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.quotes.lineItems.get(quote)
```
---
* API URL: '/v1/quotes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.quotes.get()
```
---
* API URL: '/v1/quotes/:quote'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.quotes.get()
```
---
* API URL: '/v1/quotes/:quote/pdf'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.quotes.pdf.get(quote)
```
---
* API URL: '/v1/radar/early_fraud_warnings'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.earlyFraudWarnings.get()
```
---
* API URL: '/v1/radar/early_fraud_warnings/:early_fraud_warning'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.earlyFraudWarnings.get()
```
---
* API URL: '/v1/reviews'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reviews.get()
```
---
* API URL: '/v1/reviews/:review'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reviews.get()
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.valueLists.get()
```
---
* API URL: '/v1/radar/value_lists/:value_list'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.valueLists.get()
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.valueListItems.get()
```
---
* API URL: '/v1/radar/value_list_items/:item'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.radar.valueListItems.get()
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.refunds.get()
```
---
* API URL: '/v1/refunds/:refund'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.refunds.get()
```
---
* API URL: '/v1/reporting/report_runs'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reporting.reportRuns.get()
```
---
* API URL: '/v1/reporting/report_runs/:report_run'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reporting.reportRuns.get()
```
---
* API URL: '/v1/reporting/report_types'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reporting.reportTypes.get()
```
---
* API URL: '/v1/reporting/report_types/:report_type'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.reporting.reportTypes.get()
```
---
* API URL: '/v1/apps/secrets'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.apps.secrets.get()
```
---
* API URL: '/v1/apps/secrets/find'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.apps.secrets.find.get()
```
---
* API URL: '/v1/setup_attempts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.setupAttempts.get()
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.setupIntents.get()
```
---
* API URL: '/v1/setup_intents/:intent'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.setupIntents.get()
```
---
* API URL: '/v1/shipping_rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.shippingRates.get()
```
---
* API URL: '/v1/shipping_rates/:shipping_rate_token'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.shippingRates.get()
```
---
* API URL: '/v1/sigma/scheduled_query_runs'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.sigma.scheduledQueryRuns.get()
```
---
* API URL: '/v1/sigma/scheduled_query_runs/:scheduled_query_run'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.sigma.scheduledQueryRuns.get()
```
---
* API URL: '/v1/skus'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.skus.get()
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.skus.get()
```
---
* API URL: '/v1/customers/:customer/sources'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.sources.get()
```
---
* API URL: '/v1/customers/:customer/sources/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.customers.sources.get(customer)
```
---
* API URL: '/v1/sources/:source'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.sources.get(source)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptionItems.get()
```
---
* API URL: '/v1/subscription_items/:item'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptionItems.get()
```
---
* API URL: '/v1/subscription_items/:subscription_item/usage_record_summaries'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptionItems.usageRecordSummaries.get(subscriptionItem)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.get()
```
---
* API URL: '/v1/subscription_schedules/:schedule'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptionSchedules.get()
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptions.get()
```
---
* API URL: '/v1/subscriptions/:subscription_exposed_id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptions.get()
```
---
* API URL: '/v1/subscriptions/search'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.subscriptions.search.get()
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.taxRates.get()
```
---
* API URL: '/v1/tax_rates/:tax_rate'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.taxRates.get()
```
---
* API URL: '/v1/terminal/configurations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.configurations.get()
```
---
* API URL: '/v1/terminal/configurations/:configuration'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.configurations.get()
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.locations.get()
```
---
* API URL: '/v1/terminal/locations/:location'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.locations.get()
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.readers.get()
```
---
* API URL: '/v1/terminal/readers/:reader'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.terminal.readers.get()
```
---
* API URL: '/v1/test_helpers/test_clocks'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.testHelpers.testClocks.get()
```
---
* API URL: '/v1/test_helpers/test_clocks/:test_clock'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.testHelpers.testClocks.get()
```
---
* API URL: '/v1/tokens/:token'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.tokens.get(token)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.topups.get()
```
---
* API URL: '/v1/topups/:topup'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.topups.get()
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.transfers.reversals.get()
```
---
* API URL: '/v1/transfers/:transfer/reversals/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.transfers.reversals.get(transfer)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.transfers.get()
```
---
* API URL: '/v1/transfers/:transfer'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.transfers.get()
```
---
* API URL: '/v1/treasury/credit_reversals'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.creditReversals.get()
```
---
* API URL: '/v1/treasury/credit_reversals/:credit_reversal'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.creditReversals.get()
```
---
* API URL: '/v1/treasury/debit_reversals'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.debitReversals.get()
```
---
* API URL: '/v1/treasury/debit_reversals/:debit_reversal'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.debitReversals.get()
```
---
* API URL: '/v1/treasury/financial_accounts/:financial_account/features'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.features.get(financialAccount)
```
---
* API URL: '/v1/treasury/financial_accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.get()
```
---
* API URL: '/v1/treasury/financial_accounts/:financial_account'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.financialAccounts.get()
```
---
* API URL: '/v1/treasury/inbound_transfers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.inboundTransfers.get()
```
---
* API URL: '/v1/treasury/inbound_transfers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.inboundTransfers.get()
```
---
* API URL: '/v1/treasury/outbound_payments'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.outboundPayments.get()
```
---
* API URL: '/v1/treasury/outbound_payments/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.outboundPayments.get()
```
---
* API URL: '/v1/treasury/outbound_transfers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.outboundTransfers.get()
```
---
* API URL: '/v1/treasury/outbound_transfers/:outbound_transfer'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.outboundTransfers.get()
```
---
* API URL: '/v1/treasury/received_credits'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.receivedCredits.get()
```
---
* API URL: '/v1/treasury/received_credits/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.receivedCredits.get()
```
---
* API URL: '/v1/treasury/received_debits'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.receivedDebits.get()
```
---
* API URL: '/v1/treasury/received_debits/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.receivedDebits.get()
```
---
* API URL: '/v1/treasury/transaction_entries'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.transactionEntries.get()
```
---
* API URL: '/v1/treasury/transaction_entries/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.transactionEntries.get()
```
---
* API URL: '/v1/treasury/transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.transactions.get()
```
---
* API URL: '/v1/treasury/transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.treasury.transactions.get()
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.webhookEndpoints.get()
```
---
* API URL: '/v1/webhook_endpoints/:webhook_endpoint'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.v1.webhookEndpoints.get()
```
---
* API URL: '/v1/accounts/:account'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.accounts.delete(account)
```
---
* API URL: '/v1/accounts/:account/external_accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.accounts.externalAccounts.delete(account, id)
```
---
* API URL: '/v1/coupons/:coupon'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.coupons.delete(coupon)
```
---
* API URL: '/v1/customers/:customer/tax_ids/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.customers.taxIds.delete(customer, id)
```
---
* API URL: '/v1/customers/:customer'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.customers.delete(customer)
```
---
* API URL: '/v1/customers/:customer/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.customers.discount.delete(customer)
```
---
* API URL: '/v1/invoiceitems/:invoiceitem'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.invoiceitems.delete(invoiceitem)
```
---
* API URL: '/v1/invoices/:invoice'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.invoices.delete(invoice)
```
---
* API URL: '/v1/accounts/:account/persons/:person'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.accounts.persons.delete(account, person)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.products.delete(id)
```
---
* API URL: '/v1/radar/value_lists/:value_list'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.radar.valueLists.delete(valueList)
```
---
* API URL: '/v1/radar/value_list_items/:item'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.radar.valueListItems.delete(item)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.skus.delete(id)
```
---
* API URL: '/v1/customers/:customer/sources/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.customers.sources.delete(customer, id)
```
---
* API URL: '/v1/subscription_items/:item'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.subscriptionItems.delete(item)
```
---
* API URL: '/v1/subscriptions/:subscription_exposed_id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.subscriptions.delete(subscriptionExposedId)
```
---
* API URL: '/v1/subscriptions/:subscription_exposed_id/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.subscriptions.discount.delete(subscriptionExposedId)
```
---
* API URL: '/v1/terminal/configurations/:configuration'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.terminal.configurations.delete(configuration)
```
---
* API URL: '/v1/terminal/locations/:location'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.terminal.locations.delete(location)
```
---
* API URL: '/v1/terminal/readers/:reader'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.terminal.readers.delete(reader)
```
---
* API URL: '/v1/test_helpers/test_clocks/:test_clock'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.testHelpers.testClocks.delete(testClock)
```
---
* API URL: '/v1/webhook_endpoints/:webhook_endpoint'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.v1.webhookEndpoints.delete(webhookEndpoint)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,GET,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v1/account_links<br>/v1/accounts<br>/v1/accounts/{account}<br>/v1/accounts/{account}/capabilities/{capability}<br>/v1/accounts/{account}/external_accounts<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/accounts/{account}/login_links<br>/v1/accounts/{account}/reject<br>/v1/application_fees/{id}/refund<br>/v1/application_fees/{id}/refunds<br>/v1/application_fees/{fee}/refunds/{id}<br>/v1/charges<br>/v1/charges/{charge}<br>/v1/charges/{charge}/capture<br>/v1/checkout/sessions<br>/v1/checkout/sessions/{session}/expire<br>/v1/coupons<br>/v1/coupons/{coupon}<br>/v1/credit_notes<br>/v1/credit_notes/{id}<br>/v1/credit_notes/{id}/void<br>/v1/customers/{customer}/balance_transactions<br>/v1/customers/{customer}/balance_transactions/{transaction}<br>/v1/customers/{customer}/cash_balance<br>/v1/billing_portal/configurations<br>/v1/billing_portal/configurations/{configuration}<br>/v1/billing_portal/sessions<br>/v1/customers/{customer}/tax_ids<br>/v1/customers<br>/v1/customers/{customer}<br>/v1/disputes/{dispute}<br>/v1/disputes/{dispute}/close<br>/v1/file_links<br>/v1/file_links/{link}<br>https://files.stripe.com/v1/files<br>/v1/financial_connections/accounts/{account}/disconnect<br>/v1/financial_connections/accounts/{account}/refresh<br>/v1/financial_connections/sessions<br>/v1/identity/verification_sessions<br>/v1/identity/verification_sessions/{session}<br>/v1/identity/verification_sessions/{session}/cancel<br>/v1/identity/verification_sessions/{session}/redact<br>/v1/invoiceitems<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices<br>/v1/invoices/{invoice}<br>/v1/invoices/{invoice}/finalize<br>/v1/invoices/{invoice}/mark_uncollectible<br>/v1/invoices/{invoice}/pay<br>/v1/invoices/{invoice}/send<br>/v1/invoices/{invoice}/void<br>/v1/issuing/authorizations/{authorization}<br>/v1/issuing/authorizations/{authorization}/approve<br>/v1/issuing/authorizations/{authorization}/decline<br>/v1/issuing/cardholders<br>/v1/issuing/cardholders/{cardholder}<br>/v1/issuing/cards<br>/v1/issuing/cards/{card}<br>/v1/test_helpers/issuing/cards/{card}/shipping/fail<br>/v1/test_helpers/issuing/cards/{card}/shipping/return<br>/v1/test_helpers/issuing/cards/{card}/shipping/ship<br>/v1/issuing/disputes<br>/v1/issuing/disputes/{dispute}<br>/v1/issuing/disputes/{dispute}/submit<br>/v1/issuing/transactions/{transaction}<br>/v1/payment_intents<br>/v1/payment_intents/{intent}<br>/v1/payment_intents/{intent}/apply_customer_balance<br>/v1/payment_intents/{intent}/cancel<br>/v1/payment_intents/{intent}/capture<br>/v1/payment_intents/{intent}/confirm<br>/v1/payment_intents/{intent}/increment_authorization<br>/v1/payment_intents/{intent}/verify_microdeposits<br>/v1/payment_links<br>/v1/payment_links/{payment_link}<br>/v1/payment_methods<br>/v1/payment_methods/{payment_method}<br>/v1/payment_methods/{payment_method}/attach<br>/v1/payment_methods/{payment_method}/detach<br>/v1/payouts<br>/v1/payouts/{payout}<br>/v1/payouts/{payout}/cancel<br>/v1/payouts/{payout}/reverse<br>/v1/accounts/{account}/persons<br>/v1/accounts/{account}/persons/{person}<br>/v1/prices<br>/v1/prices/{price}<br>/v1/products<br>/v1/products/{id}<br>/v1/promotion_codes<br>/v1/promotion_codes/{promotion_code}<br>/v1/quotes<br>/v1/quotes/{quote}<br>/v1/quotes/{quote}/accept<br>/v1/quotes/{quote}/cancel<br>/v1/quotes/{quote}/finalize<br>/v1/reviews/{review}/approve<br>/v1/radar/value_lists<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items<br>/v1/refunds<br>/v1/refunds/{refund}<br>/v1/reporting/report_runs<br>/v1/apps/secrets<br>/v1/apps/secrets/delete<br>/v1/setup_intents<br>/v1/setup_intents/{intent}<br>/v1/setup_intents/{intent}/cancel<br>/v1/setup_intents/{intent}/confirm<br>/v1/setup_intents/{intent}/verify_microdeposits<br>/v1/shipping_rates<br>/v1/shipping_rates/{shipping_rate_token}<br>/v1/skus<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources<br>/v1/customers/{customer}/sources/{id}<br>/v1/customers/{customer}/sources/{id}/verify<br>/v1/sources<br>/v1/sources/{source}<br>/v1/subscription_items<br>/v1/subscription_items/{item}<br>/v1/subscription_items/{subscription_item}/usage_records<br>/v1/subscription_schedules<br>/v1/subscription_schedules/{schedule}<br>/v1/subscription_schedules/{schedule}/cancel<br>/v1/subscription_schedules/{schedule}/release<br>/v1/subscriptions<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/tax_rates<br>/v1/tax_rates/{tax_rate}<br>/v1/terminal/configurations<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/connection_tokens<br>/v1/terminal/locations<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers<br>/v1/terminal/readers/{reader}<br>/v1/terminal/readers/{reader}/cancel_action<br>/v1/terminal/readers/{reader}/process_payment_intent<br>/v1/terminal/readers/{reader}/process_setup_intent<br>/v1/terminal/readers/{reader}/set_reader_display<br>/v1/test_helpers/terminal/readers/{reader}/present_payment_method<br>/v1/test_helpers/test_clocks<br>/v1/test_helpers/test_clocks/{test_clock}/advance<br>/v1/tokens<br>/v1/topups<br>/v1/topups/{topup}<br>/v1/topups/{topup}/cancel<br>/v1/transfers/{id}/reversals<br>/v1/transfers/{transfer}/reversals/{id}<br>/v1/transfers<br>/v1/transfers/{transfer}<br>/v1/treasury/credit_reversals<br>/v1/treasury/debit_reversals<br>/v1/treasury/financial_accounts/{financial_account}/features<br>/v1/treasury/financial_accounts<br>/v1/treasury/financial_accounts/{financial_account}<br>/v1/test_helpers/treasury/inbound_transfers/{id}/fail<br>/v1/test_helpers/treasury/inbound_transfers/{id}/succeed<br>/v1/treasury/inbound_transfers<br>/v1/treasury/inbound_transfers/{inbound_transfer}/cancel<br>/v1/test_helpers/treasury/outbound_payments/{id}/fail<br>/v1/test_helpers/treasury/outbound_payments/{id}/post<br>/v1/test_helpers/treasury/outbound_payments/{id}/return<br>/v1/treasury/outbound_payments<br>/v1/treasury/outbound_payments/{id}/cancel<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post<br>/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return<br>/v1/treasury/outbound_transfers<br>/v1/treasury/outbound_transfers/{outbound_transfer}/cancel<br>/v1/test_helpers/treasury/received_credits<br>/v1/test_helpers/treasury/received_debits<br>/v1/webhook_endpoints<br>/v1/webhook_endpoints/{webhook_endpoint}<br>/v1/accounts<br>/v1/accounts/{account}<br>/v1/accounts/{account}/capabilities<br>/v1/accounts/{account}/capabilities/{capability}<br>/v1/accounts/{account}/external_accounts<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/application_fees/{id}/refunds<br>/v1/application_fees/{fee}/refunds/{id}<br>/v1/application_fees<br>/v1/application_fees/{id}<br>/v1/balance<br>/v1/balance_transactions<br>/v1/balance_transactions/{id}<br>/v1/charges<br>/v1/charges/{charge}<br>/v1/charges/search<br>/v1/checkout/sessions<br>/v1/checkout/sessions/{session}<br>/v1/checkout/sessions/{session}/line_items<br>/v1/country_specs<br>/v1/country_specs/{country}<br>/v1/coupons<br>/v1/coupons/{coupon}<br>/v1/credit_notes<br>/v1/credit_notes/{id}<br>/v1/credit_notes/preview<br>/v1/credit_notes/preview/lines<br>/v1/credit_notes/{credit_note}/lines<br>/v1/customers/{customer}/balance_transactions<br>/v1/customers/{customer}/balance_transactions/{transaction}<br>/v1/customers/{customer}/cash_balance<br>/v1/customers/{customer}/cash_balance_transactions<br>/v1/customers/{customer}/cash_balance_transactions/{transaction}<br>/v1/billing_portal/configurations<br>/v1/billing_portal/configurations/{configuration}<br>/v1/customers/{customer}/tax_ids<br>/v1/customers/{customer}/tax_ids/{id}<br>/v1/customers<br>/v1/customers/{customer}<br>/v1/customers/search<br>/v1/customers/{customer}/payment_methods/{payment_method}<br>/v1/customers/{customer}/payment_methods<br>/v1/disputes<br>/v1/disputes/{dispute}<br>/v1/events<br>/v1/events/{id}<br>/v1/exchange_rates<br>/v1/exchange_rates/{rate_id}<br>/v1/file_links<br>/v1/file_links/{link}<br>/v1/files<br>/v1/files/{file}<br>/v1/financial_connections/accounts<br>/v1/financial_connections/accounts/{account}<br>/v1/financial_connections/sessions/{session}<br>/v1/identity/verification_reports<br>/v1/identity/verification_reports/{report}<br>/v1/identity/verification_sessions<br>/v1/identity/verification_sessions/{session}<br>/v1/invoiceitems<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices<br>/v1/invoices/{invoice}<br>/v1/invoices/search<br>/v1/invoices/upcoming<br>/v1/invoices/upcoming/lines<br>/v1/invoices/{invoice}/lines<br>/v1/issuing/authorizations<br>/v1/issuing/authorizations/{authorization}<br>/v1/issuing/cardholders<br>/v1/issuing/cardholders/{cardholder}<br>/v1/issuing/cards<br>/v1/issuing/cards/{card}<br>/v1/issuing/disputes<br>/v1/issuing/disputes/{dispute}<br>/v1/issuing/transactions<br>/v1/issuing/transactions/{transaction}<br>/v1/mandates/{mandate}<br>/v1/payment_intents<br>/v1/payment_intents/{intent}<br>/v1/payment_intents/search<br>/v1/payment_links<br>/v1/payment_links/{payment_link}<br>/v1/payment_links/{payment_link}/line_items<br>/v1/payment_methods<br>/v1/payment_methods/{payment_method}<br>/v1/payouts<br>/v1/payouts/{payout}<br>/v1/accounts/{account}/persons<br>/v1/accounts/{account}/persons/{person}<br>/v1/prices<br>/v1/prices/{price}<br>/v1/prices/search<br>/v1/products<br>/v1/products/{id}<br>/v1/products/search<br>/v1/promotion_codes<br>/v1/promotion_codes/{promotion_code}<br>/v1/quotes/{quote}/computed_upfront_line_items<br>/v1/quotes/{quote}/line_items<br>/v1/quotes<br>/v1/quotes/{quote}<br>/v1/quotes/{quote}/pdf<br>/v1/radar/early_fraud_warnings<br>/v1/radar/early_fraud_warnings/{early_fraud_warning}<br>/v1/reviews<br>/v1/reviews/{review}<br>/v1/radar/value_lists<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items<br>/v1/radar/value_list_items/{item}<br>/v1/refunds<br>/v1/refunds/{refund}<br>/v1/reporting/report_runs<br>/v1/reporting/report_runs/{report_run}<br>/v1/reporting/report_types<br>/v1/reporting/report_types/{report_type}<br>/v1/apps/secrets<br>/v1/apps/secrets/find<br>/v1/setup_attempts<br>/v1/setup_intents<br>/v1/setup_intents/{intent}<br>/v1/shipping_rates<br>/v1/shipping_rates/{shipping_rate_token}<br>/v1/sigma/scheduled_query_runs<br>/v1/sigma/scheduled_query_runs/{scheduled_query_run}<br>/v1/skus<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources<br>/v1/customers/{customer}/sources/{id}<br>/v1/sources/{source}<br>/v1/subscription_items<br>/v1/subscription_items/{item}<br>/v1/subscription_items/{subscription_item}/usage_record_summaries<br>/v1/subscription_schedules<br>/v1/subscription_schedules/{schedule}<br>/v1/subscriptions<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/subscriptions/search<br>/v1/tax_rates<br>/v1/tax_rates/{tax_rate}<br>/v1/terminal/configurations<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/locations<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers<br>/v1/terminal/readers/{reader}<br>/v1/test_helpers/test_clocks<br>/v1/test_helpers/test_clocks/{test_clock}<br>/v1/tokens/{token}<br>/v1/topups<br>/v1/topups/{topup}<br>/v1/transfers/{id}/reversals<br>/v1/transfers/{transfer}/reversals/{id}<br>/v1/transfers<br>/v1/transfers/{transfer}<br>/v1/treasury/credit_reversals<br>/v1/treasury/credit_reversals/{credit_reversal}<br>/v1/treasury/debit_reversals<br>/v1/treasury/debit_reversals/{debit_reversal}<br>/v1/treasury/financial_accounts/{financial_account}/features<br>/v1/treasury/financial_accounts<br>/v1/treasury/financial_accounts/{financial_account}<br>/v1/treasury/inbound_transfers<br>/v1/treasury/inbound_transfers/{id}<br>/v1/treasury/outbound_payments<br>/v1/treasury/outbound_payments/{id}<br>/v1/treasury/outbound_transfers<br>/v1/treasury/outbound_transfers/{outbound_transfer}<br>/v1/treasury/received_credits<br>/v1/treasury/received_credits/{id}<br>/v1/treasury/received_debits<br>/v1/treasury/received_debits/{id}<br>/v1/treasury/transaction_entries<br>/v1/treasury/transaction_entries/{id}<br>/v1/treasury/transactions<br>/v1/treasury/transactions/{id}<br>/v1/webhook_endpoints<br>/v1/webhook_endpoints/{webhook_endpoint}<br>/v1/accounts/{account}<br>/v1/accounts/{account}/external_accounts/{id}<br>/v1/coupons/{coupon}<br>/v1/customers/{customer}/tax_ids/{id}<br>/v1/customers/{customer}<br>/v1/customers/{customer}/discount<br>/v1/invoiceitems/{invoiceitem}<br>/v1/invoices/{invoice}<br>/v1/accounts/{account}/persons/{person}<br>/v1/products/{id}<br>/v1/radar/value_lists/{value_list}<br>/v1/radar/value_list_items/{item}<br>/v1/skus/{id}<br>/v1/customers/{customer}/sources/{id}<br>/v1/subscription_items/{item}<br>/v1/subscriptions/{subscription_exposed_id}<br>/v1/subscriptions/{subscription_exposed_id}/discount<br>/v1/terminal/configurations/{configuration}<br>/v1/terminal/locations/{location}<br>/v1/terminal/readers/{reader}<br>/v1/test_helpers/test_clocks/{test_clock}<br>/v1/webhook_endpoints/{webhook_endpoint}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

### Create a PaymentIntent

This step allows you to create a payment.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Currency</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Three-letter ISO currency code, in lowercase. Must be a supported currency https://stripe.com/docs/currencies.
        </td>
    </tr>
    <tr>
        <td>Amount</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or equivalent in charge currency. The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

### Cancel PaymentIntents

A PaymentIntent object can be canceled when it is in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, in rare cases, processing.


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Intent</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Payment intent id.
        </td>
    </tr>
    <tr>
        <td>Cancellation Reason</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Reason for canceling this PaymentIntent. Possible values are duplicate, fraudulent, requested_by_customer, or abandoned
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### List all PaymentIntents


<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Customer</td>
        <td>text</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Only PaymentIntents associated with the customer specified by this customer ID will be returned. If no customer ID is specified, all PaymentIntents will be listed.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>

</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*


