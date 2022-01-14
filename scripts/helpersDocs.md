# Javascript API

The Javascript API of the Stripe endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE` requests to the [Stripe API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.Stripe.get('/v1/invoices/:id/lines')
var response = app.endpoints.Stripe.post('/v1/tokens', body)
var response = app.endpoints.Stripe.delete('/v1/plans/:id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v1/balance'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/balance
```javascript
app.endpoints.Stripe.coreResources.balance.get()
```
---
* API URL: '/v1/balance_transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.balanceTransactions.get(id)
```
---
* API URL: '/v1/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.balanceTransactions.get()
```
---
* API URL: '/v1/charges/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.charges.get(id)
```
---
* API URL: '/v1/charges'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.charges.get()
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.customers.get(id)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.customers.get()
```
---
* API URL: '/v1/disputes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.disputes.get(id)
```
---
* API URL: '/v1/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.disputes.get()
```
---
* API URL: '/v1/events/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.events.get(id)
```
---
* API URL: '/v1/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.events.get()
```
---
* API URL: '/v1/files/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.files.get(id)
```
---
* API URL: '/v1/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.files.get()
```
---
* API URL: '/v1/file_links/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.fileLinks.get(id)
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.fileLinks.get()
```
---
* API URL: '/v1/payment_intents/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.get(id)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.get()
```
---
* API URL: '/v1/setup_intents/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.get(id)
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.get()
```
---
* API URL: '/v1/payouts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.payouts.get(id)
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.payouts.get()
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.products.get(id)
```
---
* API URL: '/v1/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.products.get()
```
---
* API URL: '/v1/refunds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.refunds.get(id)
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.refunds.get()
```
---
* API URL: '/v1/tokens/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.coreResources.tokens.get(id)
```
---
* API URL: '/v1/payment_methods/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.get(id)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.get()
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.get(id, id)
```
---
* API URL: '/v1/customers/:id/sources?object=card'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.get(id)
```
---
* API URL: '/v1/sources/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.paymentMethods.sources.get(id)
```
---
* API URL: '/v1/checkout/sessions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.get(id)
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.coupons.get(id)
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.coupons.get()
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.creditNotes.get(id)
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.creditNotes.get()
```
---
* API URL: '/v1/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.get(customer, transaction)
```
---
* API URL: '/v1/customers/:customer/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.get(customer)
```
---
* API URL: '/v1/customers/:id/tax_ids/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.customers.taxIds.get(id, id)
```
---
* API URL: '/v1/customers/:id/tax_ids'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.customers.taxIds.get(id)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoices.get(id)
```
---
* API URL: '/v1/invoices/:id/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoices.lines.get(id)
```
---
* API URL: '/v1/invoices/upcoming'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoices.upcoming.get()
```
---
* API URL: '/v1/invoices/upcoming/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoices.upcoming.lines.get()
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoices.get()
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoiceitems.get(id)
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.invoiceitems.get()
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.plans.get(id)
```
---
* API URL: '/v1/plans'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.plans.get()
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.products.get(id)
```
---
* API URL: '/v1/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.products.get()
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptions.get(id)
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptions.get()
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.get(id)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.get()
```
---
* API URL: '/v1/subscription_schedules/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.get(id)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.get()
```
---
* API URL: '/v1/tax_rates/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.taxRates.get(id)
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.taxRates.get()
```
---
* API URL: '/v1/subscription_items/:id/usage_record_summaries'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.usageRecordSummaries.get(id)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.get(id)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.get()
```
---
* API URL: '/v1/application_fees/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.applicationFees.get(id)
```
---
* API URL: '/v1/application_fees'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.applicationFees.get()
```
---
* API URL: '/v1/application_fees/:id/refunds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.get(id, id)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.get(id)
```
---
* API URL: '/v1/accounts/:id/capabilities'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.get(id)
```
---
* API URL: '/v1/country_specs'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.countrySpecs.get()
```
---
* API URL: '/v1/country_specs/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.countrySpecs.get(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.get(id, id)
```
---
* API URL: '/v1/accounts/:id/external_accounts?object=bank_account'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.get(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.get(id, id)
```
---
* API URL: '/v1/accounts/:id/external_accounts?object=card'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.get(id)
```
---
* API URL: '/v1/topups/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.topups.get(id)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.topups.get()
```
---
* API URL: '/v1/transfers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.transfers.get(id)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.transfers.get()
```
---
* API URL: '/v1/transfers/:id/reversals/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.transfers.reversals.get(id, id)
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.connect.transfers.reversals.get(id)
```
---
* API URL: '/v1/radar/early_fraud_warnings/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.earlyFraudWarnings.get(id)
```
---
* API URL: '/v1/radar/early_fraud_warnings'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.earlyFraudWarnings.get()
```
---
* API URL: '/v1/reviews/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.reviews.get(id)
```
---
* API URL: '/v1/reviews'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.reviews.get()
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.get(id)
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.get()
```
---
* API URL: '/v1/radar/value_list_items/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.get(id)
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.get()
```
---
* API URL: '/v1/issuing/authorizations/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.authorizations.get(id)
```
---
* API URL: '/v1/issuing/authorizations'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.authorizations.get()
```
---
* API URL: '/v1/issuing/cardholders/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.cardholders.get(id)
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.cardholders.get()
```
---
* API URL: '/v1/issuing/cards/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.cards.get(id)
```
---
* API URL: '/v1/issuing/cards/:id/details'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.cards.details.get(id)
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.cards.get()
```
---
* API URL: '/v1/issuing/disputes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.disputes.get(id)
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.disputes.get()
```
---
* API URL: '/v1/issuing/transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.transactions.get(id)
```
---
* API URL: '/v1/issuing/transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.issuing.issuing.transactions.get()
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.terminal.terminal.locations.get(id)
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.terminal.terminal.locations.get()
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.terminal.terminal.readers.get(id)
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.terminal.terminal.readers.get()
```
---
* API URL: '/v1/orders/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.orders.get(id)
```
---
* API URL: '/v1/orders'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.orders.get()
```
---
* API URL: '/v1/order_returns/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.orderReturns.get(id)
```
---
* API URL: '/v1/order_returns'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.orderReturns.get()
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.skus.get(id)
```
---
* API URL: '/v1/skus'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.orders.skus.get()
```
---
* API URL: '/v1/sigma/scheduled_query_runs/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.sigma.sigma.scheduledQueryRuns.get(id)
```
---
* API URL: '/v1/sigma/scheduled_query_runs'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.sigma.sigma.scheduledQueryRuns.get()
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.get(id)
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'GET'
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.get()
```
---
* API URL: '/v1/charges'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.charges.post(body)
```
---
* API URL: '/v1/charges/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.charges.post(id, body)
```
---
* API URL: '/v1/charges/:id/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.charges.capture.post(id, body)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.customers.post(body)
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.customers.post(id, body)
```
---
* API URL: '/v1/disputes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.disputes.post(id, body)
```
---
* API URL: '/v1/disputes/:id/close'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.disputes.close.post(id, body)
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.fileLinks.post(body)
```
---
* API URL: '/v1/file_links/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.fileLinks.post(id, body)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.post(body)
```
---
* API URL: '/v1/payment_intents/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.post(id, body)
```
---
* API URL: '/v1/payment_intents/:id/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.confirm.post(id, body)
```
---
* API URL: '/v1/payment_intents/:id/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.capture.post(id, body)
```
---
* API URL: '/v1/payment_intents/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.cancel.post(id, body)
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.post(body)
```
---
* API URL: '/v1/setup_intents/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.post(id, body)
```
---
* API URL: '/v1/setup_intents/:id/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.confirm.post(id, body)
```
---
* API URL: '/v1/setup_intents/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.setupIntents.cancel.post(id, body)
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.payouts.post(body)
```
---
* API URL: '/v1/payouts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.payouts.post(id, body)
```
---
* API URL: '/v1/payouts/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.payouts.cancel.post(id, body)
```
---
* API URL: '/v1/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.products.post(body)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.products.post(id, body)
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.refunds.post(body)
```
---
* API URL: '/v1/refunds/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.refunds.post(id, body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.tokens.post(body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.tokens.post(body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.tokens.post(body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.tokens.post(body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.coreResources.tokens.post(body)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.post(body)
```
---
* API URL: '/v1/payment_methods/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.post(id, body)
```
---
* API URL: '/v1/payment_methods/:id/attach'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.attach.post(id, body)
```
---
* API URL: '/v1/payment_methods/:id/detach'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.detach.post(id, body)
```
---
* API URL: '/v1/customers/:id/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.post(id, body)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.post(id, id, body)
```
---
* API URL: '/v1/customers/:id/sources/:id/verify'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.verify.post(id, id, body)
```
---
* API URL: '/v1/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.sources.post(body)
```
---
* API URL: '/v1/sources/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.sources.post(id, body)
```
---
* API URL: '/v1/customers/:id/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.post(id, body)
```
---
* API URL: '/v1/checkout/sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.post(body)
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.coupons.post(body)
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.coupons.post(id, body)
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.creditNotes.post(body)
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.creditNotes.post(id, body)
```
---
* API URL: '/v1/credit_notes/:id/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.creditNotes.void.post(id, body)
```
---
* API URL: '/v1/customers/:customer/balance_transactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.post(customer, body)
```
---
* API URL: '/v1/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.post(customer, transaction, body)
```
---
* API URL: '/v1/customers/:id/tax_ids'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.customers.taxIds.post(id, body)
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.post(body)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.post(id, body)
```
---
* API URL: '/v1/invoices/:id/finalize'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.finalize.post(id, body)
```
---
* API URL: '/v1/invoices/:id/pay'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.pay.post(id, body)
```
---
* API URL: '/v1/invoices/:id/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.send.post(id, body)
```
---
* API URL: '/v1/invoices/:id/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.void.post(id, body)
```
---
* API URL: '/v1/invoices/:id/mark_uncollectible'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoices.markUncollectible.post(id, body)
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoiceitems.post(body)
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.invoiceitems.post(id, body)
```
---
* API URL: '/v1/plans'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.plans.post(body)
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.plans.post(id, body)
```
---
* API URL: '/v1/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.products.post(body)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.products.post(id, body)
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptions.post(body)
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptions.post(id, body)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.post(body)
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.post(id, body)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.post(body)
```
---
* API URL: '/v1/subscription_schedules/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.post(id, body)
```
---
* API URL: '/v1/subscription_schedules/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.cancel.post(id, body)
```
---
* API URL: '/v1/subscription_schedules/:id/release'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.release.post(id, body)
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.taxRates.post(body)
```
---
* API URL: '/v1/tax_rates/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.taxRates.post(id, body)
```
---
* API URL: '/v1/subscription_items/:id/usage_records'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.usageRecords.post(id, body)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.post(body)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.post(id, body)
```
---
* API URL: '/v1/accounts/:id/reject'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.reject.post(id, body)
```
---
* API URL: '/v1/accounts/:id/login_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.loginLinks.post(id, body)
```
---
* API URL: '/v1/account_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accountLinks.post(body)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.post(id, body)
```
---
* API URL: '/v1/application_fees/:id/refunds/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.post(id, id, body)
```
---
* API URL: '/v1/accounts/:id/capabilities/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.post(id, id, body)
```
---
* API URL: '/v1/accounts/:id/capabilities/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.post(id, id, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.post(id, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.post(id, id, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.post(id, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.post(id, id, body)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.topups.post(body)
```
---
* API URL: '/v1/topups/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.topups.post(id, body)
```
---
* API URL: '/v1/topups/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.topups.cancel.post(id, body)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.transfers.post(body)
```
---
* API URL: '/v1/transfers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.transfers.post(id, body)
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.transfers.reversals.post(id, body)
```
---
* API URL: '/v1/transfers/:id/reversals/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.connect.transfers.reversals.post(id, id, body)
```
---
* API URL: '/v1/reviews/:id/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.fraud.reviews.approve.post(id, body)
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.post(body)
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.post(id, body)
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.post(body)
```
---
* API URL: '/v1/issuing/authorizations/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.authorizations.post(id, body)
```
---
* API URL: '/v1/issuing/authorizations/:id/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.authorizations.approve.post(id, body)
```
---
* API URL: '/v1/issuing/authorizations/:id/decline'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.authorizations.decline.post(id, body)
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.cardholders.post(body)
```
---
* API URL: '/v1/issuing/cardholders/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.cardholders.post(id, body)
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.cards.post(body)
```
---
* API URL: '/v1/issuing/cards/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.cards.post(id, body)
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.disputes.post(body)
```
---
* API URL: '/v1/issuing/disputes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.disputes.post(id, body)
```
---
* API URL: '/v1/issuing/transactions/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.issuing.issuing.transactions.post(id, body)
```
---
* API URL: '/v1/terminal/connection_tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.terminal.terminal.connectionTokens.post(body)
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.terminal.terminal.locations.post(body)
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.terminal.terminal.locations.post(id, body)
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.terminal.terminal.readers.post(body)
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.terminal.terminal.readers.post(id, body)
```
---
* API URL: '/v1/orders'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.orders.post(body)
```
---
* API URL: '/v1/orders/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.orders.post(id, body)
```
---
* API URL: '/v1/orders/:id/pay'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.orders.pay.post(id, body)
```
---
* API URL: '/v1/orders/:id/returns'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.orders.returns.post(id, body)
```
---
* API URL: '/v1/skus'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.skus.post(body)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.orders.skus.post(id, body)
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.post(body)
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.post(id, body)
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.coreResources.customers.delete(id)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.coreResources.products.delete(id)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.delete(id, id)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.delete(id, id)
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.coupons.delete(id)
```
---
* API URL: '/v1/customers/:id/tax_ids/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.customers.taxIds.delete(id, id)
```
---
* API URL: '/v1/customers/:id/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.customers.discount.delete(id)
```
---
* API URL: '/v1/subscriptions/:id/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.subscriptions.discount.delete(id)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.invoices.delete(id)
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.invoiceitems.delete(id)
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.plans.delete(id)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.products.delete(id)
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.subscriptions.delete(id)
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.billing.subscriptionItems.delete(id)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.connect.accounts.delete(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.delete(id, id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.delete(id, id)
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.delete(id)
```
---
* API URL: '/v1/radar/value_list_items/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.delete(id)
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.terminal.terminal.locations.delete(id)
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.terminal.terminal.readers.delete(id)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.orders.skus.delete(id)
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.delete(id)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*