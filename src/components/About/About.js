import React from "react";
import aboutImg from "../../assets/ball.jpg";

function About() {
  return (
    <div id="ABOUT">
      <section className="projects-section bg-light">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={aboutImg}
                alt="..."
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h3
                  style={{
                    fontWeight: "bolder",

                    fontSize: "30px",
                  }}
                >
                  Welcome
                </h3>

                <h4 style={{ fontWeight: "normal", marginBottom: "55px" }}>
                  {" "}
                  to Thora Tennis Academy
                </h4>
                <p className="text-black-50 mb-0">
                  It was the first tennis academy in Matale as well as the
                  central province. The current Tennis pool of the academy
                  comprises over 80 students playing under different age groups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
