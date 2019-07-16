//IMPORT THE REACT AND REACT-DOM ELEMET
import React from "react";
import ReactDOM from "react-dom";

//CREATE COMPONENT
const App = () => {
  const buttonText = { text: "ClickMe" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name :
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

//DISPLAY COMPONENT ON SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
