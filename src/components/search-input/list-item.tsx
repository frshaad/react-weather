import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { GeoLocation } from '@/types'

type Props = React.ComponentPropsWithoutRef<'button'> & {
  GeoLocation?: GeoLocation
  isSkeleton?: boolean
}

export default function ListItem({ isSkeleton, GeoLocation }: Props) {
  if (isSkeleton) {
    return (
      <li className="flex h-9 w-[214px] items-center justify-start pl-4">
        <Skeleton className="h-[17px] w-28" />
      </li>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex w-full justify-start"
      asChild
    >
      <Link to={`${GeoLocation?.lat},${GeoLocation?.lon}`}>
        {GeoLocation?.name}, {GeoLocation?.country}
      </Link>
    </Button>
  )
}
