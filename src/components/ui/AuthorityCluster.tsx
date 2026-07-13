import { Award, BadgeCheck, Users } from 'lucide-react';
import { site } from '@/data/site';
import RegistrationBadge from './RegistrationBadge';

interface AuthorityClusterProps {
  tone?: 'light' | 'dark';
}

function stat(key: string) {
  return site.stats.find((s) => s.key === key)!;
}

/**
 * The real authority signals the brief asks to cluster near the hero and
 * again right before the booking ask: years of experience, current academic
 * title, patient count, and the registration number (placeholder until
 * supplied). One component, two mounts — Hero and Contact — via `tone`.
 */
export default function AuthorityCluster({ tone = 'light' }: AuthorityClusterProps) {
  const years = stat('years');
  const patients = stat('patients');

  return (
    <ul
      className={[
        'flex flex-wrap items-center gap-x-6 gap-y-3 text-sm',
        tone === 'dark' ? 'text-mist/80' : 'text-slate-muted',
      ].join(' ')}
    >
      <li className="inline-flex items-center gap-2">
        <BadgeCheck className="h-4 w-4 text-breath" aria-hidden="true" />
        {years.value} years experience
      </li>
      <li className="inline-flex items-center gap-2">
        <Award className="h-4 w-4 text-brass" aria-hidden="true" />
        Professor &amp; Head, Respiratory Medicine
      </li>
      <li className="inline-flex items-center gap-2">
        <Users className="h-4 w-4 text-breath" aria-hidden="true" />
        {patients.value} patients cared for
      </li>
      <li>
        <RegistrationBadge tone={tone} />
      </li>
    </ul>
  );
}
