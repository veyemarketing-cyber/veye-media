import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; // ADDED: Vercel Analytics import
import { Logo } from './Logo'; 

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Triggers a 'page_view' in GA4 every time the URL path changes
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
      
      {/* ADDED: Vercel Analytics component to track visits */}
      <Analytics /> 
      
      {/* Footer can be added here if needed */}
    </>
  );
}