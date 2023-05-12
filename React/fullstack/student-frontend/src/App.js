import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import UpdateForm from "./components/UpdateForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
