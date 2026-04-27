import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface News {
  id: string;
  title: string;
  title_fr: string | null;
  content: string | null;
  content_fr: string | null;
  excerpt: string | null;
  excerpt_fr: string | null;
  image_url: string | null;
  slug: string | null;
  category: string | null;
  published_at: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const isFr = i18n.language?.startsWith('fr');

  useEffect(() => {
    (async () => {
      if (!slug) return;
      // Try by slug then by id
      let { data } = await supabase.from('news').select('*').eq('is_published', true).eq('slug', slug).maybeSingle();
      if (!data) {
        const res = await supabase.from('news').select('*').eq('is_published', true).eq('id', slug).maybeSingle();
        data = res.data;
      }
      setPost(data);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-foreground/40 font-body text-sm tracking-wider uppercase">
          {t('blog.loading')}
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-20">
          <h1 className="font-display text-4xl mb-4">{t('blog.notFound')}</h1>
          <Link to="/blog" className="font-body text-sm tracking-wider uppercase text-warm-gold">
            ← {t('blog.backToBlog')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const title = (isFr && post.title_fr) || post.title;
  const content = (isFr && post.content_fr) || post.content || '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <article className="pt-32 pb-20">
          <div className="container px-6 mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-foreground/50 hover:text-warm-gold transition-colors mb-10">
              <ArrowLeft className="w-3 h-3" />
              {t('blog.backToBlog')}
            </Link>

            <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                {post.category && (
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold">{post.category}</span>
                )}
                <span className="font-body text-xs tracking-wider text-foreground/40 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.published_at || post.created_at).toLocaleDateString(isFr ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-foreground leading-[1.05] mb-6">{title}</h1>
              {((isFr && post.excerpt_fr) || post.excerpt) && (
                <p className="font-body text-xl text-foreground/60 leading-relaxed">
                  {(isFr && post.excerpt_fr) || post.excerpt}
                </p>
              )}
            </motion.header>

            {post.image_url && (
              <div className="mb-12 -mx-6 md:mx-0">
                <img src={post.image_url} alt={title} className="w-full h-auto md:rounded" />
              </div>
            )}

            <div className="prose-editorial max-w-3xl">
              {content.split('\n\n').filter(Boolean).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="hairline my-16 max-w-3xl" />

            <div className="max-w-3xl flex items-center justify-between">
              <Link to="/blog" className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold">
                ← {t('blog.moreArticles')}
              </Link>
              <button
                onClick={() => navigator.share?.({ title, url: window.location.href }).catch(() => {})}
                className="inline-flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-foreground/50 hover:text-warm-gold transition-colors"
              >
                <Share2 className="w-3 h-3" />
                {t('blog.share')}
              </button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
