import { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("white"); // default background

  return (
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center", paddingTop: "50px" }}>
      <h2>Background Color Changer</h2>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

export default BgChanger;
