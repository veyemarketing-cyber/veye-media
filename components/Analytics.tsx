import { useEffect } from 'react';

const MEASUREMENT_ID = 'G-EYT9HCKXEL';
let previousLocation = '';

/** Preserve production GA4 tracking while honoring the site's consent choice. */
export function Analytics({ currentView }: { currentView: string }) {
  useEffect(() => {
    const track = () => {
      if (localStorage.getItem('veye_cookie_consent') !== 'accepted') return;
      const w = window as any;
      if (!document.getElementById('veye-ga4')) {
        w.dataLayer = w.dataLayer || [];
        w.gtag = function () { w.dataLayer.push(arguments); };
        w.gtag('js', new Date());
        w.gtag('config', MEASUREMENT_ID, { send_page_view: false });
        const script = document.createElement('script');
        script.id = 'veye-ga4';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
        document.head.appendChild(script);
      }
      if (previousLocation === window.location.href) return;
      previousLocation = window.location.href;
      w.gtag('event', 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
        send_to: MEASUREMENT_ID,
      });
    };
    const timer = window.setTimeout(track, 0);
    window.addEventListener('veye-consent-change', track);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('veye-consent-change', track);
    };
  }, [currentView]);
  return null;
}
