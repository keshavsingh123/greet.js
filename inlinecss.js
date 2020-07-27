import React from "react";
import ReactDOM from "react-dom";

const cstyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
cstyle.color = "blue";

ReactDOM.render(
  <h1 style={cstyle}>hello world</h1>,
  document.getElementById("root")
);
