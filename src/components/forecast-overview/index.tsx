import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { useParams } from 'react-router-dom';

import useFetchForecast from '@/hooks/useFetchForecast';
import { getCoordsFromCoordsString } from '@/lib/utils';
import { LocationParam } from '@/types';
import { ForecastWeather } from '@/types/forecast-weather.type';

import ForecastSection from './forecast-section';
import LoadingSkeleton from './loading-skeleton';

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
    <section className="space-y-5">
      <h2 className="flex items-center gap-2 text-xl font-medium">
        <HiOutlineCalendarDays size={22} />
        Next 5 Days
      </h2>

      <ForecastSection listOfDays={list} />
    </section>
  );
}
