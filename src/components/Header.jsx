import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

/** Desktop: pagrindinė juosta + „Daugiau“ (mažiau vizualinio triukšmo). Mobilus: visos nuorodos sąraše. */
const primaryNavLinks = [
  { id: 'home', label: 'Pradžia', href: '/' },
  { id: 'features', label: 'Funkcijos', href: '/features' },
  { id: 'how-it-works', label: 'Kaip veikia', href: '/kaip-veikia', desktopNowrap: true },
  { id: 'benefits', label: 'Nauda', href: '/nauda' },
  { id: 'atsakiklis', label: 'Atsakiklis', href: '/atsakiklis' },
  { id: 'prekes', label: 'Prekės', href: '/prekiu-katalogas' },
  { id: 'svetaines', label: 'Svetainės', href: '/svetainiu-kurejas' },
  { id: 'pricing', label: 'Kainodara', href: '/kainos' },
];

const moreNavLinks = [
  { id: 'telegram', label: 'Telegram', href: '/telegram' },
  { id: 'blog', label: 'Blogas', href: '/blog' },
  { id: 'resources', label: 'Resursai', href: '/resursai' },
  { id: 'pakviesk', label: 'Pakviesk draugą' },
  { id: 'cta', label: 'Kontaktai' },
];

const navLinks = [...primaryNavLinks, ...moreNavLinks];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMoreOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMoreOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMoreOpen]);

  const handleScrollTo = (id) => {
    // Jei ne pagrindiniame puslapyje, grįžti į pagrindinį
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    window.location.href = "https://app.clarivex.ai/";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070a14]/80 backdrop-blur-xl border-b border-white/[0.08] py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative">
              <img
                src="/logo.svg"
                alt="Clarivex"
                width="40"
                height="40"
                decoding="async"
                loading="lazy"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
              Clarivex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {primaryNavLinks.map((link) =>
              link.href ? (
                <div key={link.id}>
                  <Link
                    to={link.href}
                    className={`px-3 py-2 text-gray-400 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200 block text-center leading-tight${link.desktopNowrap ? ' lg:whitespace-nowrap' : ''}`}
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleScrollTo(link.id)}
                  className="px-3 py-2 text-gray-400 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all duration-200 text-center leading-tight"
                >
                  {link.label}
                </button>
              )
            )}
            <div className="relative">
              <button
                type="button"
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                onClick={() => setIsMoreOpen((o) => !o)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 leading-tight ${
                  isMoreOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Daugiau
                <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMoreOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Uždaryti meniu"
                    className="fixed inset-0 z-40 cursor-default bg-transparent"
                    onClick={() => setIsMoreOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-50 mt-1 min-w-[13rem] rounded-xl border border-gray-800 bg-gray-950/98 py-1 shadow-xl shadow-black/40 backdrop-blur-xl">
                    {moreNavLinks.map((link) =>
                      link.href ? (
                        <Link
                          key={link.id}
                          to={link.href}
                          onClick={() => setIsMoreOpen(false)}
                          className="block px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          key={link.id}
                          type="button"
                          onClick={() => {
                            handleScrollTo(link.id);
                            setIsMoreOpen(false);
                          }}
                          className="w-full px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                          {link.label}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Prisijungti - ryškus mygtukas */}
            <Button
              onClick={handleLogin}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 sm:px-6 py-2 sm:py-2.5 text-sm font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Prisijungti
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-primary-nav"
              aria-label={isMobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-primary-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="bg-gray-950/98 backdrop-blur-xl border-b border-gray-800 shadow-xl">
              <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1" aria-label="Pagrindinė navigacija">
                {navLinks.map((link, index) => (
                  link.href ? (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all block"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleScrollTo(link.id)}
                      className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    >
                      {link.label}
                    </motion.button>
                  )
                ))}
                <div className="border-t border-gray-800 my-2" />
                <Button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-3 rounded-xl"
                >
                  Pradėti nemokamai
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
