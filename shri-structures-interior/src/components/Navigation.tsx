import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-serif font-bold text-white tracking-wider flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center text-zinc-900">S</span>
              SHRI<span className="font-sans font-light text-sm text-zinc-400 mt-1 uppercase tracking-widest hidden sm:block">Structures</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-amber-500 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09915765340"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-900 px-5 py-2 rounded-full font-medium transition-all"
            >
              <Phone size={16} />
              <span>099157-65340</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-amber-500 hover:bg-zinc-800/50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-4">
                <a href="tel:09915765340" className="flex items-center gap-3 text-zinc-300 px-3">
                  <Phone size={18} className="text-amber-500" />
                  <span>099157-65340</span>
                </a>
                <div className="flex items-start gap-3 text-zinc-300 px-3 text-sm">
                  <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Main Hambran Rd, near Fathe Cold Store, South City, Ludhiana</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
