import "./ContactCTA.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  title: string;
  prompt: string;
  link: string;
  desc?: string;
}

function ContactCTA({ title, prompt, link, desc }: Props) {
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  if (desc) {
    return (
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="cta-container col-layout"
      >
        <h3>{title}</h3>
        <div className="cta-image-container">
          <a
            target="blank"
            aria-label="Visit my GitHub profile"
            className="cta-image"
            href="https://github.com/JStone1"
          >
            <i className={"devicon-github-plain language-icon"}></i>
          </a>
          <a
            target="blank"
            aria-label="Visit my LinkedIn profile"
            className="cta-image"
            href="https://www.linkedin.com/in/john-stone-50065618b"
          >
            <i className="devicon-linkedin-plain language-icon"></i>
          </a>
        </div>
        <div className="info-container">
          <p className="cta-desc">{desc}</p>
        </div>
        <NavLink className={"cta-button-container"} to={"/" + link}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 800 }}
          >
            {prompt}
          </motion.button>
        </NavLink>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="cta-container"
      >
        <h3>{title}</h3>
        <NavLink
          to={"/" + link}
          onClick={() => {
            scrollToTop();
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 800 }}
          >
            {prompt}
          </motion.button>
        </NavLink>
      </motion.div>
    </>
  );
}

export default ContactCTA;
