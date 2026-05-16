import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import PartnersLogoStrip from '@/components/PartnersLogoStrip';
import AboutSection from '@/components/AboutSection';
import VisionSection from '@/components/VisionSection';
import DonationSection from '@/components/DonationSection';
import ActivitiesShowcase from '@/components/ActivitiesShowcase';
import MeetupSection from '@/components/MeetupSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <VisionSection />
        <FeaturesSection />
        <MeetupSection />
        <ActivitiesShowcase />
        <NewsSection />
        <PartnersLogoStrip />
        <TestimonialsSection />
        <DonationSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
