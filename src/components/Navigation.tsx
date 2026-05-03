/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-brand-bg/80 backdrop-blur-xl border-b border-brand-accent/10 z-50 px-8 py-4 flex justify-between items-center">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <Terminal className="text-brand-accent w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="text-xl font-black text-brand-accent tracking-[0.2em] font-sans uppercase">
          Sovereign Tech
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-brand-accent ${
              currentView === item.id 
                ? 'text-brand-accent border-b-2 border-brand-accent pb-1' 
                : 'text-brand-text-secondary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNavigate('contact')}
        className="bg-brand-accent text-brand-bg px-6 py-2.5 text-xs font-black uppercase tracking-widest hover:brightness-110 transition-all rounded-sm"
      >
        Get Started
      </motion.button>
    </header>
  );
}

export function Footer({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <footer className="w-full bg-brand-surface py-16 px-8 border-t border-brand-accent/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-brand-text-primary tracking-widest uppercase">
            Sovereign Tech
          </span>
          <span className="text-[10px] text-brand-text-secondary uppercase tracking-[0.2em]">
            © 2024 Sovereign Tech Consultancy. Engineered for Precision.
          </span>
        </div>

        <div className="flex gap-8">
          {['Services', 'Methodology', 'Consultants', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className="text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest hover:text-brand-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
