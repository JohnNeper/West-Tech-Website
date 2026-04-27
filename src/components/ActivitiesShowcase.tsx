import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface EventItem {
  id: string;
  title: string;
  title_fr: string | null;
  date: string;
  location: string | null;
  image_url: string | null;
}

const ActivitiesShowcase = () => {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState<EventItem[]>([]);
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: false })
        .limit(6);
      setEvents(data || []);
    })();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">{t('activities.showcaseBadge')}</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-2xl leading-tight">
              {t('activities.showcaseTitle')}
            </h2>
            <p className="font-body text-foreground/60 max-w-xl mt-5 leading-relaxed">
              {t('activities.showcaseDesc')}
            </p>
          </div>
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-foreground/60 hover:text-warm-gold transition-colors group"
          >
            {t('activities.showcaseCta')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {events.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              { titleKey: 'activities.placeholder.hackathon', date: t('activities.placeholder.recent') },
              { titleKey: 'activities.placeholder.bootcamp', date: t('activities.placeholder.recent') },
              { titleKey: 'activities.placeholder.afterwork', date: t('activities.placeholder.recent') },
            ].map((p, i) => (
              <div key={i} className="bg-background p-10 aspect-[4/3] flex flex-col justify-end">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold mb-3">{p.date}</p>
                <h3 className="font-display text-2xl text-foreground">{t(p.titleKey)}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {events.map((e, i) => (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link to="/activities" className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                    {e.image_url ? (
                      <img src={e.image_url} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full bg-background flex items-center justify-center">
                        <span className="font-display text-warm-gold/30 text-6xl">WT</span>
                      </div>
                    )}
                  </div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold mb-2 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(e.date).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                  <h3 className="font-display text-xl text-foreground group-hover:text-warm-gold transition-colors">
                    {(isFr && e.title_fr) || e.title}
                  </h3>
                  {e.location && (
                    <p className="font-body text-sm text-foreground/50 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {e.location}
                    </p>
                  )}
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivitiesShowcase;
