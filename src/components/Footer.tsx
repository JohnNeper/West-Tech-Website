import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-warm-dark text-white">
      <div className="container px-6 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/lovable-uploads/c5268b09-fb94-43b8-a9fd-ad307d82ebae.png" alt="West Tech" className="w-10 h-10" />
              <span className="font-display text-xl tracking-widest uppercase">
                <span className="text-warm-gold">West</span> Tech
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border border-white/10 px-3 py-1 mb-6">
              <Heart className="h-3 w-3 text-warm-rose" />
              <span className="font-body text-xs tracking-wider uppercase text-white/50">{t('donation.badge')}</span>
            </div>
            <p className="font-body text-white/40 max-w-sm leading-relaxed mb-8">
              {t('footer.description')}
            </p>
            <div className="flex gap-5">
              {[
                { icon: Twitter, href: "https://twitter.com/WestTechCM" },
                { icon: Linkedin, href: "https://cm.linkedin.com/company/westtech1" },
                { icon: Facebook, href: "https://facebook.com/WestTechCM" },
                { icon: Instagram, href: "https://instagram.com/WestTechCM" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-warm-gold transition-colors duration-300">
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold mb-8">{t('nav.programs')}</h3>
            <ul className="space-y-4">
              {[
                { to: '/programs', label: t('nav.programs') },
                { to: '/partners', label: t('nav.partners') },
                { to: '/contact', label: t('nav.contact') },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="font-body text-sm text-white/40 hover:text-warm-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-warm-gold mb-8">{t('contact.getInTouch')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/40">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <a href="mailto:hello@westtech.cm" className="font-body text-sm text-white/40 hover:text-warm-gold transition-colors">
                  {t('contact.emailAddress')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-warm-gold flex-shrink-0" />
                <a href="tel:+237600000000" className="font-body text-sm text-white/40 hover:text-warm-gold transition-colors">
                  {t('contact.phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/35 tracking-wider">
            © {new Date().getFullYear()} West Tech. {t('footer.rights')}.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-body text-xs text-white/35 hover:text-warm-gold transition-colors tracking-wider">{t('footer.privacy')}</a>
            <a href="#" className="font-body text-xs text-white/35 hover:text-warm-gold transition-colors tracking-wider">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
