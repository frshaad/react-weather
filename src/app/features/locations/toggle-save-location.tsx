import { CircleMinus, CirclePlus } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { SavedLocationObject } from '@/types';

import {
  addLocation,
  removeLocation,
  selectAllLocations,
} from './locationsSlice';

export default function ToggleSaveLocation({
  lat,
  lon,
  country,
  name,
}: SavedLocationObject) {
  const dispatch = useAppDispatch();
  const savedLocations = useAppSelector(selectAllLocations);
  const isLocationSaved =
    savedLocations.filter(
      (location) => location.country === country && location.name === name,
    ).length > 0;

  if (isLocationSaved) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            onClick={() =>
              dispatch(removeLocation({ lat, lon, country, name }))
            }
            className="absolute right-6 top-6"
          >
            <CircleMinus className="text-destructive" />
            {/* <CircleCheck className="text-green-500" /> */}
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-destructive">Remove Location</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => dispatch(addLocation({ lat, lon, country, name }))}
          className="absolute right-6 top-6 z-20"
        >
          <CirclePlus className="text-blue-500" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Save Location</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
