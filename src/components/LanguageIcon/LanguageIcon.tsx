import "./LanguageIcon.scss";
import { motion } from "framer-motion";

interface Props {
  lang: string;
  size?: number;
}

function LanguageIcon({ lang, size }: Props) {
  const languageIconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.span variants={languageIconVariants}>
        <i
          style={{ fontSize: size }}
          className={`devicon-${lang} language-icon`}
        ></i>
      </motion.span>
    </>
  );
}

export default LanguageIcon;
