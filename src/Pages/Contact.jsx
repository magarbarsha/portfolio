import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDownload } from "react-icons/fa"; 
import "../Css/Contact.css"; 
import Navbar from "../Component/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Below are the details to reach out to me!</p>
      
      <div className="contact-container">
        <div className="contact-item">
          <div className="icon-container">
            <FaMapMarkerAlt className="contact-icon" />
          </div>
          <h3>ADDRESS</h3>
          <p>Madhumalla, Morang</p>
        </div>

        <div className="contact-item">
          <div className="icon-container">
            <FaPhoneAlt className="contact-icon" />
          </div>
          <h3>CONTACT NUMBER</h3>
          <p>9703080249</p>
        </div>

        <div className="contact-item">
          <div className="icon-container">
            <FaEnvelope className="contact-icon" />
          </div>
          <h3>EMAIL ADDRESS</h3>
          <p>magarbarsha333@gmail.com</p>
        </div>

        <div className="contact-item">
          <div className="icon-container">
            <FaDownload className="contact-icon" />
          </div>
          <h3>DOWNLOAD RESUME</h3>
          <a href="/Resume" className="resume-link">resumelink</a>
        </div>
      </div>

      <div className="contact-footer">
        <p>Have a Question?</p>
        <button className="contact-btn">CLICK HERE</button>
      </div>
    </section>
    </>
  )
};

export default Contact;
