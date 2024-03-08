import "./App.scss";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Card
          title="Web Developer and Creative Technologist"
          keyword="John Stone"
          desc="Creative Computing Graduate"
        ></Card>
        <Card
          title="Here’s what I’ve done so far"
          keyword="Projects"
          desc="A collection of commercial and university projects"
        ></Card>
      </PageContainer>
    </>
  );
}

export default App;
