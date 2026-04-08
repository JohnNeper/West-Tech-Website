import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Building2, Award, Briefcase, Users, Mail, ArrowRight, Globe, Handshake } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PartnersLogoStrip from '@/components/PartnersLogoStrip';

const Partners = () => {
  const { t } = useTranslation();

  const partnerTypes = [
    { icon: Building2, titleKey: 'partners.institutional', descKey: 'partners.institutionalDesc' },
    { icon: Briefcase, titleKey: 'partners.corporate', descKey: 'partners.corporateDesc' },
    { icon: Award, titleKey: 'partners.academic', descKey: 'partners.academicDesc' },
    { icon: Globe, titleKey: 'partners.international', descKey: 'partners.internationalDesc' },
  ];

  const whyPartner = [
    { value: '2,000+', labelKey: 'partners.why.reach' },
    { value: '35+', labelKey: 'partners.why.startups' },
    { value: '8', labelKey: 'partners.why.cities' },
    { value: '120+', labelKey: 'partners.why.events' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-gold/5 rounded-full blur-[150px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
                {t('partners.badge')}
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
                {t('partners.heroTitle')}
              </h1>
              <div className="w-16 h-[2px] bg-warm-gold mx-auto mb-8" />
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                {t('partners.heroDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-warm-cream">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {whyPartner.map((stat, index) => (
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

        {/* Partner Types */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-3xl md:text-5xl text-foreground">
                {t('partners.typesTitle')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-10 group hover:bg-warm-cream transition-colors duration-500 text-center"
                >
                  <type.icon className="w-10 h-10 text-warm-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-lg mb-3 text-foreground">{t(type.titleKey)}</h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">{t(type.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Strip */}
        <PartnersLogoStrip />

        {/* Become Partner CTA */}
        <section className="py-24 bg-warm-dark text-white">
          <div className="container px-6 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Handshake className="w-12 h-12 text-warm-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                {t('partners.becomePartnerTitle')}
              </h2>
              <p className="font-body text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
                {t('partners.becomePartnerDesc')}
              </p>
              <Button
                className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-10 h-14 rounded-none"
                asChild
              >
                <a href="mailto:partnerships@westtech.cm">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('partners.emailUs')}
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
