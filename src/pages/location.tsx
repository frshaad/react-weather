import { useParams } from 'react-router-dom';

import CurrentOverview from '@/components/current-overview';
import ForecastOverview from '@/components/forecast-overview';

type LocationParam = {
  locationCoords: string;
};

export default function Location() {
  const { locationCoords } = useParams<LocationParam>();

  if (!locationCoords) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <CurrentOverview locationCoords={locationCoords} />
      <ForecastOverview locationCoords={locationCoords} />
    </section>
  );
}
