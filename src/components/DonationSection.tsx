import { Heart, Users, Globe, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import DonationButton from "./DonationButton";
import { motion } from "framer-motion";

const DonationSection = () => {
  const { t } = useTranslation();

  const impacts = [
    { icon: Users, value: "500+", label: t('donation.impact.entrepreneurs') },
    { icon: Globe, value: "20+", label: t('donation.impact.projects') },
    { icon: Award, value: "50+", label: t('donation.impact.workshops') },
  ];

  return (
    <section className="py-24 md:py-32 bg-warm-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-terracotta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 mb-8">
              <Heart className="h-4 w-4 text-warm-rose" />
              <span className="font-body text-xs tracking-wider uppercase text-white/60">{t('donation.badge')}</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
              {t('donation.title')}
            </h2>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-12 max-w-xl mx-auto">
              {t('donation.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto"
          >
            {impacts.map((impact, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl text-warm-gold mb-1">{impact.value}</div>
                <div className="font-body text-xs text-white/40 tracking-wider uppercase">{impact.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <DonationButton size="lg" className="font-body tracking-wider uppercase text-sm px-10 h-14 rounded-none" />
            <p className="font-body text-xs text-white/30 mt-6">{t('donation.trust')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
