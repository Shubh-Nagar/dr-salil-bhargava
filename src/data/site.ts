/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit copy, contact details, services, credentials, timeline and
 *  testimonials here — every component reads from this file, so you never
 *  have to hunt through JSX to update text.
 *
 *  Content is based on Dr. Salil Bhargava's verified public profile
 *  (Professor & Head of Respiratory Medicine, MGM Medical College Indore;
 *  Clean Air Champion, Doctors For Clean Air). Replace the placeholder
 *  portrait in /public and wire the contact form to your backend/Formspree.
 */

import type { LucideIcon } from 'lucide-react';
import {
  Wind,
  Stethoscope,
  Activity,
  HeartPulse,
  Moon,
  Gauge,
  FlaskConical,
  ShieldPlus,
  Microscope,
  Leaf,
  BookOpen,
  Handshake,
  ClipboardList,
  ClipboardCheck,
} from 'lucide-react';

// Kept as a standalone const (rather than inline in `site`) so the booking-form
// options and the compile-time `BookingReason` union below share one source.
const bookingReasons = [
  'Asthma or COPD review',
  'Persistent cough or breathlessness',
  'Snoring / suspected sleep apnea',
  'TB evaluation & treatment',
  'Allergy or chest infection',
  'Second opinion on lung reports',
] as const;

type BookingReason = (typeof bookingReasons)[number];

