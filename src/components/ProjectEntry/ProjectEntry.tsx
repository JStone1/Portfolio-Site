import "./ProjectEntry.scss";
import ProjectCard from "@components/ProjectCard/ProjectCard";

interface Props {
  title: string;
  desc: string;
  languages?: object;
  liveSite?: boolean;
  github?: boolean;
}

function ProjectEntry({ title, desc, liveSite, github, languages }: Props) {
  return (
    <>
      <div className="project-entry-container">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
          }}
        >
          img
        </div>
        <ProjectCard title={title} desc={desc}></ProjectCard>
      </div>
    </>
  );
}

export default ProjectEntry;
