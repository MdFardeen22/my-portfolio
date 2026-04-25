import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import styled from "styled-components";
import SocialIcons from "../components/SocialIcons";

import "./Contact.css"
import '../index.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send. Try again later.");
        }
      );
  };

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links" style={{ marginBottom: "40px" }}>
        <SocialIcons />
      </motion.div>

      {/* Contact Form */}
      <StyledWrapper>
        <div className="form-container">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="form"
          >
            <span className="heading">Contact Form</span>
            <div className="form-group">
              <input className="form-input" name="name" value={form.name} onChange={handleChange} required type="text" />
              <label>Your Name</label>
            </div>
            <div className="form-group">
              <input className="form-input" name="contact" value={form.contact} onChange={handleChange} required type="text" />
              <label>Email or Phone</label>
            </div>
            <div className="form-group">
              <input className="form-input" name="subject" value={form.subject} onChange={handleChange} required type="text" />
              <label>Subject</label>
            </div>
            <div className="form-group">
              <textarea className="form-input" name="message" value={form.message} onChange={handleChange} required rows="5" />
              <label>Message</label>
            </div>
            <button type="submit" className="button">
              <p>SUBMIT</p>
            </button>
          </motion.form>
        </div>
      </StyledWrapper>

      {/* Toast Notification */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 50 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="toast"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  .form-container {
    background: linear-gradient(#212121, #212121) padding-box,
      linear-gradient(120deg, transparent 25%, #00b4ff, #00ffe0) border-box;
    border: 2px solid transparent;
    padding: 40px 32px;
    font-size: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
    box-sizing: border-box;
    border-radius: 16px;
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 30px 16px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
  }

  .heading {
    font-size: 26px;
    font-weight: 600;
  }

  .form-input {
    color: white;
    background: transparent;
    border: 1px solid #414141;
    border-radius: 5px;
    padding: 12px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 16px;
    resize: vertical;
  }

  .button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12px 24px;
    border: 1px solid #414141;
    border-radius: 5px;
    color: white;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
    width: 50%;
    min-width: 150px;
    align-self: flex-start;
    box-sizing: border-box;
    margin-top: 10px;
  }

  .button p {
    z-index: 1;
    margin: 0;
  }

  .button:hover {
    color: #212121;
  }

  .button:active {
    border-color: #00ffe0;
  }

  .button::after, .button::before {
    content: "";
    position: absolute;
    width: 30rem;
    height: 30rem;
    background: #00b4ff;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
    top: 50%;
    margin-top: -15rem;
  }

  .button::before {
    left: 0;
    transform: translateX(-30rem);
  }

  .button::after {
    right: 0;
    transform: translateX(30rem);
  }

  .button:hover:before {
    transform: translateX(-12rem);
  }

  .button:hover:after {
    transform: translateX(12rem);
  }

  .button:active:before,
  .button:active:after {
    background: #00ffe0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #414141;
    position: relative;
    width: 100%;
  }

  .form-group label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
    pointer-events: none;
    transition: 0.5s;
    color: #bdb8b8;
  }

  .form-group input:focus ~ label,
  .form-group input:valid ~ label,
  .form-group textarea:focus ~ label,
  .form-group textarea:valid ~ label {
    top: -16px;
    left: 0;
    background: #212121 padding-box;
    padding: 2px 5px;
    color: #00b4ff;
    font-size: 12px;
  }
`;
