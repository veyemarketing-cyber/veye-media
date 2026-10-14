import React, { useEffect, useState } from 'react';
import { View } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ContentProvider } from './context/ContentContext';
import { CookieConsent } from './components/CookieConsent';
import { CookiePolicyModal } from './components/CookiePolicyModal';
import { Analytics } from './components/Analytics';
import { AdminControls } from './components/AdminControls';
import { PageSEO } from './components/PageSEO';
import { Businessdevelopmentandrevenueintelligence } from './pages/Businessdevelopmentandrevenueintelligence';
import { BusinessIntellenceanddecisionsupport } from './pages/BusinessIntellenceanddecisionsupport';

// Core Pages
import { Home } from './pages/Home';
import { Veye7 } from './pages/Veye7';
import { Solutions } from './pages/Solutions';
import { Technology } from './pages/Technology';
import { ExecutiveInsights } from './pages/ExecutiveInsights';
import { InsightPostPage } from './pages/InsightPostPage';
import { WhyVeye } from './pages/WhyVeye';
import { Contact } from './pages/Contact';
import { StartAConversationPage } from './pages/StartAConversationPage';
import { SystemDetail } from './pages/SystemDetail';

// Technology Subpages
import { VelocitySyncEngine } from './pages/VelocitySyncEngine';
import { VeyeScout } from './pages/VeyeScout';
import { VeyePursuit } from './pages/VeyePursuit';

// Solutions Subpages
import { Salesandmarketingintelligence } from './pages/Salesandmarketingintelligence';
import { Marketandcompetitiveintelligence } from './pages/Marketandcompetitiveintelligence';
import { Intelligentprocessorganization } from './pages/Intelligentprocessorganization';
import { GovernedAIandAgenticsystems } from './pages/GovernedAIandAgenticsystems';
import { EnterpriseAIarchitectureandintegration } from './pages/EnterpriseAIarchitectureandintegration';

// Legacy Services
import { Services } from './pages/Services';
import { GrowthSurfaces } from './pages/GrowthSurfaces';
import { MediaIntelligence } from './pages/MediaIntelligence';
import { DigitalPlatforms } from './pages/DigitalPlatforms';

/**
 * Public, canonical routes for the current Veye Media website.
 *
 * Legacy views intentionally remain outside this map so they are not
 * promoted as current public/indexable website destinations.
 */
const VIEW_TO_PATH: Partial<Record<View, string>> = {
  [View.HOME]: '/',
  [View.VEYE7]: '/veye7',
  [View.SOLUTIONS]: '/solutions',
  [View.TECHNOLOGY]: '/technology',
  [View.INSIGHTS]: '/insights',
  [View.WHY_VEYE]: '/why-veye',
  [View.CONTACT]: '/contact',
  [View.START_CONVERSATION]: '/start-a-conversation',

  // Technology
  [View.TECH_VSE]: '/technology/velocity-sync-engine',
  [View.TECH_SCOUT]: '/technology/veye-scout',
  [View.TECH_PURSUIT]: '/technology/veye-pursuit',

  // Solutions
  [View.SOL_SALES_MARKETING]:
    '/solutions/sales-marketing-intelligence',
  [View.SOL_MARKET_COMPETITIVE]:
    '/solutions/market-competitive-intelligence',
  [View.SOL_PROCESS_ORCHESTRATION]:
    '/solutions/intelligent-process-orchestration',
  [View.SOL_GOVERNED_AI_AGENTS]:
    '/solutions/governed-ai-agentic-systems',
  [View.SOL_ENTERPRISE_ARCHITECTURE]:
    '/solutions/enterprise-ai-architecture-integration',
  [View.SOL_BI_DECISION_SUPPORT]:
  '/solutions/business-intelligence-decision-support',
[View.SOL_BD_REVENUE]:
  '/solutions/business-development-revenue-intelligence',
};

const PATH_TO_VIEW = new Map<string, View>(
  Object.entries(VIEW_TO_PATH).map(([view, path]) => [
    path as string,
    view as View,
  ])
);

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }

  const normalized = pathname.replace(/\/+$/, '');

  return normalized || '/';
}

