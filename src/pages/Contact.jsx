import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { Form } from "react-bootstrap";


function Contact() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // const [validated, setValidated] = useState(false);

  // const [responseMessage, setResponseMessage] = useState(
  //   {isSuccessful: false, message: ''});


    const sendEmail = async (email, subject, message) => {
      return axios({
        method: 'POST',
        url: "/api/sendemail",
        data:({ email,subject, message,name }) ,
      });
    };
  
  
    const handleSubmit = async (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault()
        e.stopPropagation();
      } else {
        try {
          e.preventDefault()
          const res = await sendEmail(email, subject, message,name);
          if (res.status === 200) {
            setResponseMessage(
              { isSuccessful: true, message: 'Thank you for your message.' }
            );
          }
        } catch (error) {
          console.log(error);
          setResponseMessage({
            isSuccessful: false,
            message: 'Oops something went wrong. Please try again.',
          });
        }
      }
    };
  
  
  return (
    <section>
    <div
      id="contact"
      className="contact-area content section-divide bg-gray-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title w-90 text-left">
              <span>contact</span>
              <h2>
                Contact Me
                <img src="img/ti2.png" alt="" />
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
            <div className="features-wrapper text-center">
              <div className="features-content">
                <div className="features-icon">
                  <i className="las la-envelope-open" />
                </div>
                <h4>Our Mail Here</h4>
                
                <p >
                  <a href="mailto:admin00@gamil.com">
                    akshayvpdev@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
            <div className="features-wrapper text-center">
              <div className="features-content">
                <div className="features-icon">
                  <i className="las la-globe" />
                </div>
                <h4>Visit Our Site</h4>
                <p>Malappuram , Kerala</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
            <div className="features-wrapper text-center">
              <div className="features-content">
                <div className="features-icon">
                  <i className="las la-headset" />
                </div>
                <h4>Call To Us</h4>
                <p>
                  <a href="tel:+8 (123) 985 789">+91-9605547453</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-30">
            <Form className="contact-form" noValidate validated={validated} onSubmit={handleSubmit}>
              {/* form element */}

              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                    
                  />
                  <div className="icon-bg">
                    <i className="las la-user" />
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    
                  />
                  <div className="icon-bg">
                    <i className="las la-envelope" />
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                  required
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    
                  />
                  <div className="icon-bg">
                    <i className="las la-phone" />
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                  required
                    name="subject"
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    onChange={(e)=>setSubject(e.target.value)}
                    value={subject}
                    
                  />
                  <div className="icon-bg">
                    <i className="lab la-hire-a-helper" />
                  </div>
                </div>
                <div className="col-12 form-group">
                  <textarea
                  required
                    name="message"
                    className="form-control"
                    rows={3}
                    placeholder="Message"
                    onChange={(e)=>setMessage(e.target.value)}
                    value={message}
                  />
                  <div className="icon-bg">
                    <i className="las la-edit" />
                  </div>
                </div>
                <div className="col-12">
                  <div
                    className="alert alert-success contact-msg"
                    style={{ display: "none" }}
                    role="alert">
                    Your message was sent successfully.
                  </div>
                </div>
                <div className="col-12 text-left">
                  <a href="https://example.com">
                    <button
                      name="submit"
                      type="submit"
                      className="btn btn-space btn-success"
                      value="Send Message">
                      Send Message
                    </button>
                  </a>
                </div>
              </div>
              {/* end form element */}
            </Form>              </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact