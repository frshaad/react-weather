import SuggestionCard from './suggestion-card';

import { Skeleton } from '@/components/ui/skeleton';

export default function SuggestionCardSkeleton() {
  const randomArray = Array.from({ length: 5 }, () => Math.random());

  return (
    <SuggestionCard>
      {randomArray.map((item) => (
        <li
          key={item}
          className="flex h-9 w-[214px] items-center justify-start pl-4"
        >
          <Skeleton className="h-[17px] w-28" />
        </li>
      ))}
    </SuggestionCard>
  );
}
