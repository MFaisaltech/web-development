import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // start the interval
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // safer way
    }, 1000); // every 1 second

    // cleanup when component unmounts
    return () => clearInterval(interval);
  }, []); // run only once when component mounts

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
    </div>
  );
}
