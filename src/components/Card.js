import React from "react";

function Card({ data }) {
  return (
    <div className="col-12 col-lg-3 col-md-6 col-sm-12 ">
      <div className="card m-1 bg-primary d-flex flex-direction-column justify-content-center align-items-center">
        <div className="fs-5 text-white">{data.dt_txt}</div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
          className="icon"
        />
        <div className="description text-center">
          <h4 style={{ textTransform: "capitalize" }}>
            {data.weather[0].description}
          </h4>
        </div>
        <div className="temp  d-flex align-items-center justify-content-center fs-1 text-white">
          {Math.round(data.main.temp)}c
        </div>
        <div className="other  d-flex align-items-center justify-content-center">
          humidity: {data.main.humidity}%
          <br />
          wind speed: {data.wind.speed}km/h
        </div>
      </div>
    </div>
  );
}

export default Card;
