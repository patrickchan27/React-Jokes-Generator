import React, { useState, useEffect } from "react";
import "./Joke.css";

const JOKES_API_URI = "https://api.icndb.com/jokes/random";

function Joke() {
  const [joke, setJoke] = useState('');

  const fetchRandomJoke = async () => {
    try {
      const res = await fetch(JOKES_API_URI);
      const data = await res.json();
      if (data.type === 'success') {
        setJoke(data.value.joke);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div className="joke-box">
      <h1>Jokes Generator</h1>
      <p className="joke-text">{joke}</p>
      <div className="joke-buttons">
        <button className="joke-button" onClick={fetchRandomJoke}>next</button>
      </div>
    </div>
  );
}

export default Joke;
