import React from 'react';
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EventsSection: React.FC = () => {
  const { t } = useTranslation();

  const events = [
    {
      titleKey: 'events.event1.title',
      dateKey: 'events.event1.date',
      locationKey: 'events.event1.location',
      category: 'Networking',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'events.event2.title',
      dateKey: 'events.event2.date',
      locationKey: 'events.event2.location',
      category: 'Hackathon',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    },
    {
      titleKey: 'events.event3.title',
      dateKey: 'events.event3.date',
      locationKey: 'events.event3.location',
      category: 'Funding',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-brown mb-4">
            {t('events.subtitle')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-warm-dark">
            {t('events.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={event.image}
                  alt={t(event.titleKey)}
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-warm-gold text-warm-dark text-xs font-body tracking-wider uppercase">
                    {event.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/20 transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl mb-3 text-warm-dark group-hover:text-warm-gold transition-colors">
                {t(event.titleKey)}
              </h3>
              <div className="flex items-center gap-4 font-body text-sm text-foreground/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {t(event.dateKey)}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {t(event.locationKey)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="border-warm-dark text-warm-dark hover:bg-warm-dark hover:text-white font-body tracking-wider uppercase text-sm px-10 h-12 rounded-none"
          >
            {t('events.viewMore')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
