import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = async () => {
    let detes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=6d448cd416719b471990d7aa0375c5a0`
    );

    let weatherdetes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${detes.data[0].lat}&lon=${detes.data[0].lon}&appid=6d448cd416719b471990d7aa0375c5a0`
    );
    console.log(weatherdetes);
    setData(weatherdetes.data.main);
  };

  return (
    <div className="App">
      <h1>Weather app</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Display Weather</button>
      </div>
      <div>
        {data ? (
          <div>
            <p>Temperature:{data.temp}</p>
            <p>Feels Like:{data.feels_like}</p>
            <p>Minimum Temperature:{data.temp_min}</p>
            <p>Maximum Temperature:{data.temp_max}</p>
            <p>Pressure:{data.pressure}</p>
            <p>Humidity:{data.humidity}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
