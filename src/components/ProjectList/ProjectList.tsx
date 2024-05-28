import "./ProjectList.scss";
import ProjectEntry from "@components/ProjectEntry/ProjectEntry";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";

interface Props {
  projectType: string;
}

const projects = [
  <ProjectEntry
    title="My Portfolio"
    desc="Designed and developed my personal portfolio site, to display my past and future work. Built using React alongside TypeScript, and hosted on Vercel."
    img="/assets/portfolio-thumbnail.png"
    imgAlt="Screenshot of Portfolio project, displaying the homescreen"
    languages={["react-plain", "typescript-plain", "sass-plain", "figma-plain"]}
    projectType="personal"
    siteURL="/"
    gitURL="https://github.com/JStone1/Portfolio-Site"
  />,
  <ProjectEntry
    title="BSU Computing"
    desc="Web development internship at Bath Spa University, designing and building a website for the computing department to showcase student work. Created using ACF and Elementor."
    img="/assets/bsu-thumbnail.jpg"
    imgAlt="Screenshot of BSU Computing project, displaying a project grid with filter options"
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
    desc="A platform to showcase client's research in using podcasts as a learning resource within higher education. Built using WordPress theme 'Blogus' and utilised ACF for quick content updates. "
    img="/assets/podcast-thumbnail.jpg"
    imgAlt="Screenshot of Podcasting Toolkit project, displaying a vertical list of podcast entries"
    languages={["wordpress-plain", "javascript-plain"]}
    projectType="professional"
    siteURL="https://podcastingtoolkit.co.uk/"
  />,

  <ProjectEntry
    title="Mate Rate"
    desc="Mate Rate is a web app that takes a satirical view on standard social media. Built with Express.js, and Mongo as the backend, user's seek the approval of others via a post rating system."
    img="/assets/materate-thumbnail.jpg"
    imgAlt="Screenshot of Mate Rate project, displaying app information and login screen"
    languages={[
      "sass-plain",
      "javascript-plain",
      "nodejs-plain-wordmark",
      "mongodb-plain",
    ]}
    projectType="personal"
    gitURL="https://github.com/JStone1/Mate-Rate"
    siteURL="https://mate-rate.glitch.me/"
  />,
  <ProjectEntry
    title="Deep Dive"
    desc="Deep Dive is an interactive website, with 3D elements, that follows the journey of a penguin through it's daily struggles. An fun experiment in Three.js, that hopes to raise penguin awareness."
    img="/assets/deepdive-thumbnail.jpg"
    imgAlt="Screenshot of Deep Dive project, displaying a 3D model of a penguin looking at a 3D model of a shark underwater"
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
    title="Killing Blow"
    desc="Killing Blow is a simple but addictive game where the aim is to destroy the smug-looking (and probably evil) aliens in deep space! Made using Construct 3, a game making software."
    img="/assets/killingblow-thumbnail.png"
    imgAlt="Screenshot of Killing Blow project, displaying a project title with a red spaceship and a pink alien"
    languages={["javascript-plain"]}
    projectType="personal"
    siteURL="https://jstone1.itch.io/killing-blow"
  />,
  <ProjectEntry
    title="Sign Learn"
    desc="Sign Learn is an interactive learning tool that aims to help people learn the alphabet in ISL (Irish Sign Language). This prototype utilises p5.js and an ml5.js machine-learning model. "
    img="/assets/signlearn-thumbnail.jpg"
    imgAlt="Screenshot of Sign Learn project, displaying a person on a webcam holding there hand to the camera"
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

/* Code to randomise projects below */

// function shuffleArray(array: Array<JSX.Element>) {
//   const shuffledArray = [...array];

//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// }

// const shuffledProjects = shuffleArray(projects);

function ProjectList({ projectType }: Props) {
  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  switch (projectType) {
    case "all":
      return (
        <motion.section
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="project-container"
        >
          {projects.map((project, index) => {
            return <Fragment key={index}>{project}</Fragment>;
          })}
        </motion.section>
      );
      break;
    case "professional":
      return (
        <motion.section
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="project-container"
        >
          {projects.map((project, index) => {
            if (project.props.projectType === "professional") {
              return <Fragment key={index}>{project}</Fragment>;
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="project-container"
        >
          {projects.map((project, index) => {
            if (project.props.projectType === "personal") {
              return <Fragment key={index}>{project}</Fragment>;
            }
          })}
        </motion.section>
      );
      break;
  }
}
export default ProjectList;
