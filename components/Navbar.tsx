import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION } from '../constants'; // Removed BRAND_NAME if not used elsewhere
import { NavItem } from '../types';
import { Logo } from './Logo'; // Import your Logo component

export const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              {/* We call the Logo component here. 
                  Since the Navbar is white (bg-white), 
                  we use the 'dark' variant (the default). 
              */}
              <Logo className="h-10 w-auto" variant="dark" />
              
              {/* Optional: Add sr-only text for accessibility/SEO without showing it */}
              <span className="sr-only">Veye Media</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item: NavItem) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    {item.label}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className="text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};