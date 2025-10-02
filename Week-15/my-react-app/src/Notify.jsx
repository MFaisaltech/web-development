import { useState } from "react";

export default function Notify() {
    const [hasNotification, setHasNotification] = useState(false);

    return (
        <div>
            <h2>{hasNotification ? "You have a notification" : "No notifications"}</h2>
            
            <button onClick={() => setHasNotification(!hasNotification)}>
                {hasNotification ? "Clear Notification" : "Add Notification"}
            </button>
        </div>
    );
}
