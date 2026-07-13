import { Wind } from 'lucide-react';
import { site } from '@/data/site';

/**
 * Stretch-goal AQI widget tied to Indore. No live API key is configured, so
 * this deliberately shows static, clearly-labelled example content rather
 * than pretending to be a real-time reading — never invent a "Live" badge
 * for data that isn't. Defaults to Indore; never prompts for geolocation.
 */
export default function AqiCard() {
  const { city, value, category, note, isLive, exampleAsOf } = site.aqi;

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-mist bg-paper p-6 sm:flex-row sm:items-center">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-breath/10 text-pine">
        <Wind className="h-6 w-6" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-semibold text-ink">{city} Air Quality Index</p>
          <span className="rounded-full bg-brass/10 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-brass">
            {isLive ? 'Live' : exampleAsOf}
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-muted">{note}</p>
      </div>
      <div className="shrink-0 text-center sm:text-right">
        <p className="font-mono text-3xl font-semibold text-pine">{value}</p>
        <p className="text-xs text-slate-muted">{category}</p>
      </div>
    </div>
  );
}
