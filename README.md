# Task build a contact form

Capture the following details 

* **Email address** Optional, but if present should be a valid email address
* **Message** A place for the visitor to write their message.

Information, should be submitted as a `POST` request to an API endpoint `/api/contact`
The shape of the payload should follow

```json

{
  "data" : {
    "type": "contact-message",
    "attributes": {
      "email": "sample@example.com",
      "message": "Just wanted to say hello. etc"
    }
  }
}

```

Assume that the API will return a `HTTP 201` response on sucess

> There is a very crude php app that you can use by running `./server`