import { CircleCheck, CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';

import { useAppSelector } from '@/app/hooks';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Coords } from '@/types';

import {
  addLocation,
  removeLocation,
  selectAllLocations,
} from './locationsSlice';

type Props = Coords;

export default function ToggleSaveLocation({ lat, lon }: Props) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const savedLocations = useAppSelector(selectAllLocations);
  const isLocationSaved =
    savedLocations.filter(
      (location) => location.lat === lat && location.lon === lon,
    ).length > 0;

  if (isLocationSaved) {
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onMouseEnter={() => setIsButtonHovered((prev) => !prev)}
          onMouseLeave={() => setIsButtonHovered((prev) => !prev)}
          onClick={() => removeLocation({ lat, lon })}
          className="absolute right-6 top-6"
        >
          {isButtonHovered ? (
            <CircleMinus className="text-red-500" />
          ) : (
            <CircleCheck className="text-green-500" />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-destructive">Remove Location</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => addLocation({ lat, lon })}
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
