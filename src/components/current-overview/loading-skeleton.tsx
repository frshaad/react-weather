import { Calendar, LocateIcon } from 'lucide-react'

import { Skeleton } from '@/components/ui/skeleton'

const PrimaryBoxSkeleton = () => (
  <div className="h-full space-y-4 rounded-lg border p-8 shadow-lg backdrop-blur-md transition duration-200 hover:scale-[1.02]">
    <Skeleton className="mb-5 size-24 rounded-full" />
    <Skeleton className="h-10 w-20 rounded-md" />
    <Skeleton className="h-7 w-32 rounded-md" />
    <Skeleton className="h-5 w-20 rounded-md" />
    <div className="w-full border-y" />
    <div className="flex items-center">
      <LocateIcon className="mr-2 size-5" />{' '}
      <Skeleton className="h-5 w-80 rounded-md" />
    </div>
    <div className="flex items-center">
      <Calendar className="mr-2 size-5" />
      <Skeleton className="h-5 w-96 rounded-md" />
    </div>
  </div>
)

const InfoBoxSkeleton = () => (
  <div className="flex h-full cursor-default select-none items-center gap-10 rounded-lg border p-5 transition">
    <Skeleton className="size-10 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-6 w-12 rounded-md" />
      <Skeleton className="h-7 w-20 rounded-md" />
    </div>
  </div>
)

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3">
        <PrimaryBoxSkeleton />
      </div>

      <div className="sm:row-start-3 md:col-start-2 md:row-start-1">
        <InfoBoxSkeleton />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-2">
        <InfoBoxSkeleton />
      </div>
      <div className="sm:row-start-4 md:col-start-2 md:row-start-3">
        <InfoBoxSkeleton />
      </div>
      <div className="sm:row-start-4 md:col-start-3 md:row-start-1">
        <InfoBoxSkeleton />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-2">
        <InfoBoxSkeleton />
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-3">
        <InfoBoxSkeleton />
      </div>
    </div>
  )
}
