import React from 'react';
import { Users, LightbulbIcon, GraduationCap, Compass, Code, Rocket, Coffee, Trophy, Mic } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ecosystemImage from '@/assets/ecosystem-image.jpg';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Mic, titleKey: 'features.talks.title', descKey: 'features.talks.desc' },
    { icon: Code, titleKey: 'features.hackathons.title', descKey: 'features.hackathons.desc' },
    { icon: GraduationCap, titleKey: 'features.bootcamps.title', descKey: 'features.bootcamps.desc' },
    { icon: Rocket, titleKey: 'features.accelerator.title', descKey: 'features.accelerator.desc' },
    { icon: Coffee, titleKey: 'features.afterwork.title', descKey: 'features.afterwork.desc' },
    { icon: Trophy, titleKey: 'features.pitch.title', descKey: 'features.pitch.desc' },
  ];

  return (
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
            {t('features.subtitle')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            {t('features.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
          <div className="absolute inset-0 bg-gradient-to-r from-warm-dark/80 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-lg">
              <h3 className="font-display text-2xl md:text-4xl text-white mb-4 italic">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-10 group hover:bg-warm-cream transition-colors duration-500"
            >
              <feature.icon className="w-8 h-8 text-warm-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-xl mb-3 text-foreground">{t(feature.titleKey)}</h3>
              <p className="font-body text-foreground/60 leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
