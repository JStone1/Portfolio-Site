import "./LanguageIcon.scss";
import { motion } from "framer-motion";

interface Props {
  lang: string;
  title?: string;
  shouldAnimate: boolean;
  size?: number;
}

function LanguageIcon({ lang, title, shouldAnimate, size }: Props) {
  const languageIconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (shouldAnimate) {
    return (
      <motion.span variants={languageIconVariants}>
        <i
          title={title}
          style={{ fontSize: size }}
          className={`devicon-${lang} language-icon`}
        ></i>
      </motion.span>
    );
  }
  return (
    <span>
      <i
        title={title}
        style={{ fontSize: size }}
        className={`devicon-${lang} language-icon`}
      ></i>
    </span>
  );
}

export default LanguageIcon;
