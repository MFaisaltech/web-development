import { useState, useEffect } from "react";

export default function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMove);

    // cleanup when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}
