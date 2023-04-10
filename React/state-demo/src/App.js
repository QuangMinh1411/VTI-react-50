import { useState } from "react";
import "./App.css";
// import EmailInput from "./components/EmailInput";
import Counter from "./components/Counter";
function App() {
  const [number, setNumber] = useState(1);
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className="App">
      {/* <EmailInput /> */}
      <input type="number" value={number} onChange={handleChange} />
      <Counter number={number} />
    </div>
  );
}

export default App;
