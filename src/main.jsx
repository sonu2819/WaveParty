// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App"
// import "./index.css"; // 🔥 MUST BE HERE

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App />
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

