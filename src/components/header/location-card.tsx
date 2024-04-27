import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import {
  addLocation,
  removeLocation,
} from '@/app/features/locations/locationsSlice';
import { useAppDispatch } from '@/app/hooks';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useFetchCurrent from '@/hooks/useFetchCurrent';
import { getWeatherIcon } from '@/lib/utils';
import type { SavedLocationObject } from '@/types';
import { CurrentWeather } from '@/types/current-weather.type';

import { Button } from '../ui/button';
import LocationCardSkeleton from './location-card.skeleton';

type Props = SavedLocationObject & {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LocationCard({
  lat,
  country,
  lon,
  name,
  setOpen,
}: Props) {
  const dispatch = useAppDispatch();

  const {
    data: currentWeahter,
    isLoading,
    isError,
    error,
  } = useFetchCurrent(lat, lon);

  if (isLoading) return <LocationCardSkeleton />;
  if (isError) return <h2>{error.message}</h2>;

  const {
    weather: [{ description, icon }],
    main: { temp },
  } = currentWeahter as CurrentWeather;

  const WeatherIcon = getWeatherIcon(icon);

  return (
    <div className="group relative">
      <Link to={`/${lat},${lon}`} onClick={() => setOpen(false)}>
        <Card className="flex w-full items-center justify-between transition duration-200 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-base">
              {name}, {country}
            </CardTitle>
            <CardDescription className="capitalize">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative pr-10">
            <p className="relative z-10 text-3xl font-medium text-[#2193b0]">
              {temp.toFixed(0)}
              <span className="absolute -right-5 top-0 text-base font-normal">
                °C
              </span>
            </p>
            <WeatherIcon
              size={40}
              className="absolute bottom-0 text-[#2193b0]/20"
            />
          </CardContent>
        </Card>
      </Link>
      <Button
        variant="destructive"
        size="icon"
        className="absolute left-[-6px] top-[-9px] size-6 rounded-full p-1 opacity-0 shadow-sm transition group-hover:opacity-70 group-hover:hover:opacity-100"
        onClick={() => {
          dispatch(removeLocation({ lat, lon, country, name }));
          toast.error(
            `${name}, ${country} has been removed from your saved locations.`,
            {
              action: {
                label: 'Undo',
                onClick: () =>
                  dispatch(addLocation({ lat, lon, country, name })),
              },
            },
          );
        }}
      >
        <X />
      </Button>
    </div>
  );
}
