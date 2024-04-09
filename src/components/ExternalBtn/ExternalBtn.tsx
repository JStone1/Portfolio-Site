import "./ExternalBtn.scss";

interface Props {
  url?: string;
  text?: string;
}

function ExternalBtn({ url, text }: Props) {
  if (!url) {
    return null;
  }

  return (
    <>
      <a href={url} target="blank">
        <button>{text}</button>
      </a>
    </>
  );
}

export default ExternalBtn;
