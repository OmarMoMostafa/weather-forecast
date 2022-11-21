import React from "react";

function Card(props) {
  return (
    <div className="col-4">
      <h3 className="text-center">{props.period}</h3>
      <div className="card">
        <div className="main row bg-primary">
          <div className="description d-flex justify-content-center text-center">
            <h4>clear sky</h4>
            <img src="" alt="icon" className="icon" />
          </div>
          <div className="temp col-6 d-flex align-items-center justify-content-center fs-1 text-white">
            23 c
          </div>
          <div className="other col-6 d-flex align-items-center justify-content-center">
            humidity: 50
            <br />
            wind speed: 5 km/h
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
