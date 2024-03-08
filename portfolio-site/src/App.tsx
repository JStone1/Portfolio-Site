import "./App.scss";
import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Navbar />
      </PageContainer>
    </>
  );
}

export default App;
