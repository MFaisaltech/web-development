import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Show / Hide</button>
      {isVisible && <p>Hello Faisal 👋</p>}
    </div>
  );
}

export default Toggle;
