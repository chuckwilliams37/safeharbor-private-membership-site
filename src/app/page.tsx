import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import CommunitySection from '@/components/CommunitySection';
import InvolvementSection from '@/components/InvolvementSection';
import SupportSection from '@/components/SupportSection';
import ValuesSection from '@/components/ValuesSection';
import InvestmentSection from '@/components/InvestmentSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AmenitiesSection />
      <CommunitySection />
      <InvolvementSection />
      <SupportSection />
      <ValuesSection />
      <InvestmentSection />
      <Footer />
    </div>
  );
};

export default Home;