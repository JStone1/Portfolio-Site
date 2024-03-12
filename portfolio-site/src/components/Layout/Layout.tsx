import { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import "./Layout.scss";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <>
      <Navbar />
      <div id="page-container">{children}</div>;
    </>
  );
}

export default PageContainer;
