import "./LanguageIcon.scss";

interface Props {
  lang: string;
  size?: number;
}

function LanguageIcon({ lang, size }: Props) {
  return (
    <>
      <span>
        <i
          style={{ fontSize: size }}
          className={`devicon-${lang}-plain language-icon`}
        ></i>
      </span>
    </>
  );
}

export default LanguageIcon;
