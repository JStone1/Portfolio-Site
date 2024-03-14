import "@styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </StyledEngineProvider>
    </>
  );
}

export default App;
