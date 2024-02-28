import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { Location } from '@/types'

const RESULT_LIMIT = '5'
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string

export const useSearchLocation = (query: string) => {
  const fetchGeolocation = async (searchTerm: string) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=${RESULT_LIMIT}&appid=${API_KEY}`
    )
    return data as Location[]
  }

  return useQuery({
    queryKey: [query, 'location-search'],
    queryFn: () => fetchGeolocation(query),
  })
}
