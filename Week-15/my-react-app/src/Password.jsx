import { useState } from "react";
function PasswordToggle(){
    const[visible, setVisible] = useState(false);
     return (
        <div>
            <h3>enter password</h3>
            <input
            type={visible ? "text" : "password"}
            placeholder="enter password"
            />
            <button onClick={()=> setVisible(!visible)}>
                {visible ? "Hide" : "show"}
            </button>
        </div>
     );
}
export default PasswordToggle;