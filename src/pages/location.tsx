import { useParams } from 'react-router-dom'

type LocationParam = {
  locationCoords: string
}

export default function Location() {
  const { locationCoords } = useParams<LocationParam>()

  return <div>Location: {locationCoords}</div>
}
