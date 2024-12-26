import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import EmployeesTable from "./Components/EmployeesTable";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Employees" element={<EmployeesTable />} />
      </Routes>
    </Router>
  );
}

export default App;
