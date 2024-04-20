import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { List } from '@/types/forecast-weather.type';

import ForecastCard from './forecast-card';

type Props = {
  selectedDay: string;
  forecastDataGroupedByDate: [string, List[]][];
};

export default function ForecastWeatherCards({
  selectedDay,
  forecastDataGroupedByDate,
}: Props) {
  const weatherData = forecastDataGroupedByDate.find(
    (day) => day[0] === selectedDay,
  )?.[1];

  return (
    <Carousel>
      <CarouselContent>
        {weatherData?.map((data) => <ForecastCard key={data.dt} data={data} />)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
