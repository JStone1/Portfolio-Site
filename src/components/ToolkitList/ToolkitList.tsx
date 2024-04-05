import "./ToolkitList.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";

interface Props {}

function ToolkitList({}: Props) {
  return (
    <>
      <div className="language-container">
        <LanguageIcon size={48} lang="javascript"></LanguageIcon>
        <LanguageIcon size={48} lang="css3"></LanguageIcon>
        <LanguageIcon size={48} lang="html5"></LanguageIcon>
        <LanguageIcon size={48} lang="wordpress"></LanguageIcon>
        <LanguageIcon size={48} lang="react"></LanguageIcon>
        <LanguageIcon size={48} lang="sass"></LanguageIcon>
        <LanguageIcon size={48} lang="figma"></LanguageIcon>
        <LanguageIcon size={48} lang="cplusplus"></LanguageIcon>
      </div>
    </>
  );
}

export default ToolkitList;