export const site = {
  doctor: {
    name: 'Dr. Salil Bhargava',
    shortName: 'Dr. Bhargava',
    credentials: 'MBBS, MD, DTCD, DNB (Respiratory Medicine)',
    title: 'Pulmonologist & Respiratory Medicine Specialist',
    role: 'Professor & Head, Department of Respiratory Medicine — MGM Medical College, Indore',
    yearsExperience: 28,
    location: 'Indore, Madhya Pradesh',
    portrait: '/assets/sir-photo.webp',
    // Placeholder only — replace with the real Madhya Pradesh Medical Council
    // registration number when supplied. Never invent a real-looking number.
    registrationNumber: '[MPMC Reg. No. — TBD]',
    // A short (~20s) personal welcome recording. `WelcomeAudio` renders nothing
    // until a real file path is supplied here — never synthesize or fake his voice.
    welcomeAudioSrc: null as string | null,
  },

  contact: {
    phoneDisplay: '+91 70890 40404',
    phoneHref: 'tel:+917089040404',
    whatsappHref: 'https://wa.me/917089040404',
    email: 'bhargavasalil@hotmail.com',
    emailHref: 'mailto:bhargavasalil@hotmail.com',
    clinicName: 'Gyanpushp Research Center for Chest & Allergy Diseases',
    addressLines: ['Surabhi, 76 Dhar Kothi', 'Behind Progressive School', 'Indore, Madhya Pradesh 452001'],
    // Google Maps embed centred on Indore. Replace `q=` with the exact clinic pin when available.
    mapEmbedSrc:
      'https://www.google.com/maps?q=Dhar%20Kothi%2C%20Indore%2C%20Madhya%20Pradesh&output=embed',
    hours: [
      { day: 'All Days', time: '6:00 PM – 8:30 PM' },
    ],
    socials: [
      { label: 'Facebook', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },

  hero: {
    eyebrow: 'Pulmonology · Respiratory Medicine · Indore',
    headlineLead: 'Every breath',
    headlineEmphasis: 'deserves expert care.',
    subhead:
      'Senior pulmonologist and academic leader with 28+ years treating asthma, COPD, tuberculosis, sleep disorders and allergic airway disease — combining advanced diagnostics with genuinely personal attention.',
  },

  // Clinical-readout style trust figures shown beneath the hero. `key` gives
  // AuthorityCluster a stable lookup (e.g. patient count) independent of order/index.
  stats: [
    { key: 'years', value: '28+', label: 'Years of practice' },
    { key: 'title', value: 'Prof. & HOD', label: 'Respiratory Medicine, MGM' },
    { key: 'services', value: '8+', label: 'Diagnostic services' },
    { key: 'patients', value: '50k+', label: 'Patients cared for' },
  ] as { key: string; value: string; label: string }[],

  about: {
    lead: 'A physician, an educator, and a clean-air advocate.',
    paragraphs: [
      'Dr. Salil Bhargava is a Pulmonologist and Respiratory Medicine Specialist based in Indore, and Professor & Head of the Department of Respiratory Medicine at Mahatma Gandhi Memorial (MGM) Medical College. Over 28+ years he has cared for tens of thousands of patients with conditions ranging from asthma and COPD to tuberculosis, interstitial lung disease and complex sleep disorders.',
      'He led Indore’s dedicated COVID facility at the MRTB Hospital through the pandemic, and continues to teach and mentor the next generation of chest physicians. As a Clean Air Champion with Doctors For Clean Air, he has spent years raising public awareness of the link between air pollution and respiratory health across Madhya Pradesh.',
      'His approach is unhurried and evidence-based: careful listening, precise diagnostics, and treatment plans explained in language patients and families can act on with confidence.',
    ],
    qualifications: [
      { degree: 'MBBS', place: 'MGM Medical College, Indore', year: '1982' },
      { degree: 'DTCD — Tuberculosis & Chest Diseases', place: 'MGM Medical College, Indore', year: '1986' },
      { degree: 'MD — Medicine', place: 'MGM Medical College, Indore', year: '1994' },
      { degree: 'DNB — Respiratory Diseases', place: 'MGM Medical College, Indore', year: '2006' },
    ],
  },

  // Copy for the small "book a consult" link shown under Expertise/Service cards —
  // one shared label so it isn't hardcoded per-card in the components.
  microCtaLabel: 'Concerned about this? Book a consult',

  // Conditions treated — the "why patients come" grid. `reason` maps each condition to
  // the closest `bookingReasons` entry, so its MicroCTA can preselect that reason in
  // the appointment form.
  expertise: [
    {
      icon: Wind,
      name: 'Asthma & Allergic Airway Disease',
      desc: 'Long-term control of asthma and allergy-driven breathing problems, including inhaler technique and trigger management.',
      image:
        'https://images.unsplash.com/photo-1645273474732-40e757681b97?q=80&w=900&auto=format&fit=crop',
      reason: 'Asthma or COPD review',
    },
    {
      icon: Activity,
      name: 'COPD & Chronic Bronchitis',
      desc: 'Staging, symptom relief and rehabilitation for chronic obstructive pulmonary disease and smoker’s lung.',
      image:
        'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=900&auto=format&fit=crop',
      reason: 'Asthma or COPD review',
    },
    {
      icon: ShieldPlus,
      name: 'Tuberculosis (TB)',
      desc: 'Diagnosis and full-course management of pulmonary and drug-resistant TB, with a focus on completion and cure.',
      image:
        'https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c?q=80&w=900&auto=format&fit=crop',
      reason: 'TB evaluation & treatment',
    },
    {
      icon: Microscope,
      name: 'Interstitial Lung Disease (ILD)',
      desc: 'Evaluation of persistent breathlessness, fibrosis and scarring of the lungs with targeted therapy.',
      image:
        'https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=900&auto=format&fit=crop',
      reason: 'Second opinion on lung reports',
    },
    {
      icon: Moon,
      name: 'Sleep Apnea & Snoring',
      desc: 'Assessment of obstructive sleep apnea and disturbed sleep, with sleep studies and CPAP/BiPAP titration.',
      image:
        'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=900&auto=format&fit=crop',
      reason: 'Snoring / suspected sleep apnea',
    },
    {
      icon: HeartPulse,
      name: 'Chronic Cough & Breathlessness',
      desc: 'Getting to the root of a lingering cough, wheeze or shortness of breath that everyday care hasn’t resolved.',
      image:
        'https://images.unsplash.com/photo-1634128221567-3220e071d1ea?q=80&w=900&auto=format&fit=crop',
      reason: 'Persistent cough or breathlessness',
    },
  ] as { icon: LucideIcon; name: string; desc: string; image: string; reason: BookingReason }[],

  // Symptom-to-specialist mini triage shown right after Expertise. `expertiseMatch`
  // looks up the corresponding entry above by `name`, so its icon/desc/reason are
  // reused rather than duplicated here.
  triage: {
    eyebrow: 'Not Sure Where To Start?',
    title: 'Tell us what you’re noticing',
    intro: 'Pick what brought you here — we’ll show you how Dr. Bhargava approaches exactly that.',
    symptoms: [
      {
        label: 'Persistent cough',
        message:
          'A cough that hasn’t resolved with everyday care is exactly what Dr. Bhargava specializes in — most cases are clarified within one focused evaluation.',
        expertiseMatch: 'Chronic Cough & Breathlessness',
      },
      {
        label: 'Breathlessness',
        message:
          'Shortness of breath deserves a proper work-up, not guesswork. Here’s the condition area this usually falls under.',
        expertiseMatch: 'Chronic Cough & Breathlessness',
      },
      {
        label: 'Snoring / sleep issues',
        message:
          'Disturbed sleep and snoring are often signs of a treatable sleep disorder — an overnight sleep study can confirm it.',
        expertiseMatch: 'Sleep Apnea & Snoring',
      },
      {
        label: 'Wheeze / allergy',
        message:
          'Wheeze and allergy-driven symptoms respond well to the right trigger plan and inhaler technique.',
        expertiseMatch: 'Asthma & Allergic Airway Disease',
      },
      {
        label: 'Chronic condition follow-up',
        message:
          'Already managing a lung condition? A review confirms your current plan is still the right one — or adjusts it.',
        expertiseMatch: 'COPD & Chronic Bronchitis',
      },
    ] as { label: string; message: string; expertiseMatch: string }[],
  },

  // Diagnostic & therapeutic services offered at the clinic. `reason` is optional —
  // a service like ECG doesn't map cleanly to one symptom, so its MicroCTA falls
  // back to the form's default reason.
  services: [
    {
      icon: Moon,
      name: 'Sleep Study (Polysomnography)',
      desc: 'Overnight recording of breathing, oxygen and sleep stages to diagnose sleep apnea and related disorders.',
      reason: 'Snoring / suspected sleep apnea',
    },
    {
      icon: Stethoscope,
      name: 'Consultation',
      desc: 'A thorough one-on-one consultation with Dr. Bhargava — history, examination and a clear, personalized plan for your respiratory concern.',
    },
    {
      icon: FlaskConical,
      name: 'Pulmonary Function Test (PFT / Spirometry)',
      desc: 'Precise measurement of lung volumes and airflow to diagnose and monitor asthma, COPD and ILD.',
      reason: 'Asthma or COPD review',
    },
    {
      icon: Gauge,
      name: 'Pulse Oximetry',
      desc: 'Non-invasive monitoring of blood-oxygen saturation to guide oxygen and respiratory therapy.',
      reason: 'Persistent cough or breathlessness',
    },
    {
      icon: Wind,
      name: 'Oxygen Therapy',
      desc: 'Supplemental oxygen assessment and titration for patients with low blood-oxygen levels.',
      reason: 'Persistent cough or breathlessness',
    },
    {
      icon: Stethoscope,
      name: 'Non-Invasive Ventilation (NIV)',
      desc: 'Breathing support through a mask for respiratory failure — avoiding invasive intubation where possible.',
      reason: 'Persistent cough or breathlessness',
    },
    {
      icon: Moon,
      name: 'CPAP / BiPAP Titration',
      desc: 'Setting up and fine-tuning positive-airway-pressure therapy for comfortable, effective sleep.',
      reason: 'Snoring / suspected sleep apnea',
    },
    {
      icon: HeartPulse,
      name: 'ECG',
      desc: 'Electrocardiography to assess heart rhythm alongside respiratory evaluation.',
    },
    {
      icon: ShieldPlus,
      name: 'Allergy Testing',
      desc: 'Identifying respiratory allergens that trigger asthma, rhinitis and recurrent chest symptoms.',
      reason: 'Allergy or chest infection',
    },
  ] as { icon: LucideIcon; name: string; desc: string; reason?: BookingReason }[],

  // Real, chronological career timeline — order carries meaning here.
  timeline: [
    {
      year: 'Present',
      role: 'Professor & Head, Department of Respiratory Medicine',
      org: 'MGM Medical College, Indore',
    },
    {
      year: 'COVID-19',
      role: 'In-charge, Dedicated COVID Hospital',
      org: 'MRTB Hospital, Indore',
    },
    {
      year: 'Ongoing',
      role: 'Consultant Pulmonologist',
      org: 'Gyanpushp Research Center for Chest & Allergy Diseases',
    },
    {
      year: '2007 – 2011',
      role: 'Superintendent cum Joint Director',
      org: 'M.Y. Hospital, Indore',
    },
    {
      year: '1996',
      role: 'Faculty, Department of Chest & TB',
      org: 'MGM Medical College, Indore',
    },
  ],

  memberships: [
    'Fellow & Life Member — National College of Chest Physicians (NCCP)',
    'Life Member — Indian Chest Society (ICS)',
    'Life Member — Association of Physicians of India (API)',
    'Indian Society of Critical Care Medicine (ISCCM)',
    'Indian Society for Study of Lung Cancer (ISSLC)',
    'Life Member — Cardiological Society of India',
    'Member — Indian Medical Association (IMA)',
  ],

  // Publications, research & public-health initiatives.
  research: {
    lead: 'Beyond the clinic',
    intro:
      'Alongside patient care, Dr. Bhargava contributes to research, medical education and public health — with a particular commitment to the air his city breathes.',
    initiatives: [
      {
        icon: Leaf,
        title: 'Clean Air Champion — Doctors For Clean Air',
        desc: 'Leads the Madhya Pradesh chapter of the Doctors For Clean Air initiative, running CMEs and public campaigns on the health effects of air pollution and how to reduce them.',
        tag: 'Public Health',
      },
      {
        icon: ShieldPlus,
        title: 'Working Towards a TB-Free India',
        desc: 'Co-chair of a national collaboration to eliminate tuberculosis among Indians, advancing early diagnosis and treatment completion.',
        tag: 'TB Elimination',
      },
      {
        icon: BookOpen,
        title: 'Editorial Board — Lung India',
        desc: 'Serves on the editorial board of Lung India, the peer-reviewed journal of the Indian Chest Society, and has authored articles and book chapters in national and international publications.',
        tag: 'Research',
      },
    ] as { icon: LucideIcon; title: string; desc: string; tag: string }[],
    awards: [
      'President’s Trophy — Anti-Smoking Campaign (1988–89)',
      'Recognised Clean Air Champion, Madhya Pradesh',
    ],
  },

  // Video features from the Lung Care Foundation / Doctors For Clean Air initiative.
  media: {
    lead: 'In the Media',
    title: 'Speaking up for cleaner air, on camera',
    intro:
      'Interviews and features from the Lung Care Foundation on air pollution, tuberculosis and respiratory health.',
    videos: [
      {
        id: '0odu79Sui60',
        title: 'How One Doctor Is Cutting Fossil Fuels to Protect Health',
        source: 'Lung Care Foundation',
      },
      {
        id: 'XAFH87jv2bU',
        title: 'Can Poor Air Quality Worsen TB? Health Expert Breaks It Down',
        source: 'Lung Care Foundation',
      },
      {
        id: '7FKKGVmVNVg',
        title: 'Clean Air, Healthier Lungs — Indore',
        source: 'Lung Care Foundation',
      },
      {
        id: '-Gf1LwoHsX0',
        title: 'Doctors For Clean Air — Head, Department of Pulmonology, MGM College',
        source: 'Lung Care Foundation',
      },
    ],
  },

  // Placeholder testimonials — replace `body`/`name`/`avatar` with real, consented reviews.
  testimonials: [
    {
      body: 'Dr. Bhargava took the time to actually explain what was happening with my lungs. After years of being short of breath, I finally have a plan that works.',
      name: 'Patient testimonial',
      meta: 'COPD care · Indore',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      body: 'My father’s TB treatment was managed start to finish with so much patience. The whole team made sure he completed the course and recovered fully.',
      name: 'Family member',
      meta: 'Tuberculosis care',
      avatar: 'https://i.pravatar.cc/150?img=68',
    },
    {
      body: 'The sleep study was straightforward and the CPAP setup changed how I sleep. I wake up rested for the first time in years.',
      name: 'Patient testimonial',
      meta: 'Sleep apnea · CPAP',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      body: 'My asthma used to flare up every season. Getting my inhaler technique corrected and a proper trigger plan made more difference than years of guesswork.',
      name: 'Patient testimonial',
      meta: 'Asthma care · Indore',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      body: 'We came in for a second opinion on my mother’s lung scans. Dr. Bhargava reviewed everything patiently and gave us real clarity on the next steps.',
      name: 'Family member',
      meta: 'Second opinion · ILD',
      avatar: 'https://i.pravatar.cc/150?img=24',
    },
    {
      body: 'The allergy testing pinpointed exactly what was triggering my chest infections every winter. Genuinely life-changing to finally know the cause.',
      name: 'Patient testimonial',
      meta: 'Allergy testing',
      avatar: 'https://i.pravatar.cc/150?img=15',
    },
  ],

  // Heading copy for the guided box-breathing widget between Expertise and Stats.
  breathingExercise: {
    eyebrow: 'Take A Moment',
    title: 'A minute to breathe, on us',
    intro:
      'Box breathing is often recommended in pulmonary rehab to calm the nervous system and steady your breathing — try a few rounds.',
  },

  // "What happens when you book" walkthrough, shown right before Contact to
  // remove the anxiety of the unknown at the exact moment a visitor is deciding.
  firstVisit: {
    eyebrow: 'Before You Book',
    title: 'What actually happens at your first visit',
    intro: 'No surprises — here’s exactly how a first consultation unfolds.',
    steps: [
      {
        icon: Handshake,
        title: 'Greeted',
        desc: 'Arrive and check in at the clinic — no long forms, just the essentials.',
      },
      {
        icon: ClipboardList,
        title: 'History taken',
        desc: 'A careful conversation about your symptoms, history, and what you’ve already tried.',
      },
      {
        icon: Stethoscope,
        title: 'Assessment',
        desc: 'A hands-on examination, plus any diagnostics needed — explained as they happen.',
      },
      {
        icon: ClipboardCheck,
        title: 'Personalized plan',
        desc: 'A clear treatment plan in plain language, with next steps you can act on immediately.',
      },
    ] as { icon: LucideIcon; title: string; desc: string }[],
  },

  // Stretch-goal AQI widget shown inside Research. No API key is configured, so
  // this is deliberately labelled as illustrative example content rather than a
  // live reading — replace with a real API integration when a key is supplied.
  aqi: {
    city: 'Indore',
    isLive: false,
    exampleAsOf: 'Illustrative example',
    value: 138,
    category: 'Unhealthy for Sensitive Groups',
    note: 'At this level, people with asthma, COPD or other lung conditions may notice more symptoms outdoors — limiting exertion and wearing a mask outdoors can help.',
  },

  // Shown as a tooltip when the SpiroDivider motif is hovered/focused —
  // quietly demonstrates expertise instead of just claiming it.
  spiroCurveExplainer:
    'This traces how fast you exhale against how much air you’ve exhaled — its exact shape is what Dr. Bhargava reads in a PFT to spot asthma, COPD and other airway patterns.',

  // Reasons-to-visit shown near the appointment form.
  bookingReasons,
} as const;

export type Site = typeof site;
