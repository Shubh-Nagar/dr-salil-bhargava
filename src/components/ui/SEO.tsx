import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SITE_URL = 'https://drsalilbhargava.com';

/**
 * Per-page meta. Static defaults live in index.html; this lets individual
 * routes override title/description/canonical for good SEO if the site grows.
 */
export default function SEO({
  title = 'Dr. Salil Bhargava | Pulmonologist & Respiratory Medicine Specialist, Indore',
  description = 'Senior Pulmonologist and Professor & Head of Respiratory Medicine, MGM Medical College Indore. 28+ years treating asthma, COPD, TB, sleep disorders and allergy. Book an appointment.',
  path = '/',
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
