import React from 'react';
import { Target, Lightbulb, Globe, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: Lightbulb, titleKey: 'vision.pillar1.title', descKey: 'vision.pillar1.desc' },
    { icon: Target, titleKey: 'vision.pillar2.title', descKey: 'vision.pillar2.desc' },
    { icon: Globe, titleKey: 'vision.pillar3.title', descKey: 'vision.pillar3.desc' },
    { icon: TrendingUp, titleKey: 'vision.pillar4.title', descKey: 'vision.pillar4.desc' },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-warm-gold/3 rounded-full blur-[120px]" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
              {t('vision.badge')}
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-8">
              {t('vision.title')}
            </h2>
            <div className="w-16 h-[2px] bg-warm-gold mb-8" />
            <p className="font-body text-lg text-white/60 leading-relaxed mb-6">
              {t('vision.description1')}
            </p>
            <p className="font-body text-lg text-white/60 leading-relaxed">
              {t('vision.description2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/10 p-8 hover:border-warm-gold/30 transition-colors duration-500 group"
              >
                <pillar.icon className="w-8 h-8 text-warm-gold mb-4 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display text-lg text-white mb-2">{t(pillar.titleKey)}</h3>
                <p className="font-body text-sm text-white/40 leading-relaxed">{t(pillar.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 border border-warm-gold/20 p-10 md:p-16 text-center"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold/60 mb-4">
            {t('vision.horizonBadge')}
          </p>
          <h3 className="font-display text-2xl md:text-4xl text-white italic mb-4">
            {t('vision.horizonTitle')}
          </h3>
          <p className="font-body text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t('vision.horizonDesc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
