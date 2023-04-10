import React, { useState } from "react";

const Counter = ({ number }) => {
  //   let counter = 0;
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(function (counter) {
      return counter + number;
    });
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

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
