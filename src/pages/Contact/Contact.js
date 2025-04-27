import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import { BsEnvelopeAt, BsGithub, BsLinkedin} from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Using env variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Using env variable
        {
          user_name: name,
          user_email: email,
          message: msg,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Using env variable
      );

      // Email sent successfully
      if (result.status === 200) {
        toast.success("Message sent successfully!");
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error(`Error: ${error.text || "Something went wrong"}`);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  
                    <img
                      src="https://calebadeleye.com/wp-content/uploads/2022/09/contact-me.jpg"
                      alt="contact"
                      className="image"
                    />
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
             
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                    <h6>
  Contact With
  <a href="https://www.linkedin.com/in/archita-sinha-77161925a" target="_blank" rel="noopener noreferrer">
    <BsLinkedin color="blue" size={30} className="ms-2" />
  </a>
  <a href="https://github.com/architaa1" target="_blank" rel="noopener noreferrer">
    <BsGithub color="black" size={30} className="ms-2" />
  </a>
  <a href="mailto:architasinha8434@gmail.com" target="_blank" rel="noopener noreferrer">
    <BsEnvelopeAt color="red" size={30} className="ms-2" />
  </a>
</h6>

                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="msg"
                        placeholder="Write your message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" onClick={handleSubmit}>
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
