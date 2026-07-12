import { Routes, Route, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';

/**
 * Single-page site with React Router v6 configured for extensibility.
 * The main experience lives at "/" as anchored, scrollable sections;
 * additional routes (e.g. /media-coverage) can be added later without
 * restructuring. A friendly 404 keeps navigation graceful.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow mb-4">Page not found</p>
      <h1 className="mb-4 text-4xl font-semibold">This page has slipped away.</h1>
      <p className="mb-8 max-w-md text-slate-muted">
        The link may be outdated. Head back to the homepage to find what you need.
      </p>
      <Link to="/" className="btn-primary">
        Return home
      </Link>
    </section>
  );
}
