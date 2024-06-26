import { LuCalendar, LuLocate } from 'react-icons/lu';

import ToggleSaveLocation from '@/app/features/locations/toggle-save-location';
import {
  convertDtToLocalTime,
  getTempWithUnit,
  getWeatherIcon,
} from '@/lib/utils';

type Props = {
  data: {
    name: string;
    country: string;
    dt: number;
    description: string;
    feelsLike: number;
    temp: number;
    icon: string;
    locationLat: number;
    locationLon: number;
  };
};

export default function PrimaryConditionInfo({ data }: Props) {
  const {
    country,
    description,
    dt,
    feelsLike,
    icon,
    name,
    temp,
    locationLat,
    locationLon,
  } = data;

  const localTime = convertDtToLocalTime(dt);
  const WeatherIcon = getWeatherIcon(icon);

  return (
    <div className="relative h-full space-y-4 rounded-lg border p-8 shadow-lg backdrop-blur-md transition duration-200 hover:scale-[1.02]">
      <ToggleSaveLocation
        lat={locationLat}
        lon={locationLon}
        name={name}
        country={country}
      />
      <WeatherIcon className="mb-2 size-32 text-[#2193b0]" />
      <p className="inline-block bg-gradient-to-bl from-[#6dd5ed] to-[#2193b0] bg-clip-text text-4xl font-bold text-transparent">
        {getTempWithUnit(temp)}
      </p>
      <p className="text-sm">
        Feels like{' '}
        <span className="text-lg font-normal">
          {getTempWithUnit(feelsLike)}
        </span>
      </p>
      <p className="text-sm font-semibold capitalize">{description}</p>
      <div className="w-full border-y" />
      <p className="flex items-center text-sm">
        <LuLocate className="mr-2 size-5" />{' '}
        <span className="font-semibold">{name}</span>, {country}
      </p>
      <p className="flex items-center text-sm">
        <LuCalendar className="mr-2 size-5" />
        {localTime}
      </p>
    </div>
  );
}
