import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "../shared/styles/tokens.css";
import "../shared/styles/base.css";
import "../shared/styles/light-theme.css";
import "../shared/styles/overrides.css";
import "../shared/styles/mobile.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
