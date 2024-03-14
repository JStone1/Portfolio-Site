import "./Hero.scss";
import InfoCard from "@components/InfoCard/InfoCard";
import ImageCard from "@components/ImageCard/ImageCard";

interface Props {
  isReverse?: boolean;
}

function Hero({ isReverse }: Props) {
  let reverse;

  if (isReverse) reverse = "reverse";
  return (
    <>
      <section>
        <div className={"hero-container " + reverse}>
          <InfoCard
            title="Web Developer and Creative Technologist"
            keyword="John Stone"
            desc="Creative Computing Graduate"
          />
          <div className="hero-image-container"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
