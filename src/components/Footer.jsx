import React from 'react';
import { OPEN_SETTINGS_EVENT } from '@/lib/cookieConsent';
import { seoHref } from '@/lib/seoLinks';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

function FooterLink({ to, children, className }) {
  return (
    <a href={seoHref(to)} className={className}>
      {children}
    </a>
  );
}

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="cvx-content-visibility cvx-hairline relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              onClick={() => handleScrollTo('home')}
              className="flex items-center gap-2 mb-6 cursor-pointer group"
            >
              <img 
                src="/logo.svg" 
                alt="Clarivex" 
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">Clarivex</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              AI asistentų platforma, kuri automatizuoja kasdienius darbus — 
              nuo socialinių tinklų iki el. pašto valdymo.
            </p>

            {/* Social — Instagram be išorinės nuorodos (crawler 429) */}
            <div className="flex gap-3">
              <span
                aria-label="Clarivex Instagram: @clarivex_ai"
                title="@clarivex_ai Instagram"
                className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 cursor-default"
              >
                <Instagram className="w-5 h-5" aria-hidden />
              </span>
              <a 
                href="https://www.facebook.com/Clarivex/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                aria-label="Clarivex Facebook"
                className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
              >
                <Facebook className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-white mb-5">Platforma</p>
            <ul className="space-y-3">
              <li>
                <FooterLink
                  to="/prekiu-katalogas"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Prekių katalogas
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/blog" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Blogas
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/resursai" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Resursai
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/features" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Funkcijos
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/kaip-veikia" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Kaip veikia
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/kainos" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Kainodara
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/nauda" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Nauda
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/atsakiklis" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Atsakiklis
                </FooterLink>
              </li>
              <li>
                <a 
                  href={seoHref('/#pakviesk')} 
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Pakviesk draugą
                </a>
              </li>
              <li>
                <a 
                  href="https://app.clarivex.ai/" 
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Prisijungti
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold text-white mb-5">Pagalba</p>
            <ul className="space-y-3">
              <li>
                <FooterLink 
                  to="/duk" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  DUK
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/statusas" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Sistemos statusas
                </FooterLink>
              </li>
              <li>
                <FooterLink 
                  to="/telegram" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Telegram integracija
                </FooterLink>
              </li>
              <li>
                <a 
                  href="https://t.me/clarivex_support_bot" 
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Susisiekti
                </a>
              </li>
              <li>
                <FooterLink 
                  to="/partneriams-ir-ziniasklaidai" 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Partneriams ir žiniasklaidai
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-5">Kontaktai</p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://t.me/clarivex_support_bot" 
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Palaikymas per Telegram</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@clarivex.ai" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:border-blue-500/50 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@clarivex.ai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Clarivex. Visos teisės saugomos.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT))}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Slapukų nustatymai
            </button>
            <FooterLink to="/privatumas" className="text-gray-500 hover:text-gray-300 transition-colors">
              Privatumo politika
            </FooterLink>
            <FooterLink to="/salygos" className="text-gray-500 hover:text-gray-300 transition-colors">
              Naudojimosi sąlygos
            </FooterLink>
            <FooterLink to="/duomenu-istrynimas" className="text-gray-500 hover:text-gray-300 transition-colors">
              Duomenų ištrynimas
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
