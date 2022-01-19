import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

import "./styles.css";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
