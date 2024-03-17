import { Skeleton } from '../ui/skeleton'
import SuggestionCard from './suggestion-card'

export default function SuggestionCardSkeleton() {
  return (
    <SuggestionCard>
      {Array.from({ length: 5 }).map((_, index) => (
        <li
          key={index}
          className="flex h-9 w-[214px] items-center justify-start pl-4"
        >
          <Skeleton className="h-[17px] w-28" />
        </li>
      ))}
    </SuggestionCard>
  )
}
