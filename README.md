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

## Starting the app

First, install [yarn](https://yarnpkg.com/lang/en/docs/install/) and use [nvm](https://github.com/creationix/nvm#installation) to install Node ≥ 6 on your machine.

```bash
nvm install node
nvm use node
cd api
php
cd ..
cd web
yarn
yarn start
```

Open http://localhost:3000/ to view the contact form app (unless your CLI provides a different address).


## Other information

- I used [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the app.
- Attempt to write basic tests, but [Enzyme 3 has some breaking changes](https://github.com/facebookincubator/create-react-app/issues/3206) requiring further configuration.
