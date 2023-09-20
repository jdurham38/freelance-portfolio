import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Contact = () => {
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send user's message
      const response = await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,  // Updated to use environment variable
        process.env.REACT_APP_CONTACT_TEMPLATE,  // Updated to use environment variable
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY  // Updated to use environment variable
      );
  
      if (response.status === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
        e.target.reset();  // Reset the form fields
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending the email:", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  
  };
  

  

  return (
    <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={`${isVisible ? "animate__animated animate__zoomIn" : ""}`}
                src={contactImg}
                alt="Contact Us"
              />
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""
                  } p-8`}>
                  <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                    Get In Touch
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-semibold text-[#1F1F1F] mx-4">
                          {" "}
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
                          name="name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sm font-semibold text-[#1F1F1F] mx-4 mt-4">
                          Email
                        </label>
                        <input
                          type="text"
                          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
                          name="email"
                        />
                      </div>

                      <div className="col-span-2">
                        <label htmlFor="message" className="text-sm font-semibold text-[#1F1F1F] mx-4 mt-4">
                          Message
                        </label>
                        <textarea
                          rows="4"
                          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#B3AEA8]"
                          name="message"
                          placeholder="Be sure to put your email and number so I can get back to you!"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#786F68] hover:bg-[#483A33] rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold "
                    >
                      Send Message
                    </button>
                  </form>
                  {status.message && (
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
