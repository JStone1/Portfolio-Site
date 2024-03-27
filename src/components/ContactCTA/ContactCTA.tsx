import "./ContactCTA.scss";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  prompt: string;
  link: string;
  desc?: string;
}

function ContactCTA({ title, prompt, link, desc }: Props) {
  if (desc) {
    return (
      <div className="cta-container col-layout">
        <h3>{title}</h3>
        <div className="info-container">
          <div className="cta-image-container">
            <a
              target="blank"
              className="cta-image"
              href="https://github.com/JStone1"
            >
              <i className={"devicon-github-plain language-icon"}></i>
            </a>
            <a
              target="blank"
              className="cta-image"
              href="https://www.linkedin.com/in/john-stone-50065618b"
            >
              <i className="devicon-linkedin-plain language-icon"></i>
            </a>
          </div>
          <p className="cta-desc">{desc}</p>
        </div>
        <NavLink className={"cta-button-container"} to={"/" + link}>
          <button className="cta-button">{prompt}</button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="cta-container">
        <h3>{title}</h3>
        <NavLink to={"/" + link}>
          <button className="cta-button">{prompt}</button>
        </NavLink>
      </div>
    </>
  );
}

export default ContactCTA;
