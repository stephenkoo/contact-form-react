import React, { PureComponent } from 'react';
import Form from '../components/Form';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.initialState = {
      email: '',
      message: ''
    };

    this.state = this.initialState;

    this.updateState = this.updateState.bind(this);
    this.postForm = this.postForm.bind(this);
  }

  updateState = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log('Log:', this.state);
  }

  postForm = e => {
    e.preventDefault();

    const validForm = this.validateForm(this.state.email, this.state.message);

    if (validForm) {
      console.log('Successfully posted:', this.state);
    }
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
        emailValue={this.state.email}
        messageValue={this.state.message}
      />
    );
  }
}

export default FormContainer;
