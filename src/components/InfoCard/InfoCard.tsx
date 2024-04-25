import "./InfoCard.scss";

interface Props {
  title: string;
  desc: string;
}

function InfoCard({ title, desc }: Props) {
  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <hr className="divider"></hr>
        <h3>{desc}</h3>
      </div>
    </>
  );
}
export default InfoCard;
