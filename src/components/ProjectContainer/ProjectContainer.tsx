import "./ProjectContainer.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";
import { useState } from "react";

/* Icons from https://devicon.dev/ - include either "plain" or "original" depending on the language*/

interface Props {}

function ProjectContainer({}: Props) {
  const [category, setCategory] = useState("All");

  const displayProjects = () => {
    switch (category) {
      case "All":
        return (
          <>
            <div className="project-container">
              <ProjectEntry
                title="My Portfolio"
                desc="Personal portfolio site that you are currently on! First large project using React and TypeScript."
                img="public/assets/portfolio-thumbnail.png"
                languages={[
                  "react-plain",
                  "typescript-plain",
                  "sass-plain",
                  "figma-plain",
                ]}
                siteURL="http://localhost:5173/"
                gitURL="https://github.com/JStone1/Portfolio-Site"
              />
              <ProjectEntry
                title="BSU Computing"
                desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work."
                img="public/assets/bsu-thumbnail.jpg"
                languages={[
                  "wordpress-plain",
                  "php-plain",
                  "javascript-plain",
                  "figma-plain",
                ]}
                siteURL="https://www.bsucomputing.co.uk/"
              />
              <ProjectEntry
                title="Podcasting Toolkit"
                desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education."
                img="public/assets/podcast-thumbnail.jpg"
                languages={["wordpress-plain", "javascript-plain"]}
                siteURL="https://podcastingtoolkit.co.uk/"
              />
              <ProjectEntry
                title="Mate Rate"
                desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post."
                img="public/assets/materate-thumbnail.jpg"
                languages={["html5-plain", "sass-plain", "javascript-plain"]}
                gitURL="https://github.com/JStone1/Mate-Rate"
                siteURL="https://mate-rate.glitch.me/"
              />
              <ProjectEntry
                title="Deep Dive"
                desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles."
                img="public/assets/deepdive-thumbnail.jpg"
                languages={[
                  "html5-plain",
                  "sass-plain",
                  "javascript-plain",
                  "threejs-original-wordmark",
                ]}
                gitURL="https://github.com/JStone1/Deep-Dive"
                siteURL="https://jstone1.github.io/Deep-Dive/"
              />
              <ProjectEntry
                title="Sign Learn"
                desc="Sign Learn is an interactive learning tool prototype that aims to help people learn the alphabet in ISL (Irish Sign Language)."
                img="public/assets/bread.jpg"
                languages={[
                  "html5-plain",
                  "css3-plain",
                  "javascript-plain",
                  "p5js-original",
                ]}
                gitURL="https://github.com/JStone1/Sign-Learn"
                siteURL="https://jstone1.github.io/Sign-Learn/"
              />
            </div>
          </>
        );
        break;
      case "Professional":
        return (
          <>
            <div className="project-container">
              <ProjectEntry
                title="BSU Computing"
                desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work."
                img="public/assets/bsu-thumbnail.jpg"
                languages={[
                  "wordpress-plain",
                  "php-plain",
                  "javascript-plain",
                  "figma-plain",
                ]}
                siteURL="https://www.bsucomputing.co.uk/"
              />
              <ProjectEntry
                title="Podcasting Toolkit"
                desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education."
                img="public/assets/podcast-thumbnail.jpg"
                languages={["wordpress-plain", "javascript-plain"]}
                siteURL="https://podcastingtoolkit.co.uk/"
              />
            </div>
          </>
        );
        break;
      case "Personal":
        return (
          <>
            <div className="project-container">
              <ProjectEntry
                title="My Portfolio"
                desc="Personal portfolio site that you are currently on! First large project using React and TypeScript."
                img="public/assets/portfolio-thumbnail.png"
                languages={[
                  "react-plain",
                  "typescript-plain",
                  "sass-plain",
                  "figma-plain",
                ]}
                siteURL="http://localhost:5173/"
                gitURL="https://github.com/JStone1/Portfolio-Site"
              />
              <ProjectEntry
                title="Mate Rate"
                desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post."
                img="public/assets/materate-thumbnail.jpg"
                languages={["html5-plain", "sass-plain", "javascript-plain"]}
                gitURL="https://github.com/JStone1/Mate-Rate"
                siteURL="https://mate-rate.glitch.me/"
              />
              <ProjectEntry
                title="Deep Dive"
                desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles."
                img="public/assets/deepdive-thumbnail.jpg"
                languages={[
                  "html5-plain",
                  "sass-plain",
                  "javascript-plain",
                  "threejs-original-wordmark",
                ]}
                gitURL="https://github.com/JStone1/Deep-Dive"
                siteURL="https://jstone1.github.io/Deep-Dive/"
              />
              <ProjectEntry
                title="Sign Learn"
                desc="Sign Learn is an interactive learning tool prototype that aims to help people learn the alphabet in ISL (Irish Sign Language)."
                img="public/assets/bread.jpg"
                languages={[
                  "html5-plain",
                  "css3-plain",
                  "javascript-plain",
                  "p5js-original",
                ]}
                gitURL="https://github.com/JStone1/Sign-Learn"
                siteURL="https://jstone1.github.io/Sign-Learn/"
              />
            </div>
          </>
        );
        break;
    }
  };

  return (
    <>
      <div className="filter-button-container">
        <button
          className={
            category === "All" ? "category-active" : "" + "category-button"
          }
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className={
            category === "Professional"
              ? "category-active"
              : "" + "category-button"
          }
          onClick={() => {
            setCategory("Professional");
          }}
        >
          Professional
        </button>
        <button
          className={
            category === "Personal" ? "category-active" : "" + "category-button"
          }
          onClick={() => setCategory("Personal")}
        >
          Personal
        </button>
      </div>
      {displayProjects()}
    </>
  );
}

export default ProjectContainer;
