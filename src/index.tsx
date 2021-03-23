import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div>
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Graph Visualizer
      </a>
      <a
        className="github-button btn btn-dark"
        href="https://github.com/itzprasuk/graph-visualizer"
        data-icon="octicon-star"
        data-size="large"
      >
        Star on GitHub
      </a>
    </nav>

    <div style={{ height: "calc(100vh - 56px)" }}>
      <App />
    </div>
  </div>,
  document.getElementById("root")
);

reportWebVitals();
