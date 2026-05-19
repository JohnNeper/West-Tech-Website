import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Rocket, Code2, Mic, Trophy, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import meetupGroup from '@/assets/meetup-group-photo.jpg';
import meetupApplause from '@/assets/meetup-applause.jpg';
import meetupAudience from '@/assets/meetup-audience.jpg';
import meetupSpeaker from '@/assets/meetup-speaker.jpg';
import meetupPitch from '@/assets/meetup-pitch.jpg';
import meetupFlyer from '@/assets/meetup-entrepreneur-flyer.jpg';
import ecosystem from '@/assets/ecosystem-image.jpg';
import about from '@/assets/about-image.jpg';

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

  const highlights = [
    { key: 'talks', countKey: 'activities.talks.count' },
    { key: 'hackathons', countKey: 'activities.hackathons.count' },
    { key: 'bootcamps', countKey: 'activities.bootcamps.count' },
    { key: 'afterwork', countKey: 'activities.afterwork.count' },
    { key: 'pitch', countKey: 'activities.pitch.count' },
    { key: 'meetups', countKey: 'activities.meetups.count' },
  ];

  const programs = [
    {
      icon: Mic,
      image: meetupFlyer,
      title: isFr ? 'Meetup Entrepreneur' : 'Entrepreneur Meetup',
      tag: isFr ? 'Mensuel · West Digital Hub' : 'Monthly · West Digital Hub',
      desc: isFr
        ? "Chaque mois, entrepreneurs, étudiants et investisseurs se retrouvent à Bafoussam pour partager, pitcher et bâtir l'écosystème."
        : 'Every month, entrepreneurs, students and investors gather in Bafoussam to share, pitch and grow the ecosystem.',
    },
    {
      icon: Code2,
      image: ecosystem,
      title: isFr ? 'Hackathons & Sprints' : 'Hackathons & Sprints',
      tag: isFr ? 'Trimestriel' : 'Quarterly',
      desc: isFr
        ? "Des week-ends intensifs où développeurs, designers et porteurs de projets prototypent des solutions concrètes pour l'Afrique."
        : 'Intensive weekends where developers, designers and makers prototype real solutions for Africa.',
    },
    {
      icon: Rocket,
      image: meetupPitch,
      title: isFr ? 'Demo Day & Pitch Day' : 'Demo Day & Pitch Day',
      tag: isFr ? 'Saisonnier' : 'Seasonal',
      desc: isFr
        ? 'Une scène pour présenter ses idées, recevoir du feedback et rencontrer mentors et investisseurs.'
        : 'A stage to present ideas, get feedback and meet mentors and investors.',
    },
    {
      icon: Users,
      image: about,
      title: isFr ? 'Bootcamps & Formations' : 'Bootcamps & Training',
      tag: isFr ? 'Cohortes' : 'Cohorts',
      desc: isFr
        ? 'Des parcours intensifs pour monter en compétences sur le développement, le produit, la data et le business.'
        : 'Intensive tracks to upskill in development, product, data and business.',
    },
    {
      icon: Lightbulb,
      image: meetupSpeaker,
      title: isFr ? 'Tech Talks & Masterclass' : 'Tech Talks & Masterclasses',
      tag: isFr ? 'Hebdomadaire' : 'Weekly',
      desc: isFr
        ? 'Des rencontres pour apprendre des meilleurs : experts tech, fondateurs et leaders de la diaspora.'
        : 'Sessions to learn from the best: tech experts, founders and diaspora leaders.',
    },
    {
      icon: Trophy,
      image: meetupApplause,
      title: isFr ? 'After-Work Founders' : 'Founders After-Work',
      tag: isFr ? 'Mensuel' : 'Monthly',
      desc: isFr
        ? 'Networking décontracté entre fondateurs, opérateurs et alliés de l\'écosystème.'
        : 'Relaxed networking between founders, operators and ecosystem allies.',
    },
  ];

  const localGallery = [
    { src: meetupGroup, label: isFr ? 'Photo de groupe — Meetup #1' : 'Group photo — Meetup #1' },
    { src: meetupAudience, label: isFr ? 'Une salle pleine à Bafoussam' : 'A packed room in Bafoussam' },
    { src: meetupSpeaker, label: isFr ? 'Intervention sur scène' : 'On stage' },
    { src: meetupPitch, label: isFr ? 'Session de pitch' : 'Pitch session' },
    { src: meetupApplause, label: isFr ? 'Applaudissements' : 'Applause' },
    { src: meetupFlyer, label: isFr ? 'Affiche officielle' : 'Official flyer' },
  ];

  const galleryImages = events.filter((e) => e.image_url).slice(0, 12);
  const past = events.filter((e) => new Date(e.date) < new Date());
  const upcoming = events.filter((e) => new Date(e.date) >= new Date());

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={meetupGroup} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-warm-dark via-warm-dark/90 to-warm-dark/40" />
          </div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-gold/10 rounded-full blur-[150px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-5">{t('activities.badge')}</p>
              <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] mb-6">{t('activities.heroTitle')}</h1>
              <div className="hairline w-24 mb-6 opacity-40" />
              <p className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">{t('activities.heroDesc')}</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-warm-cream">
          <div className="container px-6 mx-auto">
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

        {/* Programs */}
        <section className="py-24">
          <div className="container px-6 mx-auto">
            <div className="mb-14 max-w-2xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">
                {isFr ? 'Nos programmes' : 'Our programs'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                {isFr ? 'Six formats pour faire grandir l\'écosystème' : 'Six formats to grow the ecosystem'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group bg-background border border-border overflow-hidden hover:border-warm-gold transition-colors"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-warm-gold text-warm-dark p-2">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-[11px] tracking-[0.25em] uppercase text-warm-gold mb-2">{p.tag}</p>
                      <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                      <p className="font-body text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spotlight Meetup */}
        <section className="py-24 bg-warm-dark text-white">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] overflow-hidden bg-warm-ink"
              >
                <img src={meetupFlyer} alt="Meetup Entrepreneur" className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">
                  {isFr ? 'En vedette' : 'Spotlight'}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
                  {isFr ? 'Meetup Entrepreneur — le rendez-vous mensuel' : 'Entrepreneur Meetup — the monthly gathering'}
                </h2>
                <div className="hairline w-24 mb-6 opacity-40" />
                <p className="font-body text-white/70 leading-relaxed mb-6">
                  {isFr
                    ? 'Chaque mois au West Digital Hub de Bafoussam, le Meetup Entrepreneur rassemble la communauté autour d\'un thème, d\'un invité d\'honneur et de sessions de pitch ouvertes à tous.'
                    : 'Every month at the West Digital Hub in Bafoussam, the Entrepreneur Meetup brings the community together around a theme, a guest of honor and open pitch sessions.'}
                </p>
                <ul className="space-y-3 mb-8 font-body text-white/80">
                  <li className="flex gap-3"><span className="text-warm-gold">→</span>{isFr ? 'Conférences inspirantes et retours d\'expérience' : 'Inspiring talks and lived experience'}</li>
                  <li className="flex gap-3"><span className="text-warm-gold">→</span>{isFr ? 'Sessions de pitch et feedback direct' : 'Pitch sessions and direct feedback'}</li>
                  <li className="flex gap-3"><span className="text-warm-gold">→</span>{isFr ? 'Networking entre fondateurs, mentors et investisseurs' : 'Networking between founders, mentors and investors'}</li>
                </ul>
                <Button asChild className="bg-warm-gold hover:bg-warm-gold/90 text-warm-dark font-body tracking-wider uppercase text-sm px-8 h-12 rounded-none">
                  <Link to="/contact">{isFr ? 'Participer au prochain meetup' : 'Join the next meetup'} <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gallery — meetup photos */}
        <section className="py-24">
          <div className="container px-6 mx-auto">
            <div className="mb-12">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">{t('activities.galleryBadge')}</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-2xl">{t('activities.galleryTitle')}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {localGallery.map((img, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                  className={`group relative overflow-hidden bg-muted ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square' : 'aspect-[4/3]'}`}
                >
                  <img src={img.src} alt={img.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-warm-dark/80 to-transparent text-white font-body text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* DB Gallery (admin uploaded) */}
        {galleryImages.length > 0 && (
          <section className="py-24 bg-warm-cream">
            <div className="container px-6 mx-auto">
              <div className="mb-12">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-3">
                  {isFr ? 'Archives événements' : 'Event archives'}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground max-w-2xl">
                  {isFr ? 'Tous nos moments forts' : 'All our highlights'}
                </h2>
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
                    <img src={e.image_url!} alt={(isFr && e.title_fr) || e.title} loading="lazy" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <section className="py-24">
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
                    className="bg-background border border-border"
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

        {/* Timeline */}
        <section className="py-24 bg-warm-cream">
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
                    <span className="absolute -left-[33px] top-2 w-3 h-3 rounded-full bg-warm-gold ring-4 ring-warm-cream" />
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
