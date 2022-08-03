import React from "react";
import Button from "react-bootstrap/esm/Button";

import "./Card-style.css";

function CardUI(props) {
  return (
    <div>
      <div className="card text-center">
        <div className="overflow">
          <img src={props.imgsrc} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.Name}</h4>
          <p className="card-text text-secondary">{props.text}</p>
          <Button href="" variant="outline-success" className="ms-auto">
            {props.btn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardUI;
