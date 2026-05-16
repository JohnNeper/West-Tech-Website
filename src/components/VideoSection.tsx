import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ecosystemImage from '@/assets/ecosystem-image.jpg';

const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  const [playing, setPlaying] = useState(false);

  // Replace with the real West Tech presentation video when available.
  const videoEmbedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">
            {t('video.badge')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            {t('video.title')}
          </h2>
          <p className="font-body text-foreground/60 text-base md:text-lg leading-relaxed">
            {t('video.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto overflow-hidden bg-warm-dark group"
        >
          {playing ? (
            <iframe
              src={videoEmbedUrl}
              title="West Tech presentation"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="relative w-full h-full block"
              aria-label="Play video"
            >
              <img
                src={ecosystemImage}
                alt="West Tech ecosystem"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warm-dark/40 group-hover:bg-warm-dark/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-warm-gold flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-warm-dark ml-1" fill="currentColor" />
                </div>
              </div>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
