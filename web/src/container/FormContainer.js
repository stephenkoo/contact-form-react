// PureComponent is sort of complicated. Deep dive here: https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578
import React, { PureComponent } from 'react';
import Form from '../components/Form';

class FormContainer extends PureComponent {
  constructor(props) {
    // I might be wrong, but I don't think you need to super(props) _unless_ you're initializing state w/ props
    super(props); 
    
    /** 
     * also, props in initialState is sort of an anti-pattern if you do try to do it. 
     * I wrote something up about this that seems similar to what you're try to do here: 
     * https://medium.com/@justintulk/react-anti-patterns-props-in-initial-state-28687846cc2e
     */
    this.initialState = {
      formSubmitState: '',
      formValues: {
        email: '',
        message: ''
      }
    };
     
    // are you doing something like this? https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.state = this.initialState; 

    // depending on webpack/babel settings you can frequently dump these .bind calls for cleaner component code
    this.updateState = this.updateState.bind(this);
    this.postForm = this.postForm.bind(this);
  }

  // I would remove console.logs if I'm showing "production" code. (dumping componentDidUpdate)

  postForm = e => {
    // I always do this up top (likely personal bias)
    e.preventDefault(); 
    
    // you can destructure using something like `const { formValues } = this.state`
    const formValues = this.state.formValues; 
    const formisValid = this.validateForm(formValues.email, formValues.message);

    // renaming is another minor preference, I try to make boolean tests read a little better in the code
    if (formisValid) {
      this.postToApi({
        "data" : {
          "type": "contact-message",
          "attributes": formValues
        }
      });
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

    // I think this is a decent pattern for tracking state and handling different display conditions :thumbs-up:
    this.setState({ formSubmitState: 'submitting' });

    return fetch("http://localhost:5000", init)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      this.setState({
        // okay - i see you are resetting to initialState. This doesn't seem that bad to me. 
        ...this.initialState,
        formSubmitState: 'submitted'
      });

      return response;
    }).catch(err => {
      this.setState({ formSubmitState: 'failed' });
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
        handleChange={e => { 
          this.setState({
            formValues: {
              ...this.state.formValues,
              [e.target.name]: e.target.value
            }
          })
        }
        handleSubmit={this.postForm}
        emailValue={this.state.formValues.email}
        messageValue={this.state.formValues.message}
        notificationType={this.state.formSubmitState}
      />
    );
  }
}

export default FormContainer;
