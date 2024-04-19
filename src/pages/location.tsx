import { useParams } from 'react-router-dom';

import CurrentOverview from '@/components/current-overview';
import ForecastOverview from '@/components/forecast-overview';
import { LocationParam } from '@/types';

export default function Location() {
  const { locationCoords } = useParams<LocationParam>();

  if (!locationCoords) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="space-y-12">
      <CurrentOverview />
      <ForecastOverview />
    </section>
  );
}
