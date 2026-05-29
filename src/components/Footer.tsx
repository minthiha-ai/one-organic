import { Leaf, Award, ShieldCheck, Mail, Globe } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const handleNavClick = (id: string) => {
    setView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-forest text-coconut-cream py-16 px-6 md:px-12 border-t border-warm-sand/25">
      <div className="max-w-7xl mx-auto">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
          {/* Logo Column */}
          <div className="md:col-span-5 max-w-sm">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 mb-6 group cursor-pointer focus:outline-none"
            >
              <img
                alt="One Organic Logo Inverted"
                className="h-10 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/ADBb0uidOj5QKGEa0E7VBMvLXUecYFU1RfmHoq8zWWyFU_QNtSo8Ssr7NO4zJjDqqwmM4R2nTXAOn9jEfIzWHSiekC23vDIAL9WSxugvDzp2tEObysEWMbhdC7IedVrrS9kA6Sv37V06WFuCHtyc4ag5g2u31M142cIig4a6q9FfIFMJ6rONojByDGsNxP0UCVt2s7zEUs2xDpBWceYggZiIlotikfWUGj9nSUqJTIXDPu9R6wDMOjzmSwvICkE"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-soft-gold">
                one organic
              </span>
            </button>
            <p className="text-sm text-coconut-cream/80 leading-relaxed font-sans mt-4">
              Ethically sourced. Purely organic. Sustainably delivered from the heart of the tropical coconut grove directly to your home.
            </p>
          </div>

          {/* Links and Certifications */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Social Links */}
            <div>
              <h5 className="font-sans text-xs font-bold text-soft-gold mb-6 uppercase tracking-widest">
                Social
              </h5>
              <ul className="space-y-3.5 font-sans text-sm">
                <li>
                  <a
                    className="text-coconut-cream/80 hover:text-soft-gold transition-colors duration-300"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-coconut-cream/80 hover:text-soft-gold transition-colors duration-300"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-coconut-cream/80 hover:text-soft-gold transition-colors duration-300"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    LINE Official
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h5 className="font-sans text-xs font-bold text-soft-gold mb-6 uppercase tracking-widest">
                Contact
              </h5>
              <ul className="space-y-3.5 font-sans text-sm">
                <li>
                  <a
                    className="text-coconut-cream/80 hover:text-soft-gold transition-colors duration-300 break-all"
                    href="mailto:hello@oneorganic.com"
                  >
                    hello@oneorganic.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-coconut-cream/80 hover:text-soft-gold transition-colors duration-300 break-all"
                    href="mailto:support@oneorganic.com"
                  >
                    support@oneorganic.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Certifications Badge Column */}
            <div className="col-span-2 sm:col-span-1">
              <h5 className="font-sans text-xs font-bold text-soft-gold mb-6 uppercase tracking-widest">
                Certifications
              </h5>
              <div className="flex gap-4 text-coconut-cream/60">
                <span className="p-2.5 rounded-full border border-coconut-cream/10 bg-coconut-cream/5 hover:text-soft-gold hover:border-soft-gold transition-colors" title="Certified Organic">
                  <Leaf className="w-5 h-5" />
                </span>
                <span className="p-2.5 rounded-full border border-coconut-cream/10 bg-coconut-cream/5 hover:text-soft-gold hover:border-soft-gold transition-colors" title="Pure Nutrients">
                  <Award className="w-5 h-5" />
                </span>
                <span className="p-2.5 rounded-full border border-coconut-cream/10 bg-coconut-cream/5 hover:text-soft-gold hover:border-soft-gold transition-colors" title="Biodegradable">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator and Bottom Copy */}
        <div className="pt-8 border-t border-coconut-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-coconut-cream/50 uppercase tracking-widest font-sans">
          <p>© 2026 One Organic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-soft-gold transition-colors" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-soft-gold transition-colors" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
