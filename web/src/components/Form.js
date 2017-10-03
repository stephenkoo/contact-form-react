import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

const Form = ({
  emailValue,
  messageValue,
  handleChange,
  handleSubmit,
  notificationType
}) => (
  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="contact-form-group">
      <label htmlFor="email">Your email address</label>
      <input
        name="email"
        id="email"
        placeholder="Your email"
        type="email"
        value={emailValue}
        onChange={handleChange}
      />
    </div>
    <div className="contact-form-group">
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
    {notificationType &&
      <div>{notificationType}</div>
    }
  </form>
);

Form.propTypes = {
  emailValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  notificationType: PropTypes.oneOf(['', 'submitting', 'submitted', 'failed'])
};

export default Form;
