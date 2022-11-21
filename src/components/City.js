import React from "react";

function City({ city, country }) {
  return (
    <>
      {city ? <h1 className="text-center">{`${city}, ${country}`}</h1> : null}
    </>
  );
}

export default City;
