import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
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

/**
 * GTM listener for SPA navigation (HashRouter).
 * Pushes a virtual_pageview event on route changes so GA4 can track pageviews.
 */
const GtmListener: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // For HashRouter, the real route is in window.location.hash (e.g., "#/start-a-conversation")
    const hash = typeof window !== 'undefined' ? window.location.hash || '' : '';
    const page_path = hash.startsWith('#') ? hash.slice(1) : (location.pathname + location.search);

    // Ensure dataLayer exists and push a consistent event payload
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'virtual_pageview',
      page_path,
      page_title: typeof document !== 'undefined' ? document.title : 'Veye Media',
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <GtmListener />
      <Layout>
        <Routes>
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
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
