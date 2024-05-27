import "./ContactForm.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Snackbar, SnackbarContent } from "@mui/material";

interface Props {}

function ContactForm({}: Props) {
  const siteKey = import.meta.env.VITE_GRECAPTCHA_SITEKEY;
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const formVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
  };
  useEffect(() => {
    setTimeout(() => {
      grecaptcha.render("recaptcha-form", {
        sitekey: siteKey,
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
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
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
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <div className="contact-form-text">
            <h1>Drop me a message</h1>
            <p>
              Feel free to use the form below to reach out to me about anything
              you want to discuss!
            </p>
            <p>
              Alternatively, you can email me at{" "}
              <a className="email-link" href="mailto: jdstone141@gmail.com">
                <strong>jdstone141@gmail.com</strong>
              </a>
            </p>
          </div>
          <div className="form-field">
            <label>Name</label>
            <input
              className="text-input"
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            ></input>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              className="text-input"
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div className="form-field">
            <label>Subject</label>
            <input
              className="text-input"
              type="text"
              name="subject"
              placeholder="Subject"
              maxLength={40}
              required
            ></input>
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea
              className="text-input"
              name="message"
              placeholder="Enter your message"
              required
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
        </motion.form>
      </div>
    </>
  );
}

export default ContactForm;
