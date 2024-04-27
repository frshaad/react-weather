import CurrentOverview from '@/components/current-overview';
import ForecastOverview from '@/components/forecast-overview';

export default function Location() {
  return (
    <section className="space-y-12">
      <CurrentOverview />
      <ForecastOverview />
    </section>
  );
}
