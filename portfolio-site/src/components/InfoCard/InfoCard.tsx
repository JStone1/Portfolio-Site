import "./InfoCard.scss";

interface Props {
  title: string;
  keyword: string;
  desc: string;
}

function InfoCard({ title, keyword, desc }: Props) {
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <h2>{keyword}</h2>
        <hr className="divider"></hr>
        <h3>{desc}</h3>
      </div>
    </>
  );
}
export default InfoCard;
