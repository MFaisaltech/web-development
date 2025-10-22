import { useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({ setup: "", punchline: "" });

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div>
      <h3>Joke!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>New Joke</button>
    </div>
  );
}
