import "./ProjectContainer.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "@components/ProjectList/ProjectList";

/* Icons from https://devicon.dev/ - include either "plain" or "original" depending on the language*/

interface Props {}

function ProjectContainer({}: Props) {
  const [category, setCategory] = useState("all");

  const displayProjects = () => {
    return <ProjectList projectType={category} />;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        className="filter-button-container"
      >
        <button
          className={
            category === "all" ? "category-active" : "" + "category-button"
          }
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className={
            category === "professional"
              ? "category-active"
              : "" + "category-button"
          }
          onClick={() => {
            setCategory("professional");
          }}
        >
          Professional
        </button>
        <button
          className={
            category === "personal" ? "category-active" : "" + "category-button"
          }
          onClick={() => setCategory("personal")}
        >
          Personal
        </button>
      </motion.div>
      {displayProjects()}
    </>
  );
}

export default ProjectContainer;
