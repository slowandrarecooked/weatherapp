import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const handleSubmit = async () => {
    let data = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=6d448cd416719b471990d7aa0375c5a0`
    );
    console.log(data);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);
  return (
    <div className="App">
      <h1>Weather app</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSubmit}>Display Weather</button>
      </div>
    </div>
  );
}

export default App;
