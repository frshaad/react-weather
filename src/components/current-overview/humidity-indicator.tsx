import { LuDroplet, LuDroplets, LuPalmtree } from 'react-icons/lu';

import cn from '@/lib/utils';

type Props = {
  humididty: number;
};

export default function HumidityIndicator({ humididty }: Props) {
  let indicator: 'dry' | 'comfort' | 'humid';

  if (humididty >= 30 && humididty <= 60) {
    indicator = 'comfort';
  } else if (humididty < 30) {
    indicator = 'dry';
  } else {
    indicator = 'humid';
  }

  return (
    <div
      className={cn('capitalize font-bold text-md', {
        'text-blue-500/70': indicator === 'humid',
        'text-green-500/70': indicator === 'comfort',
        'text-orange-400/70': indicator === 'dry',
      })}
    >
      <p className="flex items-center gap-2 capitalize">
        {indicator === 'humid' && (
          <>
            <LuDroplets className="text-blue-500/70" size={18} /> {indicator}
          </>
        )}
        {indicator === 'comfort' && (
          <>
            <LuDroplet className="text-green-500/70" size={18} /> {indicator}
          </>
        )}
        {indicator === 'dry' && (
          <>
            <LuPalmtree className="text-orange-500/70" size={18} /> {indicator}
          </>
        )}
      </p>
    </div>
  );
}
