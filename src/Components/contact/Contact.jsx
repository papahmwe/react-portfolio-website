import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let's talk about everything!</h3>
          <p className="contact-details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <input
                type="text"
                placeholder="Insert your name..."
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                placeholder="Insert your email..."
                className="contact-form-input"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="text"
                placeholder="Insert your subject..."
                className="contact-form-input"
              />
            </div>
          </div>

          <div className="contact-form-div contact-form-area">
            <textarea
              className="contact-form-input"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
