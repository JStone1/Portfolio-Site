import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@styles/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { MotionConfig } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </Router>
  </React.StrictMode>
);
