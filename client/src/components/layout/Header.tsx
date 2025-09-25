
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Committees', id: 'committees' },
    { label: 'Events', id: 'events' },
    { label: 'Register', id: 'registration' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 flex-shrink-0">
            <img src="/assets/logo.png" alt="PTMUN VI Logo" className="h-16 w-16" />
            <div className="whitespace-nowrap text-left">
              <h1 className="font-bold text-lg leading-tight">PTMUN VI</h1>
              <p className="text-xs text-muted-foreground">2025</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-indigo-950 transition-colors px-2 py-1 rounded"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('registration')} className="ml-2">
              Register Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 text-sm font-medium hover:text-indigo-950 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="mt-4 w-full"
                onClick={() => scrollToSection('registration')}
              >
                Register Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
