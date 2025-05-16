
import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';

const AccentureNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      {/* Main navbar */}
      <nav className="bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-xl font-bold">&gt;</span>
                <span className="ml-1 text-xl font-bold">accenture</span>
              </div>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-purple-200">Insights</a>
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-purple-200">Services</a>
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-purple-200">Industries</a>
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-purple-200">Careers</a>
                <a href="#" className="px-3 py-2 text-sm font-medium hover:text-purple-200">About</a>
              </div>
            </div>
            
            {/* Search and icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-purple-200">
                <Search size={20} />
              </button>
              <button className="bg-purple-700 px-4 py-2 rounded font-medium hover:bg-purple-600">
                Contact Us
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-200 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-purple-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-purple-700">Insights</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-purple-700">Services</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-purple-700">Industries</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-purple-700">Careers</a>
              <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-purple-700">About</a>
              <div className="pt-4 flex items-center justify-between">
                <button className="px-3 py-2 text-base font-medium hover:bg-purple-700 flex items-center">
                  <Search size={20} className="mr-2" /> Search
                </button>
                <button className="bg-purple-700 px-4 py-2 rounded font-medium hover:bg-purple-600 mr-2">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default AccentureNavbar;