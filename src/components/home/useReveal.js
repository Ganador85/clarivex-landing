import { useEffect, useRef, useState } from 'react';

/**
 * Lengvas pakaitalas framer-motion `whileInView` / `useInView`.
 *
 * Svetainė sąmoningai naudoja framer-motion-lite shim'ą (animacijos išjungtos
 * dėl bundle svorio), todėl pagrindinio puslapio judesys daromas CSS'u, o
 * matomumas sekamas IntersectionObserver'iu — nulis papildomų kilobaitų.
 *
 * `once: true` – suveikia vieną kartą (turinio pasirodymas).
 * `margin` – kaip ir framer-motion: susiaurina stebimą langą.
 */
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: margin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, margin, threshold]);

  return [ref, inView];
}

/** Ar naudotojas sistemoje prašo mažiau judesio. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
