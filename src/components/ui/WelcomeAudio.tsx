import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { site } from '@/data/site';

/**
 * A short (~20s) personal welcome message slot. Renders nothing — hidden
 * and inert — until a real recording is supplied at `site.doctor.welcomeAudioSrc`.
 * Never synthesize or fake his voice; this stays empty until then.
 */
export default function WelcomeAudio() {
  const src = site.doctor.welcomeAudioSrc;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!src) return null;

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) el.pause();
    else el.play();
  }

  return (
    <div className="inline-flex items-center gap-3">
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? 'Pause welcome message' : `Play a short welcome message from ${site.doctor.shortName}`
        }
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine/10 text-pine transition hover:bg-pine hover:text-paper"
      >
        {playing ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Play className="ml-0.5 h-4 w-4" aria-hidden="true" />
        )}
      </button>
      <span className="text-sm text-slate-muted">Hear a short welcome from {site.doctor.shortName}</span>
    </div>
  );
}
