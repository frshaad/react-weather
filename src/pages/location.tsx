import { useParams } from 'react-router-dom'

type LocationParam = {
  locationId: string
}

export default function Location() {
  const { locationId } = useParams<LocationParam>()

  return <div>Location: {locationId}</div>
}
