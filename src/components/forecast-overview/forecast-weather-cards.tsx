import { List } from '@/types/forecast-weather.type';

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
    <div>
      {weatherData?.map((data) => <p key={data.dt}>{data.weather[0].main}</p>)}
    </div>
  );
}
