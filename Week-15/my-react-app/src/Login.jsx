import { useState } from "react";

function Login(){
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div>
            <h2>{isLogin ? "wellcome" : "Login"}</h2>
            <button onClick={()=> setIsLogin(!isLogin)}>
                {isLogin ? "signuP" : "login"}
            </button>
        
        </div>
    );
}
export default Login;