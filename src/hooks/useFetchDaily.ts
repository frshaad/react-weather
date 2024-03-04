import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { selectUnit } from '@/app/features/unit/unitSlice'
import { useAppSelector } from '@/app/hooks'
import type { DailyWeather } from '@/types/daily-weather.type'

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string

export const useFetchDaily = (lat: number, lon: number) => {
  const currentUnit = useAppSelector(selectUnit)

  const fetchDailyWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=${currentUnit}&appid=${API_KEY}`
    )
    return data as DailyWeather
  }

  return useQuery({
    queryKey: [`${lat}+${lon}`, 'daily-weather'],
    queryFn: () => fetchDailyWeather(lat, lon),
  })
}
