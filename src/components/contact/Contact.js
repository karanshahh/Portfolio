import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_owfhew7",
      "template_5y2neot",
      form.current,
      "EOdW7X_qSD1QVZu9M"
    );
    alert("Email sent!");
    e.target.reset();
  };

  return (
    <div className="contact mb-4" id="contact">
      <p className="contact-title">Contact Me</p>
      <div className="contact-content-form">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form-div">
            <div className="contact-form-inner-div mb-2">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="contact-form-inner-div mb-2">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact-form-inner-div-desc mb-2">
              <label className="contact-form-tag">Body</label>
              <textarea
                name="body"
                cols="40"
                rows="10"
                placeholder="Enter description"
              ></textarea>
            </div>
            <button className="button btn button--flex mb-4">Send Email!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
