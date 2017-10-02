import React from 'react';

const Form = ({handleChange}) => (
  <form>
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

export default Form;
