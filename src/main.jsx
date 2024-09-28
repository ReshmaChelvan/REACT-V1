import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./COMPONENT/LandingPage";
import "./Style/Style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="Display">
      <LandingPage />
    </div>
  </React.StrictMode>
);
