import "./ToolkitList.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";

interface Props {}

function ToolkitList({}: Props) {
  return (
    <>
      <div className="language-container">
        <LanguageIcon lang="javascript"></LanguageIcon>
        <LanguageIcon lang="css3"></LanguageIcon>
        <LanguageIcon lang="html5"></LanguageIcon>
        <LanguageIcon lang="cplusplus"></LanguageIcon>
        <LanguageIcon lang="wordpress"></LanguageIcon>
        <LanguageIcon lang="sass"></LanguageIcon>
        <LanguageIcon lang="react"></LanguageIcon>
        <LanguageIcon lang="figma"></LanguageIcon>
      </div>
    </>
  );
}

export default ToolkitList;
