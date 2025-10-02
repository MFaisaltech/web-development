import { useState } from "react";
function CheckboxExample(){
    const  [checked,setChecked] = useState(false);

    return(
        <div>
            <h2>Input the checked box</h2>
            <input 
            type="checkbox"
            onChange={(e)=> setChecked(e.target.checked)}
            />
            <label>acepted</label>
            {checked && <p> payment send</p>}
        </div>
    );
}
export default CheckboxExample;