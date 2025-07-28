// app/page.tsx
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
