import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { VelocitySync } from './pages/VelocitySync';
import { SystemsWeBuild } from './pages/SystemsWeBuild';
import { GrowthSurfaces } from './pages/GrowthSurfaces';
import { MediaIntelligence } from './pages/MediaIntelligence';
import { DigitalPresence } from './pages/DigitalPresence';
import { IntelligentGrowthSystems } from './pages/IntelligentGrowthSystems';
import { WhoWeWorkWith } from './pages/WhoWeWorkWith';
import { WhyVeye } from './pages/WhyVeye';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { StartConversation } from './pages/StartConversation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { DataGovernance } from './pages/DataGovernance';
import { Sitemap } from './pages/Sitemap';
import { Page } from './types';

// Declare gtag on the window object to match existing TypeScript definitions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * GTM/GA4 listener for SPA navigation (HashRouter).
 * Sends a manual page_view event on route changes.
 */
const GtmListener: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Capture the path from HashRouter (e.g., #/SystemsWeBuild -> /SystemsWeBuild)
    const hash = window.location.hash || '';
    const page_path = hash.startsWith('#') ? hash.slice(1) : (location.pathname + location.search);

    // 2. Send the hit to the NEW Veye Media account (G-EYT9HCKXEL)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: page_path,
        page_title: document.title || 'Veye Media',
        send_to: 'G-EYT9HCKXEL' 
      });
    }

    // 3. Keep dataLayer update for custom triggers
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'virtual_pageview',
      page_path,
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <GtmListener />
      <Routes>
        <Route element={<Layout />}>
          <Route path={Page.Home} element={<Home />} />
          <Route path={Page.VelocitySync} element={<VelocitySync />} />
          <Route path={Page.SystemsWeBuild} element={<SystemsWeBuild />} />
          <Route path={Page.GrowthSurfaces} element={<GrowthSurfaces />} />
          <Route path={Page.MediaIntelligence} element={<MediaIntelligence />} />
          <Route path={Page.DigitalPresence} element={<DigitalPresence />} />
          <Route path={Page.IntelligentGrowthSystems} element={<IntelligentGrowthSystems />} />
          <Route path={Page.WhoWeWorkWith} element={<WhoWeWorkWith />} />
          <Route path={Page.WhyVeye} element={<WhyVeye />} />
          <Route path={Page.Insights} element={<Insights />} />
          <Route path={Page.InsightDetail} element={<InsightDetail />} />
          <Route path={Page.StartConversation} element={<StartConversation />} />
          <Route path={Page.PrivacyPolicy} element={<PrivacyPolicy />} />
          <Route path={Page.TermsOfUse} element={<TermsOfUse />} />
          <Route path={Page.DataGovernance} element={<DataGovernance />} />
          <Route path={Page.Sitemap} element={<Sitemap />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;