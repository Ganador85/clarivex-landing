import { useEffect, useRef, useState } from 'react';

/**
 * Lengvas pakaitalas framer-motion `whileInView` / `useInView`.
 *
 * Svetainė sąmoningai naudoja framer-motion-lite shim'ą (animacijos išjungtos
 * dėl bundle svorio), todėl pagrindinio puslapio judesys daromas CSS'u, o
 * matomumas sekamas IntersectionObserver'iu — nulis papildomų kilobaitų.
 *
 * Visi elementai su vienodais parametrais dalijasi VIENU stebėtoju: puslapyje
 * jų per penkiasdešimt, o kiekvienas atskiras IntersectionObserver telefone
 * kainuoja ir atmintį, ir darbą pirmosiomis sekundėmis po užsikrovimo.
 */

const observers = new Map();
const callbacks = new WeakMap();

function getObserver(key, options) {
  let observer = observers.get(key);
  if (observer) return observer;

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const handle = callbacks.get(entry.target);
      if (handle) handle(entry.isIntersecting, observer, entry.target);
    }
  }, options);

  observers.set(key, observer);
  return observer;
}

export function useInViewRef({ once = true, margin = '0px 0px -12% 0px', threshold = 0 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }

    const key = `${margin}|${threshold}`;
    const observer = getObserver(key, { rootMargin: margin, threshold });

    callbacks.set(node, (isIntersecting, obs, target) => {
      if (isIntersecting) {
        setInView(true);
        if (once) {
          obs.unobserve(target);
          callbacks.delete(target);
        }
      } else if (!once) {
        setInView(false);
      }
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      callbacks.delete(node);
    };
  }, [once, margin, threshold]);

  return [ref, inView];
}

/** Ar naudotojas sistemoje prašo mažiau judesio. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Siauras ekranas — telefone taupom perpiešimus. */
export function isNarrowScreen() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(max-width: 767px)').matches;
}
