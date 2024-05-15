import "./ContactForm.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button, Snackbar, SnackbarContent } from "@mui/material";

interface Props {}

function ContactForm({}: Props) {
  useEffect(() => {
    setTimeout(() => {
      grecaptcha.render("recaptcha-form", {
        sitekey: "6LfcWNwpAAAAALoZHzaC7Q3OoR8SZfWim-pmWTlY",
      });
    }, 0.1);
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      if (grecaptcha.getResponse() === "") {
        console.log("recaptcha not checked");
        document;
      }
      emailjs
        .sendForm("service_yci2dfh", "template_9klzpm8", form.current, {
          publicKey: "5ZvpnCT0M5psFJ_RB",
        })
        .then(
          (result) => {
            console.log("SUCCESS...", result.text);
            handleClick();
            grecaptcha.reset();
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <SnackbarContent
          message="Thanks for your message - 
          I'll get back to you as soon as possible!"
          style={{
            backgroundColor: "#272932",
            color: "#e7ecef",
            borderStyle: "solid",
            borderWidth: "2px",
          }}
          className="snackbar"
        ></SnackbarContent>
      </Snackbar>
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
          <div id="recaptcha-form"></div>

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
