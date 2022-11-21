import React, { useState } from "react";
import City from "./components/City";
import Forecast from "./components/Forecast";
import Form from "./components/Form";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const url = `./test.json`;

  const fetchUrl = async (city) => {
    // const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=714f6962437cea26d7f94084321b1e57`;
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setWeather(res);
        setCity(weather.city.name);
        console.log(weather);
      });
  };

  return (
    <div className="container p-5">
      <Form onFormSubmit={fetchUrl} />
      <City city={city} />
      <Forecast />
    </div>
  );
}

export default App;
