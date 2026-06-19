/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import OpeningAnimation from './components/OpeningAnimation';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Disable scrolling while the preloader is active
    if (showPreloader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPreloader]);

  return (
    <div className="bg-zinc-950 min-h-screen font-sans text-zinc-50 selection:bg-amber-500/30 relative overflow-x-hidden">
      <AnimatePresence>
        {showPreloader && (
          <OpeningAnimation onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      <motion.div
        className="w-full min-h-screen"
        initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
        animate={!showPreloader ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </div>
  );
}
