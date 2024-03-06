// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
