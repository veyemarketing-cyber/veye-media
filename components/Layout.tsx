import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar'; 
import { Footer } from './Footer';
import { ChatAssistant } from './ChatAssistant';

/**
 * Main layout component for Veye Media.
 * Provides the consistent structure (Navbar, Footer, Chat) 
 * across all internal routes.
 */
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation at the top */}
      <Navbar /> 
      
      {/* Main content area: 
          The <Outlet /> component renders the specific page 
          matched by the router (Home, VelocitySync, etc.) 
      */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* VSE Powered Chat Assistant */}
      <ChatAssistant /> 
      
      {/* Site Footer */}
      <Footer />
    </div>
  );
}