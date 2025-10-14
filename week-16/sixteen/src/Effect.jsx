import { useState, useEffect } from "react";

export default function Counted() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");

    // cleanup function (runs on unmount)
    return () => {
      console.log("Component unmounted");
    };
  }, []); // empty dependency → run only once

  return (
    <div>
      <h3>You clicked {count} times</h3>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
