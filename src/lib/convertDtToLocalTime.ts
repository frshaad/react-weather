import { format } from 'date-fns';

export default function convertDtToLocalTime(dt: number): string {
  const date = new Date(dt * 1000);
  date.setTime(date.getTime());

  return format(date, 'dd MMMM yyyy');
}
