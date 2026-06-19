import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-serif font-bold text-white tracking-wider flex items-center gap-2 mb-6">
              <span className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center text-zinc-900">S</span>
              SHRI<span className="font-sans font-light text-sm text-zinc-400 mt-1 uppercase tracking-widest">Structures</span>
            </a>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
              Top-rated Real Estate Builders & Construction Company in Ludhiana. We design, build, and renovate with excellence and structural integrity.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#home" className="text-zinc-500 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="text-zinc-500 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-zinc-500 hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-3 font-medium">
              <li className="text-zinc-500 hover:text-amber-500 transition-colors cursor-default">Building Construction</li>
              <li className="text-zinc-500 hover:text-amber-500 transition-colors cursor-default">Civil Engineering</li>
              <li className="text-zinc-500 hover:text-amber-500 transition-colors cursor-default">Renovation & Remodeling</li>
              <li className="text-zinc-500 hover:text-amber-500 transition-colors cursor-default">Interior Design</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Shri Structures Interior. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
