import React, { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import emailjs from 'emailjs-com';
require('dotenv').config()

function Contact() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contacted, setContacted] = useState(false);

  const form = useRef()

  const submitHandler = (event) => {
    event.preventDefault();
    setContacted(true);

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    setContacted(false);
    setFormData({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get In Touch" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Please, reach out to me about anything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Don't like forms? Send me an{" "}
                  <a href="mailto:maxwellwalin@gmail.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              ref={form}
              className="contact-form mt-6 needs-validation"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="InputName"
                      placeholder="Your name"
                      onChange={handleChange}
                      value={formdata.name}
                      required
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="email"
                      placeholder="Email address"
                      onChange={handleChange}
                      value={formdata.email}
                      required
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formdata.subject}
                      required
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Send Message
              </button>
            </form>
            {contacted && <div className="alert alert-success mt-4">Your message has been sent. I will reply within 2-5 business days. Thank you!</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
