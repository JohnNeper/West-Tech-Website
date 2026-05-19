import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import DonationButton from './DonationButton';
import { useAuth } from '@/hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/programs', label: t('nav.programs') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/partners', label: t('nav.partners') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-warm-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/c5268b09-fb94-43b8-a9fd-ad307d82ebae.png"
              alt="West Tech"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body tracking-wider uppercase transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-warm-gold' 
                    : 'text-white/80 hover:text-warm-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <DonationButton size="sm" className="text-xs tracking-wider uppercase" />
            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" size="sm" className="border-warm-gold/50 text-warm-gold hover:bg-warm-gold hover:text-warm-dark text-xs tracking-wider uppercase">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" size="sm"
                  onClick={() => signOut()}
                  className="text-white/60 hover:text-white text-xs tracking-wider uppercase"
                >
                  {t('admin.logout')}
                </Button>
              </div>
            ) : null}
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-warm-dark/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-display tracking-wider transition-colors py-2 ${
                      isActive(link.path) ? 'text-warm-gold' : 'text-white/80 hover:text-warm-gold'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                  <DonationButton className="w-full" />
                  {user ? (
                    <>
                      {isAdmin && (
                        <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                          <Button variant="outline" className="w-full border-warm-gold/50 text-warm-gold hover:bg-warm-gold hover:text-warm-dark">
                            Admin
                          </Button>
                        </Link>
                      )}
                      <Button variant="ghost" onClick={() => { signOut(); setIsMenuOpen(false); }} className="w-full text-white/60">
                        {t('admin.logout')}
                      </Button>
                    </>
                  ) : null}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
