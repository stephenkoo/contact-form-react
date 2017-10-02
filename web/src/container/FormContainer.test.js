import React from 'react';
import { render } from 'enzyme';
import FormContainer from './FormContainer';

it('should have email and message field values that reflect state values', () => {
  const wrapper = render(<FormContainer />);
  wrapper.setState({ email: 'example@gmail.com', message: 'Hi!' });
  expect(wrapper.find('#email').props().value).toEqual('example@gmail.com');
  expect(wrapper.find('#message').props().value).toEqual('Hi!');
});
