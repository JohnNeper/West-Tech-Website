import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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

const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<News[]>([]);
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })
        .limit(3);
      setPosts(data || []);
    })();
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16 flex-wrap gap-6"
        >
          <div>
            <p className="font-body text-xs tracking-[0.4em] uppercase text-warm-gold mb-4">{t('news.badge')}</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-2xl leading-tight">
              {t('news.title')}
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-foreground/60 hover:text-warm-gold transition-colors group"
          >
            {t('news.viewAll')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  <span className="font-body text-xs text-foreground/40 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.published_at || post.created_at).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground leading-snug group-hover:text-warm-gold transition-colors mb-2">
                  {(isFr && post.title_fr) || post.title}
                </h3>
                {((isFr && post.excerpt_fr) || post.excerpt) && (
                  <p className="font-body text-sm text-foreground/60 line-clamp-2 leading-relaxed">
                    {(isFr && post.excerpt_fr) || post.excerpt}
                  </p>
                )}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
