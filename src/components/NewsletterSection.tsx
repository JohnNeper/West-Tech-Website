import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: t('newsletter.success'), description: t('newsletter.successDesc') });
    setEmail('');
  };

  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl text-warm-dark mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="font-body text-foreground/60 mb-10">
            {t('newsletter.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-none border-warm-dark/20 font-body flex-grow bg-white"
            />
            <Button type="submit" className="bg-warm-dark hover:bg-warm-dark/90 text-white font-body tracking-wider uppercase text-sm px-8 h-12 rounded-none">
              {t('newsletter.button')}
            </Button>
          </form>

          <p className="font-body text-xs text-foreground/40 mt-6">
            {t('newsletter.privacy')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
