import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import FeaturesSection from '@/components/FeaturesSection';
import MeetupSection from '@/components/MeetupSection';
import MeetupGallery from '@/components/MeetupGallery';
import NewsSection from '@/components/NewsSection';
import PartnersLogoStrip from '@/components/PartnersLogoStrip';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <VideoSection />
        <FeaturesSection />
        <MeetupSection />
        <MeetupGallery />
        <NewsSection />
        <PartnersLogoStrip />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
