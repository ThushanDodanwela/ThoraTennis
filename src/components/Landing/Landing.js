import React from "react";
import "./Landing.css";
import { motion } from "framer-motion";

function Landing() {
  return (
    <header className="masthead" id="HOME">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <motion.h1
              animate={{ x: 25 }}
              className="mx-auto my-0 text-uppercase"
            >
              Tennis
            </motion.h1>
            <h2
              className="text-white-50 mx-auto mt-2 mb-5"
              style={{ lineSpacing: "14px" }}
            >
              Sport for Healthy Lifetime.
            </h2>

            <a className="btn btn-primary" href="#ABOUT">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Landing;
