import React from "react";
import { Component } from "react";
import Card from "./CardUI";
import NewsDB from "../../db/news.json";

class News extends Component {
  render() {
    return (
      <div id="NEWS" style={{ marginTop: "5%" }}>
        <h1 style={{ textAlign: "center", fontWeight: "600" }}>
          {" "}
          This Week in Tennis{" "}
        </h1>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            {NewsDB.map((news) => (
              <div className="col-md-3">
                <Card
                  imgsrc={news.ImageURL}
                  Name={news.Title}
                  text={news.Content}
                  btn="Read More..."
                  key={news.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
