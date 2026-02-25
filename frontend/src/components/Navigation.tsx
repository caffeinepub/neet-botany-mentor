import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why' },
  { label: 'Course', href: '#course' },
  { label: 'Demo Class', href: '#demo' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-green-sm border-b border-green-light'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg green-gradient flex items-center justify-center shadow-green-sm">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-primary text-base leading-tight block">
                NEET Botany Mentor
              </span>
              <span className="text-xs text-muted-foreground leading-tight block">
                Expert NCERT Guidance
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-green-pale rounded-md transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:flex green-gradient text-white border-0 shadow-green-sm hover:opacity-90 transition-opacity font-semibold"
              onClick={() => handleNavClick('#demo')}
            >
              Free Demo
            </Button>
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-green-pale transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-green-light shadow-green-md">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-green-pale rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="mt-2 green-gradient text-white border-0 font-semibold"
              onClick={() => handleNavClick('#demo')}
            >
              Book Free Demo Class
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
