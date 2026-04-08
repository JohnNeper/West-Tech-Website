import React from 'react';
import { Calendar, Users, Mic, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TalkProgramSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Calendar, titleKey: 'talks.weekly.title', descKey: 'talks.weekly.desc' },
    { icon: Users, titleKey: 'talks.open.title', descKey: 'talks.open.desc' },
    { icon: Mic, titleKey: 'talks.experts.title', descKey: 'talks.experts.desc' },
    { icon: Stars, titleKey: 'talks.networking.title', descKey: 'talks.networking.desc' },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-terracotta/5 rounded-full blur-3xl" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
              {t('talks.badge')}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              {t('talks.title')}
            </h2>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-10">
              {t('talks.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <f.icon className="w-5 h-5 text-warm-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-body font-semibold text-white mb-1">{t(f.titleKey)}</h4>
                    <p className="font-body text-sm text-white/50">{t(f.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-8 h-12 rounded-none"
              asChild
            >
              <Link to="/activities">{t('talks.cta')}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
              alt="West Tech Talk"
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-body text-xs tracking-wider uppercase text-warm-gold mb-2">{t('talks.upcoming')}</p>
              <h3 className="font-display text-xl text-white italic">{t('talks.nextTalk')}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TalkProgramSection;
