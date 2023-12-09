import "./App.css";
import EditSection from "./components/EditSection";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditSection />} />
      </Routes>
    </>
  );
}

export default App;
