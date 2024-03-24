import "./Hero.scss";
import InfoCard from "@components/InfoCard/InfoCard";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  isReverse?: boolean;
}

function Hero({ isReverse }: Props) {
  let reverse = "";

  if (isReverse) reverse = "reverse";
  return (
    <>
      <section>
        <div className={"hero-container " + reverse}>
          <div className="inner-container">
            <InfoCard
              title="Web Developer and Creative Technologist"
              keyword="John Stone"
              desc="Creative Computing Graduate"
            />
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <div className="hero-image-container"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
