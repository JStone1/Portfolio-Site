import "./ContactForm.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

interface Props {}

function ContactForm({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(import.meta.env.TEMPLATE_ID);
    if (form.current) {
      emailjs
        .sendForm("service_yci2dfh", "template_9klzpm8", form.current, {
          publicKey: "5ZvpnCT0M5psFJ_RB",
        })
        .then(
          (result) => {
            console.log("SUCCESS...", result.text);
            form.current?.reset();
            alert(
              "Thanks for sending an email, I'll get back to you as soon as possible!"
            );
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form-text">
            <h1>Drop me a message</h1>
            <p>
              Feel free to use the form below to reach out to me about anything
              you want to discuss!
            </p>
          </div>
          <div className="form-field">
            <label>Name</label>
            <input
              className="text-input"
              type="text"
              name="user_name"
              placeholder="Enter your name"
            ></input>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              className="text-input"
              type="email"
              name="user_email"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="form-field">
            <label>Subject</label>
            <input
              className="text-input"
              type="text"
              name="subject"
              placeholder="Subject"
            ></input>
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              className="text-input"
              name="message"
              placeholder="Enter your message"
              rows={4}
            ></textarea>
          </div>
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 800 }}
            type="submit"
          ></motion.input>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
