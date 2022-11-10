import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);
  //const [value, setValue] = useValue("text in input");

  function incriment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incriment}>incriment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
