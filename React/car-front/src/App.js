import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import UpdateForm from "./components/UpdateForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/add" element={<CarForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
