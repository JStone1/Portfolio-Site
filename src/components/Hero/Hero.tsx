import "./Hero.scss";
import InfoCard from "@components/InfoCard/InfoCard";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  imageURL: string;
  srcSet: string;
  isReverse?: boolean;
}

function Hero({ isReverse, title, desc, imageURL, srcSet }: Props) {
  let reverse = "";

  const imgCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  if (isReverse) reverse = "reverse";
  return (
    <>
      <section>
        <div className={"hero-container " + reverse}>
          <div className="inner-container">
            <InfoCard title={title} desc={desc} />
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <motion.picture
            variants={imgCardVariants}
            initial="hidden"
            animate="visible"
          >
            <source media="(max-width: 425px)" srcSet={srcSet} />
            <img className="hero-image" src={imageURL} />
          </motion.picture>
        </div>
      </section>
    </>
  );
}

export default Hero;
