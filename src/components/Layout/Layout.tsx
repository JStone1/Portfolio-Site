import { ReactNode } from "react";
import Footer from "@components/Footer/Footer";
import "./Layout.scss";
import Header from "@components/Header/Header";

interface Props {
  children: ReactNode;
  footerMargin: number;
}

function PageContainer({ children, footerMargin }: Props) {
  return (
    <>
      <Header />
      <div id="page-container">{children}</div>
      <Footer topMargin={footerMargin} />
    </>
  );
}

export default PageContainer;
