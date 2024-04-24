import "./Form.scss";

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
        </form>
      </div>
    </>
  );
}

export default Form;
