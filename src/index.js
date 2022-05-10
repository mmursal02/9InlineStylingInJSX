import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  border: "4px dotted blue",
  borderRight: "double",
  backgroundColor: "maroon",
  float: "right"
};
customStyle.float = "left";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
