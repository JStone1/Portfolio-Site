import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <h3>John Stone</h3>
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
