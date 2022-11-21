import React from "react";
import Card from "./Card";

function Day({ date }) {
  return (
    <div className="mb-5">
      <h2 className="date">{date}</h2>
      <div className="row">
        <Card period="Morning" />
        <Card period="After-noon" />
        <Card period="Night" />
      </div>
    </div>
  );
}

export default Day;
