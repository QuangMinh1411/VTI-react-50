import React from "react";

const Counter = () => {
  let counter = 0;
  const increment = () => {};

  const decrement = () => {};
  return (
    <>
      <div>{counter}</div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};

export default Counter;
