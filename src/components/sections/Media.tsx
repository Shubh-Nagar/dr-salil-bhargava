import { useEffect, useState } from 'react';
import { Play, X, Youtube } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

/**
 * Video features from press/advocacy work. Thumbnails open a lightbox with
 * a lazily-mounted embed, so four videos don't cost four iframes up front.
 */
export default function Media() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeVideo = site.media.videos.find((v) => v.id === activeId);

  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId]);

  return (
    <section id="media" className="scroll-mt-24 bg-ink py-20 text-mist sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={site.media.lead}
          title={site.media.title}
          intro={site.media.intro}
          tone="dark"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {site.media.videos.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActiveId(video.id)}
                className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-white/10 text-left"
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-breath/90 text-ink shadow-xl transition group-hover:scale-110 group-hover:bg-breath">
                    <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                  </span>
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-wider text-breath-light">
                    <Youtube className="h-3.5 w-3.5" aria-hidden="true" />
                    {video.source}
                  </p>
                  <h3 className="mt-1.5 line-clamp-2 text-base font-semibold text-white">
                    {video.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
          onClick={() => setActiveId(null)}
        >
          <button
            type="button"
            onClick={() => setActiveId(null)}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
