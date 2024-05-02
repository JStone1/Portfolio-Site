import "./ToolkitList.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";
import { motion } from "framer-motion";

interface Props {}

function ToolkitList({}: Props) {
  const toolkitListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={toolkitListVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="language-container"
      >
        <LanguageIcon size={48} lang="javascript-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="css3-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="html5-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="wordpress-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="react-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="sass-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="figma-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="cplusplus-plain"></LanguageIcon>
      </motion.div>
    </>
  );
}

export default ToolkitList;
