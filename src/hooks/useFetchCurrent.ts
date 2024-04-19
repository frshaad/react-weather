import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type { CurrentWeather } from '@/types/current-weather.type';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;

const useFetchCurrent = (lat: number, lon: number) => {
  const fetchCurrentWeather = async (latitude: number, longitude: number) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
    );
    return data as CurrentWeather;
  };

  return useQuery({
    queryKey: [`${lat}+${lon}`, 'current-weather'],
    queryFn: () => fetchCurrentWeather(lat, lon),
  });
};

export default useFetchCurrent;
