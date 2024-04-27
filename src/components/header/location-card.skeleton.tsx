import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function LocationCardSkeleton() {
  return (
    <Card className="flex w-[350px] items-center justify-between">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-[24px] w-[100px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-[20px] w-[80px]" />
        </CardDescription>
      </CardHeader>
      <CardContent className="relative pr-10">
        <p className="relative z-10">
          <Skeleton className="h-[24px] w-[100px]" />
        </p>
      </CardContent>
    </Card>
  );
}
