import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const partnerLogos = [
  { name: 'University of Dschang', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/University_of_Dschang_logo.svg/200px-University_of_Dschang_logo.svg.png' },
  { name: 'Digital Africa', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
  { name: 'Cameroon Tech Fund', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
  { name: 'Bafoussam Innovation Hub', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
  { name: 'GIZ Cameroun', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
  { name: 'MINPMEESA', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80' },
];

const PartnersLogoStrip: React.FC = () => {
  const { t } = useTranslation();

  // Double the array for seamless loop
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container px-6 mx-auto mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-body text-sm tracking-[0.3em] uppercase text-muted-foreground"
        >
          {t('partners.badge')}
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {doubled.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16 md:h-20 w-36 md:w-44 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <span className="font-display text-sm md:text-base text-foreground/60 whitespace-nowrap tracking-wider">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogoStrip;
