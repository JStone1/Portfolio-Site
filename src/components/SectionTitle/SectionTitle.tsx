import "./SectionTitle.scss";

interface Props {
  title: string;
  desc?: string;
  background: boolean;
}

function SectionTitle({ title, desc, background }: Props) {
  let containerBg = "";

  background ? (containerBg = "container-bg") : (containerBg = "");

  return (
    <>
      <div className={"title-container " + containerBg}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default SectionTitle;
