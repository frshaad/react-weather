import {
  CircleGauge,
  Droplets,
  Sunrise,
  Sunset,
  Telescope,
  Wind,
} from 'lucide-react'

import ConditionInfo from './condition-info'
import PrimaryConditionInfo from './primary-condition-info'

type Props = {
  locationCoords: string
}

export default function CurrentOverview({ locationCoords }: Props) {
  console.log(locationCoords)
  // const parts = locationCoords.split(',')

  // const lat = parseInt(parts[0])
  // const lon = parseInt(parts[1])
  // const {
  //   data: currentWeahter,
  //   isLoading,
  //   isError,
  //   error,
  // } = useFetchCurrent(lat, lon)

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3">
        <PrimaryConditionInfo />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-1">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-2">
        <ConditionInfo title="pressure" icon={CircleGauge} data="1008 hPa" />
      </div>
      <div className="sm:row-start-4 md:col-start-2 md:row-start-3">
        <ConditionInfo title="sunrise" icon={Sunrise} data="06:26" />
      </div>
      <div className="sm:row-start-4 md:col-start-3 md:row-start-1">
        <ConditionInfo title="humidity" icon={Droplets} data="48%" />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-2">
        <ConditionInfo title="visibility" icon={Telescope} data="10 km" />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-3">
        <ConditionInfo title="sunset" icon={Sunset} data="19:24" />
      </div>
    </div>
  )
}
