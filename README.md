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


