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

export default function getWeatherIcon(icon: string): IconType {
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
