---
title: Stripe endpoint
keywords: 
last_updated: September 27, 2019
tags: []
summary: "Detailed description of the API of the Stripe endpoint."
---

# Overview

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

# Configuration

First you will need to setup an account in Stripe. Then you will be able to configure the endpoint you will
need to generate an API key  and secret. You can find more information about that [here](https://stripe.com/docs/api/authentication).

## API key

The public key can be generated in the dashboard of your Stripe app. Just copy the generated API publishable key to this field.


## API secret

This is the API secret generated at same time the API key. Just copy the generated API secret to this field.


## Webhook URL

This is the URL you should configure for webhooks in Stripe. 

## Check webhooks sign

Stripe can optionally sign the webhook events it sends to your endpoints by including a signature in each event’s 
Stripe-Signature header. This allows you to verify that the events were sent by Stripe, not by a third party. Check
[Webhook signatures](https://stripe.com/docs/webhooks/signatures) for more info.

## Webhooks secret

Before you can verify signatures, you need to retrieve your endpoint’s secret from your Dashboard’s Webhooks settings. 
Select an endpoint that you want to obtain the secret for, then click the Click to reveal button.

# Javascript API

The Javascript API of the Stripe endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`DELETE` requests to the [Stripe API](https://stripe.com/docs/api) like this:
```javascript
var response = app.endpoints.Stripe.get('/v1/mandates/:id')
var response = app.endpoints.Stripe.post('https://files.stripe.com/v1/files', body)
var response = app.endpoints.Stripe.delete('/v1/skus/:id')
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
* More info: https://stripe.com/docs/api/balance/balance_retrieve
```javascript
app.endpoints.Stripe.coreResources.balance.get()
```
---
* API URL: '/v1/balance_transactions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/balance_transactions/retrieve
```javascript
app.endpoints.Stripe.coreResources.balanceTransactions.retrieve(id)
```
---
* API URL: '/v1/balance_transactions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/balance_transactions/list
```javascript
app.endpoints.Stripe.coreResources.balanceTransactions.list()
```
---
* API URL: '/v1/charges/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/charges/retrieve
```javascript
app.endpoints.Stripe.coreResources.charges.retrieve(id)
```
---
* API URL: '/v1/charges'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/charges/list
```javascript
app.endpoints.Stripe.coreResources.charges.list()
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customers/retrieve
```javascript
app.endpoints.Stripe.coreResources.customers.retrieve(id)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customers/list
```javascript
app.endpoints.Stripe.coreResources.customers.list()
```
---
* API URL: '/v1/disputes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/disputes/retrieve
```javascript
app.endpoints.Stripe.coreResources.disputes.retrieve(id)
```
---
* API URL: '/v1/disputes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/disputes/list
```javascript
app.endpoints.Stripe.coreResources.disputes.list()
```
---
* API URL: '/v1/events/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/events/retrieve
```javascript
app.endpoints.Stripe.coreResources.events.retrieve(id)
```
---
* API URL: '/v1/events'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/events/list
```javascript
app.endpoints.Stripe.coreResources.events.list()
```
---
* API URL: '/v1/files/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/files/retrieve
```javascript
app.endpoints.Stripe.coreResources.files.retrieve(id)
```
---
* API URL: '/v1/files'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/files/list
```javascript
app.endpoints.Stripe.coreResources.files.getAll()
```
---
* API URL: '/v1/file_links/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/file_links/retrieve
```javascript
app.endpoints.Stripe.coreResources.fileLinks.retrieve(id)
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/file_links/list
```javascript
app.endpoints.Stripe.coreResources.fileLinks.list()
```
---
* API URL: '/v1/mandates/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/mandates/retrieve
```javascript
app.endpoints.Stripe.coreResources.mandates.retrieve(id)
```
---
* API URL: '/v1/payment_intents/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_intents/retrieve
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.retrieve(id)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_intents/list
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.list()
```
---
* API URL: '/v1/setup_intents/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/setup_intents/retrieve
```javascript
app.endpoints.Stripe.coreResources.setupIntents.retrieve(id)
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/setup_intents/list
```javascript
app.endpoints.Stripe.coreResources.setupIntents.list()
```
---
* API URL: '/v1/setup_attempts'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/setup_attempts/list
```javascript
app.endpoints.Stripe.coreResources.setupAttempts.list()
```
---
* API URL: '/v1/payouts/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payouts/retrieve
```javascript
app.endpoints.Stripe.coreResources.payouts.retrieve(id)
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payouts/list
```javascript
app.endpoints.Stripe.coreResources.payouts.list()
```
---
* API URL: '/v1/refunds/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/refunds/retrieve
```javascript
app.endpoints.Stripe.coreResources.refunds.retrieve(id)
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/refunds/list
```javascript
app.endpoints.Stripe.coreResources.refunds.list()
```
---
* API URL: '/v1/tokens/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/tokens/retrieve
```javascript
app.endpoints.Stripe.coreResources.tokens.retrieve(id)
```
---
* API URL: '/v1/payment_methods/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_methods/retrieve
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.retrieve(id)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_methods/list
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.list()
```
---
* API URL: '/v1/customers/:customer/payment_methods'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_methods/customer_list
```javascript
app.endpoints.Stripe.paymentMethods.customers.paymentMethods.get(customer)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_bank_accounts/retrieve,
  https://stripe.com/docs/api/cards/retrieve
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.retrieve(id, id2)
```
---
* API URL: '/v1/customers/:id/sources?object=bank_account'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_bank_accounts/list
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.getBankAccount(id)
```
---
* API URL: '/v1/customers/:id/sources?object=card'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/cards/list
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.getCard(id)
```
---
* API URL: '/v1/sources/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/sources/retrieve
```javascript
app.endpoints.Stripe.paymentMethods.sources.retrieve(id)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/products/retrieve
```javascript
app.endpoints.Stripe.products.products.retrieve(id)
```
---
* API URL: '/v1/products'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/products/list
```javascript
app.endpoints.Stripe.products.products.list()
```
---
* API URL: '/v1/prices/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/prices/retrieve
```javascript
app.endpoints.Stripe.products.prices.retrieve(id)
```
---
* API URL: '/v1/prices'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/prices/list
```javascript
app.endpoints.Stripe.products.prices.list()
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/coupons/retrieve
```javascript
app.endpoints.Stripe.products.coupons.retrieve(id)
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/coupons/list
```javascript
app.endpoints.Stripe.products.coupons.list()
```
---
* API URL: '/v1/promotion_codes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/promotion_codes/retrieve
```javascript
app.endpoints.Stripe.products.promotionCodes.retrieve(id)
```
---
* API URL: '/v1/promotion_codes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/promotion_codes/list
```javascript
app.endpoints.Stripe.products.promotionCodes.list()
```
---
* API URL: '/v1/tax_codes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/tax_codes/list
```javascript
app.endpoints.Stripe.products.taxCodes.list()
```
---
* API URL: '/v1/tax_codes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/tax_codes/retrieve
```javascript
app.endpoints.Stripe.products.taxCodes.retrieve(id)
```
---
* API URL: '/v1/tax_rates/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/tax_rates/retrieve
```javascript
app.endpoints.Stripe.products.taxRates.retrieve(id)
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/tax_rates/list
```javascript
app.endpoints.Stripe.products.taxRates.list()
```
---
* API URL: '/v1/shipping_rates/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/shipping_rates/retrieve
```javascript
app.endpoints.Stripe.products.shippingRates.retrieve(id)
```
---
* API URL: '/v1/shipping_rates'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/shipping_rates/list
```javascript
app.endpoints.Stripe.products.shippingRates.list()
```
---
* API URL: '/v1/checkout/sessions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/checkout/sessions/retrieve
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.retrieve(id)
```
---
* API URL: '/v1/checkout/sessions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/checkout/sessions/list
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.list()
```
---
* API URL: '/v1/checkout/sessions/:id/line_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/checkout/sessions/line_items
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.lineItems.get(id)
```
---
* API URL: '/v1/payment_links/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_links/payment_links/retrieve
```javascript
app.endpoints.Stripe.paymentLinks.retrieve(id)
```
---
* API URL: '/v1/payment_links'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_links/payment_links/list
```javascript
app.endpoints.Stripe.paymentLinks.list()
```
---
* API URL: '/v1/payment_links/:id/line_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/payment_links/line_items
```javascript
app.endpoints.Stripe.paymentLinks.lineItems.get(id)
```
---
* API URL: '/v1/credit_notes/preview'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/credit_notes/preview
```javascript
app.endpoints.Stripe.billing.creditNotes.preview.get()
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/credit_notes/retrieve
```javascript
app.endpoints.Stripe.billing.creditNotes.retrieve(id)
```
---
* API URL: '/v1/credit_notes/:credit_note/lines'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/credit_notes/lines
```javascript
app.endpoints.Stripe.billing.creditNotes.lines.get(creditNote)
```
---
* API URL: '/v1/credit_notes/preview/lines'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/credit_notes/preview_lines
```javascript
app.endpoints.Stripe.billing.creditNotes.preview.lines.get()
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/credit_notes/list
```javascript
app.endpoints.Stripe.billing.creditNotes.list()
```
---
* API URL: '/v1/customers/:id/balance_transactions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_balance_transactions/retrieve
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.retrieve(id, id2)
```
---
* API URL: '/v1/customers/:id/balance_transactions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_balance_transactions/list
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.list(id)
```
---
* API URL: '/v1/billing_portal/configurations/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_portal/configurations/retrieve
```javascript
app.endpoints.Stripe.billing.billingPortal.configurations.retrieve(id)
```
---
* API URL: '/v1/billing_portal/configurations'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_portal/configurations/list
```javascript
app.endpoints.Stripe.billing.billingPortal.configurations.list()
```
---
* API URL: '/v1/customers/:id/tax_ids/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_tax_ids/retrieve
```javascript
app.endpoints.Stripe.billing.customers.taxIds.retrieve(id, id2)
```
---
* API URL: '/v1/customers/:id/tax_ids'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/customer_tax_ids/list
```javascript
app.endpoints.Stripe.billing.customers.taxIds.list(id)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoices/retrieve
```javascript
app.endpoints.Stripe.billing.invoices.retrieve(id)
```
---
* API URL: '/v1/invoices/:id/lines'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoices/invoice_lines
```javascript
app.endpoints.Stripe.billing.invoices.lines.get(id)
```
---
* API URL: '/v1/invoices/upcoming'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoices/upcoming
```javascript
app.endpoints.Stripe.billing.invoices.upcoming.get()
```
---
* API URL: '/v1/invoices/upcoming/lines'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoices/upcoming_invoice_lines
```javascript
app.endpoints.Stripe.billing.invoices.upcoming.lines.get()
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoices/list
```javascript
app.endpoints.Stripe.billing.invoices.list()
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoiceitems/retrieve
```javascript
app.endpoints.Stripe.billing.invoiceitems.retrieve(id)
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/invoiceitems/list
```javascript
app.endpoints.Stripe.billing.invoiceitems.list()
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/plans/retrieve
```javascript
app.endpoints.Stripe.billing.plans.retrieve(id)
```
---
* API URL: '/v1/plans'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/plans/list
```javascript
app.endpoints.Stripe.billing.plans.list()
```
---
* API URL: '/v1/quotes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/quotes/retrieve
```javascript
app.endpoints.Stripe.billing.quotes.retrieve(id)
```
---
* API URL: 'https://files.stripe.com/v1/quotes/:id/pdf'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/quotes/pdf
```javascript
app.endpoints.Stripe.billing.quotes.pdf.get(id)
```
---
* API URL: '/v1/quotes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/quotes/list
```javascript
app.endpoints.Stripe.billing.quotes.list()
```
---
* API URL: '/v1/quotes/:id/line_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/quotes/line_items/list
```javascript
app.endpoints.Stripe.billing.quotes.lineItems.list(id)
```
---
* API URL: '/v1/quotes/:id/computed_upfront_line_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/quotes/line_items/upfront/list
```javascript
app.endpoints.Stripe.billing.quotes.computedUpfrontLineItems.list(id)
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscriptions/retrieve
```javascript
app.endpoints.Stripe.billing.subscriptions.retrieve(id)
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscriptions/list
```javascript
app.endpoints.Stripe.billing.subscriptions.list()
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscription_items/retrieve
```javascript
app.endpoints.Stripe.billing.subscriptionItems.retrieve(id)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscription_items/list
```javascript
app.endpoints.Stripe.billing.subscriptionItems.list()
```
---
* API URL: '/v1/subscription_schedules/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscription_schedules/retrieve
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.retrieve(id)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/subscription_schedules/list
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.list()
```
---
* API URL: '/v1/subscription_items/:id/usage_record_summaries'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/usage_records/subscription_item_summary_list
```javascript
app.endpoints.Stripe.billing.subscriptionItems.usageRecordSummaries.get(id)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/accounts/retrieve
```javascript
app.endpoints.Stripe.connect.accounts.retrieve(id)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/accounts/list
```javascript
app.endpoints.Stripe.connect.accounts.list()
```
---
* API URL: '/v1/application_fees/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/application_fees/retrieve
```javascript
app.endpoints.Stripe.connect.applicationFees.retrieve(id)
```
---
* API URL: '/v1/application_fees'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/application_fees/list
```javascript
app.endpoints.Stripe.connect.applicationFees.list()
```
---
* API URL: '/v1/application_fees/:id/refunds/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/fee_refunds/retrieve
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.retrieve(id, id2)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/fee_refunds/list
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.list(id)
```
---
* API URL: '/v1/accounts/:id/capabilities/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/capabilities/retrieve
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.retrieve(id, id2)
```
---
* API URL: '/v1/accounts/:id/capabilities'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/capabilities/list
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.list(id)
```
---
* API URL: '/v1/country_specs'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/country_specs/list
```javascript
app.endpoints.Stripe.connect.countrySpecs.list()
```
---
* API URL: '/v1/country_specs/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/country_specs/retrieve
```javascript
app.endpoints.Stripe.connect.countrySpecs.retrieve(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/external_account_bank_accounts/retrieve,
  https://stripe.com/docs/api/external_account_cards/retrieve
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.retrieve(id, id2)
```
---
* API URL: '/v1/accounts/:id/external_accounts?object=bank_account'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/external_account_bank_accounts/list
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.listAllBankAccounts(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts?object=card'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/external_account_cards/list
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.listAllCards(id)
```
---
* API URL: '/v1/accounts/:id/persons/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/persons/retrieve
```javascript
app.endpoints.Stripe.connect.accounts.persons.retrieve(id, id2)
```
---
* API URL: '/v1/accounts/:id/persons'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/persons/list
```javascript
app.endpoints.Stripe.connect.accounts.persons.list(id)
```
---
* API URL: '/v1/topups/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/topups/retrieve
```javascript
app.endpoints.Stripe.connect.topups.retrieve(id)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/topups/LIST
```javascript
app.endpoints.Stripe.connect.topups.list()
```
---
* API URL: '/v1/transfers/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/transfers/retrieve
```javascript
app.endpoints.Stripe.connect.transfers.retrieve(id)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/transfers/list
```javascript
app.endpoints.Stripe.connect.transfers.list()
```
---
* API URL: '/v1/transfers/:id/reversals/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/transfer_reversals/retrieve
```javascript
app.endpoints.Stripe.connect.transfers.reversals.retrieve(id, id2)
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/transfer_reversals/list
```javascript
app.endpoints.Stripe.connect.transfers.reversals.list(id)
```
---
* API URL: '/v1/radar/early_fraud_warnings/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/early_fraud_warnings/retrieve
```javascript
app.endpoints.Stripe.fraud.radar.earlyFraudWarnings.retrieve(id)
```
---
* API URL: '/v1/radar/early_fraud_warnings'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/early_fraud_warnings/list
```javascript
app.endpoints.Stripe.fraud.radar.earlyFraudWarnings.list()
```
---
* API URL: '/v1/reviews/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/reviews/retrieve
```javascript
app.endpoints.Stripe.fraud.reviews.retrieve(id)
```
---
* API URL: '/v1/reviews'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/reviews/list
```javascript
app.endpoints.Stripe.fraud.reviews.list()
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/value_lists/retrieve
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.retrieve(id)
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/value_lists/list
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.list()
```
---
* API URL: '/v1/radar/value_list_items/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/value_list_items/retrieve
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.retrieve(id)
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/radar/value_list_items/list
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.list()
```
---
* API URL: '/v1/issuing/authorizations/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/authorizations/retrieve
```javascript
app.endpoints.Stripe.issuing.authorizations.retrieve(id)
```
---
* API URL: '/v1/issuing/authorizations'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/authorizations/list
```javascript
app.endpoints.Stripe.issuing.authorizations.list()
```
---
* API URL: '/v1/issuing/cardholders/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/cardholders/retrieve
```javascript
app.endpoints.Stripe.issuing.cardholders.retrieve(id)
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/cardholders/list
```javascript
app.endpoints.Stripe.issuing.cardholders.list()
```
---
* API URL: '/v1/issuing/cards/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/cards/retrieve
```javascript
app.endpoints.Stripe.issuing.cards.retrieve(id)
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/cards/list
```javascript
app.endpoints.Stripe.issuing.cards.list()
```
---
* API URL: '/v1/issuing/disputes/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/disputes/retrieve
```javascript
app.endpoints.Stripe.issuing.disputes.retrieve(id)
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/disputes/list
```javascript
app.endpoints.Stripe.issuing.disputes.list()
```
---
* API URL: '/v1/issuing/transactions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/transactions/retrieve
```javascript
app.endpoints.Stripe.issuing.transactions.retrieve(id)
```
---
* API URL: '/v1/issuing/transactions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/issuing/transactions/list
```javascript
app.endpoints.Stripe.issuing.transactions.list()
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/terminal/locations/retrieve
```javascript
app.endpoints.Stripe.terminal.locations.retrieve(id)
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/terminal/locations/list
```javascript
app.endpoints.Stripe.terminal.locations.list()
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/terminal/readers/retrieve
```javascript
app.endpoints.Stripe.terminal.readers.retrieve(id)
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/terminal/readers/list
```javascript
app.endpoints.Stripe.terminal.readers.list()
```
---
* API URL: '/v1/orders/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/orders_legacy/retrieve
```javascript
app.endpoints.Stripe.legacy.orders.retrieve(id)
```
---
* API URL: '/v1/orders'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/orders_legacy/list
```javascript
app.endpoints.Stripe.legacy.orders.list()
```
---
* API URL: '/v1/order_returns/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/order_returns/retrieve
```javascript
app.endpoints.Stripe.legacy.orders.orderReturns.retrieve(id)
```
---
* API URL: '/v1/order_returns'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/order_returns/list
```javascript
app.endpoints.Stripe.legacy.orders.orderReturns.list()
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/skus/retrieve
```javascript
app.endpoints.Stripe.legacy.orders.skus.retrieve(id)
```
---
* API URL: '/v1/skus'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/skus/list
```javascript
app.endpoints.Stripe.legacy.orders.skus.list()
```
---
* API URL: '/v1/sigma/scheduled_query_runs/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/sigma/scheduled_queries/retrieve
```javascript
app.endpoints.Stripe.sigma.scheduledQueryRuns.retrieve(id)
```
---
* API URL: '/v1/sigma/scheduled_query_runs'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/sigma/scheduled_queries/list
```javascript
app.endpoints.Stripe.sigma.sigma.scheduledQueryRuns.list()
```
---
* API URL: '/v1/reporting/report_runs/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/reporting/report_run/retrieve
```javascript
app.endpoints.Stripe.reporting.reportRuns.retrieve(id)
```
---
* API URL: '/v1/reporting/report_runs'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/reporting/report_run/list
```javascript
app.endpoints.Stripe.reporting.reportRuns.list()
```
---
* API URL: '/v1/reporting/report_types/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/reporting/report_type/retrieve
```javascript
app.endpoints.Stripe.reporting.reportTypes.retrieve(id)
```
---
* API URL: '/v1/reporting/report_types'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/reporting/report_type/list
```javascript
app.endpoints.Stripe.reporting.reportTypes.list()
```
---
* API URL: '/v1/identity/verification_sessions'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/identity/verification_sessions/list
```javascript
app.endpoints.Stripe.identity.verificationSessions.list()
```
---
* API URL: '/v1/identity/verification_sessions/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/identity/verification_sessions/retrieve
```javascript
app.endpoints.Stripe.identity.verificationSessions.retrieve(id)
```
---
* API URL: '/v1/identity/verification_reports/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/identity/verification_reports/retrieve
```javascript
app.endpoints.Stripe.identity.verificationReports.retrieve(id)
```
---
* API URL: '/v1/identity/verification_reports'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/identity/verification_reports/list
```javascript
app.endpoints.Stripe.identity.verificationReports.list()
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/webhook_endpoints/retrieve
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.retrieve(id)
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'GET'
* More info: https://stripe.com/docs/api/webhook_endpoints/list
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.list()
```
---
* API URL: '/v1/charges'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/charges/create
```javascript
app.endpoints.Stripe.coreResources.charges.create(body)
```
---
* API URL: '/v1/charges/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/charges/update
```javascript
app.endpoints.Stripe.coreResources.charges.update(id, body)
```
---
* API URL: '/v1/charges/:id/capture'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/charges/capture
```javascript
app.endpoints.Stripe.coreResources.charges.capture.post(id, body)
```
---
* API URL: '/v1/customers'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customers/create
```javascript
app.endpoints.Stripe.coreResources.customers.create(body)
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customers/update
```javascript
app.endpoints.Stripe.coreResources.customers.update(id, body)
```
---
* API URL: '/v1/disputes/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/disputes/update
```javascript
app.endpoints.Stripe.coreResources.disputes.update(id, body)
```
---
* API URL: '/v1/disputes/:id/close'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/disputes/close
```javascript
app.endpoints.Stripe.coreResources.disputes.close(id, body)
```
---
* API URL: 'https://files.stripe.com/v1/files'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/files/create
```javascript
app.endpoints.Stripe.coreResources.files.create(body)
```
---
* API URL: '/v1/file_links'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/file_links/create
```javascript
app.endpoints.Stripe.coreResources.fileLinks.create(body)
```
---
* API URL: '/v1/file_links/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/file_links/update
```javascript
app.endpoints.Stripe.coreResources.fileLinks.update(id, body)
```
---
* API URL: '/v1/payment_intents'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_intents/create
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.create(body)
```
---
* API URL: '/v1/payment_intents/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_intents/update
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.update(id, body)
```
---
* API URL: '/v1/payment_intents/:id/confirm'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_intents/confirm
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.confirm.post(id, body)
```
---
* API URL: '/v1/payment_intents/:id/capture'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_intents/capture
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.capture.post(id, body)
```
---
* API URL: '/v1/payment_intents/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_intents/cancel
```javascript
app.endpoints.Stripe.coreResources.paymentIntents.cancel.post(id, body)
```
---
* API URL: '/v1/setup_intents'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/setup_intents/create
```javascript
app.endpoints.Stripe.coreResources.setupIntents.create(body)
```
---
* API URL: '/v1/setup_intents/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/setup_intents/update
```javascript
app.endpoints.Stripe.coreResources.setupIntents.update(id, body)
```
---
* API URL: '/v1/setup_intents/:id/confirm'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/setup_intents/confirm
```javascript
app.endpoints.Stripe.coreResources.setupIntents.confirm.post(id, body)
```
---
* API URL: '/v1/setup_intents/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/setup_intents/cancel
```javascript
app.endpoints.Stripe.coreResources.setupIntents.cancel.post(id, body)
```
---
* API URL: '/v1/payouts'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payouts/create
```javascript
app.endpoints.Stripe.coreResources.payouts.create(body)
```
---
* API URL: '/v1/payouts/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payouts/update
```javascript
app.endpoints.Stripe.coreResources.payouts.update(id, body)
```
---
* API URL: '/v1/payouts/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payouts/cancel
```javascript
app.endpoints.Stripe.coreResources.payouts.cancel.post(id, body)
```
---
* API URL: '/v1/payouts/:id/reverse'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payouts/reverse
```javascript
app.endpoints.Stripe.coreResources.payouts.reverse.post(id, body)
```
---
* API URL: '/v1/refunds'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/refunds/create
```javascript
app.endpoints.Stripe.coreResources.refunds.create(body)
```
---
* API URL: '/v1/refunds/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/refunds/update
```javascript
app.endpoints.Stripe.coreResources.refunds.update(id, body)
```
---
* API URL: '/v1/tokens'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/tokens/create_card
```javascript
app.endpoints.Stripe.coreResources.tokens.create(body)
```
---
* API URL: '/v1/payment_methods'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_methods/create
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.create(body)
```
---
* API URL: '/v1/payment_methods/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_methods/update
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.update(id, body)
```
---
* API URL: '/v1/payment_methods/:id/attach'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_methods/attach
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.attach.post(id, body)
```
---
* API URL: '/v1/payment_methods/:id/detach'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_methods/detach
```javascript
app.endpoints.Stripe.paymentMethods.paymentMethods.detach.post(id, body)
```
---
* API URL: '/v1/customers/:id/sources'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_bank_accounts/create,
  https://stripe.com/docs/api/cards/create,
  https://stripe.com/docs/api/sources/attach
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.post(id, body)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_bank_accounts/update,
  https://stripe.com/docs/api/cards/update
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.update(id, id2, body)
```
---
* API URL: '/v1/customers/:id/sources/:id/verify'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_bank_accounts/verify
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.verify(id, id2, body)
```
---
* API URL: '/v1/sources'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/sources/create
```javascript
app.endpoints.Stripe.paymentMethods.sources.create(body)
```
---
* API URL: '/v1/sources/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/sources/update
```javascript
app.endpoints.Stripe.paymentMethods.sources.update(id, body)
```
---
* API URL: '/v1/products'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/products/create
```javascript
app.endpoints.Stripe.products.products.create(body)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/products/update
```javascript
app.endpoints.Stripe.products.products.update(id, body)
```
---
* API URL: '/v1/prices'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/prices/create
```javascript
app.endpoints.Stripe.products.prices.create(body)
```
---
* API URL: '/v1/prices/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/prices/update
```javascript
app.endpoints.Stripe.products.prices.update(id, body)
```
---
* API URL: '/v1/coupons'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/coupons/create
```javascript
app.endpoints.Stripe.products.coupons.create(body)
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/coupons/update
```javascript
app.endpoints.Stripe.products.coupons.update(id, body)
```
---
* API URL: '/v1/promotion_codes'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/promotion_codes/create
```javascript
app.endpoints.Stripe.products.promotionCodes.create(body)
```
---
* API URL: '/v1/promotion_codes/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/promotion_codes/update
```javascript
app.endpoints.Stripe.products.promotionCodes.update(id, body)
```
---
* API URL: '/v1/tax_rates'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/tax_rates/create
```javascript
app.endpoints.Stripe.products.taxRates.create(body)
```
---
* API URL: '/v1/tax_rates/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/tax_rates/update
```javascript
app.endpoints.Stripe.products.taxRates.update(id, body)
```
---
* API URL: '/v1/shipping_rates'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/shipping_rates/create
```javascript
app.endpoints.Stripe.products.shippingRates.create(body)
```
---
* API URL: '/v1/shipping_rates/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/shipping_rates/update
```javascript
app.endpoints.Stripe.products.shippingRates.update(id, body)
```
---
* API URL: '/v1/checkout/sessions'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/checkout/sessions/create
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.create(body)
```
---
* API URL: '/v1/checkout/sessions/:id/expire'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/checkout/sessions/expire
```javascript
app.endpoints.Stripe.checkout.checkout.sessions.expire.post(id, body)
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'POST'
* More info:
```javascript
app.endpoints.Stripe.billing.creditNotes.post(body)
```
---
* API URL: '/v1/payment_links'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_links/payment_links/create
```javascript
app.endpoints.Stripe.paymentLinks.create(body)
```
---
* API URL: '/v1/payment_links/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/payment_links/payment_links/update
```javascript
app.endpoints.Stripe.paymentLinks.update(id, body)
```
---
* API URL: '/v1/credit_notes'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/credit_notes/create
```javascript
app.endpoints.Stripe.billing.creditNotes.create(body)
```
---
* API URL: '/v1/credit_notes/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/credit_notes/update
```javascript
app.endpoints.Stripe.billing.creditNotes.update(id, body)
```
---
* API URL: '/v1/credit_notes/:id/void'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/credit_notes/void
```javascript
app.endpoints.Stripe.billing.creditNotes.void.post(id, body)
```
---
* API URL: '/v1/customers/:id/balance_transactions'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_balance_transactions/create
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.create(id, body)
```
---
* API URL: '/v1/customers/:id/balance_transactions/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_balance_transactions/update
```javascript
app.endpoints.Stripe.billing.customers.balanceTransactions.update(id, id2, body)
```
---
* API URL: '/v1/billing_portal/sessions'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_portal/sessions/create
```javascript
app.endpoints.Stripe.billing.billingPortal.sessions.create(body)
```
---
* API URL: '/v1/billing_portal/configurations'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_portal/configurations/create
```javascript
app.endpoints.Stripe.billing.billingPortal.configurations.create(body)
```
---
* API URL: '/v1/billing_portal/configurations/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_portal/configurations/update
```javascript
app.endpoints.Stripe.billing.billingPortal.configurations.update(id, body)
```
---
* API URL: '/v1/customers/:id/tax_ids'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/customer_tax_ids/create
```javascript
app.endpoints.Stripe.billing.customers.taxIds.create(id, body)
```
---
* API URL: '/v1/invoices'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/create
```javascript
app.endpoints.Stripe.billing.invoices.create(body)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/update
```javascript
app.endpoints.Stripe.billing.invoices.update(id, body)
```
---
* API URL: '/v1/invoices/:id/finalize'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/finalize
```javascript
app.endpoints.Stripe.billing.invoices.finalize.post(id, body)
```
---
* API URL: '/v1/invoices/:id/pay'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/pay
```javascript
app.endpoints.Stripe.billing.invoices.pay.post(id, body)
```
---
* API URL: '/v1/invoices/:id/send'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/send
```javascript
app.endpoints.Stripe.billing.invoices.send.post(id, body)
```
---
* API URL: '/v1/invoices/:id/void'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/void
```javascript
app.endpoints.Stripe.billing.invoices.void.post(id, body)
```
---
* API URL: '/v1/invoices/:id/mark_uncollectible'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoices/mark_uncollectible
```javascript
app.endpoints.Stripe.billing.invoices.markUncollectible.post(id, body)
```
---
* API URL: '/v1/invoiceitems'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoiceitems/create
```javascript
app.endpoints.Stripe.billing.invoiceitems.create(body)
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/invoiceitems/update
```javascript
app.endpoints.Stripe.billing.invoiceitems.update(id, body)
```
---
* API URL: '/v1/plans'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/plans/create
```javascript
app.endpoints.Stripe.billing.plans.create(body)
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/plans/update
```javascript
app.endpoints.Stripe.billing.plans.update(id, body)
```
---
* API URL: '/v1/quotes'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/quotes/create
```javascript
app.endpoints.Stripe.billing.quotes.create(body)
```
---
* API URL: '/v1/quotes/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/quotes/update
```javascript
app.endpoints.Stripe.billing.quotes.update(id, body)
```
---
* API URL: '/v1/quotes/:id/finalize'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/quotes/finalize
```javascript
app.endpoints.Stripe.billing.quotes.finalize.post(id, body)
```
---
* API URL: '/v1/quotes/:id/accept'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/quotes/accept
```javascript
app.endpoints.Stripe.billing.quotes.accept.post(id, body)
```
---
* API URL: '/v1/quotes/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/quotes/cancel
```javascript
app.endpoints.Stripe.billing.quotes.cancel.post(id, body)
```
---
* API URL: '/v1/subscriptions'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscriptions/create
```javascript
app.endpoints.Stripe.billing.subscriptions.create(body)
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscriptions/update
```javascript
app.endpoints.Stripe.billing.subscriptions.update(id, body)
```
---
* API URL: '/v1/subscription_items'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_items/create
```javascript
app.endpoints.Stripe.billing.subscriptionItems.create(body)
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_items/update
```javascript
app.endpoints.Stripe.billing.subscriptionItems.update(id, body)
```
---
* API URL: '/v1/subscription_schedules'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_schedules/create
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.create(body)
```
---
* API URL: '/v1/subscription_schedules/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_schedules/update
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.update(id, body)
```
---
* API URL: '/v1/subscription_schedules/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_schedules/cancel
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.cancel.post(id, body)
```
---
* API URL: '/v1/subscription_schedules/:id/release'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/subscription_schedules/release
```javascript
app.endpoints.Stripe.billing.subscriptionSchedules.release.post(id, body)
```
---
* API URL: '/v1/subscription_items/:id/usage_records'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/usage_records/create
```javascript
app.endpoints.Stripe.billing.subscriptionItems.usageRecords.create(id, body)
```
---
* API URL: '/v1/accounts'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/accounts/create
```javascript
app.endpoints.Stripe.connect.accounts.create(body)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/accounts/update
```javascript
app.endpoints.Stripe.connect.accounts.update(id, body)
```
---
* API URL: '/v1/accounts/:id/reject'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/account/reject
```javascript
app.endpoints.Stripe.connect.accounts.reject.post(id, body)
```
---
* API URL: '/v1/login_links'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/account/create_login_link
```javascript
app.endpoints.Stripe.connect.loginLinks.create(body)
```
---
* API URL: '/v1/account_links'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/account_links/create
```javascript
app.endpoints.Stripe.connect.accountLinks.create(body)
```
---
* API URL: '/v1/application_fees/:id/refunds'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/fee_refunds/create
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.create(id, body)
```
---
* API URL: '/v1/application_fees/:id/refunds/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/fee_refunds/update
```javascript
app.endpoints.Stripe.connect.applicationFees.refunds.update(id, id2, body)
```
---
* API URL: '/v1/accounts/:id/capabilities/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/capabilities/update
```javascript
app.endpoints.Stripe.connect.accounts.capabilities.update(id, id2, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/external_account_bank_accounts/create,
  https://stripe.com/docs/api/external_account_cards/create
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.post(id, body)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/external_account_bank_accounts/update,
  https://stripe.com/docs/api/external_account_cards/update
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.update(id, id2, body)
```
---
* API URL: '/v1/accounts/:id/persons'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/persons/create
```javascript
app.endpoints.Stripe.connect.accounts.persons.create(id, body)
```
---
* API URL: '/v1/accounts/:id/persons/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/persons/update
```javascript
app.endpoints.Stripe.connect.accounts.persons.update(id, id2, body)
```
---
* API URL: '/v1/topups'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/topups/create
```javascript
app.endpoints.Stripe.connect.topups.create(body)
```
---
* API URL: '/v1/topups/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/topups/update
```javascript
app.endpoints.Stripe.connect.topups.update(id, body)
```
---
* API URL: '/v1/topups/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/topups/cancel
```javascript
app.endpoints.Stripe.connect.topups.cancel.post(id, body)
```
---
* API URL: '/v1/transfers'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/transfers/create
```javascript
app.endpoints.Stripe.connect.transfers.create(body)
```
---
* API URL: '/v1/transfers/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/transfers/update
```javascript
app.endpoints.Stripe.connect.transfers.update(id, body)
```
---
* API URL: '/v1/transfers/:id/reversals'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/transfer_reversals/create
```javascript
app.endpoints.Stripe.connect.transfers.reversals.create(id, body)
```
---
* API URL: '/v1/transfers/:id/reversals/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/transfer_reversals/update
```javascript
app.endpoints.Stripe.connect.transfers.reversals.update(id, id2, body)
```
---
* API URL: '/v1/reviews/:id/approve'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/radar/reviews/approve
```javascript
app.endpoints.Stripe.fraud.reviews.approve.post(id, body)
```
---
* API URL: '/v1/radar/value_lists'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/radar/value_lists/create
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.create(body)
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/radar/value_lists/update
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.update(id, body)
```
---
* API URL: '/v1/radar/value_list_items'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/radar/value_list_items/create
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.create(body)
```
---
* API URL: '/v1/issuing/authorizations/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/authorizations/update
```javascript
app.endpoints.Stripe.issuing.authorizations.update(id, body)
```
---
* API URL: '/v1/issuing/authorizations/:id/approve'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/authorizations/approve
```javascript
app.endpoints.Stripe.issuing.authorizations.approve.post(id, body)
```
---
* API URL: '/v1/issuing/authorizations/:id/decline'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/authorizations/decline
```javascript
app.endpoints.Stripe.issuing.authorizations.decline.post(id, body)
```
---
* API URL: '/v1/issuing/cardholders'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/cardholders/create
```javascript
app.endpoints.Stripe.issuing.cardholders.create(body)
```
---
* API URL: '/v1/issuing/cardholders/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/cardholders/update
```javascript
app.endpoints.Stripe.issuing.cardholders.update(id, body)
```
---
* API URL: '/v1/issuing/cards'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/cards/create
```javascript
app.endpoints.Stripe.issuing.cards.create(body)
```
---
* API URL: '/v1/issuing/cards/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/cards/update
```javascript
app.endpoints.Stripe.issuing.cards.update(id, body)
```
---
* API URL: '/v1/issuing/disputes'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/disputes/create
```javascript
app.endpoints.Stripe.issuing.disputes.create(body)
```
---
* API URL: '/v1/issuing/disputes/:id/submit'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/dispute/submit
```javascript
app.endpoints.Stripe.issuing.disputes.submit.post(id, body)
```
---
* API URL: '/v1/issuing/disputes/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/disputes/update
```javascript
app.endpoints.Stripe.issuing.disputes.update(id, body)
```
---
* API URL: '/v1/issuing/transactions/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/issuing/transactions/update
```javascript
app.endpoints.Stripe.issuing.transactions.update(id, body)
```
---
* API URL: '/v1/terminal/connection_tokens'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/terminal/connection_tokens/create
```javascript
app.endpoints.Stripe.terminal.connectionTokens.create(body)
```
---
* API URL: '/v1/terminal/locations'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/terminal/locations/create
```javascript
app.endpoints.Stripe.terminal.locations.create(body)
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/terminal/locations/update
```javascript
app.endpoints.Stripe.terminal.locations.update(id, body)
```
---
* API URL: '/v1/terminal/readers'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/terminal/readers/create
```javascript
app.endpoints.Stripe.terminal.readers.create(body)
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/terminal/readers/update
```javascript
app.endpoints.Stripe.terminal.readers.update(id, body)
```
---
* API URL: '/v1/orders'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/orders_legacy/create
```javascript
app.endpoints.Stripe.legacy.orders.create(body)
```
---
* API URL: '/v1/orders/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/orders_legacy/update
```javascript
app.endpoints.Stripe.legacy.orders.update(id, body)
```
---
* API URL: '/v1/orders/:id/pay'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/orders_legacy/pay
```javascript
app.endpoints.Stripe.legacy.orders.pay.post(id, body)
```
---
* API URL: '/v1/orders/:id/returns'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/orders_legacy/return
```javascript
app.endpoints.Stripe.legacy.orders.returns.post(id, body)
```
---
* API URL: '/v1/skus'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/skus/create
```javascript
app.endpoints.Stripe.legacy.orders.skus.create(body)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/skus/update
```javascript
app.endpoints.Stripe.legacy.orders.skus.update(id, body)
```
---
* API URL: '/v1/reporting/report_runs'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/reporting/report_run/create
```javascript
app.endpoints.Stripe.reporting.reportRuns.create(body)
```
---
* API URL: '/v1/identity/verification_sessions'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/identity/verification_sessions/create
```javascript
app.endpoints.Stripe.identity.verificationSessions.create(body)
```
---
* API URL: '/v1/identity/verification_sessions/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/identity/verification_sessions/update
```javascript
app.endpoints.Stripe.identity.verificationSessions.update(id, body)
```
---
* API URL: '/v1/identity/verification_sessions/:id/cancel'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/identity/verification_sessions/cancel
```javascript
app.endpoints.Stripe.identity.verificationSessions.cancel.post(id, body)
```
---
* API URL: '/v1/identity/verification_sessions/:id/redact'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/identity/verification_sessions/redact
```javascript
app.endpoints.Stripe.identity.verificationSessions.redact.post(id, body)
```
---
* API URL: '/v1/webhook_endpoints'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/webhook_endpoints/create
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.create(body)
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'POST'
* More info: https://stripe.com/docs/api/webhook_endpoints/update
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.update(id, body)
```
---
* API URL: '/v1/customers/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/customers/delete
```javascript
app.endpoints.Stripe.coreResources.customers.delete(id)
```
---
* API URL: '/v1/customers/:id/sources/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/customer_bank_accounts/delete,
  https://stripe.com/docs/api/cards/delete,
  https://stripe.com/docs/api/sources/detach
```javascript
app.endpoints.Stripe.paymentMethods.customers.sources.delete(id, id2)
```
---
* API URL: '/v1/products/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/products/delete
```javascript
app.endpoints.Stripe.products.products.delete(id)
```
---
* API URL: '/v1/coupons/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/coupons/delete
```javascript
app.endpoints.Stripe.products.coupons.delete(id)
```
---
* API URL: '/v1/customers/:id/discount'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/discounts/delete
```javascript
app.endpoints.Stripe.products.customers.discount.delete(id)
```
---
* API URL: '/v1/subscriptions/:id/discount'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/discounts/subscription_delete
```javascript
app.endpoints.Stripe.billing.subscriptions.discount.delete(id)
```
---
* API URL: '/v1/customers/:id/tax_ids/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/customer_tax_ids/delete
```javascript
app.endpoints.Stripe.billing.customers.taxIds.delete(id, id2)
```
---
* API URL: '/v1/invoices/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/invoices/delete
```javascript
app.endpoints.Stripe.billing.invoices.delete(id)
```
---
* API URL: '/v1/invoiceitems/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/invoiceitems/delete
```javascript
app.endpoints.Stripe.billing.invoiceitems.delete(id)
```
---
* API URL: '/v1/plans/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/plans/delete
```javascript
app.endpoints.Stripe.billing.plans.delete(id)
```
---
* API URL: '/v1/subscriptions/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/subscriptions/cancel
```javascript
app.endpoints.Stripe.billing.subscriptions.delete(id)
```
---
* API URL: '/v1/subscription_items/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/subscription_items/delete
```javascript
app.endpoints.Stripe.billing.subscriptionItems.delete(id)
```
---
* API URL: '/v1/accounts/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/accounts/delete
```javascript
app.endpoints.Stripe.connect.accounts.delete(id)
```
---
* API URL: '/v1/accounts/:id/external_accounts/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/external_account_bank_accounts/delete,
  https://stripe.com/docs/api/external_account_cards/delete
```javascript
app.endpoints.Stripe.connect.accounts.externalAccounts.delete(id, id2)
```
---
* API URL: '/v1/accounts/:id/persons/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/persons/delete
```javascript
app.endpoints.Stripe.connect.accounts.persons.delete(id, id2)
```
---
* API URL: '/v1/radar/value_lists/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/radar/value_lists/delete
```javascript
app.endpoints.Stripe.fraud.radar.valueLists.delete(id)
```
---
* API URL: '/v1/radar/value_list_items/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/radar/value_list_items/delete
```javascript
app.endpoints.Stripe.fraud.radar.valueListItems.delete(id)
```
---
* API URL: '/v1/terminal/locations/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/terminal/locations/delete
```javascript
app.endpoints.Stripe.terminal.locations.delete(id)
```
---
* API URL: '/v1/terminal/readers/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/terminal/readers/delete
```javascript
app.endpoints.Stripe.terminal.readers.delete(id)
```
---
* API URL: '/v1/skus/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/skus/delete
```javascript
app.endpoints.Stripe.legacy.orders.skus.delete(id)
```
---
* API URL: '/v1/webhook_endpoints/:id'
* HTTP Method: 'DELETE'
* More info: https://stripe.com/docs/api/webhook_endpoints/delete
```javascript
app.endpoints.Stripe.webhooks.webhookEndpoints.delete(id)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

# Events

## Webhook

Stripe's webhooks allow your application to receive information to configured events occur.

Please refer to the [webhooks documentation](https://stripe.com/docs/webhooks/setup) for more information on how to configure them.

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.


