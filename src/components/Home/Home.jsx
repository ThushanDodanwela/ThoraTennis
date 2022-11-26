import Navibar from "../../components/NavBar/Navibar";
import Landing from "../../components/Landing/Landing";
import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import Coach from "../../components/Coach/Coach";
import News from "../../components/Cards/News";
import Lessons from "../../components/Cards/Lessons";
import Footer from "../../components/Footer/Footer";

import React from "react";

function Home() {
  return (
    <div>
      <Navibar />
      <Landing />
      <About />
      <Gallery />
      <News />
      <Lessons />
      <Coach />
      <Footer />
    </div>
  );
}

export default Home;
