import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { site } from '@/data/site';

interface FormState {
  name: string;
  phone: string;
  reason: string;
  message: string;
}

const empty: FormState = { name: '', phone: '', reason: site.bookingReasons[0], message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{7,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    /**
     * Zero-backend default: opens the visitor's email client with a
     * pre-filled appointment request. To collect submissions automatically,
     * replace this block with a fetch() to Formspree or your own API, e.g.:
     *
     *   await fetch('https://formspree.io/f/XXXX', {
     *     method: 'POST',
     *     headers: { 'Content-Type': 'application/json' },
     *     body: JSON.stringify(form),
     *   });
     */
    const subject = encodeURIComponent(`Appointment request — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nReason: ${form.reason}\n\n${form.message}`,
    );
    window.location.href = `${site.contact.emailHref}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(empty);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-pine py-20 text-mist sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Details */}
        <div>
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Let’s help you breathe easier"
            intro="Share a few details and the clinic will confirm your appointment. For urgent concerns, please call directly."
            tone="dark"
          />

          <div className="mt-8 space-y-5">
            <ContactRow icon={MapPin} label="Clinic">
              <p className="font-medium text-white">{site.contact.clinicName}</p>
              <p className="text-sm text-mist/70">{site.contact.addressLines.join(', ')}</p>
            </ContactRow>

            <ContactRow icon={Phone} label="Call">
              <a href={site.contact.phoneHref} className="font-mono text-white hover:underline">
                {site.contact.phoneDisplay}
              </a>
            </ContactRow>

            <ContactRow icon={Mail} label="Email">
              <a href={site.contact.emailHref} className="break-all text-white hover:underline">
                {site.contact.email}
              </a>
            </ContactRow>

            <ContactRow icon={Clock} label="Hours">
              <ul className="space-y-1 text-sm">
                {site.contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span className="text-mist/70">{h.day}</span>
                    <span className="text-white">{h.time}</span>
                  </li>
                ))}
              </ul>
            </ContactRow>
          </div>

          <a
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-8 border-white/25 text-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Message on WhatsApp
          </a>

          {/* Map */}
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={site.contact.mapEmbedSrc}
                title="Clinic location on Google Maps"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal>
          <div className="rounded-3xl bg-paper p-7 text-slate-body shadow-2xl sm:p-9">
            {sent ? (
              <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-breath" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-semibold text-ink">Almost there!</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-muted">
                  Your email app should have opened with the request pre-filled. If it didn’t, please
                  call us at {site.contact.phoneDisplay}.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-ghost mt-6 border-pine/25 text-pine hover:bg-pine hover:text-paper"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <Field
                  id="name"
                  label="Full name"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  error={errors.name}
                  placeholder="e.g. Rahul Sharma"
                  autoComplete="name"
                />
                <Field
                  id="phone"
                  label="Phone number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => update('phone', v)}
                  error={errors.phone}
                  placeholder="e.g. +91 98765 43210"
                  autoComplete="tel"
                />

                <div>
                  <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-ink">
                    Reason for visit
                  </label>
                  <select
                    id="reason"
                    value={form.reason}
                    onChange={(e) => update('reason', e.target.value)}
                    className="w-full rounded-xl border border-mist bg-mist/30 px-4 py-3 text-sm text-ink outline-none transition focus:border-breath focus:bg-white"
                  >
                    {site.bookingReasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message <span className="text-slate-muted">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Briefly describe your symptoms or preferred time."
                    className="w-full resize-none rounded-xl border border-mist bg-mist/30 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-muted/70 focus:border-breath focus:bg-white"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request Appointment
                </button>
                <p className="text-center text-xs text-slate-muted">
                  We’ll only use your details to arrange your appointment.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-breath-light">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-breath-light">
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={[
          'w-full rounded-xl border bg-mist/30 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-muted/70 focus:bg-white',
          error ? 'border-red-400 focus:border-red-500' : 'border-mist focus:border-breath',
        ].join(' ')}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
