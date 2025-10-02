import { useState } from "react";

function Form(){
    const[name, setName] = useState("");

    return (
        <div>
            <h4>Type your name </h4>
            <input
            type="text"
            placeholder="enter your name"
            onChange={(e)=> setName(e.target.value)}
            />
            <p>Hello {name || "Guest"}</p>
            
        </div>
    );
}
export default Form;