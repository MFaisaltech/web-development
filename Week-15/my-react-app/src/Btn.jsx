import { useState } from "react";

export default function LoginLogout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>

            {/* Secret Message (only visible if logged in) */}
            {isLoggedIn && <p>🤫 This is a secret message only for logged-in users!</p>}
        </div>
    );
}
