import { useState } from "react";
import "./App.css";
import Calculation from "./components/Calculation";
import Result from "./components/Result";
function App() {
  const [numbers, setNumbers] = useState({ first: 0, second: 0 });

  const [operation, setOperation] = useState("+");
  let result = 0;
  const changeFirst = (e) => {
    setNumbers((prevNums) => ({
      first: Number(e.target.value),
      second: prevNums.second,
    }));
  };

  const changeSecond = (e) => {
    setNumbers((prevNums) => ({
      first: prevNums.first,
      second: +e.target.value,
    }));
  };

  const calculate = (e) => {
    setOperation(e.target.value);
  };
  switch (operation) {
    case "+":
      result = numbers.first + numbers.second;
      break;
    case "-":
      result = numbers.first - numbers.second;
      break;

    case "*":
      result = numbers.first * numbers.second;
      break;

    case "/":
      result =
        numbers.second === 0
          ? "Can not divide by zero"
          : (numbers.first / numbers.second).toFixed(2);
      break;
    default:
      return;
  }

  return (
    <div className="App">
      <Calculation
        handleFirst={changeFirst}
        handleSecond={changeSecond}
        handleResult={calculate}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
