import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer started!");
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup (stop interval when component unmounts)
    return () => {
      console.log("Timer stopped!");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
}
