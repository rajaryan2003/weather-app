import "./App.css";
import { useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Card";
import Card from "./components/Input";
import { useWeather } from "./context/Weather";

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className="App">
      <h1>Weather forecast</h1>
      <Input />
      <Card />
      <Button onClick={weather.fetchData} value="Search" />

      <Button value="Refresh" />
    </div>
  );
}

export default App;
