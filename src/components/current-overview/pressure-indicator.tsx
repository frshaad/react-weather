import { categorizePressure, cn } from '@/lib/utils';

type Props = {
  pressure: number;
};

export default function PressureIndicator({ pressure }: Props) {
  const pressureCategory = categorizePressure(pressure);

  return (
    <p
      className={cn('capitalize font-bold hidden lg:block text-md', {
        'text-destructive/70': pressureCategory === 'high',
        'text-yellow-500/70': pressureCategory === 'moderate',
        'text-green-600/70': pressureCategory === 'low',
      })}
    >
      {pressureCategory.length > 4
        ? pressureCategory.slice(0, 3)
        : pressureCategory}
    </p>
  );
}
