import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '2,000+', labelKey: 'stats.community' },
    { value: '120+', labelKey: 'stats.startups' },
    { value: '50+', labelKey: 'stats.workshops' },
    { value: '75%', labelKey: 'stats.success' },
  ];

  return (
    <section className="py-20 bg-warm-dark">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-warm-gold mb-2">{stat.value}</div>
              <div className="font-body text-sm tracking-[0.2em] uppercase text-white/50">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
