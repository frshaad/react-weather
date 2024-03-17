import { Link, useNavigate } from 'react-router-dom'
import { DebouncedState } from 'usehooks-ts'

import { Button } from '@/components/ui/button'
import { GeoLocation } from '@/types'

type Props = React.ComponentPropsWithoutRef<'button'> & {
  GeoLocation?: GeoLocation

  setQueryString: DebouncedState<(value: string) => void>
}

export default function ListItem({ GeoLocation, setQueryString }: Props) {
  const navigate = useNavigate()
  const handleClick = () => {
    setQueryString('')
    navigate(`/${GeoLocation?.lat},${GeoLocation?.lon}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex w-full justify-start overflow-hidden"
      onClick={handleClick}
      asChild
    >
      <Link to={`/${GeoLocation?.lat},${GeoLocation?.lon}`}>
        <span className="font-semibold">{GeoLocation?.name}</span>
        {!!GeoLocation?.state &&
          GeoLocation.state.length < 9 &&
          `,${GeoLocation.state} `}
        ,{GeoLocation?.country}
      </Link>
    </Button>
  )
}
