import { useEffect, useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
  cartCount: number;
  toggleCart: () => void;
}

export default function Navbar({ currentView, setView, cartCount, toggleCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state when leaving home (other views start at top)
  useEffect(() => {
    if (currentView !== 'home') {
      setIsScrolled(false);
    } else {
      setIsScrolled(window.scrollY > 40);
    }
  }, [currentView]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Transparent nav over dark hero → light text; solid bar → dark text
  const onDarkHero = currentView === 'home' && !isScrolled;
  const solidNav = !onDarkHero;

  return (
    <nav
      id="top-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        solidNav
          ? 'py-3 bg-coconut-cream/95 backdrop-blur-md shadow-sm border-b border-warm-sand/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group focus:outline-none"
          id="nav-logo-btn"
        >
          <img
            alt="One Organic"
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/ADBb0uidOj5QKGEa0E7VBMvLXUecYFU1RfmHoq8zWWyFU_QNtSo8Ssr7NO4zJjDqqwmM4R2nTXAOn9jEfIzWHSiekC23vDIAL9WSxugvDzp2tEObysEWMbhdC7IedVrrS9kA6Sv37V06WFuCHtyc4ag5g2u31M142cIig4a6q9FfIFMJ6rONojByDGsNxP0UCVt2s7zEUs2xDpBWceYggZiIlotikfWUGj9nSUqJTIXDPu9R6wDMOjzmSwvICkE"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 py-1 cursor-pointer focus:outline-none ${
                currentView === link.id
                  ? onDarkHero
                    ? 'text-coconut-cream border-b border-soft-gold font-semibold'
                    : 'text-deep-forest border-b border-soft-gold font-semibold'
                  : onDarkHero
                    ? 'text-coconut-cream/90 hover:text-soft-gold border-b border-transparent'
                    : 'text-deep-forest/75 hover:text-deep-forest border-b border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={toggleCart}
            className={`relative p-2 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${
              onDarkHero
                ? 'text-coconut-cream hover:bg-coconut-cream/10 hover:text-soft-gold'
                : 'text-deep-forest hover:bg-warm-sand/20 hover:text-soft-gold'
            }`}
            aria-label="Toggle cart"
            id="nav-cart-btn"
          >
            <ShoppingCart className="w-5.5 h-5.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-soft-gold hover:bg-soft-gold/90 text-deep-forest font-bold text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-all duration-300 cursor-pointer focus:outline-none ${
              onDarkHero
                ? 'text-coconut-cream hover:text-soft-gold'
                : 'text-deep-forest hover:text-soft-gold'
            }`}
            aria-label="Toggle menu"
            id="nav-menu-btn"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-coconut-cream border-b border-warm-sand/50 shadow-md flex flex-col p-6 gap-4 z-40 transition-all duration-300 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-sans text-left text-base py-2.5 px-3 rounded-md transition-colors cursor-pointer ${
                currentView === link.id
                  ? 'bg-deep-forest text-coconut-cream font-medium'
                  : 'text-deep-forest/80 hover:bg-warm-sand/20'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
