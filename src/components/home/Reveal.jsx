import React from 'react';
import { useInViewRef } from './useReveal';

/**
 * Turinys pasirodo slenkant.
 *
 * Pradinė (paslėpta) būsena aprašyta CSS'e po `html.cvx-js`, o ne inline —
 * kitaip iš anksto atvaizduotame HTML'e visos sekcijos ateidavo su opacity:0
 * ir puslapis atrodydavo tuščias tol, kol užsikrauna JS.
 */
export default function Reveal({ children, delay = 0, y = 22, className = '' }) {
  const [ref, inView] = useInViewRef();

  return (
    <div
      ref={ref}
      className={`cvx-reveal ${className}`.trim()}
      data-shown={inView ? 'true' : 'false'}
      style={{ '--cvx-reveal-delay': `${delay}s`, '--cvx-reveal-y': `${y}px` }}
    >
      {children}
    </div>
  );
}

/** Sekcijos antraštė: akcentinė eilutė + H2 + paaiškinimas. */
export function SectionHead({ eyebrow, title, lead, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto';
  return (
    <Reveal className={`${alignment} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-3 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-aurora-blue/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-white">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[16px] leading-relaxed text-white/55">{lead}</p>}
    </Reveal>
  );
}
