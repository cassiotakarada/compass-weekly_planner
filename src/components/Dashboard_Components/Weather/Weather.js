import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Weather.module.css";

import logo from '../../../assets/climate.svg'


function Weather() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");


  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Asuncion&appid=f9a87d162645e75b0ada0ba0283f3df9&units=metric&lang=pt_br`
      );
      setTemperature(res.data.main.temp.toFixed(0));
      setCityName(res.data.name);
      setCountry(res.data.sys.country);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div className={styles.weather}>
      <div className={styles.weather__container}>    
        <div>
            <h1 className={styles.cityWeather}>{cityName} - Paraguai</h1>
        </div>
        <div className={styles.imgTemp}>
            <div className={styles.logoWeather}>
                <img src={logo} alt="climate" />
            </div>
            <div>
                <h1 className={styles.tempWeather}>{temperature}º</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;