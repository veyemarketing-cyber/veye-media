import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Logo } from './Logo'; 

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Standard GA4 tracking - This remains your primary analytics source
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-HXRX9SQ2GY', {
        page_path: location.pathname,
      });
    }
  }, [location]); 

  return (
    <>
      <main style={{ minHeight: '70vh' }}>
        <Outlet />
      </main>
      
      {/* Vercel Analytics removed to prevent local build issues and white-screen errors. 
          Tracking is now handled via the GA4 logic above and GTM. 
      */}
    </>
  );
}