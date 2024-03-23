import "./SectionTitle.scss";

interface Props {
  title: string;
  desc: string;
}

function SectionTitle({ title, desc }: Props) {
  return (
    <>
      <div className="title-container">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default SectionTitle;
