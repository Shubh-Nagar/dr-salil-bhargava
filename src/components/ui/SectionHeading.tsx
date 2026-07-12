import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

/** Shared section header so eyebrows, titles and intros stay consistent. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={[
        'max-w-2xl',
        isCenter && 'mx-auto text-center',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        className={[
          'text-3xl font-semibold leading-tight sm:text-4xl',
          tone === 'dark' && 'text-paper',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={[
            'mt-4 text-base leading-relaxed sm:text-lg',
            tone === 'dark' ? 'text-mist/80' : 'text-slate-muted',
          ].join(' ')}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
