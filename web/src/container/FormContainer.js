import React, { PureComponent } from 'react';
import Form from '../components/Form';

class FormContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.logValue = this.logValue.bind(this);
  }

  logValue = e => {
    console.log('Log:', e.target.name, e.target.value)
  }

  render() {
    return <Form
      handleChange={this.logValue}
    />
  }
}

export default FormContainer;
