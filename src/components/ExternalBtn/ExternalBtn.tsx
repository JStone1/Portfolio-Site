import "./ExternalBtn.scss";
import { motion } from "framer-motion";

interface Props {
  url?: string;
  text?: string;
}

function ExternalBtn({ url, text }: Props) {
  if (!url) {
    return null;
  }

  return (
    <>
      <a href={url} target="blank">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ bounceDamping: 10, bounceStiffness: 800 }}
        >
          {text}
        </motion.button>
      </a>
    </>
  );
}

export default ExternalBtn;
