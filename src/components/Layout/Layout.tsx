import { ReactNode } from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import "./Layout.scss";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <>
      <Navbar />
      <div id="page-container">{children}</div>;
      <Footer />
    </>
  );
}

export default PageContainer;
