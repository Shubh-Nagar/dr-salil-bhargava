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
} from 'lucide-react';

export const site = {
  doctor: {
    name: 'Dr. Salil Bhargava',
    shortName: 'Dr. Bhargava',
    credentials: 'MBBS, MD, DTCD, DNB (Respiratory Medicine)',
    title: 'Pulmonologist & Respiratory Medicine Specialist',
    role: 'Professor & Head, Department of Respiratory Medicine — MGM Medical College, Indore',
    yearsExperience: 28,
    location: 'Indore, Madhya Pradesh',
    portrait: '/doctor-portrait.svg', // ← replace with a real photo (e.g. /doctor-portrait.jpg)
  },

  contact: {
    phoneDisplay: '+91 98270 60404',
    phoneHref: 'tel:+919827060404',
    whatsappHref: 'https://wa.me/919827060404',
    email: 'bhargavasalil@hotmail.com',
    emailHref: 'mailto:bhargavasalil@hotmail.com',
    clinicName: 'Gyanpushp Research Center for Chest & Allergy Diseases',
    addressLines: ['Surabhi, 76 Dhar Kothi', 'Behind Progressive School', 'Indore, Madhya Pradesh 452001'],
    // Google Maps embed centred on Indore. Replace `q=` with the exact clinic pin when available.
    mapEmbedSrc:
      'https://www.google.com/maps?q=Dhar%20Kothi%2C%20Indore%2C%20Madhya%20Pradesh&output=embed',
    hours: [
      { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
      { day: 'Saturday', time: '10:00 AM – 8:00 PM' },
      { day: 'Sunday', time: 'Closed' },
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

  // Clinical-readout style trust figures shown beneath the hero.
  stats: [
    { value: '28+', label: 'Years of practice' },
    { value: 'Prof. & HOD', label: 'Respiratory Medicine, MGM' },
    { value: '8+', label: 'Diagnostic services' },
    { value: '50k+', label: 'Patients cared for' },
  ] as { value: string; label: string }[],

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

  // Conditions treated — the "why patients come" grid.
  expertise: [
    {
      icon: Wind,
      name: 'Asthma & Allergic Airway Disease',
      desc: 'Long-term control of asthma and allergy-driven breathing problems, including inhaler technique and trigger management.',
    },
    {
      icon: Activity,
      name: 'COPD & Chronic Bronchitis',
      desc: 'Staging, symptom relief and rehabilitation for chronic obstructive pulmonary disease and smoker’s lung.',
    },
    {
      icon: ShieldPlus,
      name: 'Tuberculosis (TB)',
      desc: 'Diagnosis and full-course management of pulmonary and drug-resistant TB, with a focus on completion and cure.',
    },
    {
      icon: Microscope,
      name: 'Interstitial Lung Disease (ILD)',
      desc: 'Evaluation of persistent breathlessness, fibrosis and scarring of the lungs with targeted therapy.',
    },
    {
      icon: Moon,
      name: 'Sleep Apnea & Snoring',
      desc: 'Assessment of obstructive sleep apnea and disturbed sleep, with sleep studies and CPAP/BiPAP titration.',
    },
    {
      icon: HeartPulse,
      name: 'Chronic Cough & Breathlessness',
      desc: 'Getting to the root of a lingering cough, wheeze or shortness of breath that everyday care hasn’t resolved.',
    },
  ] as { icon: LucideIcon; name: string; desc: string }[],

  // Diagnostic & therapeutic services offered at the clinic.
  services: [
    {
      icon: Moon,
      name: 'Sleep Study (Polysomnography)',
      desc: 'Overnight recording of breathing, oxygen and sleep stages to diagnose sleep apnea and related disorders.',
    },
    {
      icon: FlaskConical,
      name: 'Pulmonary Function Test (PFT / Spirometry)',
      desc: 'Precise measurement of lung volumes and airflow to diagnose and monitor asthma, COPD and ILD.',
    },
    {
      icon: Gauge,
      name: 'Pulse Oximetry',
      desc: 'Non-invasive monitoring of blood-oxygen saturation to guide oxygen and respiratory therapy.',
    },
    {
      icon: Wind,
      name: 'Oxygen Therapy',
      desc: 'Supplemental oxygen assessment and titration for patients with low blood-oxygen levels.',
    },
    {
      icon: Stethoscope,
      name: 'Non-Invasive Ventilation (NIV)',
      desc: 'Breathing support through a mask for respiratory failure — avoiding invasive intubation where possible.',
    },
    {
      icon: Moon,
      name: 'CPAP / BiPAP Titration',
      desc: 'Setting up and fine-tuning positive-airway-pressure therapy for comfortable, effective sleep.',
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
    },
  ] as { icon: LucideIcon; name: string; desc: string }[],

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

  // Placeholder testimonials — replace `body`/`name` with real, consented reviews.
  testimonials: [
    {
      body: 'Dr. Bhargava took the time to actually explain what was happening with my lungs. After years of being short of breath, I finally have a plan that works.',
      name: 'Patient testimonial',
      meta: 'COPD care · Indore',
    },
    {
      body: 'My father’s TB treatment was managed start to finish with so much patience. The whole team made sure he completed the course and recovered fully.',
      name: 'Family member',
      meta: 'Tuberculosis care',
    },
    {
      body: 'The sleep study was straightforward and the CPAP setup changed how I sleep. I wake up rested for the first time in years.',
      name: 'Patient testimonial',
      meta: 'Sleep apnea · CPAP',
    },
  ],

  // Reasons-to-visit shown near the appointment form.
  bookingReasons: [
    'Asthma or COPD review',
    'Persistent cough or breathlessness',
    'Snoring / suspected sleep apnea',
    'TB evaluation & treatment',
    'Allergy or chest infection',
    'Second opinion on lung reports',
  ],
} as const;

export type Site = typeof site;
