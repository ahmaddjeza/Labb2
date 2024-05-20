import axios from 'axios';

export const fetchWeather = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bbd2d299351be208db44a4f2105edaa8&units=metric`
  );
  return response.data;
};
