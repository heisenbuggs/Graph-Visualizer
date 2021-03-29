import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";

const bg = "#74ac74";

ReactDOM.render(
  <React.StrictMode>
    <AppBar position="static" style={{ background: bg }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <b>Graph Visualizer</b>
        </Typography>
        <Button href="https://github.com/itzprasuk/Graph-Visualizer">
          <Typography display="inline" variant="body2">
            <StarBorder />
            {/* <b> Star on GitHub</b> */}
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>

    <div style={{ height: "calc(100vh - 56px)" }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
