import React from "react";
import Card from "./Card";

function Forecast({ weather }) {
  const rendreCards = () => {
    return weather?.list?.map((per) => {
      return <Card key={per.dt} data={per} />;
    });
  };
  return (
    <div style={{ overflowX: "auto", display: "flex" }}>{rendreCards()}</div>
  );
}

export default Forecast;
