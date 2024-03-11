import { ReactNode } from "react";
import Navbar from "./Navbar";

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
