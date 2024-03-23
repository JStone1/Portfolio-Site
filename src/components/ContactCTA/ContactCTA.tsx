import "./ContactCTA.scss";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  prompt: string;
}

function ContactCTA({ title, prompt }: Props) {
  return (
    <>
      <div className="cta-container">
        <h3>{title}</h3>
        <NavLink to={"/contact"}>
          <button className="cta-button">{prompt}</button>
        </NavLink>
      </div>
    </>
  );
}

export default ContactCTA;
