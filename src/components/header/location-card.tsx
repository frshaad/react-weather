import { Link } from 'react-router-dom';

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

import LoadingSkeleton from '../current-overview/loading-skeleton';

export default function LocationCard({
  lat,
  country,
  lon,
  name,
}: SavedLocationObject) {
  const {
    data: currentWeahter,
    isLoading,
    isError,
    error,
  } = useFetchCurrent(lat, lon);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <h2>{error.message}</h2>;

  const {
    weather: [{ description, icon }],
    main: { temp },
  } = currentWeahter as CurrentWeather;

  const WeatherIcon = getWeatherIcon(icon);

  return (
    <Link to={`/${lat},${lon}`}>
      <Card className="flex w-[350px] items-center justify-between transition duration-200 hover:shadow-lg">
        <CardHeader>
          <CardTitle>
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
  );
}
