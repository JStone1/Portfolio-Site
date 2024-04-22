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
                title="BSU Computing"
                desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work."
                img="src/assets/bsu-thumbnail.jpg"
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
                img="src/assets/podcast-thumbnail.jpg"
                languages={["wordpress-plain", "javascript-plain"]}
                siteURL="https://podcastingtoolkit.co.uk/"
              />
              <ProjectEntry
                title="Mate Rate"
                desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post."
                img="src/assets/materate-thumbnail.jpg"
                languages={["html5-plain", "sass-plain", "javascript-plain"]}
                gitURL="https://github.com/JStone1/Mate-Rate"
                siteURL="https://mate-rate.glitch.me/"
              />
              <ProjectEntry
                title="Deep Dive"
                desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles."
                img="src/assets/deepdive-thumbnail.jpg"
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
                img="src/assets/bread.jpg"
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
      case "Commercial":
        return (
          <>
            <div className="project-container">
              <ProjectEntry
                title="BSU Computing"
                desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work."
                img="src/assets/bsu-thumbnail.jpg"
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
                img="src/assets/podcast-thumbnail.jpg"
                languages={["wordpress-plain", "javascript-plain"]}
                siteURL="https://podcastingtoolkit.co.uk/"
              />
            </div>
          </>
        );
        break;
      case "University":
        return (
          <>
            <div className="project-container">
              <ProjectEntry
                title="Mate Rate"
                desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post."
                img="src/assets/materate-thumbnail.jpg"
                languages={["html5-plain", "sass-plain", "javascript-plain"]}
                gitURL="https://github.com/JStone1/Mate-Rate"
                siteURL="https://mate-rate.glitch.me/"
              />
              <ProjectEntry
                title="Deep Dive"
                desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles."
                img="src/assets/deepdive-thumbnail.jpg"
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
                img="src/assets/bread.jpg"
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
            category === "Commercial"
              ? "category-active"
              : "" + "category-button"
          }
          onClick={() => {
            setCategory("Commercial");
          }}
        >
          Commercial
        </button>
        <button
          className={
            category === "University"
              ? "category-active"
              : "" + "category-button"
          }
          onClick={() => setCategory("University")}
        >
          University
        </button>
      </div>
      {displayProjects()}
    </>
  );
}

export default ProjectContainer;
