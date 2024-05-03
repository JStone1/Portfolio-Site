import "./LanguageIcon.scss";
import { motion } from "framer-motion";

interface Props {
  lang: string;
  shouldAnimate: boolean;
  size?: number;
}

function LanguageIcon({ lang, shouldAnimate, size }: Props) {
  const languageIconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (shouldAnimate) {
    return (
      <motion.span variants={languageIconVariants}>
        <i
          style={{ fontSize: size }}
          className={`devicon-${lang} language-icon`}
        ></i>
      </motion.span>
    );
  }
  return (
    <span>
      <i
        style={{ fontSize: size }}
        className={`devicon-${lang} language-icon`}
      ></i>
    </span>
  );
}

export default LanguageIcon;
