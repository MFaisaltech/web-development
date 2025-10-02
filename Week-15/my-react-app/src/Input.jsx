import { useState } from "react";

function HandleClick() {
  const [text, setText] = useState("");

  function input(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Type input text here</h2>
      <input 
        type="text" 
        placeholder="abc" 
        onChange={input} 
      />
      <h1>Output: {text}</h1>
    </div>
  );
}

export default HandleClick;
