import { useState } from "react";
import Logo from "./logo";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              ESG Impact
            </button>
            <button 
              onClick={() => scrollToSection('partnerships')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              Partnerships
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              ESG Impact
            </button>
            <button 
              onClick={() => scrollToSection('partnerships')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              Partnerships
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-primary hover:bg-gray-50 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
