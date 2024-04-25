import "./Hero.scss";
import InfoCard from "@components/InfoCard/InfoCard";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

interface Props {
  title: string;
  desc: string;
  imageURL: string;
  isReverse?: boolean;
}

function Hero({ isReverse, title, desc, imageURL }: Props) {
  let reverse = "";

  if (isReverse) reverse = "reverse";
  return (
    <>
      <section>
        <div className={"hero-container " + reverse}>
          <div className="inner-container">
            <InfoCard title={title} desc={desc} />
            <ThemeSwitcher></ThemeSwitcher>
          </div>
          <div
            style={{ backgroundImage: `url(${imageURL})` }}
            className="hero-image-container"
          ></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
