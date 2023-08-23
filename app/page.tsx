import Hero from '@/components/Hero';
import Partnerships from '@/components/Partnerships';
import Footer from '@/components/Footer';
import MissionVision from '@/components/MissionVision';

export default function Home() {
  return (
    <main className='relative min-h-screen bg-primaryColor '>
      {/* Main Hero Section */}
      <Hero />

      {/* FWDP Mission and Vision Section */}
      <MissionVision />

      {/* Partnerships Section */}
      <Partnerships />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
