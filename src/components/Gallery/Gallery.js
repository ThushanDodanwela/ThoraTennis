import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRef, UseEffect, useState } from "react";
import images from "./images";
import "./Gallery.css";

function Gallery() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div id="GALLERY">
      <div className="gallery-section">
        <h1 style={{ textAlign: "center", fontWeight: "500" }}> Gallery </h1>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image, i) => {
              return (
                <motion.div className="item">
                  <img src={image} alt="" />
                </motion.div>
              );
            })}{" "}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Gallery;
