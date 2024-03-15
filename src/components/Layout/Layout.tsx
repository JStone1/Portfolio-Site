import { ReactNode } from "react";
import Footer from "@components/Footer/Footer";
import "./Layout.scss";
import Header from "@components/Header/Header";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <>
      <Header />
      <div id="page-container">{children}</div>
      <Footer />
    </>
  );
}

export default PageContainer;
