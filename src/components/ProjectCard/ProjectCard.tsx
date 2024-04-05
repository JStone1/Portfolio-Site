import LanguageIcon from "@components/LanguageIcon/LanguageIcon";
import "./ProjectCard.scss";

interface Props {
  title: string;
  desc: string;
  languages?: object;
  liveSite?: boolean;
  github?: boolean;
}

function ProjectCard({ title, desc, liveSite, github, languages }: Props) {
  return (
    <>
      <article className="project-card-container">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="project-language-container">
          <LanguageIcon lang="wordpress"></LanguageIcon>
          <LanguageIcon lang="javascript"></LanguageIcon>
          <LanguageIcon lang="css3"></LanguageIcon>
          <LanguageIcon lang="figma"></LanguageIcon>
        </div>
        <div className="project-button-container">
          <button>Live Site</button>
          <button>Github</button>
        </div>
      </article>
    </>
  );
}

export default ProjectCard;
