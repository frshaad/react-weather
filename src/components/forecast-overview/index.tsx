import { useParams } from 'react-router-dom';

import LoadingSkeleton from '@/components/current-overview/loading-skeleton';
import useFetchForecast from '@/hooks/useFetchForecast';
import { getCoordsFromCoordsString } from '@/lib/utils';
import { LocationParam } from '@/types';
import { ForecastWeather } from '@/types/forecast-weather.type';

import DateTabs from './date-tabs';

export default function ForecastOverview() {
  const { locationCoords } = useParams<LocationParam>();
  const { lat, lon } = getCoordsFromCoordsString(locationCoords as string);

  const {
    data: forecastWeahter,
    isLoading,
    isError,
    error,
  } = useFetchForecast(lat, lon);

  if (isLoading) return <LoadingSkeleton />; // TODO: change to forecast skeleton
  if (isError) return <h2>{error.message}</h2>;

  const { list } = forecastWeahter as ForecastWeather;

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-medium">Next 5 Days</h2>

      <div>
        <DateTabs listOfDays={list} />
      </div>
    </div>
  );
}
