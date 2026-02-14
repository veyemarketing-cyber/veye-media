import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Logo } from './Logo'; 

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-HXRX9SQ2GY', {
        page_path: location.pathname,
      });
    }
  }, [location]); 

  return (
    <>
      {/* Keep your main content here. 
         The white screen was likely a "hang" while waiting for the Tailwind CDN. 
      */}
      <main style={{ minHeight: '70vh' }}>
        <Outlet />
      </main>
      
      <Analytics />
    </>
  );
}