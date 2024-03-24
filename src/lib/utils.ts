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
