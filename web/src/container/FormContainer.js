import React, { PureComponent } from 'react';
import Form from '../components/Form';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.initialState = {};

    this.state = this.initialState;
    this.updateState = this.updateState.bind(this);
  }

  updateState = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log('Log:', this.state);
  }

  render() {
    return <Form
      handleChange={this.updateState}
    />
  }
}

export default FormContainer;
