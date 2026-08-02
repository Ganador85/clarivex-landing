import React from 'react';
import { seoHref } from '@/lib/seoLinks';

const QuickLinks = () => {
  return (
    <section className="cvx-content-visibility cvx-hairline py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Kur pradėti?</h2>
        <p className="text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Jei norite greitai suprasti produktą, pradėkite nuo svarbiausių puslapių.{' '}
          <a href={seoHref('/atsakiklis')} className="text-blue-400 hover:text-blue-300 font-medium">AI atsakiklis Messenger, DM ir komentarams</a>{' '}
          — inbox ir taisyklės;{' '}
          <a href={seoHref('/kaip-veikia')} className="text-blue-400 hover:text-blue-300 font-medium">Kaip veikia Clarivex</a>{' '}
          paaiškina eigą,{' '}
          <a href={seoHref('/prekiu-katalogas')} className="text-blue-400 hover:text-blue-300 font-medium">Prekių katalogas</a>{' '}
          — kaip prekės paruošiamos atsakymams ir paieškai, o kiti puslapiai parodo funkcijas, naudą ir kainodarą.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href={seoHref('/features')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI funkcijos ir galimybės verslui
          </a>
          <a href={seoHref('/kaip-veikia')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Kaip veikia Clarivex platforma
          </a>
          <a href={seoHref('/nauda')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI sprendimai mažoms įmonėms
          </a>
          <a href={seoHref('/prekiu-katalogas')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Prekių katalogas su AI paieška
          </a>
          <a href={seoHref('/svetainiu-kurejas')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Svetainė su savu domenu
          </a>
          <a href={seoHref('/telegram')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Telegram integracija ir balso komandos
          </a>
          <a href={seoHref('/atsakiklis')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI atsakiklis: DM, Messenger ir komentarai
          </a>
          <a href={seoHref('/kainos')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Kainodara ir kreditų sistema
          </a>
          <a href={seoHref('/resursai')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            AI resursai ir praktiniai straipsniai
          </a>
          <a href={seoHref('/#pakviesk')} className="cvx-surface px-4 py-2 text-slate-300 hover:text-white hover:!border-emerald-500/40 transition-all">
            Pakviesk draugą — 10% abiem
          </a>
          <a href={seoHref('/duk')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            DUK
          </a>
          <a href={seoHref('/statusas')} className="cvx-surface cvx-surface-hover px-4 py-2 text-slate-300 hover:text-white">
            Sistemos statusas
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
