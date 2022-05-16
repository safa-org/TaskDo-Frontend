import "./App.css";
import Hero from "./components/Hero";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../src/components/Login";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
