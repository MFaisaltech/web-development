import { useState, useEffect } from "react";

export default function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY); // ✅ Correct property
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "150vh", padding: "20px" }}>
      <h3>Scroll Y position: {scrollY}px</h3>
      <p>Scroll down the page to see changes 👇</p>
    </div>
  );
}
