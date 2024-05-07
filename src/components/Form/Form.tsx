import "./Form.scss";
import { motion } from "framer-motion";

interface Props {}

function Form({}: Props) {
  return (
    <>
      <div className="form-container">
        <form className="contact-form">
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
              name="name"
              placeholder="Enter your name"
            ></input>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              className="text-input"
              type="email"
              name="email"
              placeholder="Enter your email"
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

export default Form;
