import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputData from "./components/InputData";
import History from "./context/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputData />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
