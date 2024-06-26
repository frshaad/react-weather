import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { GeoLocation } from '@/types';

const RESULT_LIMIT = '5';
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string;

const useSearchLocation = (query: string) => {
  const fetchGeolocation = async (searchTerm: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=${RESULT_LIMIT}&appid=${API_KEY}`,
    );
    return data as GeoLocation[];
  };

  return useQuery({
    queryKey: [query, 'location-search'],
    queryFn: () => fetchGeolocation(query),
    enabled: query.length > 2,
  });
};

export default useSearchLocation;
