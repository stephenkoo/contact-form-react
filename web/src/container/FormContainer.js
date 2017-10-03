import React, { PureComponent } from 'react';
import Form from '../components/Form';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.initialState = {
      formSubmitState: '',
      formValues: {
        email: '',
        message: ''
      }
    };

    this.state = this.initialState;

    this.updateState = this.updateState.bind(this);
    this.postForm = this.postForm.bind(this);
  }

  updateState = e => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value
      }
    })
    console.log('Log:', this.state);
  }

  postForm = e => {
    const formValues = this.state.formValues;

    e.preventDefault();

    const validForm = this.validateForm(formValues.email, formValues.message);

    if (validForm) {
      const payload = {
        "data" : {
          "type": "contact-message",
          "attributes": formValues
        }
      }
      console.log('Payload:', payload);
      this.postToApi(payload);
    }
  }

  postToApi = payload => {
    const init = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    }

    return fetch("http://localhost:5000", init)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      console.log("Form posted!", init);
      this.setState(this.initialState);
      console.log("Response", response);
      return response;
    }).catch(err => {
      console.log(err);
    });
  }

  validateForm = (email, message) => {
    const formFilled = email !== '' && message !== '';
    const validEmail = this.validateEmail(email);

    try {
      if (!validEmail) throw new Error('Please enter a valid email address.');
      if (!formFilled) throw new Error('Please fill in the email and message fields.');

      return true;
    }
    catch(err) {
      console.log(err);
      return false;
    }
  }

  validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    return emailRegex.test(email);
  };

  render() {
    return (
      <Form
        handleChange={this.updateState}
        handleSubmit={this.postForm}
        emailValue={this.state.formValues.email}
        messageValue={this.state.formValues.message}
      />
    );
  }
}

export default FormContainer;
