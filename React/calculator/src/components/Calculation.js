import React from "react";

function Calculation({ handleFirst, handleSecond, handleResult }) {
  return (
    <form>
      <input type="number" onChange={handleFirst} />
      <select onChange={handleResult}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={handleSecond} />
    </form>
  );
}

export default Calculation;
