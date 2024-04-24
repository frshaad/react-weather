import { IoTelescopeOutline } from 'react-icons/io5';
import { LuCloudy, LuDroplets, LuGaugeCircle, LuWind } from 'react-icons/lu';
import { useParams } from 'react-router-dom';

import useFetchCurrent from '@/hooks/useFetchCurrent';
import { getCoordsFromCoordsString } from '@/lib/utils';
import { LocationParam } from '@/types';
import { CurrentWeather } from '@/types/current-weather.type';

import ConditionInfo from './condition-info';
import HumidityIndicator from './humidity-indicator';
import LoadingSkeleton from './loading-skeleton';
import PressureIndicator from './pressure-indicator';
import PrimaryConditionInfo from './primary-condition-info';
import WindDirection from './wind-direction';

export default function CurrentOverview() {
  const { locationCoords } = useParams<LocationParam>();
  const { lat, lon } = getCoordsFromCoordsString(locationCoords as string);

  const {
    data: currentWeahter,
    isLoading,
    isError,
    error,
  } = useFetchCurrent(lat, lon);

  if (isLoading) return <LoadingSkeleton />;
  if (isError) return <h2>{error.message}</h2>;

  const {
    name,
    dt,
    sys: { country },
    weather: [{ description, icon }],
    main: { feels_like: feelsLike, humidity, pressure, temp },
    visibility,
    wind: { deg, speed },
    clouds: { all: cloudCover },
    coord: { lat: locationLat, lon: locationLon },
  } = currentWeahter as CurrentWeather;

  const windSpeed = speed * 3.6;
  const visibilityRange = visibility / 1000;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div className="sm:col-span-2 sm:row-span-2 md:col-span-1 md:row-span-3">
        <PrimaryConditionInfo
          data={{
            name,
            country,
            dt,
            description,
            feelsLike,
            temp,
            icon,
            locationLat,
            locationLon,
          }}
        />
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-1">
        <ConditionInfo
          title="wind"
          icon={LuWind}
          data={`${windSpeed.toFixed(1)} km/h`}
        >
          <WindDirection windDeg={deg} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-3 md:col-start-2 md:row-start-2">
        <ConditionInfo
          title="pressure"
          icon={LuGaugeCircle}
          data={`${pressure} hPa`}
        >
          <PressureIndicator pressure={pressure} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-4 md:col-start-2 md:row-start-3">
        <ConditionInfo
          title="cloud cover"
          icon={LuCloudy}
          data={`${cloudCover}%`}
        />
      </div>
      <div className="sm:row-start-4 md:col-start-3 md:row-start-1">
        <ConditionInfo title="humidity" icon={LuDroplets} data={`${humidity}%`}>
          <HumidityIndicator humididty={humidity} />
        </ConditionInfo>
      </div>
      <div className="sm:row-start-5 md:col-start-3 md:row-start-2">
        <ConditionInfo
          title="visibility"
          icon={IoTelescopeOutline}
          data={`${visibilityRange.toFixed(1)} km`}
        />
      </div>
    </div>
  );
}
