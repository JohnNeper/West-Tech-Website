import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mic, Code, Rocket, GraduationCap, Users, Calendar, ArrowRight, Coffee, Trophy } from "lucide-react";

const Programs = () => {
  const { t } = useTranslation();

  const programs = [
    {
      icon: Mic,
      titleKey: 'programs.talks.title',
      descKey: 'programs.talks.desc',
      frequency: 'programs.talks.frequency',
    },
    {
      icon: Code,
      titleKey: 'programs.hackathons.title',
      descKey: 'programs.hackathons.desc',
      frequency: 'programs.hackathons.frequency',
    },
    {
      icon: GraduationCap,
      titleKey: 'programs.bootcamps.title',
      descKey: 'programs.bootcamps.desc',
      frequency: 'programs.bootcamps.frequency',
    },
    {
      icon: Rocket,
      titleKey: 'programs.accelerator.title',
      descKey: 'programs.accelerator.desc',
      frequency: 'programs.accelerator.frequency',
    },
    {
      icon: Coffee,
      titleKey: 'programs.afterwork.title',
      descKey: 'programs.afterwork.desc',
      frequency: 'programs.afterwork.frequency',
    },
    {
      icon: Trophy,
      titleKey: 'programs.pitch.title',
      descKey: 'programs.pitch.desc',
      frequency: 'programs.pitch.frequency',
    },
  ];

  const impactNumbers = [
    { value: '2,000+', labelKey: 'programs.impact.beneficiaries' },
    { value: '120+', labelKey: 'programs.impact.events' },
    { value: '35+', labelKey: 'programs.impact.startups' },
    { value: '8', labelKey: 'programs.impact.cities' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-dark to-warm-dark/95" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-gold/5 rounded-full blur-[150px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
                {t('programs.badge')}
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
                {t('programs.heroTitle')}
              </h1>
              <div className="w-16 h-[2px] bg-warm-gold mb-8" />
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-2xl">
                {t('programs.heroDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 bg-warm-cream">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactNumbers.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl text-warm-gold mb-2">{stat.value}</div>
                  <div className="font-body text-sm tracking-wider uppercase text-foreground/50">{t(stat.labelKey)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-brown mb-4">
                {t('programs.sectionBadge')}
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground">
                {t('programs.sectionTitle')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-10 group hover:bg-warm-cream transition-colors duration-500"
                >
                  <program.icon className="w-8 h-8 text-warm-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-xl mb-3 text-foreground">{t(program.titleKey)}</h3>
                  <p className="font-body text-foreground/60 leading-relaxed mb-4">{t(program.descKey)}</p>
                  <p className="font-body text-xs tracking-wider uppercase text-warm-gold">{t(program.frequency)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-warm-dark text-white">
          <div className="container px-6 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                {t('programs.ctaTitle')}
              </h2>
              <p className="font-body text-lg text-white/60 max-w-xl mx-auto mb-10">
                {t('programs.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-10 h-14 rounded-none"
                  asChild
                >
                  <Link to="/contact">{t('programs.ctaJoin')}</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/80 border-white/30 text-white hover:bg-white/70 font-body tracking-wider uppercase text-sm px-10 h-14 rounded-none"
                  asChild
                >
                  <Link to="/partners">{t('programs.ctaPartner')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
