import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs tracking-wider font-body uppercase transition-all duration-300 rounded ${
          i18n.language === 'en'
            ? 'bg-warm-gold text-warm-dark font-semibold'
            : 'text-white/60 hover:text-white'
        } ${isMobile ? 'text-[10px]' : ''}`}
      >
        EN
      </button>
      <span className="text-white/30 text-xs">|</span>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-2 py-1 text-xs tracking-wider font-body uppercase transition-all duration-300 rounded ${
          i18n.language === 'fr'
            ? 'bg-warm-gold text-warm-dark font-semibold'
            : 'text-white/60 hover:text-white'
        } ${isMobile ? 'text-[10px]' : ''}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
