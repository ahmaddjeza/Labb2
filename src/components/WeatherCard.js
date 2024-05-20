import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
  text-align: center;
`;

const WeatherCard = ({ weather }) => {
  return (
    <Card>
     <h3>{weather.name}</h3>
      <p>{weather.main.temp} °C</p>
      <p>{weather.weather[0].description}</p>
    </Card>
  );
};

export default WeatherCard;
