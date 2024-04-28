import { Calendar } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function CardSkeleton() {
  return (
    <Card className="h-[232px] w-[179px] text-center">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6" />
        </CardTitle>
        <Skeleton className="h-5" />
      </CardHeader>
      <CardContent className="relative mb-6 flex flex-col items-center gap-1">
        <Skeleton className="h-10 w-[77px]" />
      </CardContent>
      <CardFooter className="flex w-full items-center justify-center">
        <Skeleton className="h-[33px] w-[83px]" />
      </CardFooter>
    </Card>
  );
}

function ForecastSectionSkeleton() {
  return (
    <div className="mb-2 space-y-4">
      <ul className="flex items-center gap-2">
        <Skeleton className="h-10 w-[85px]" />
        <Skeleton className="h-10 w-[85px]" />
        <Skeleton className="h-10 w-[85px]" />
        <Skeleton className="h-10 w-[85px]" />
        <Skeleton className="h-10 w-[85px]" />
      </ul>

      <div className="flex items-center gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <section className="space-y-5">
      <h2 className="flex items-center gap-2 text-xl font-medium">
        <Calendar />
        Next 5 Days
      </h2>

      <ForecastSectionSkeleton />
    </section>
  );
}
