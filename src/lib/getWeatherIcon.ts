import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Cloudy,
  LucideIcon,
  Snowflake,
  Sun,
} from 'lucide-react';

export default function getWeatherIcon(icon: string): LucideIcon {
  switch (icon) {
    case '01d':
      return Sun;

    case '02d':
      return CloudSun;

    case '03d':
      return Cloud;

    case '04d':
      return Cloudy;

    case '09d':
      return CloudDrizzle;

    case '10d':
      return CloudRain;

    case '11d':
      return CloudLightning;

    case '12d':
      return Snowflake;

    case '50d':
      return CloudFog;

    default:
      return Sun;
  }
}
