# Dr. Salil Bhargava — Official Website

A modern, fast, accessible single-page personal-branding site for **Dr. Salil Bhargava**, Pulmonologist & Respiratory Medicine Specialist, Indore (Professor & Head of Respiratory Medicine, MGM Medical College).

Built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router v6 + Lucide**.

---

## ✨ Highlights

- **Distinctive identity** grounded in the subject's world — a calm pine-teal palette, editorial `Fraunces` display type, and a signature *breathing aura* + *spirometry-flow divider* motif (a real PFT flow–volume curve).
- **Fully responsive**, mobile-first, with a slide-out mobile menu and scroll-spy navigation.
- **Accessible**: semantic HTML, visible keyboard focus, `aria` attributes, and full `prefers-reduced-motion` support.
- **SEO-ready**: meta + Open Graph + Twitter tags, canonical URL, and `Physician` JSON-LD structured data.
- **Content in one place** — edit everything in [`src/data/site.ts`](src/data/site.ts).

---

## 🚀 Getting started

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Project structure

```
dr-salil-bhargava/
├── index.html                 # HTML shell + SEO/OG meta + JSON-LD schema
├── package.json
├── vite.config.ts             # Vite + React + "@/..." path alias + chunking
├── tailwind.config.js         # Design tokens (colors, fonts, breathe keyframes)
├── postcss.config.js
├── tsconfig.json
├── public/
│   ├── favicon.svg            # Bronchial monogram
│   └── doctor-portrait.svg    # ← REPLACE with the real photo
└── src/
    ├── main.tsx               # App bootstrap (Router + Helmet providers)
    ├── App.tsx                # Routes + layout shell + 404
    ├── index.css              # Tailwind layers, base styles, a11y, reduced-motion
    ├── data/
    │   ├── site.ts            # ⭐ ALL editable content lives here
    │   └── nav.ts             # Navigation links
    ├── hooks/
    │   └── useScrollSpy.ts    # Active-section highlighting
    ├── pages/
    │   └── Home.tsx           # Composes the single-page sections
    ├── components/
    │   ├── layout/            # TopBar, Navbar, Footer
    │   ├── sections/          # Hero, Stats, About, Expertise, Services,
    │   │                      #   Experience, Research, Testimonials, Contact
    │   └── ui/                # SEO, SectionHeading, Reveal, SpiroDivider
```

---

## 🛠 Customization

Almost all text, contact details, services, credentials, timeline and testimonials
live in **`src/data/site.ts`** — edit there, and every component updates.

**Replace the portrait:** drop a real photo into `public/` (e.g. `doctor-portrait.jpg`)
and update `doctor.portrait` in `src/data/site.ts`.

**Wire up the appointment form:** by default the form opens the visitor's email client
with a pre-filled request (zero backend). To collect submissions automatically, open
`src/components/sections/Contact.tsx` and replace the `mailto` block in `handleSubmit`
with a `fetch()` to [Formspree](https://formspree.io) or your own API — an example is
commented in place.

**Update the map:** set `contact.mapEmbedSrc` in `src/data/site.ts` to the clinic's exact
Google Maps embed URL.

**Colours & type:** all design tokens are in `tailwind.config.js`.

> ⚕️ **Note on content:** copy is drawn from Dr. Bhargava's verified public profile.
> Please review every credential, year and testimonial with the doctor and replace the
> placeholder testimonials with real, consented reviews before publishing.

---

## ☁️ Deployment

This is a static SPA — it deploys anywhere. Build with `npm run build`; the output is in `dist/`.

### Vercel / Netlify (recommended)
- Import the repo, framework preset **Vite**.
- Build command: `npm run build` · Output directory: `dist`.
- SPA routing is handled automatically (Vercel), or add a `_redirects` file with
  `/* /index.html 200` (Netlify).

### cPanel / shared hosting (hosting.com, Hostinger, etc.)
1. Run `npm run build` locally.
2. Upload the **contents of `dist/`** into `public_html` (or a subfolder).
3. Add a `.htaccess` in the same folder so client-side routes resolve:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Point the domain's DNS to the host and enable SSL.

---

## 📄 License

Provided for Dr. Salil Bhargava. Fonts are loaded from Google Fonts under the SIL Open Font License. Icons by [Lucide](https://lucide.dev) (ISC).
