import { Calendar, LocateIcon } from 'lucide-react'

import { selectUnit } from '@/app/features/unit/unitSlice'
import { useAppSelector } from '@/app/hooks'
import { convertDtToLocalTime } from '@/lib/convertDtToLocalTime'
import { getWeatherIcon } from '@/lib/getWeatherIcon'

type Props = {
  data: {
    name: string
    country: string
    dt: number
    description: string
    feels_like: number
    temp: number
    icon: string
  }
}

export default function PrimaryConditionInfo({ data }: Props) {
  const { country, description, dt, feels_like, icon, name, temp } = data
  const unit = useAppSelector(selectUnit)

  const local_time = convertDtToLocalTime(dt)
  const WeatherIcon = getWeatherIcon(icon)

  return (
    <div className="h-full space-y-4 rounded-lg border p-8 shadow-lg backdrop-blur-md transition duration-200 hover:scale-[1.02]">
      <WeatherIcon className="mb-5 size-24 text-[#2193b0]" />
      <p className="inline-block bg-gradient-to-bl from-[#6dd5ed] to-[#2193b0] bg-clip-text text-4xl font-bold text-transparent">
        {temp.toFixed(0)}
        {unit === 'metric' ? '°C' : '°F'}
      </p>
      <p className="text-sm">
        Feels like{' '}
        <span className="text-lg font-normal">
          {feels_like.toFixed(0)}
          {unit === 'metric' ? '°C' : '°F'}
        </span>
      </p>
      <p className="text-sm font-semibold capitalize">{description}</p>
      <div className="w-full border-y" />
      <p className="flex items-center text-sm">
        <LocateIcon className="mr-2 size-5" />{' '}
        <span className="font-semibold">{name}</span>, {country}
      </p>
      <p className="flex items-center text-sm">
        <Calendar className="mr-2 size-5" />
        {local_time}
      </p>
    </div>
  )
}
