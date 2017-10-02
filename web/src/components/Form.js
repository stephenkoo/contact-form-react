import React from 'react';
import PropTypes from 'prop-types';

const Form = ({handleChange, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Your email address</label>
      <input
        name="email"
        id="email"
        placeholder="Your email"
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="message">Your message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        onChange={handleChange}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
