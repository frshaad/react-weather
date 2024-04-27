import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function LocationCardSkeleton() {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[24px] w-[100px]" />
        </CardTitle>

        <Skeleton className="h-[20px] w-[80px]" />
      </CardHeader>
      <CardContent className="relative pr-10">
        <Skeleton className="relative z-10 size-[50px]" />
      </CardContent>
    </Card>
  );
}
