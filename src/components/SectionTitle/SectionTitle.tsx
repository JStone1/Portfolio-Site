import { ReactNode } from "react";
import "./SectionTitle.scss";

interface Props {
  title: string | ReactNode;
  desc?: string | ReactNode;
  background: boolean;
  children?: ReactNode;
}

function SectionTitle({ title, desc, background, children }: Props) {
  let containerBg = "";

  background ? (containerBg = "container-bg") : (containerBg = "");

  if (desc) {
    return (
      <div className={"title-container " + containerBg}>
        <h2>{title}</h2>
        <p>{desc}</p>
        {children}
      </div>
    );
  }
  return (
    <div className={"title-container " + containerBg}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default SectionTitle;
