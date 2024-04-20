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
    <div className="flex items-center gap-6 overflow-scroll overflow-y-hidden">
      {weatherData?.map((data) => <ForecastCard key={data.dt} data={data} />)}
    </div>
  );
}
