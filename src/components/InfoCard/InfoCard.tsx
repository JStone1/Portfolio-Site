import "./InfoCard.scss";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
}

function InfoCard({ title, desc }: Props) {
  const infoCardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={infoCardVariants}
        initial="hidden"
        animate="visible"
        className="card"
      >
        <h1>{title}</h1>
        <hr className="divider"></hr>
        <h3>{desc}</h3>
      </motion.div>
    </>
  );
}
export default InfoCard;
