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

  return <div>CurrentOverview</div>
}
