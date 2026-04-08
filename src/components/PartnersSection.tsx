import React from 'react';
import { Building, Landmark, Briefcase, Handshake } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  const partners = [
    { name: "University of Dschang", roleKey: "partners.academic", icon: Landmark },
    { name: "Bafoussam Innovation Hub", roleKey: "partners.corporate", icon: Building },
    { name: "Cameroon Tech Fund", roleKey: "partners.government", icon: Briefcase },
    { name: "Digital Africa", roleKey: "partners.community", icon: Handshake },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-brown mb-4">
            {t('partners.badge')}
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            {t('partners.trustedPartners')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-border hover:border-warm-gold/50 transition-colors duration-500"
            >
              <partner.icon className="w-10 h-10 text-warm-gold mb-4" />
              <h3 className="font-display text-lg text-foreground mb-2">{partner.name}</h3>
              <p className="font-body text-sm text-foreground/50 tracking-wider uppercase">{t(partner.roleKey)}</p>
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
          <p className="font-body text-foreground/60 mb-4">{t('partners.interested')}</p>
          <a
            href="mailto:partnerships@westtech.cm"
            className="inline-block font-body text-sm tracking-wider uppercase border-b border-warm-gold text-warm-dark hover:text-warm-gold transition-colors pb-1"
          >
            {t('partners.becomePartner')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
