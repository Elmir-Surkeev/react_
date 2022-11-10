import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function incriment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={incriment}>incriment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default App;
