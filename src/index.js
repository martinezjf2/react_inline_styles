import React from "react";
import ReactDOM from "react-dom";

const headStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

headStyle.color = "red";

ReactDOM.render(
  <h1 style={headStyle}>Hello World!</h1>,
  document.getElementById("root")
);
