import "./ProjectEntry.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";
import ExternalBtn from "@components/ExternalBtn/ExternalBtn";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  languages: string[];
  languageNames: string[];
  projectType: "professional" | "personal";
  siteURL?: string;
  gitURL?: string;
}

function ProjectEntry({
  title,
  desc,
  img,
  imgAlt,
  languages,
  languageNames,
  siteURL,
  gitURL,
}: Props) {
  return (
    <>
      <motion.article initial={{ opacity: 1 }} className="project-entry">
        <div
          aria-label={imgAlt}
          role="img"
          className="project-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="project-card">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="project-languages">
            <LanguageIcon
              shouldAnimate={false}
              lang={languages[0]}
              title={languageNames[0]}
            ></LanguageIcon>
            <LanguageIcon
              shouldAnimate={false}
              lang={languages[1]}
              title={languageNames[1]}
            ></LanguageIcon>
            <LanguageIcon
              shouldAnimate={false}
              lang={languages[2]}
              title={languageNames[2]}
            ></LanguageIcon>
            <LanguageIcon
              shouldAnimate={false}
              lang={languages[3]}
              title={languageNames[3]}
            ></LanguageIcon>
          </div>
          <div className="project-buttons">
            <ExternalBtn url={siteURL} text="Live site"></ExternalBtn>
            <ExternalBtn url={gitURL} text="Github"></ExternalBtn>
          </div>
        </div>
      </motion.article>
    </>
  );
}

export default ProjectEntry;
