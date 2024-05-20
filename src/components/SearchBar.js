import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherProvider';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchBar = () => {
  const { fetchWeatherData } = useContext(WeatherContext);
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    fetchWeatherData(location);
  };

  return (
    <div>
      <Input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
