import { ReactNode } from "react";
import "./Grid.scss";
import InfoCard from "@components/InfoCard/InfoCard";

interface Props {
  children: ReactNode;
}

function Grid({ children }: Props) {
  return (
    <>
      <div className="grid-container">
        <div className="item1">
          <InfoCard
            title="Web Developer and Creative Technologist"
            keyword="John Stone"
            desc="Creative Computing Graduate"
          />
        </div>
      </div>
      ;
    </>
  );
}

export default Grid;
