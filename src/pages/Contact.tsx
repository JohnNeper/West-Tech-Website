import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { toast } from "sonner";
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast(t('contact.feedback'), { icon: <CheckCircle2 className="h-4 w-4 text-green-500" /> });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast(t('contact.error'), { icon: <AlertCircle className="h-4 w-4 text-red-500" /> });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-warm-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-warm-gold/5 rounded-full blur-[120px]" />
          <div className="container px-6 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gold mb-4">
                {t('contact.getInTouch')}
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
                {t('contact.title')}
              </h1>
              <div className="w-16 h-[2px] bg-warm-gold mx-auto mb-8" />
              <p className="font-body text-lg text-white/60 leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 bg-background">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">{t('contact.getInTouch')}</h2>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-warm-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{t('contact.location')}</h3>
                      <p className="font-body text-foreground/60">{t('contact.address')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-warm-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:hello@westtech.cm" className="font-body text-foreground/60 hover:text-warm-gold transition-colors">{t('contact.emailAddress')}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-warm-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">Téléphone</h3>
                      <a href="tel:+237600000000" className="font-body text-foreground/60 hover:text-warm-gold transition-colors">{t('contact.phone')}</a>
                    </div>
                  </div>
                </div>

                <div className="w-full h-64 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63724.35412191!2d10.378125150616112!3d5.473116560305484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fbe1cec3f8e49%3A0xcd94387df341168!2sBafoussam!5e0!3m2!1sen!2scm!4v1716827967722!5m2!1sen!2scm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">{t('contact.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm text-foreground/70 mb-2">{t('contact.name')}</label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="h-12 rounded-none border-border bg-background font-body" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm text-foreground/70 mb-2">{t('contact.email')}</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="h-12 rounded-none border-border bg-background font-body" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body text-sm text-foreground/70 mb-2">{t('contact.message')}</label>
                    <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="rounded-none border-border bg-background font-body" />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-warm-dark hover:bg-warm-dark/90 text-white font-body tracking-wider uppercase text-sm h-14 rounded-none"
                  >
                    {isSubmitting ? '...' : t('contact.send')}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
