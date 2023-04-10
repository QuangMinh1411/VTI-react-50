import React, { useState } from "react";

const Counter = () => {
  //   let counter = 0;
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(function (counter) {
      return counter + number;
    });
  };
  const handleChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const decrement = () => {
    setCounter((counter) => counter - number);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div>{counter}</div>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
