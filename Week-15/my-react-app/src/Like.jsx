import { useState } from "react";

function Like(){
    const[count, setCount] = useState(0);
    return(
        <div>
            <h3>Like: {count} </h3>
            <button onClick = {()=> setCount(count+1)}>Like</button>
        </div>
    );
}
export default Like;