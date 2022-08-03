import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/bootstrap.min.css";
import Navibar from "./components/NavBar/Navibar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Coach from "./components/Coach/Coach";
import News from "./components/Cards/News";
import Lessons from "./components/Cards/Lessons";

const App = () => (
  <div>
    <Navibar />
    <Landing />
    <About />
    <Gallery />
    <Lessons />
    <News />

    <Coach />
  </div>
);

export default App;
