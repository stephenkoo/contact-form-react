import React from 'react';

const Form = () => (
  <form>
    <div>
      <label htmlFor="email">Your email address</label>
      <input name="email" id="email" placeholder="Your email"/>
    </div>
    <div>
      <label htmlFor="message">Your message</label>
      <textarea name="message" id="message" placeholder="Your message"/>
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default Form;
