import { Map } from 'lucide-react';
import { useState } from 'react';

import { selectAllLocations } from '@/app/features/locations/locationsSlice';
import { useAppSelector } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import LocationCard from './location-card';

export default function SavedLocationsButton() {
  const savedLocations = useAppSelector(selectAllLocations);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="flex items-center gap-2" asChild>
        <Button variant="secondary">
          <Map className="mr-2 size-4" size={24} />
          <span className="text-sm">Saved Locations</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] overflow-x-hidden overflow-y-scroll sm:w-[640px]">
        <SheetHeader className="mb-7">
          <SheetTitle className="flex items-center">
            <Map className="mr-3 size-4" />
            Saved Locations
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          {savedLocations.map((location) => (
            <LocationCard
              key={location.lat + location.lon}
              {...location}
              setOpen={setSheetOpen}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