function getViewFromPath(): View {
  if (typeof window === 'undefined') {
    return View.HOME;
  }

  const path = normalizePath(window.location.pathname);

  return PATH_TO_VIEW.get(path) ?? View.HOME;
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>(() =>
    getViewFromPath()
  );

  const [selectedSystemId, setSelectedSystemId] =
    useState<string>('default');

  const [isCookiePolicyOpen, setIsCookiePolicyOpen] =
    useState<boolean>(false);

  /**
   * Synchronize browser Back / Forward navigation with the React view.
   */
  useEffect(() => {
    const handlePopState = () => {
      const nextView = getViewFromPath();
      setCurrentView(nextView);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  /**
   * If someone lands directly on an unknown URL, keep the app stable
   * and normalize the address back to the homepage.
   *
   * This does not create public routes for legacy views.
   */
  useEffect(() => {
    const currentPath = normalizePath(window.location.pathname);

    if (!PATH_TO_VIEW.has(currentPath)) {
      window.history.replaceState({}, '', '/');
      setCurrentView(View.HOME);
    }
  }, []);

  const handleNavigate = (view: View, systemId?: string) => {
    setCurrentView(view);

    if (systemId) {
      setSelectedSystemId(systemId);
    }

    const destinationPath = VIEW_TO_PATH[view];

    /**
     * Only current public views receive canonical URLs.
     *
     * Legacy/internal views continue to work inside the application,
     * but they are not turned into new public/indexable routes.
     */
    if (destinationPath) {
      const currentPath = normalizePath(window.location.pathname);

      if (currentPath !== destinationPath) {
        window.history.pushState({}, '', destinationPath);
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <ContentProvider>
    <div className="min-h-screen flex flex-col bg-white relative">

      <PageSEO currentView={currentView} />

      <Navigation
        currentView={currentView}
        onNavigate={handleNavigate}
      />

        <main className="flex-grow pt-20">
          {/* Core Views */}
          {currentView === View.HOME && (
            <Home onNavigate={handleNavigate} />
          )}

          {currentView === View.VEYE7 && (
            <Veye7 onNavigate={handleNavigate} />
          )}

          {currentView === View.SOLUTIONS && (
            <Solutions onNavigate={handleNavigate} />
          )}

          {currentView === View.TECHNOLOGY && (
            <Technology onNavigate={handleNavigate} />
          )}

          {currentView === View.INSIGHTS && (
            <ExecutiveInsights onNavigate={handleNavigate} />
          )}

          {currentView === View.INSIGHTS_POST && (
            <InsightPostPage />
          )}

          {currentView === View.WHY_VEYE && (
            <WhyVeye onNavigate={handleNavigate} />
          )}

          {currentView === View.CONTACT && (
            <Contact onNavigate={handleNavigate} />
          )}

          {currentView === View.AUDIT && (
            <Contact onNavigate={handleNavigate} />
          )}

          {currentView === View.START_CONVERSATION && (
            <StartAConversationPage onNavigate={handleNavigate} />
          )}

          {/* Technology Subpages */}
          {currentView === View.TECH_VSE && (
            <VelocitySyncEngine onNavigate={handleNavigate} />
          )}

          {currentView === View.TECH_SCOUT && (
            <VeyeScout onNavigate={handleNavigate} />
          )}

          {currentView === View.TECH_PURSUIT && (
            <VeyePursuit onNavigate={handleNavigate} />
          )}

          {/* Solutions Subpages */}
          {currentView === View.SOL_SALES_MARKETING && (
            <Salesandmarketingintelligence
              onNavigate={handleNavigate}
            />
          )}

          {currentView === View.SOL_MARKET_COMPETITIVE && (
            <Marketandcompetitiveintelligence
              onNavigate={handleNavigate}
            />
          )}

          {currentView === View.SOL_PROCESS_ORCHESTRATION && (
            <Intelligentprocessorganization
              onNavigate={handleNavigate}
            />
          )}

          {currentView === View.SOL_GOVERNED_AI_AGENTS && (
            <GovernedAIandAgenticsystems
              onNavigate={handleNavigate}
            />
          )}

          {currentView === View.SOL_ENTERPRISE_ARCHITECTURE && (
            <EnterpriseAIarchitectureandintegration
              onNavigate={handleNavigate}
            />
          )}

          {/* Detail & Legacy Views */}
          {currentView === View.SYSTEM_DETAIL && (
            <SystemDetail
              onNavigate={handleNavigate}
              systemId={selectedSystemId}
            />
          )}

          {currentView === View.SERVICES && (
            <Services onNavigate={handleNavigate} />
          )}

          {currentView === View.GROWTH_SURFACES && (
            <GrowthSurfaces onNavigate={handleNavigate} />
          )}

          {currentView === View.MEDIA_INTELLIGENCE && (
            <MediaIntelligence onNavigate={handleNavigate} />
          )}

          {currentView === View.DIGITAL_PLATFORMS && (
            <DigitalPlatforms onNavigate={handleNavigate} />
          )}

          {currentView === View.SOL_BI_DECISION_SUPPORT && (
            <BusinessIntellenceanddecisionsupport
              onNavigate={handleNavigate}
            />
          )}

          {currentView === View.SOL_BD_REVENUE && (
            <Businessdevelopmentandrevenueintelligence
              onNavigate={handleNavigate}
            />
          )}
        </main>

        <Footer onNavigate={handleNavigate} />

        {/* Global Floating Components */}
        <Analytics currentView={currentView} />
        <AdminControls />

        {/* Compliance & Consent */}
        <CookieConsent
          onOpenPolicy={() => setIsCookiePolicyOpen(true)}
        />

        <CookiePolicyModal
          isOpen={isCookiePolicyOpen}
          onClose={() => setIsCookiePolicyOpen(false)}
        />
      </div>
    </ContentProvider>
  );
}