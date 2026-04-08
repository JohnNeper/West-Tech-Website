import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-image.jpg';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-warm-cream relative overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Top logo + intro */}
        <div className="flex flex-col items-center mb-20">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/lovable-uploads/c5268b09-fb94-43b8-a9fd-ad307d82ebae.png"
            alt="West Tech"
            className="w-16 h-16 mb-6 opacity-40"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center font-body text-sm tracking-[0.3em] uppercase text-warm-brown mb-4"
          >
            {t('about.nonprofit')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-3xl md:text-5xl text-warm-dark text-center max-w-3xl leading-tight"
          >
            {t('about.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-lg leading-relaxed text-foreground/70 mb-6">
              {t('about.description1')}
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground/70 mb-10">
              {t('about.description2')}
            </p>
            <div className="flex gap-10 mb-10">
              <div>
                <h4 className="font-display text-4xl text-warm-gold">35+</h4>
                <p className="font-body text-sm tracking-wider uppercase text-foreground/50 mt-1">{t('about.startups')}</p>
              </div>
              <div>
                <h4 className="font-display text-4xl text-warm-gold">500+</h4>
                <p className="font-body text-sm tracking-wider uppercase text-foreground/50 mt-1">{t('about.entrepreneurs')}</p>
              </div>
              <div>
                <h4 className="font-display text-4xl text-warm-gold">12</h4>
                <p className="font-body text-sm tracking-wider uppercase text-foreground/50 mt-1">{t('about.partners')}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-warm-dark text-warm-dark hover:bg-warm-dark hover:text-white font-body tracking-wider uppercase text-sm px-8 h-12 rounded-none"
              asChild
            >
              <Link to="/activities">{t('about.explore')}</Link>
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
              src={aboutImage}
              alt="West Tech workspace"
              loading="lazy"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-warm-gold -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
