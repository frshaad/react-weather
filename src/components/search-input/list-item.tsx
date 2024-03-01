import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  children?: React.ReactNode
  isSkeleton?: boolean
}

export default function ListItem({ children, isSkeleton }: Props) {
  if (isSkeleton) {
    return (
      <li className="flex h-9 w-[214px] items-center justify-start pl-4">
        <Skeleton className="h-[17px] w-28" />
      </li>
    )
  }

  return (
    <Button variant="ghost" size="sm" className="flex w-full justify-start">
      {children}
    </Button>
  )
}