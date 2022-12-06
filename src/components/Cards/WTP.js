import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const options = {
  method: "GET",
  url: "https://tennis-live-data.p.rapidapi.com/rankings/ATP",
  headers: {
    "X-RapidAPI-Key": "b1e9d7add6msh00e996a7fed4a10p1006fbjsn69e9643e903e",
    "X-RapidAPI-Host": "tennis-live-data.p.rapidapi.com",
  },
};

function WTP() {
  const [TennisRank, setTennisRank] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setTennisRank(response.data.results.rankings.slice(0, 5));
        console.log(TennisRank);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div>
        <div id="Ranks" style={{ marginTop: "5%" }}>
          <h1 style={{ textAlign: "center", fontWeight: "600" }}>
            {" "}
            Top 05 Rankings in ATP{" "}
          </h1>
          <div className="container-fluid d-flex  justify-content-center">
            <div className="row">
              {/* {TennisRank.map((data) => (
                <div className=" m-4 col-md-2 ">
                  <Card>
                    <Card.Header className="bg-primary text-white">
                      {data.ranking}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title className="m-3">
                        {" "}
                        Total Points : {data.ranking_points}{" "}
                      </Card.Title>
                      <Card.Text className="justify-center">
                        {data.full_name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WTP;
