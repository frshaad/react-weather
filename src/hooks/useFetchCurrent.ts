import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { selectUnit } from '@/app/features/unit/unitSlice'
import { useAppSelector } from '@/app/hooks'
import type { CurrentWeather } from '@/types/current-weather.type'

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string

export const useFetchCurrent = (lat: number, lon: number) => {
  const currentUnit = useAppSelector(selectUnit)

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${currentUnit}&appid=${API_KEY}`
    )
    return data as CurrentWeather
  }

  return useQuery({
    queryKey: [`${lat}+${lon}`, 'current-weather'],
    queryFn: () => fetchCurrentWeather(lat, lon),
  })
}
