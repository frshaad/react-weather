import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { IconType } from 'react-icons/lib';
import {
  LuCloud,
  LuCloudDrizzle,
  LuCloudFog,
  LuCloudLightning,
  LuCloudRain,
  LuCloudSun,
  LuCloudy,
  LuSnowflake,
  LuSun,
} from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

import type { List } from '@/types/forecast-weather.type';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertDtToLocalTime(dt: number): string {
  const date = new Date(dt * 1000);
  date.setTime(date.getTime());

  return format(date, 'dd MMMM yyyy');
}

export function categorizePressure(
  pressure: number,
): 'low' | 'moderate' | 'high' {
  const seaLevel = 1013.25; // Average sea level pressure in hPa (hectopascals)

  const pressureDifference = Math.abs(pressure - seaLevel);

  if (pressureDifference < 10) {
    return 'low';
  }
  if (pressureDifference < 20) {
    return 'moderate';
  }
  return 'high';
}

export function getWeatherIcon(icon: string): IconType {
  switch (icon) {
    case '01d':
      return LuSun;

    case '02d':
      return LuCloudSun;

    case '03d':
      return LuCloud;

    case '04d':
      return LuCloudy;

    case '09d':
      return LuCloudDrizzle;

    case '10d':
      return LuCloudRain;

    case '11d':
      return LuCloudLightning;

    case '12d':
      return LuSnowflake;

    case '50d':
      return LuCloudFog;

    default:
      return LuSun;
  }
}

export function getCoordsFromCoordsString(locationCoords: string) {
  const parts = locationCoords.split(',');

  const lat = parseFloat(parts[0]);
  const lon = parseFloat(parts[1]);

  return { lat, lon };
}

export function groupByDay(data: List[]): [string, List[]][] {
  const groupedData = data.reduce(
    (acc, current) => {
      const date = new Date(current.dt * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 0-indexed
      const day = date.getDate();

      // Format the date as YYYY-MM-DD as a key for the accumulator
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(current);
      return acc;
    },
    {} as Record<string, List[]>,
  );

  return Object.entries(groupedData);
}

export function getDate(t: 'today' | 'tomorrow') {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-indexed
  const day = t === 'today' ? date.getDate() : date.getDate() + 1;

  // Format the date as YYYY-MM-DD as a key for the accumulator
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}

export function formatDate(formattedDate: string): string {
  const date = new Date(formattedDate);
  const month = date.toLocaleString('default', { month: 'long' }); // Get month name
  const day = date.getDate().toString().padStart(2, '0'); // Pad day with leading zero

  return `${month} ${day}`;
}
