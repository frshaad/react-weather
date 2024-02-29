import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  children?: React.ReactNode
  isSkeleton?: boolean
}

export default function ListItem({ children, isSkeleton }: Props) {
  if (isSkeleton) {
    return (
      <li className="flex h-9 w-[214px] items-center justify-center">
        <Skeleton className="h-[17px] w-28" />
      </li>
    )
  }

  return (
    <Button variant="ghost" size="sm" className="w-full">
      {children}
    </Button>
  )
}
