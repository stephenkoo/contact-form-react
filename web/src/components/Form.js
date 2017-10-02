import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  emailValue,
  messageValue,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Your email address</label>
      <input
        name="email"
        id="email"
        placeholder="Your email"
        value={emailValue}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="message">Your message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        value={messageValue}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  emailValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
