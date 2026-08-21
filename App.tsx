import React, { useState } from 'react';
import { View } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ContentProvider } from './context/ContentContext';

// Core Pages
import { Home } from './pages/Home';
import { Veye7 } from './pages/Veye7';
import { Solutions } from './pages/Solutions';
import { Technology } from './pages/Technology';
import { ExecutiveInsights } from './pages/ExecutiveInsights';
import { InsightsIndexPage } from './pages/InsightsIndexPage';
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

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedSystemId, setSelectedSystemId] = useState<string>('default');

  const handleNavigate = (view: View, systemId?: string) => {
    setCurrentView(view);
    if (systemId) {
      setSelectedSystemId(systemId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation currentView={currentView} onNavigate={handleNavigate} />

        <main className="flex-grow pt-20">
          {/* Core Views */}
          {currentView === View.HOME && <Home onNavigate={handleNavigate} />}
          {currentView === View.VEYE7 && <Veye7 onNavigate={handleNavigate} />}
          {currentView === View.SOLUTIONS && <Solutions onNavigate={handleNavigate} />}
          {currentView === View.TECHNOLOGY && <Technology onNavigate={handleNavigate} />}
          {currentView === View.INSIGHTS && <ExecutiveInsights onNavigate={handleNavigate} />}
          {currentView === View.INSIGHTS_POST && <InsightPostPage />}
          {currentView === View.WHY_VEYE && <WhyVeye onNavigate={handleNavigate} />}
          {currentView === View.CONTACT && <Contact onNavigate={handleNavigate} />}
          {currentView === View.AUDIT && <Contact onNavigate={handleNavigate} />}
          {currentView === View.START_CONVERSATION && <StartAConversationPage onNavigate={handleNavigate} />}

          {/* Technology Subpages */}
          {currentView === View.TECH_VSE && <VelocitySyncEngine onNavigate={handleNavigate} />}
          {currentView === View.TECH_SCOUT && <VeyeScout onNavigate={handleNavigate} />}
          {currentView === View.TECH_PURSUIT && <VeyePursuit onNavigate={handleNavigate} />}

          {/* Solutions Subpages */}
          {currentView === View.SOL_SALES_MARKETING && <Salesandmarketingintelligence onNavigate={handleNavigate} />}
          {currentView === View.SOL_MARKET_COMPETITIVE && <Marketandcompetitiveintelligence onNavigate={handleNavigate} />}
          {currentView === View.SOL_PROCESS_ORCHESTRATION && <Intelligentprocessorganization onNavigate={handleNavigate} />}
          {currentView === View.SOL_GOVERNED_AI_AGENTS && <GovernedAIandAgenticsystems onNavigate={handleNavigate} />}
          {currentView === View.SOL_ENTERPRISE_ARCHITECTURE && <EnterpriseAIarchitectureandintegration onNavigate={handleNavigate} />}

          {/* Detail & Legacy Views */}
          {currentView === View.SYSTEM_DETAIL && <SystemDetail onNavigate={handleNavigate} systemId={selectedSystemId} />}
          {currentView === View.SERVICES && <Services onNavigate={handleNavigate} />}
          {currentView === View.GROWTH_SURFACES && <GrowthSurfaces onNavigate={handleNavigate} />}
          {currentView === View.MEDIA_INTELLIGENCE && <MediaIntelligence onNavigate={handleNavigate} />}
          {currentView === View.DIGITAL_PLATFORMS && <DigitalPlatforms onNavigate={handleNavigate} />}
        </main>

        <Footer onNavigate={handleNavigate} />
      </div>
    </ContentProvider>
  );
}