import "./ToolkitList.scss";
import LanguageIcon from "@components/LanguageIcon/LanguageIcon";

interface Props {}

function ToolkitList({}: Props) {
  return (
    <>
      <div className="language-container">
        <LanguageIcon size={48} lang="javascript-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="css3-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="html5-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="wordpress-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="react-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="sass-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="figma-plain"></LanguageIcon>
        <LanguageIcon size={48} lang="cplusplus-plain"></LanguageIcon>
      </div>
    </>
  );
}

export default ToolkitList;
