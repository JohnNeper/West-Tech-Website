import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface News {
  id: string;
  title: string;
  title_fr: string | null;
  excerpt: string | null;
  excerpt_fr: string | null;
  image_url: string | null;
  slug: string | null;
  category: string | null;
  published_at: string | null;
  created_at: string;
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });
      setPosts(data || []);
      setLoading(false);
    })();
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-gold/5 rounded-full blur-[150px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-5">
                {t('blog.badge')}
              </p>
              <h1 className="font-display text-5xl md:text-6xl text-white leading-[1.05] mb-6">
                {t('blog.heroTitle')}
              </h1>
              <div className="hairline w-24 mb-6 opacity-40" />
              <p className="font-body text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
                {t('blog.heroDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-20 md:py-28">
          <div className="container px-6 mx-auto">
            {loading ? (
              <div className="text-center py-20 text-foreground/40 font-body text-sm tracking-wider uppercase">{t('blog.loading')}</div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-foreground/60 mb-2">{t('blog.empty')}</p>
                <p className="font-body text-sm text-foreground/40">{t('blog.emptyDesc')}</p>
              </div>
            ) : (
              <>
                {/* Featured */}
                {featured && (
                  <Link to={`/blog/${featured.slug || featured.id}`} className="group block mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                        {featured.image_url ? (
                          <img src={featured.image_url} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                          <div className="w-full h-full bg-warm-cream" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          {featured.category && (
                            <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold">{featured.category}</span>
                          )}
                          <span className="font-body text-xs tracking-wider text-foreground/40 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(featured.published_at || featured.created_at).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-5 group-hover:text-warm-gold transition-colors">
                          {(isFr && featured.title_fr) || featured.title}
                        </h2>
                        {(featured.excerpt || featured.excerpt_fr) && (
                          <p className="font-body text-lg text-foreground/60 leading-relaxed mb-6">
                            {(isFr && featured.excerpt_fr) || featured.excerpt}
                          </p>
                        )}
                        <span className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-warm-gold">
                          {t('blog.readMore')}
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                )}

                {/* Grid */}
                {rest.length > 0 && (
                  <>
                    <div className="hairline mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                      {rest.map((post, i) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                        >
                          <Link to={`/blog/${post.slug || post.id}`} className="group block">
                            <div className="aspect-[4/3] overflow-hidden bg-muted mb-5">
                              {post.image_url ? (
                                <img src={post.image_url} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                              ) : (
                                <div className="w-full h-full bg-warm-cream" />
                              )}
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                              {post.category && (
                                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-warm-gold">{post.category}</span>
                              )}
                              <span className="font-body text-xs text-foreground/40">
                                {new Date(post.published_at || post.created_at).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </span>
                            </div>
                            <h3 className="font-display text-xl text-foreground leading-snug group-hover:text-warm-gold transition-colors">
                              {(isFr && post.title_fr) || post.title}
                            </h3>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
