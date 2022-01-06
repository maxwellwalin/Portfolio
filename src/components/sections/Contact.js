import React, { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
require('dotenv').config()

function Contact() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [contacted, setContacted] = useState(false);

  const [loadingEmail, setLoadingEmail] = useState(false);

  const [messageFailed, setMessageFailed] = useState([false, ""]);

  const form = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    setLoadingEmail(true)

    fetch('https://mw-portfolio-email-api.herokuapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata)
    }).then((res) => {
      if (res.status === 200) {
        setLoadingEmail(false)
        setContacted(true)
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    }).catch(err => setMessageFailed([true, err]));
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
              {loadingEmail ?
                <input
                  type="submit"
                  name="submit"
                  value="Sending..."
                  id="submit"
                  className="btn btn-disabled"
                  disabled
                >
                </input>
                : <input
                  type="submit"
                  name="submit"
                  value="Send Message"
                  id="submit"
                  className="btn btn-default"
                >
                </input>}
            </form>
            {contacted ? <div className="alert alert-success mt-4">Your message has been sent. I will reply within 2 business days. Thank you!</div> : null}
            {messageFailed[0] ? <div className="alert alert-danger mt-4">Your message failed to send. I have been notified of the error. Please, send me an <a href="mailto:maxwellwalin@gmail.com">email</a> and I'll get back to you ASAP!</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
