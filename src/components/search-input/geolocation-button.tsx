import { useState } from 'react';
import { LuNavigation } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Coords } from '@/types';

export default function GeoLocationButton() {
  const navigate = useNavigate();
  const [, setLocation] = useState<Coords | null>(null);
  const [, setFetchError] = useState<string | null>(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
        navigate(`/${latitude},${longitude}`);
      },
      (error) => setFetchError(error.message),
    );
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            type="submit"
            onClick={getLocation}
          >
            <LuNavigation size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Use your current location</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
