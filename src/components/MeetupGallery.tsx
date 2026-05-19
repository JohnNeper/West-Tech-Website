import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import groupPhoto from '@/assets/meetup-group-photo.jpg';
import applause from '@/assets/meetup-applause.jpg';
import audience from '@/assets/meetup-audience.jpg';
import speaker from '@/assets/meetup-speaker.jpg';
import pitch from '@/assets/meetup-pitch.jpg';

const MeetupGallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    { src: speaker, alt: 'Keynote — Meetup Entrepreneur', span: 'md:col-span-2 md:row-span-2' },
    { src: audience, alt: 'Audience — West Digital Hub', span: '' },
    { src: pitch, alt: 'Pitch session' },
    { src: groupPhoto, alt: 'Group photo — 1st edition', span: 'md:col-span-2' },
    { src: applause, alt: 'Community applause' },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">
            {t('gallery.badge')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-5">
            {t('gallery.title')}
          </h2>
          <p className="font-body text-foreground/60 leading-relaxed">
            {t('gallery.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative overflow-hidden group ${img.span || ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetupGallery;
