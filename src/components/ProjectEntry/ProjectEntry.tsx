import "./ProjectEntry.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";
import ExternalBtn from "@components/ExternalBtn/ExternalBtn";

interface Props {
  title: string;
  desc: string;
  img: string;
  languages: string[];
  siteURL?: string;
  gitURL?: string;
}

function ProjectEntry({ title, desc, img, languages, siteURL, gitURL }: Props) {
  let projectLanguages = {
    lang1: languages[0],
    lang2: languages[1],
    lang3: languages[2],
    lang4: languages[3],
  };

  return (
    <>
      <div className="project-entry-container">
        <article className="project-entry">
          <div
            className="project-image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="project-card">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="project-languages">
              <LanguageIcon lang={projectLanguages.lang1}></LanguageIcon>
              <LanguageIcon lang={projectLanguages.lang2}></LanguageIcon>
              <LanguageIcon lang={projectLanguages.lang3}></LanguageIcon>
              <LanguageIcon lang={projectLanguages.lang4}></LanguageIcon>
            </div>
            <div className="project-buttons">
              <ExternalBtn url={siteURL} text="Live site"></ExternalBtn>
              <ExternalBtn url={gitURL} text="Github"></ExternalBtn>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProjectEntry;
