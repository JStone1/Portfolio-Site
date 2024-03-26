import "./LanguageIcon.scss";

interface Props {
  lang: string;
}

function LanguageIcon({ lang }: Props) {
  return (
    <>
      <span>
        <i className={`devicon-${lang}-plain language-icon`}></i>
      </span>
    </>
  );
}

export default LanguageIcon;
