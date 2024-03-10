import {
  CircleGauge,
  Droplets,
  Sunrise,
  Sunset,
  Telescope,
  Wind,
} from 'lucide-react'

import { selectUnit } from '@/app/features/unit/unitSlice'
import { useAppSelector } from '@/app/hooks'
import { useFetchCurrent } from '@/hooks/useFetchCurrent'
import { epochToHhMm } from '@/lib/convertEpochToTime'
import { CurrentWeather } from '@/types/current-weather.type'

import ConditionInfo from './condition-info'
import HumidityIndicator from './humidity-indicator'
import PressureIndicator from './pressure-indicator'
import PrimaryConditionInfo from './primary-condition-info'
import WindDirection from './wind-direction'

type Props = {
  locationCoords: string
}

export default function CurrentOverview({ locationCoords }: Props) {
  const unit = useAppSelector(selectUnit)
  const parts = locationCoords.split(',')

  const lat = parseInt(parts[0])
  const lon = parseInt(parts[1])
  const {
    data: currentWeahter,
    isLoading,
    isError,
    error,
  } = useFetchCurrent(lat, lon)

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{error.message}</h2>

  console.log(currentWeahter)

  const {
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather: [{ description, icon }],
    main: { feels_like, humidity, pressure, temp },
    visibility,
    timezone,
    wind: { deg, speed },
  } = currentWeahter as CurrentWeather

  const { sunriseTime, sunsetTime } = epochToHhMm(sunrise, sunset, timezone)
  const windSpeed = unit === 'metric' ? speed * 3.6 : speed * 2.23694
  const visibilityRange =
    unit === 'metric' ? visibility / 1000 : visibility / 1609

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3">
        <PrimaryConditionInfo
          data={{
            name,
            country,
            dt,
            description,
            feels_like,
            temp,
            icon,
          }}
        />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-1">
        <ConditionInfo
          title="wind"
          icon={Wind}
          data={`${windSpeed.toFixed(1)} ${unit === 'metric' ? 'km/h' : 'mph'}`}
        >
          <WindDirection windDeg={deg} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-2">
        <ConditionInfo
          title="pressure"
          icon={CircleGauge}
          data={`${pressure} hPa`}
        >
          <PressureIndicator pressure={pressure} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-4 md:col-start-2 md:row-start-3">
        <ConditionInfo title="sunrise" icon={Sunrise} data={sunriseTime} />
      </div>
      <div className="sm:row-start-4 md:col-start-3 md:row-start-1">
        <ConditionInfo title="humidity" icon={Droplets} data={`${humidity}%`}>
          <HumidityIndicator humididty={humidity} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-2">
        <ConditionInfo
          title="visibility"
          icon={Telescope}
          data={`${visibilityRange.toFixed(1)} ${unit === 'metric' ? 'km' : 'miles'}`}
        />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-3">
        <ConditionInfo title="sunset" icon={Sunset} data={sunsetTime} />
      </div>
    </div>
  )
}
