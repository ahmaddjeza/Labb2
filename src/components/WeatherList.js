import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherProvider';
import WeatherCard from './WeatherCard';

const WeatherList = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div>
      {weatherData.map((weather) => (
        <WeatherCard key={weather.id} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
