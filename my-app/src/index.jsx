import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/News_cards.css";
import "./css/Nav_tank.css";
import "./css/Account.css";
import "./css/Registration.css";
import "./css/Statistic.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
