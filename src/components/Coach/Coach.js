import React from "react";
import coach from "../../assets/Coach.jpg";

function Coach() {
  return (
    <div id="COACH">
      <section className="projects-section bg-light" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
            <div className="col-xl-7 col-lg-5 col-sm-2 sm-ml-5">
              <img
                className="img-fluid mb-3 mb-lg-1"
                src={coach}
                alt="..."
                style={{
                  width: "60%",
                  height: "20%",
                  borderRadius: "2rem",
                  marginLeft: "20%",
                }}
              />
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="featured-text text-center text-lg-left">
                <h2
                  style={{
                    fontWeight: "bolder",

                    fontSize: "30px",
                  }}
                >
                  About Coach
                </h2>

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

export default Coach;
