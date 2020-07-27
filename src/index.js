import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currenttime = date.getHours();
let greeting;

const custom = {
  color: ""
};
if (currenttime < 12) {
  greeting = "Good Morning";
  custom.color = "red";
} else if (currenttime < 18) {
  greeting = "GoodAfternoon";
  custom.color = "green";
} else {
  greeting = "Good Night";
  custom.color = "blue";
}

ReactDOM.render(
  <h1 className="head" style={custom}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
