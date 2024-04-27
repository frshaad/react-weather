import { Map } from 'lucide-react';
import { useState } from 'react';

import { selectAllLocations } from '@/app/features/locations/locationsSlice';
import { useAppSelector } from '@/app/hooks';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
      <SheetTrigger className="flex items-center gap-2">
        <Button variant="secondary" asChild>
          <div>
            <Map className="mr-2 size-4" size={24} />
            <span className="text-sm">Saved Locations</span>
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Map className="mr-3 size-4" />
            Saved Locations
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-3">
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
