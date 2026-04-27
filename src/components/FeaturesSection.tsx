import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Code, Rocket, Coffee, Trophy, Mic, ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ecosystemImage from '@/assets/ecosystem-image.jpg';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Mic, titleKey: 'features.talks.title', descKey: 'features.talks.desc', tagKey: 'programs.talks.frequency' },
    { icon: Code, titleKey: 'features.hackathons.title', descKey: 'features.hackathons.desc', tagKey: 'programs.hackathons.frequency' },
    { icon: GraduationCap, titleKey: 'features.bootcamps.title', descKey: 'features.bootcamps.desc', tagKey: 'programs.bootcamps.frequency' },
    { icon: Rocket, titleKey: 'features.accelerator.title', descKey: 'features.accelerator.desc', tagKey: 'programs.accelerator.frequency' },
    { icon: Coffee, titleKey: 'features.afterwork.title', descKey: 'features.afterwork.desc', tagKey: 'programs.afterwork.frequency' },
    { icon: Trophy, titleKey: 'features.pitch.title', descKey: 'features.pitch.desc', tagKey: 'programs.pitch.frequency' },
  ];

  return (
    <section id="programs" className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end"
        >
          <div className="lg:col-span-7">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">
              {t('features.subtitle')}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              {t('features.title')}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-foreground/60 leading-relaxed mb-6">
              {t('features.intro')}
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-warm-gold hover:text-warm-dark transition-colors group"
            >
              {t('features.exploreAll')}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-20 overflow-hidden"
        >
          <img
            src={ecosystemImage}
            alt="West Tech ecosystem"
            loading="lazy"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-dark/85 via-warm-dark/50 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">
                {t('features.flagshipBadge')}
              </p>
              <h3 className="font-display text-2xl md:text-4xl text-white mb-4">
                {t('features.ecosystemTitle')}
              </h3>
              <p className="font-body text-white/70 leading-relaxed">
                {t('features.ecosystemDesc')}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-background p-10 group hover:bg-warm-cream transition-colors duration-500 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <feature.icon className="w-7 h-7 text-warm-gold group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/40">{t(feature.tagKey)}</span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">{t(feature.titleKey)}</h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
