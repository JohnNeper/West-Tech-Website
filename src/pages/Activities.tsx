import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface EventItem {
  id: string;
  title: string;
  title_fr: string | null;
  description: string | null;
  description_fr: string | null;
  date: string;
  location: string | null;
  image_url: string | null;
}

const Activities = () => {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('is_published', true)
        .order('date', { ascending: false });
      setEvents(data || []);
      setLoading(false);
    })();
  }, []);

  // Activities recap (static highlights of recent West Tech program activities)
  const highlights = [
    { key: 'talks', countKey: 'activities.talks.count' },
    { key: 'hackathons', countKey: 'activities.hackathons.count' },
    { key: 'bootcamps', countKey: 'activities.bootcamps.count' },
    { key: 'afterwork', countKey: 'activities.afterwork.count' },
    { key: 'pitch', countKey: 'activities.pitch.count' },
    { key: 'meetups', countKey: 'activities.meetups.count' },
  ];

  // Build photo gallery from event images
  const galleryImages = events.filter((e) => e.image_url).slice(0, 12);
  const past = events.filter((e) => new Date(e.date) < new Date());
  const upcoming = events.filter((e) => new Date(e.date) >= new Date());

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-gold/5 rounded-full blur-[150px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-5">{t('activities.badge')}</p>
              <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] mb-6">{t('activities.heroTitle')}</h1>
              <div className="hairline w-24 mb-6 opacity-40" />
              <p className="font-body text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">{t('activities.heroDesc')}</p>
            </motion.div>
          </div>
        </section>

        {/* Activity highlights */}
        <section className="py-20 bg-warm-cream">
          <div className="container px-6 mx-auto">
            <div className="text-center mb-14">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">{t('activities.recapBadge')}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('activities.recapTitle')}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.key}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-background p-6 text-center"
                >
                  <p className="font-display text-3xl text-warm-gold mb-1">{t(h.countKey)}</p>
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-foreground/60">{t(`activities.${h.key}.label`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        {galleryImages.length > 0 && (
          <section className="py-24">
            <div className="container px-6 mx-auto">
              <div className="mb-12">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">{t('activities.galleryBadge')}</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-2xl">{t('activities.galleryTitle')}</h2>
              </div>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
                {galleryImages.map((e, i) => (
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                    className="mb-4 break-inside-avoid overflow-hidden bg-muted"
                  >
                    <img
                      src={e.image_url!}
                      alt={(isFr && e.title_fr) || e.title}
                      loading="lazy"
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Upcoming events */}
        {upcoming.length > 0 && (
          <section className="py-24 bg-warm-cream">
            <div className="container px-6 mx-auto">
              <div className="mb-12">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">{t('activities.upcomingBadge')}</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('activities.upcomingTitle')}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcoming.map((e, i) => (
                  <motion.article
                    key={e.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="bg-background"
                  >
                    {e.image_url && (
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img src={e.image_url} alt={e.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <p className="font-body text-xs tracking-wider text-warm-gold mb-2">
                        {new Date(e.date).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                      <h3 className="font-display text-xl text-foreground mb-2">{(isFr && e.title_fr) || e.title}</h3>
                      {e.location && <p className="font-body text-sm text-foreground/60 flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.location}</p>}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline of past events */}
        <section className="py-24">
          <div className="container px-6 mx-auto max-w-4xl">
            <div className="mb-14">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">{t('activities.timelineBadge')}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{t('activities.timelineTitle')}</h2>
            </div>
            {loading ? (
              <p className="text-center text-foreground/40 font-body text-sm tracking-wider uppercase py-12">{t('blog.loading')}</p>
            ) : past.length === 0 ? (
              <p className="text-foreground/50 font-body text-base text-center py-12">{t('activities.timelineEmpty')}</p>
            ) : (
              <div className="relative pl-8 border-l border-border">
                {past.map((e, i) => (
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="relative mb-12 last:mb-0"
                  >
                    <span className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-warm-gold ring-4 ring-background" />
                    <p className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold mb-2 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(e.date).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <h3 className="font-display text-2xl text-foreground mb-2">{(isFr && e.title_fr) || e.title}</h3>
                    {e.location && (
                      <p className="font-body text-sm text-foreground/50 mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {e.location}
                      </p>
                    )}
                    {((isFr && e.description_fr) || e.description) && (
                      <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl">
                        {(isFr && e.description_fr) || e.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-warm-dark text-white">
          <div className="container px-6 mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">{t('activities.ctaTitle')}</h2>
            <p className="font-body text-white/60 max-w-xl mx-auto mb-10">{t('activities.ctaDesc')}</p>
            <Button asChild className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-10 h-14 rounded-none">
              <Link to="/contact">{t('activities.ctaJoin')}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
