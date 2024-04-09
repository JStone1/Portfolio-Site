import "./ProjectEntry.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";
import ExternalBtn from "@components/ExternalBtn/ExternalBtn";

interface Props {
  title: string;
  desc: string;
  languages: string[];
  siteURL?: string;
  gitURL?: string;
}

function ProjectEntry({ title, desc, languages, siteURL, gitURL }: Props) {
  let projectLanguages = {
    lang1: languages[0],
    lang2: languages[1],
    lang3: languages[2],
    lang4: languages[3],
  };

  return (
    <>
      <article className="project-entry-container">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
          }}
        >
          img
        </div>
        <div className="project-card-container">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="project-language-container">
            <LanguageIcon lang={projectLanguages.lang1}></LanguageIcon>
            <LanguageIcon lang={projectLanguages.lang2}></LanguageIcon>
            <LanguageIcon lang={projectLanguages.lang3}></LanguageIcon>
            <LanguageIcon lang={projectLanguages.lang4}></LanguageIcon>
          </div>
          <div className="project-button-container">
            <ExternalBtn url={siteURL} text="Live site"></ExternalBtn>
            <ExternalBtn url={gitURL} text="Github"></ExternalBtn>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProjectEntry;
