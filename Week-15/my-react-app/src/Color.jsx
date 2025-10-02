import { useState } from "react";

function Color() {
  const [color, setColor] = useState("white");

  function changeToYellow() {
    setColor("yellow");
  }

  function changeToBlue() {
    setColor("blue");
  }

  return (
    <div 
      style={{
        backgroundColor: color,
        height: "200px",
        width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
      }}
    >
      <div>
        <h2>Background: {color}</h2>
        <button onClick={changeToYellow}>Yellow</button>
        <button onClick={changeToBlue}>Blue</button>
      </div>
    </div>
  );
}

export default Color;
