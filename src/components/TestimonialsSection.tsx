import React from 'react';
import { Quote } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quoteKey: 'testimonials.quote1',
      author: "Sarah Nkongho",
      roleKey: 'testimonials.role1',
    },
    {
      quoteKey: 'testimonials.quote2',
      author: "Jean-Pierre Fonkou",
      roleKey: 'testimonials.role2',
    },
    {
      quoteKey: 'testimonials.quote3',
      author: "Blessing Ngwa",
      roleKey: 'testimonials.role3',
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-dark text-white">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
            {t('testimonials.subtitle')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-warm-dark p-10 flex flex-col"
            >
              <Quote className="w-8 h-8 text-warm-gold/30 mb-6" />
              <p className="font-body text-white/70 leading-relaxed italic flex-grow mb-8">
                "{t(item.quoteKey)}"
              </p>
              <div>
                <p className="font-display text-lg text-white">{item.author}</p>
                <p className="font-body text-sm text-warm-gold tracking-wider">{t(item.roleKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
