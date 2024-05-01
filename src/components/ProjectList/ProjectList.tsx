import "./ProjectList.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";
import { motion } from "framer-motion";

interface Props {
  projectType: string;
}

const projects = [
  <ProjectEntry
    title="My Portfolio"
    desc="Personal portfolio site that you are currently on! First large project using React and TypeScript."
    img="/assets/portfolio-thumbnail.png"
    languages={["react-plain", "typescript-plain", "sass-plain", "figma-plain"]}
    projectType="personal"
    siteURL="http://localhost:5173/"
    gitURL="https://github.com/JStone1/Portfolio-Site"
  />,
  <ProjectEntry
    title="BSU Computing"
    desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work."
    img="/assets/bsu-thumbnail.jpg"
    languages={[
      "wordpress-plain",
      "php-plain",
      "javascript-plain",
      "figma-plain",
    ]}
    projectType="professional"
    siteURL="https://www.bsucomputing.co.uk/"
  />,
  <ProjectEntry
    title="Podcasting Toolkit"
    desc="Created a website for a client to showcase their research in using podcasts as a learning resource within higher education."
    img="/assets/podcast-thumbnail.jpg"
    languages={["wordpress-plain", "javascript-plain"]}
    projectType="professional"
    siteURL="https://podcastingtoolkit.co.uk/"
  />,

  <ProjectEntry
    title="Mate Rate"
    desc="Mate Rate is a satirical take on standard social media, with a focus on seeking other people’s approval via the content they post."
    img="/assets/materate-thumbnail.jpg"
    languages={["html5-plain", "sass-plain", "javascript-plain"]}
    projectType="personal"
    gitURL="https://github.com/JStone1/Mate-Rate"
    siteURL="https://mate-rate.glitch.me/"
  />,
  <ProjectEntry
    title="Deep Dive"
    desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles."
    img="/assets/deepdive-thumbnail.jpg"
    languages={[
      "html5-plain",
      "sass-plain",
      "javascript-plain",
      "threejs-original-wordmark",
    ]}
    projectType="personal"
    gitURL="https://github.com/JStone1/Deep-Dive"
    siteURL="https://jstone1.github.io/Deep-Dive/"
  />,
  <ProjectEntry
    title="Sign Learn"
    desc="Sign Learn is an interactive learning tool prototype that aims to help people learn the alphabet in ISL (Irish Sign Language)."
    img="/assets/bread.jpg"
    languages={[
      "html5-plain",
      "css3-plain",
      "javascript-plain",
      "p5js-original",
    ]}
    projectType="personal"
    gitURL="https://github.com/JStone1/Sign-Learn"
    siteURL="https://jstone1.github.io/Sign-Learn/"
  />,
];

function ProjectList({ projectType }: Props) {
  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  switch (projectType) {
    case "all":
      return (
        <motion.section
          variants={projectContainerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="project-container"
        >
          {projects.map((project) => {
            return <div>{project}</div>;
          })}
        </motion.section>
      );
      break;
    case "professional":
      return (
        <motion.section
          variants={projectContainerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="project-container"
        >
          {projects.map((project) => {
            if (project.props.projectType === "professional") {
              return <div>{project}</div>;
            }
          })}
        </motion.section>
      );
      break;
    case "personal":
      return (
        <motion.section
          variants={projectContainerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="project-container"
        >
          {projects.map((project) => {
            if (project.props.projectType === "personal") {
              return <div>{project}</div>;
            }
          })}
        </motion.section>
      );
      break;
  }
}
export default ProjectList;
