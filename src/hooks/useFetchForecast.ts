import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { selectUnit } from '@/app/features/unit/unitSlice';
import { useAppSelector } from '@/app/hooks';
import type { ForecastWeather } from '@/types/forecast-weather.type';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;

const useFetchForecast = (lat: number, lon: number) => {
  const currentUnit = useAppSelector(selectUnit);

  const fetchForecastWeather = async (latitude: number, longitude: number) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${currentUnit}&appid=${API_KEY}`,
    );
    return data as ForecastWeather;
  };

  return useQuery({
    queryKey: [`${lat}+${lon}`, 'forecast-weather'],
    queryFn: () => fetchForecastWeather(lat, lon),
  });
};

export default useFetchForecast;
