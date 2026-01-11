
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { AdminControls } from './components/AdminControls';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { SystemDetail } from './pages/SystemDetail';
import { Audit } from './pages/Audit';
import { StartAConversationPage } from './pages/StartAConversationPage';
import { WhyVeye } from './pages/WhyVeye';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { AgenticGrowthSystems } from './pages/AgenticGrowthSystems';
import { GrowthSurfaces } from './pages/GrowthSurfaces';
import { MediaIntelligence } from './pages/MediaIntelligence';
import { DigitalPlatforms } from './pages/DigitalPlatforms';
import { ExecutiveInsights } from './pages/ExecutiveInsights';
import { View, UserSession } from './types';
import { ContentProvider } from './context/ContentContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedSystemId, setSelectedSystemId] = useState<string | null>(null);
  const [session, setSession] = useState<UserSession>({
    pageViews: ['HOME'],
    lastAction: null
  });

  const handleNavigate = (view: View, systemId?: string) => {
    setCurrentView(view);
    if (systemId) {
      setSelectedSystemId(systemId);
    }
    
    setSession(prev => {
      const currentRoute = systemId ? `${view}:${systemId}` : view;
      return {
        ...prev,
        pageViews: [...prev.pageViews, currentRoute]
      };
    });

    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900 selection:bg-primary-500 selection:text-white relative">
      <Navigation currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === View.HOME && <Home onNavigate={handleNavigate} />}

        {currentView === View.VELOCITY_SYNC && <AgenticGrowthSystems onNavigate={handleNavigate} />}
        
        {currentView === View.GROWTH_SURFACES && <GrowthSurfaces onNavigate={handleNavigate} />}

        {currentView === View.MEDIA_INTELLIGENCE && <MediaIntelligence onNavigate={handleNavigate} />}

        {currentView === View.DIGITAL_PLATFORMS && <DigitalPlatforms onNavigate={handleNavigate} />}

        {(currentView === View.WHY_VEYE || currentView === View.ABOUT) && <WhyVeye onNavigate={handleNavigate} />}

        {currentView === View.EXECUTIVE_INSIGHTS && <ExecutiveInsights onNavigate={handleNavigate} />}

        {(currentView === View.WHAT_WE_BUILD || currentView === View.SERVICES) && (
          <Services onNavigate={handleNavigate} currentView={currentView} />
        )}

        {currentView === View.SYSTEM_DETAIL && selectedSystemId && (
          <SystemDetail systemId={selectedSystemId} onNavigate={handleNavigate} />
        )}

        {(currentView === View.INSIGHTS || currentView === View.BLOG) && <Blog onNavigate={handleNavigate} />}

        {currentView === View.START_CONVERSATION && <StartAConversationPage />}

        {currentView === View.AUDIT && <Audit />}

        {currentView === View.CONTACT && <Contact onNavigate={handleNavigate} />}
        
        {currentView === View.GROWTH_SYSTEMS && <AgenticGrowthSystems onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
      <ChatWidget />
      <AdminControls />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
};

export default App;
