import { useState } from 'react';

import { convertDtToLocalTime } from '@/lib/utils';
import type { List } from '@/types/forecast-weather.type';

import DateTab from './date-tab';

type DateTabsProps = {
  listOfDays: List[];
};

export default function DateTabs({ listOfDays }: DateTabsProps) {
  const [selectedDay, setSelectedDay] = useState(listOfDays[0].dt);

  return (
    <ul className="flex items-center gap-2">
      {listOfDays.slice(0, 5).map((day) => (
        <DateTab
          key={day.dt}
          onClick={() => setSelectedDay(day.dt)}
          selected={selectedDay === day.dt}
        >
          {convertDtToLocalTime(day.dt)}
        </DateTab>
      ))}
    </ul>
  );
}
