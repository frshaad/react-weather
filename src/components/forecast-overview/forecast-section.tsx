import { useState } from 'react';

import { formatDate, getDate, groupByDay } from '@/lib/utils';
import type { List } from '@/types/forecast-weather.type';

import DateTab from './date-tab';
import ForecastWeatherCards from './forecast-weather-cards';

type Props = {
  listOfDays: List[];
};

export default function ForecastSection({ listOfDays }: Props) {
  const forecastDataGroupedByDate = groupByDay(listOfDays);
  const [selectedDay, setSelectedDay] = useState(
    forecastDataGroupedByDate[0][0],
  );
  const today = getDate('today');
  const tomorrow = getDate('tomorrow');

  return (
    <div className="mb-2 space-y-4">
      <ul className="flex items-center gap-2">
        {forecastDataGroupedByDate.map((day) => {
          let date: string;
          if (day[0] === today) {
            date = 'Today';
          } else if (day[0] === tomorrow) {
            date = 'Tommorow';
          } else {
            date = formatDate(day[0]);
          }

          return (
            <DateTab
              key={day[0]}
              onClick={() => setSelectedDay(day[0])}
              selected={selectedDay === day[0]}
            >
              {date}
            </DateTab>
          );
        })}
      </ul>

      <ForecastWeatherCards
        selectedDay={selectedDay}
        forecastDataGroupedByDate={forecastDataGroupedByDate}
      />
    </div>
  );
}
