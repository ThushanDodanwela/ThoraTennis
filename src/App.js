import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/bootstrap.min.css";

import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

import Register from "./components/Register/Register";

const App = () => (
  <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>

    {/* */}
  </div>
);

export default App;
