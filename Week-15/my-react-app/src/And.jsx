import { useState } from "react";

function And(){
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={()=> setShow(!!show)}>
            toggle
            </button>
            {show && <p>hi and welcome</p>}
        </div>
    );
}
export default And;