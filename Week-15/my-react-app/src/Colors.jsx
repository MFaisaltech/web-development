import { useState } from "react";

export default function Colors() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div 
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: darkMode ? "black" : "white",
                color: darkMode ? "white" : "black",
                transition: "all 0.3s ease"
            }}
        >
            <h2>{darkMode ? "Dark Mode" : "White Mode"}</h2>
            <button 
                onClick={() => setDarkMode(!darkMode)}
                style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    backgroundColor: darkMode ? "white" : "black",
                    color: darkMode ? "black" : "white",
                    fontSize: "16px"
                }}
            >
                Switch to {darkMode ? "White" : "Dark"} Mode
            </button>
        </div>
    );
}
