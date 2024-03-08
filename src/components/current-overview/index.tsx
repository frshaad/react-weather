import { Calendar, LocateIcon, Sun, Wind } from 'lucide-react'

import ConditionInfo from './condition-info'

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
        <div className="h-full space-y-4 rounded-lg border bg-secondary p-4 shadow-md">
          <Sun className="mb-7 size-14" />
          <p className="text-3xl font-bold">26.8°C</p>
          <p className="text-sm">Clear Sky</p>
          <div className="w-full border-y" />
          <p className="flex items-center text-sm">
            <LocateIcon className="mr-2 size-5" /> Tehran, IR
          </p>
          <p className="flex items-center text-sm">
            <Calendar className="mr-2 size-5" /> 28 August Monday
          </p>
        </div>
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-1">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-2">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-4 md:col-start-2 md:row-start-3">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-4 md:col-start-3 md:row-start-1">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-2">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-3">
        <ConditionInfo title="wind" icon={Wind} data="28 km/h" />
      </div>
    </div>
  )
}
