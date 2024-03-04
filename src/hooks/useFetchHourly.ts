import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { selectUnit } from '@/app/features/unit/unitSlice'
import { useAppSelector } from '@/app/hooks'
import type { HourlyWeather } from '@/types/hourly-weather.type'

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string

export const useFetchHourly = (lat: number, lon: number) => {
  const currentUnit = useAppSelector(selectUnit)

  const fetchHourlyWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=${currentUnit}&appid=${API_KEY}`
    )
    return data as HourlyWeather
  }

  return useQuery({
    queryKey: [`${lat}+${lon}`, 'hourly-weather'],
    queryFn: () => fetchHourlyWeather(lat, lon),
  })
}
