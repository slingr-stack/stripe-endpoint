# Javascript API

The Javascript API of the stripe endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET`,`DELETE` requests to the [stripe API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.stripe.post('/customers/:id/sources', body)
var response = app.endpoints.stripe.post('/customers/:id/sources')
var response = app.endpoints.stripe.get('/radar/early_fraud_warnings')
var response = app.endpoints.stripe.delete('/subscription_items/:id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/charges'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.charges.post(body)
```
---
* API URL: '/charges/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.charges.post(body)
```
---
* API URL: '/charges/:id/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.charges.capture.post(id, body)
```
---
* API URL: '/customers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.post(body)
```
---
* API URL: '/customers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.post(body)
```
---
* API URL: '/disputes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.disputes.post(id, body)
```
---
* API URL: '/disputes/:id/close'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.disputes.close.post(id, body)
```
---
* API URL: '/file_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.fileLinks.post(body)
```
---
* API URL: '/file_links/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.fileLinks.post(body)
```
---
* API URL: '/payment_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentIntents.post(body)
```
---
* API URL: '/payment_intents/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentIntents.post(body)
```
---
* API URL: '/payment_intents/:id/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentIntents.confirm.post(id, body)
```
---
* API URL: '/payment_intents/:id/capture'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentIntents.capture.post(id, body)
```
---
* API URL: '/payment_intents/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentIntents.cancel.post(id, body)
```
---
* API URL: '/setup_intents'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.setupIntents.post(body)
```
---
* API URL: '/setup_intents/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.setupIntents.post(body)
```
---
* API URL: '/setup_intents/:id/confirm'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.setupIntents.confirm.post(id, body)
```
---
* API URL: '/setup_intents/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.setupIntents.cancel.post(id, body)
```
---
* API URL: '/payouts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.payouts.post(body)
```
---
* API URL: '/payouts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.payouts.post(body)
```
---
* API URL: '/payouts/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.payouts.cancel.post(id, body)
```
---
* API URL: '/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.products.post(body)
```
---
* API URL: '/products/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.products.post(body)
```
---
* API URL: '/products'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.products.post(body)
```
---
* API URL: '/products/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.products.post(body)
```
---
* API URL: '/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.refunds.post(body)
```
---
* API URL: '/refunds/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.refunds.post(body)
```
---
* API URL: '/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.tokens.post(body)
```
---
* API URL: '/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.tokens.post(body)
```
---
* API URL: '/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.tokens.post(body)
```
---
* API URL: '/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.tokens.post(body)
```
---
* API URL: '/tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.tokens.post(body)
```
---
* API URL: '/payment_methods'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentMethods.post(body)
```
---
* API URL: '/payment_methods/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentMethods.post(body)
```
---
* API URL: '/payment_methods/:id/attach'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentMethods.attach.post(id, body)
```
---
* API URL: '/payment_methods/:id/detach'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.paymentMethods.detach.post(id, body)
```
---
* API URL: '/customers/:id/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.sources.post(body)
```
---
* API URL: '/customers/:id/sources/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.sources.post(id, body)
```
---
* API URL: '/customers/:id/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.sources.post(body)
```
---
* API URL: '/customers/:id/sources/:id/verify'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.sources.verify.post(id, id2, body)
```
---
* API URL: '/sources'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.sources.post(body)
```
---
* API URL: '/sources/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.sources.post(body)
```
---
* API URL: '/checkout/sessions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.checkout.sessions.post(body)
```
---
* API URL: '/coupons'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.coupons.post(body)
```
---
* API URL: '/coupons/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.coupons.post(body)
```
---
* API URL: '/credit_notes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.creditNotes.post(body)
```
---
* API URL: '/credit_notes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.creditNotes.post(body)
```
---
* API URL: '/credit_notes/:id/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.creditNotes.void.post(id, body)
```
---
* API URL: '/customers/:customer/balance_transactions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.balanceTransactions.post(body)
```
---
* API URL: '/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.balanceTransactions.post(customer, body)
```
---
* API URL: '/customers/:id/tax_ids'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.customers.taxIds.post(id, body)
```
---
* API URL: '/invoices'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.post(body)
```
---
* API URL: '/invoices/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.post(body)
```
---
* API URL: '/invoices/:id/finalize'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.finalize.post(id, body)
```
---
* API URL: '/invoices/:id/pay'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.pay.post(id, body)
```
---
* API URL: '/invoices/:id/send'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.send.post(id, body)
```
---
* API URL: '/invoices/:id/void'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.void.post(id, body)
```
---
* API URL: '/invoices/:id/mark_uncollectible'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoices.markUncollectible.post(id, body)
```
---
* API URL: '/invoiceitems'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoiceitems.post(body)
```
---
* API URL: '/invoiceitems/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.invoiceitems.post(body)
```
---
* API URL: '/plans'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.plans.post(body)
```
---
* API URL: '/plans/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.plans.post(body)
```
---
* API URL: '/subscriptions'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptions.post(body)
```
---
* API URL: '/subscriptions/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptions.post(body)
```
---
* API URL: '/subscription_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionItems.post(body)
```
---
* API URL: '/subscription_items/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionItems.post(body)
```
---
* API URL: '/subscription_schedules'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionSchedules.post(body)
```
---
* API URL: '/subscription_schedules/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionSchedules.post(body)
```
---
* API URL: '/subscription_schedules/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionSchedules.cancel.post(id, body)
```
---
* API URL: '/subscription_schedules/:id/release'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionSchedules.release.post(id, body)
```
---
* API URL: '/tax_rates'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.taxRates.post(body)
```
---
* API URL: '/tax_rates/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.taxRates.post(body)
```
---
* API URL: '/subscription_items/:id/usage_records'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.subscriptionItems.usageRecords.post(id, body)
```
---
* API URL: '/accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.post(body)
```
---
* API URL: '/accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.post(body)
```
---
* API URL: '/accounts/:id/reject'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.reject.post(id, body)
```
---
* API URL: '/accounts/:id/login_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.loginLinks.post(id, body)
```
---
* API URL: '/account_links'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accountLinks.post(body)
```
---
* API URL: '/application_fees/:id/refunds'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.applicationFees.refunds.post(body)
```
---
* API URL: '/application_fees/:id/refunds/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.applicationFees.refunds.post(id, body)
```
---
* API URL: '/accounts/:id/capabilities/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.capabilities.post(id, body)
```
---
* API URL: '/accounts/:id/capabilities/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.capabilities.post(id, body)
```
---
* API URL: '/accounts/:id/external_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.externalAccounts.post(body)
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.externalAccounts.post(id, body)
```
---
* API URL: '/accounts/:id/external_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.externalAccounts.post(body)
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.accounts.externalAccounts.post(id, body)
```
---
* API URL: '/topups'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.topups.post(body)
```
---
* API URL: '/topups/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.topups.post(body)
```
---
* API URL: '/topups/:id/cancel'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.topups.cancel.post(id, body)
```
---
* API URL: '/transfers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.transfers.post(body)
```
---
* API URL: '/transfers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.transfers.post(body)
```
---
* API URL: '/transfers/:id/reversals'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.transfers.reversals.post(body)
```
---
* API URL: '/transfers/:id/reversals/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.transfers.reversals.post(id, body)
```
---
* API URL: '/reviews/:id/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.reviews.approve.post(id, body)
```
---
* API URL: '/radar/value_lists'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.radar.valueLists.post(body)
```
---
* API URL: '/radar/value_lists/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.radar.valueLists.post(body)
```
---
* API URL: '/radar/value_list_items'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.radar.valueListItems.post(body)
```
---
* API URL: '/issuing/authorizations/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.authorizations.post(id, body)
```
---
* API URL: '/issuing/authorizations/:id/approve'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.authorizations.approve.post(id, body)
```
---
* API URL: '/issuing/authorizations/:id/decline'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.authorizations.decline.post(id, body)
```
---
* API URL: '/issuing/cardholders'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.cardholders.post(body)
```
---
* API URL: '/issuing/cardholders/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.cardholders.post(body)
```
---
* API URL: '/issuing/cards'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.cards.post(body)
```
---
* API URL: '/issuing/cards/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.cards.post(body)
```
---
* API URL: '/issuing/disputes'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.disputes.post(body)
```
---
* API URL: '/issuing/disputes/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.disputes.post(body)
```
---
* API URL: '/issuing/transactions/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.issuing.transactions.post(id, body)
```
---
* API URL: '/terminal/connection_tokens'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.terminal.connectionTokens.post(body)
```
---
* API URL: '/terminal/locations'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.terminal.locations.post(body)
```
---
* API URL: '/terminal/locations/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.terminal.locations.post(body)
```
---
* API URL: '/terminal/readers'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.terminal.readers.post(body)
```
---
* API URL: '/terminal/readers/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.terminal.readers.post(body)
```
---
* API URL: '/orders'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.orders.post(body)
```
---
* API URL: '/orders/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.orders.post(body)
```
---
* API URL: '/orders/:id/pay'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.orders.pay.post(id, body)
```
---
* API URL: '/orders/:id/returns'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.orders.returns.post(id, body)
```
---
* API URL: '/skus'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.skus.post(body)
```
---
* API URL: '/skus/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.skus.post(body)
```
---
* API URL: '/webhook_endpoints'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.webhookEndpoints.post(body)
```
---
* API URL: '/webhook_endpoints/:id'
* HTTP Method: 'POST'
```javascript
app.endpoints.stripe.webhookEndpoints.post(body)
```
---
* API URL: '/balance'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.balance.get()
```
---
* API URL: '/balance_transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.balanceTransactions.get()
```
---
* API URL: '/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.balanceTransactions.get()
```
---
* API URL: '/charges/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.charges.get()
```
---
* API URL: '/charges'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.charges.get()
```
---
* API URL: '/customers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.get()
```
---
* API URL: '/customers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.get()
```
---
* API URL: '/disputes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.disputes.get()
```
---
* API URL: '/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.disputes.get()
```
---
* API URL: '/events/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.events.get()
```
---
* API URL: '/events'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.events.get()
```
---
* API URL: '/files/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.files.get()
```
---
* API URL: '/files'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.files.get()
```
---
* API URL: '/file_links/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.fileLinks.get()
```
---
* API URL: '/file_links'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.fileLinks.get()
```
---
* API URL: '/payment_intents/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.paymentIntents.get()
```
---
* API URL: '/payment_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.paymentIntents.get()
```
---
* API URL: '/setup_intents/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.setupIntents.get()
```
---
* API URL: '/setup_intents'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.setupIntents.get()
```
---
* API URL: '/payouts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.payouts.get()
```
---
* API URL: '/payouts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.payouts.get()
```
---
* API URL: '/products/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.products.get()
```
---
* API URL: '/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.products.get()
```
---
* API URL: '/products/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.products.get()
```
---
* API URL: '/products'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.products.get()
```
---
* API URL: '/refunds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.refunds.get()
```
---
* API URL: '/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.refunds.get()
```
---
* API URL: '/tokens/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.tokens.get(id)
```
---
* API URL: '/payment_methods/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.paymentMethods.get()
```
---
* API URL: '/payment_methods'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.paymentMethods.get()
```
---
* API URL: '/customers/:id/sources/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.sources.get(id)
```
---
* API URL: '/customers/:id/sources?object=card'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.sources.get()
```
---
* API URL: '/sources/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.sources.get(id)
```
---
* API URL: '/checkout/sessions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.checkout.sessions.get(id)
```
---
* API URL: '/coupons/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.coupons.get()
```
---
* API URL: '/coupons'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.coupons.get()
```
---
* API URL: '/credit_notes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.creditNotes.get()
```
---
* API URL: '/credit_notes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.creditNotes.get()
```
---
* API URL: '/customers/:customer/balance_transactions/:transaction'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.balanceTransactions.get(customer)
```
---
* API URL: '/customers/:customer/balance_transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.balanceTransactions.get()
```
---
* API URL: '/customers/:id/tax_ids/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.taxIds.get(id)
```
---
* API URL: '/customers/:id/tax_ids'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.customers.taxIds.get()
```
---
* API URL: '/invoices/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoices.get()
```
---
* API URL: '/invoices'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoices.get()
```
---
* API URL: '/invoices/:id/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoices.lines.get(id)
```
---
* API URL: '/invoices/upcoming'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoices.upcoming.get()
```
---
* API URL: '/invoices/upcoming/lines'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoices.upcoming.lines.get()
```
---
* API URL: '/invoiceitems/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoiceitems.get()
```
---
* API URL: '/invoiceitems'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.invoiceitems.get()
```
---
* API URL: '/plans/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.plans.get()
```
---
* API URL: '/plans'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.plans.get()
```
---
* API URL: '/subscriptions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptions.get()
```
---
* API URL: '/subscriptions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptions.get()
```
---
* API URL: '/subscription_items/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptionItems.get()
```
---
* API URL: '/subscription_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptionItems.get()
```
---
* API URL: '/subscription_schedules/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptionSchedules.get()
```
---
* API URL: '/subscription_schedules'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptionSchedules.get()
```
---
* API URL: '/tax_rates/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.taxRates.get()
```
---
* API URL: '/tax_rates'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.taxRates.get()
```
---
* API URL: '/subscription_items/:id/usage_record_summaries'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.subscriptionItems.usageRecordSummaries.get(id)
```
---
* API URL: '/accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.get()
```
---
* API URL: '/accounts'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.get()
```
---
* API URL: '/application_fees/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.applicationFees.get()
```
---
* API URL: '/application_fees'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.applicationFees.get()
```
---
* API URL: '/application_fees/:id/refunds/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.applicationFees.refunds.get(id)
```
---
* API URL: '/application_fees/:id/refunds'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.applicationFees.refunds.get()
```
---
* API URL: '/accounts/:id/capabilities'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.capabilities.get(id)
```
---
* API URL: '/country_specs'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.countrySpecs.get()
```
---
* API URL: '/country_specs/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.countrySpecs.get()
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.externalAccounts.get(id)
```
---
* API URL: '/accounts/:id/external_accounts?object=bank_account'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.externalAccounts.get()
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.externalAccounts.get(id)
```
---
* API URL: '/accounts/:id/external_accounts?object=card'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.accounts.externalAccounts.get()
```
---
* API URL: '/topups/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.topups.get()
```
---
* API URL: '/topups'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.topups.get()
```
---
* API URL: '/transfers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.transfers.get()
```
---
* API URL: '/transfers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.transfers.get()
```
---
* API URL: '/transfers/:id/reversals/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.transfers.reversals.get(id)
```
---
* API URL: '/transfers/:id/reversals'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.transfers.reversals.get()
```
---
* API URL: '/radar/early_fraud_warnings/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.earlyFraudWarnings.get()
```
---
* API URL: '/radar/early_fraud_warnings'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.earlyFraudWarnings.get()
```
---
* API URL: '/reviews/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.reviews.get()
```
---
* API URL: '/reviews'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.reviews.get()
```
---
* API URL: '/radar/value_lists/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.valueLists.get()
```
---
* API URL: '/radar/value_lists'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.valueLists.get()
```
---
* API URL: '/radar/value_list_items/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.valueListItems.get()
```
---
* API URL: '/radar/value_list_items'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.radar.valueListItems.get()
```
---
* API URL: '/issuing/authorizations/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.authorizations.get()
```
---
* API URL: '/issuing/authorizations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.authorizations.get()
```
---
* API URL: '/issuing/cardholders/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.cardholders.get()
```
---
* API URL: '/issuing/cardholders'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.cardholders.get()
```
---
* API URL: '/issuing/cards/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.cards.get()
```
---
* API URL: '/issuing/cards'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.cards.get()
```
---
* API URL: '/issuing/cards/:id/details'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.cards.details.get(id)
```
---
* API URL: '/issuing/disputes/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.disputes.get()
```
---
* API URL: '/issuing/disputes'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.disputes.get()
```
---
* API URL: '/issuing/transactions/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.transactions.get()
```
---
* API URL: '/issuing/transactions'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.issuing.transactions.get()
```
---
* API URL: '/terminal/locations/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.terminal.locations.get()
```
---
* API URL: '/terminal/locations'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.terminal.locations.get()
```
---
* API URL: '/terminal/readers/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.terminal.readers.get()
```
---
* API URL: '/terminal/readers'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.terminal.readers.get()
```
---
* API URL: '/orders/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.orders.get()
```
---
* API URL: '/orders'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.orders.get()
```
---
* API URL: '/order_returns/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.orderReturns.get()
```
---
* API URL: '/order_returns'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.orderReturns.get()
```
---
* API URL: '/skus/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.skus.get()
```
---
* API URL: '/skus'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.skus.get()
```
---
* API URL: '/sigma/scheduled_query_runs/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.sigma.scheduledQueryRuns.get()
```
---
* API URL: '/sigma/scheduled_query_runs'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.sigma.scheduledQueryRuns.get()
```
---
* API URL: '/webhook_endpoints/:id'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.webhookEndpoints.get()
```
---
* API URL: '/webhook_endpoints'
* HTTP Method: 'GET'
```javascript
app.endpoints.stripe.webhookEndpoints.get()
```
---
* API URL: '/customers/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.customers.delete(id)
```
---
* API URL: '/products/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.products.delete()
```
---
* API URL: '/products/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.products.delete()
```
---
* API URL: '/customers/:id/sources/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.customers.sources.delete(id)
```
---
* API URL: '/customers/:id/sources/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.customers.sources.delete(id)
```
---
* API URL: '/coupons/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.coupons.delete(id)
```
---
* API URL: '/customers/:id/tax_ids/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.customers.taxIds.delete(id, id2)
```
---
* API URL: '/customers/:id/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.customers.discount.delete(id)
```
---
* API URL: '/subscriptions/:id/discount'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.subscriptions.discount.delete(id)
```
---
* API URL: '/invoices/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.invoices.delete(id)
```
---
* API URL: '/invoiceitems/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.invoiceitems.delete(id)
```
---
* API URL: '/plans/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.plans.delete(id)
```
---
* API URL: '/subscriptions/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.subscriptions.delete(id)
```
---
* API URL: '/subscription_items/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.subscriptionItems.delete(id)
```
---
* API URL: '/accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.accounts.delete(id)
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.accounts.externalAccounts.delete(id)
```
---
* API URL: '/accounts/:id/external_accounts/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.accounts.externalAccounts.delete(id)
```
---
* API URL: '/radar/value_lists/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.radar.valueLists.delete(id)
```
---
* API URL: '/radar/value_list_items/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.radar.valueListItems.delete(id)
```
---
* API URL: '/terminal/locations/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.terminal.locations.delete(id)
```
---
* API URL: '/terminal/readers/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.terminal.readers.delete(id)
```
---
* API URL: '/skus/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.skus.delete(id)
```
---
* API URL: '/webhook_endpoints/:id'
* HTTP Method: 'DELETE'
```javascript
app.endpoints.stripe.webhookEndpoints.delete(id)
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
            <i><strong>/charges<br>/charges/{id}<br>/charges/{id}/capture<br>/customers<br>/customers/{id}<br>/disputes/{id}<br>/disputes/{id}/close<br>/file_links<br>/file_links/{id}<br>/payment_intents<br>/payment_intents/{id}<br>/payment_intents/{id}/confirm<br>/payment_intents/{id}/capture<br>/payment_intents/{id}/cancel<br>/setup_intents<br>/setup_intents/{id}<br>/setup_intents/{id}/confirm<br>/setup_intents/{id}/cancel<br>/payouts<br>/payouts/{id}<br>/payouts/{id}/cancel<br>/products<br>/products/{id}<br>/products<br>/products/{id}<br>/refunds<br>/refunds/{id}<br>/tokens<br>/tokens<br>/tokens<br>/tokens<br>/tokens<br>/payment_methods<br>/payment_methods/{id}<br>/payment_methods/{id}/attach<br>/payment_methods/{id}/detach<br>/customers/{id}/sources<br>/customers/{id}/sources/{id}<br>/customers/{id}/sources<br>/customers/{id}/sources/{id}/verify<br>/sources<br>/sources/{id}<br>/checkout/sessions<br>/coupons<br>/coupons/{id}<br>/credit_notes<br>/credit_notes/{id}<br>/credit_notes/{id}/void<br>/customers/{customer}/balance_transactions<br>/customers/{customer}/balance_transactions/{transaction}<br>/customers/{id}/tax_ids<br>/invoices<br>/invoices/{id}<br>/invoices/{id}/finalize<br>/invoices/{id}/pay<br>/invoices/{id}/send<br>/invoices/{id}/void<br>/invoices/{id}/mark_uncollectible<br>/invoiceitems<br>/invoiceitems/{id}<br>/plans<br>/plans/{id}<br>/subscriptions<br>/subscriptions/{id}<br>/subscription_items<br>/subscription_items/{id}<br>/subscription_schedules<br>/subscription_schedules/{id}<br>/subscription_schedules/{id}/cancel<br>/subscription_schedules/{id}/release<br>/tax_rates<br>/tax_rates/{id}<br>/subscription_items/{id}/usage_records<br>/accounts<br>/accounts/{id}<br>/accounts/{id}/reject<br>/accounts/{id}/login_links<br>/account_links<br>/application_fees/{id}/refunds<br>/application_fees/{id}/refunds/{id}<br>/accounts/{id}/capabilities/{id}<br>/accounts/{id}/capabilities/{id}<br>/accounts/{id}/external_accounts<br>/accounts/{id}/external_accounts/{id}<br>/accounts/{id}/external_accounts<br>/accounts/{id}/external_accounts/{id}<br>/topups<br>/topups/{id}<br>/topups/{id}/cancel<br>/transfers<br>/transfers/{id}<br>/transfers/{id}/reversals<br>/transfers/{id}/reversals/{id}<br>/reviews/{id}/approve<br>/radar/value_lists<br>/radar/value_lists/{id}<br>/radar/value_list_items<br>/issuing/authorizations/{id}<br>/issuing/authorizations/{id}/approve<br>/issuing/authorizations/{id}/decline<br>/issuing/cardholders<br>/issuing/cardholders/{id}<br>/issuing/cards<br>/issuing/cards/{id}<br>/issuing/disputes<br>/issuing/disputes/{id}<br>/issuing/transactions/{id}<br>/terminal/connection_tokens<br>/terminal/locations<br>/terminal/locations/{id}<br>/terminal/readers<br>/terminal/readers/{id}<br>/orders<br>/orders/{id}<br>/orders/{id}/pay<br>/orders/{id}/returns<br>/skus<br>/skus/{id}<br>/webhook_endpoints<br>/webhook_endpoints/{id}<br>/balance<br>/balance_transactions/{id}<br>/balance_transactions<br>/charges/{id}<br>/charges<br>/customers/{id}<br>/customers<br>/disputes/{id}<br>/disputes<br>/events/{id}<br>/events<br>/files/{id}<br>/files<br>/file_links/{id}<br>/file_links<br>/payment_intents/{id}<br>/payment_intents<br>/setup_intents/{id}<br>/setup_intents<br>/payouts/{id}<br>/payouts<br>/products/{id}<br>/products<br>/products/{id}<br>/products<br>/refunds/{id}<br>/refunds<br>/tokens/{id}<br>/payment_methods/{id}<br>/payment_methods<br>/customers/{id}/sources/{id}<br>/customers/{id}/sources?object=card<br>/sources/{id}<br>/checkout/sessions/{id}<br>/coupons/{id}<br>/coupons<br>/credit_notes/{id}<br>/credit_notes<br>/customers/{customer}/balance_transactions/{transaction}<br>/customers/{customer}/balance_transactions<br>/customers/{id}/tax_ids/{id}<br>/customers/{id}/tax_ids<br>/invoices/{id}<br>/invoices<br>/invoices/{id}/lines<br>/invoices/upcoming<br>/invoices/upcoming/lines<br>/invoiceitems/{id}<br>/invoiceitems<br>/plans/{id}<br>/plans<br>/subscriptions/{id}<br>/subscriptions<br>/subscription_items/{id}<br>/subscription_items<br>/subscription_schedules/{id}<br>/subscription_schedules<br>/tax_rates/{id}<br>/tax_rates<br>/subscription_items/{id}/usage_record_summaries<br>/accounts/{id}<br>/accounts<br>/application_fees/{id}<br>/application_fees<br>/application_fees/{id}/refunds/{id}<br>/application_fees/{id}/refunds<br>/accounts/{id}/capabilities<br>/country_specs<br>/country_specs/{id}<br>/accounts/{id}/external_accounts/{id}<br>/accounts/{id}/external_accounts?object=bank_account<br>/accounts/{id}/external_accounts/{id}<br>/accounts/{id}/external_accounts?object=card<br>/topups/{id}<br>/topups<br>/transfers/{id}<br>/transfers<br>/transfers/{id}/reversals/{id}<br>/transfers/{id}/reversals<br>/radar/early_fraud_warnings/{id}<br>/radar/early_fraud_warnings<br>/reviews/{id}<br>/reviews<br>/radar/value_lists/{id}<br>/radar/value_lists<br>/radar/value_list_items/{id}<br>/radar/value_list_items<br>/issuing/authorizations/{id}<br>/issuing/authorizations<br>/issuing/cardholders/{id}<br>/issuing/cardholders<br>/issuing/cards/{id}<br>/issuing/cards<br>/issuing/cards/{id}/details<br>/issuing/disputes/{id}<br>/issuing/disputes<br>/issuing/transactions/{id}<br>/issuing/transactions<br>/terminal/locations/{id}<br>/terminal/locations<br>/terminal/readers/{id}<br>/terminal/readers<br>/orders/{id}<br>/orders<br>/order_returns/{id}<br>/order_returns<br>/skus/{id}<br>/skus<br>/sigma/scheduled_query_runs/{id}<br>/sigma/scheduled_query_runs<br>/webhook_endpoints/{id}<br>/webhook_endpoints<br>/customers/{id}<br>/products/{id}<br>/products/{id}<br>/customers/{id}/sources/{id}<br>/customers/{id}/sources/{id}<br>/coupons/{id}<br>/customers/{id}/tax_ids/{id}<br>/customers/{id}/discount<br>/subscriptions/{id}/discount<br>/invoices/{id}<br>/invoiceitems/{id}<br>/plans/{id}<br>/subscriptions/{id}<br>/subscription_items/{id}<br>/accounts/{id}<br>/accounts/{id}/external_accounts/{id}<br>/accounts/{id}/external_accounts/{id}<br>/radar/value_lists/{id}<br>/radar/value_list_items/{id}<br>/terminal/locations/{id}<br>/terminal/readers/{id}<br>/skus/{id}<br>/webhook_endpoints/{id}<br></strong></i>
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

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*