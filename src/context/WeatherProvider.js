import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = useCallback(async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bbd2d299351be208db44a4f2105edaa8&units=metric`
      );
      setWeatherData([response.data]);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
