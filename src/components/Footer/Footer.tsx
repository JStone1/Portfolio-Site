import "./Footer.scss";

interface Props {
  topMargin: number;
}

function Footer({ topMargin }: Props) {
  return (
    <>
      <footer style={{ marginTop: topMargin + "px" }}>
        <img className="logo" src="/assets/jslogo.svg" />
        <div className="social-container">
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
      </footer>
    </>
  );
}

export default Footer;
