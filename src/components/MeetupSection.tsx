import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const MeetupSection: React.FC = () => {
  const { t } = useTranslation();

  const details = [
    { icon: Calendar, label: t('meetup.frequency.label'), value: t('meetup.frequency.value') },
    { icon: MapPin, label: t('meetup.location.label'), value: t('meetup.location.value') },
    { icon: Users, label: t('meetup.audience.label'), value: t('meetup.audience.value') },
  ];

  return (
    <section
      id="meetup"
      className="relative py-24 md:py-32 bg-warm-dark text-white overflow-hidden"
    >
      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-warm-gold/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-6">
              {t('meetup.badge')}
            </p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-8">
              {t('meetup.title')}
            </h2>
            <div className="w-16 h-px bg-warm-gold mb-8" />
            <p className="font-body text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              {t('meetup.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-xs px-8 h-14 rounded-none"
                asChild
              >
                <Link to="/contact">{t('meetup.cta')}</Link>
              </Button>
              <Link
                to="/activities"
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-white/70 hover:text-warm-gold transition-colors group self-center"
              >
                {t('meetup.learnMore')}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right — details card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="border border-white/10 backdrop-blur-sm bg-white/[0.02] p-8 md:p-10">
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm-gold mb-2">
                {t('meetup.cardBadge')}
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-8 leading-tight">
                {t('meetup.cardTitle')}
              </h3>

              <ul className="space-y-6">
                {details.map((d, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 border border-warm-gold/40 flex items-center justify-center">
                      <d.icon className="w-4 h-4 text-warm-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">
                        {d.label}
                      </p>
                      <p className="font-display text-xl text-white">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;
