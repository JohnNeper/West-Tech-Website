import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-image.jpg';
import ecosystemImage from '@/assets/ecosystem-image.jpg';

const slides = [
  {
    image: heroBg,
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
  },
  {
    image: aboutImage,
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
  },
  {
    image: ecosystemImage,
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
  },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/40 to-warm-dark/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
              {t(slide.titleKey)}
            </h1>

            <div className="w-16 h-[2px] bg-warm-gold mb-8" />

            <p className="font-body text-sm sm:text-base md:text-lg text-white/70 tracking-wider uppercase max-w-xl mb-10 leading-relaxed">
              {t(slide.subtitleKey)}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-8 h-14 rounded-none"
              asChild
            >
              <Link to="/contact">{t('hero.cta')}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-body tracking-wider uppercase text-sm px-8 h-14 rounded-none"
              asChild
            >
              <Link to="/activities">{t('hero.secondaryCta')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} className="text-white/50 hover:text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === current ? 'w-10 bg-warm-gold' : 'w-6 bg-white/30'
              }`}
            />
          ))}
        </div>
        <button onClick={() => setCurrent((current + 1) % slides.length)} className="text-white/50 hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
