import React from "react";
import { Component } from "react";
import Card from "./CardUI";
import Daniel from "../../assets/Daniel.jpg";
import Alex from "../../assets/Alex.jpg";
import Nadal from "../../assets/Nadal.jpg";

class News extends Component {
  render() {
    return (
      <div id="NEWS" style={{ marginTop: "5%" }}>
        <h1 style={{ textAlign: "center", fontWeight: "500" }}>
          {" "}
          This Week in Tennis{" "}
        </h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-3">
              <Card imgsrc={Daniel} Name="Daniel" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={Alex} Name="Alex" />
            </div>
            <div className="col-md-3">
              <Card imgsrc={Nadal} Name="Nadal" />
            </div>

            <div className="col-md-3">
              <Card imgsrc={Nadal} Name="Nadal" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
