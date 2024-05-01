import { LuWind } from 'react-icons/lu';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import {
  getHHMMFromTimestamp,
  getTempWithUnit,
  getWeatherIcon,
} from '@/lib/utils';
import type { List } from '@/types/forecast-weather.type';

type Props = {
  data: List;
};

export default function ForecastCard({ data }: Props) {
  const WeatherIcon = getWeatherIcon(data.weather[0].icon);
  const windSpeed = data.wind.speed * 3.6;
  const time = getHHMMFromTimestamp(data.dt);
  const temp = getTempWithUnit(data.main.temp);

  return (
    <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
      <Card className="text-center">
        <CardHeader>
          <CardTitle>{time}</CardTitle>
          <CardDescription>{data.weather[0].main}</CardDescription>
        </CardHeader>
        <CardContent className="relative mb-6 flex flex-col items-center">
          <p className="z-10 text-4xl font-medium text-[#2193b0]">{temp}</p>
          <WeatherIcon
            size={40}
            className="absolute bottom-0 text-[#2193b0]/20"
          />
        </CardContent>
        <CardFooter className="">
          <p className="flex w-full items-center justify-center gap-2 text-sm">
            <LuWind />
            {`${windSpeed.toFixed(0)} km/h`}
          </p>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
