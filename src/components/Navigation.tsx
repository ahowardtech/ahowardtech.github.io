/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Terminal, Linkedin, Twitter, Github, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';
import { AI_SERVICES } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
  onNavigateSection: (sectionId: string) => void;
  currentView: string;
  menuOpen: boolean;
  onMenuToggle: (open: boolean) => void;
}

export default function Navbar({ onNavigate, onNavigateSection, currentView, menuOpen, onMenuToggle }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // close mobile menu on navigation change
    onMenuToggle(false);
  }, [currentView, onMenuToggle]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-xl border-b border-brand-border z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      <a
        href="#"
        className="flex items-center gap-2.5 cursor-pointer group"
        aria-label="Go to home"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-accent/10 group-hover:bg-brand-accent/15 transition-colors">
          <Terminal className="text-brand-accent w-5 h-5" />
        </span>
        <span className="text-lg font-black text-brand-ink tracking-tight">
                Howard<span className="text-brand-accent">Tech</span>
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-9">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id === 'home' ? '#' : `#${item.id}`}
            aria-current={currentView === item.id ? 'page' : undefined}
            className={`text-sm font-semibold transition-colors hover:text-brand-accent ${
              currentView === item.id
                ? 'text-brand-accent'
                : 'text-brand-text-secondary'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => onMenuToggle(!menuOpen)}
        className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-brand-ink hover:bg-brand-surface transition-colors"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-30"
            onClick={() => onMenuToggle(false)}
            aria-hidden="true"
          />

          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 max-h-[calc(100vh-6rem)] overflow-hidden bg-white rounded-[32px] border border-brand-border z-40 px-4 pt-6 pb-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
          >
            <button
              type="button"
              onClick={() => onMenuToggle(false)}
              className="absolute top-4 right-4 text-brand-text-secondary hover:text-brand-ink"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col gap-3 pt-8 overflow-y-auto scrollbar-none pb-4" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    onMenuToggle(false);
                  }}
                  className={`group w-full text-sm font-semibold text-left py-4 px-4 rounded-3xl transition-colors flex items-center justify-between ${
                    currentView === item.id ? 'bg-brand-accent/10 text-brand-accent' : 'text-brand-ink hover:bg-brand-surface/80'
                  }`}
                >
                  {item.label}
                  <ChevronRight className="w-4 h-4 text-brand-text-secondary group-hover:text-brand-ink" />
                </button>
              ))}

              <div className="pt-3 border-t border-brand-border mt-4">
                <div className="rounded-3xl bg-brand-surface/90 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-brand-text-secondary mb-3">Capabilities</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {AI_SERVICES.map((svc) => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => {
                          onNavigateSection(svc.id);
                          onMenuToggle(false);
                        }}
                        className="text-sm text-left text-brand-ink hover:text-brand-accent flex items-center justify-between px-3 py-3 rounded-2xl bg-white/5"
                      >
                        {svc.title}
                        <ChevronRight className="w-4 h-4 text-brand-text-secondary" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}

      <div className="hidden md:flex">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onNavigate('contact')}
          className="btn-primary px-5 py-2.5 text-sm"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </header>
  );
}

export function Footer() {
  const columns = [
    {
      heading: 'Navigate',
      links: [
        { label: 'Home', view: 'home' },
        { label: 'Services', view: 'services' },
        { label: 'Methodology', view: 'methodology' },
        { label: 'Contact', view: 'contact' },
      ],
    },
    {
      heading: 'Capabilities',
      links: [
        { label: 'Custom App Development', view: 'services' },
        { label: 'Legacy Modernization', view: 'services' },
        { label: 'Cloud & Infrastructure', view: 'services' },
        { label: 'Automated QA & Testing', view: 'services' },
      ],
    },
  ];

  const offices = ['Chicago', 'Des Moines'];

  return (
    <footer className="w-full bg-brand-ink text-white pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-accent/20">
                <Terminal className="text-brand-accent w-5 h-5" />
              </span>
              <span className="text-lg font-black tracking-tight">
          Howard<span className="text-brand-accent">Tech</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Expert-led, agent-driven software delivery. We pair senior engineers with an autonomous agent workforce to ship production software at a fraction of the time.
            </p>
            <div className="flex gap-3 mt-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-brand-accent hover:text-brand-ink text-white/70 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="hidden md:block md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                      <a
                        href={link.view === 'home' ? '#' : `#${link.view}`}
                      className="text-sm text-white/70 hover:text-brand-accent transition-colors text-left"
                    >
                      {link.label}
                      </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 md:col-start-11">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Offices</h4>
            <ul className="space-y-3">
              {offices.map((o) => (
                <li key={o} className="text-sm text-white/70">{o}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} HowardTech Consultancy. Engineered for precision.
          </span>
          <div className="flex gap-6">
            <button onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); }} className="text-xs text-white/40 hover:text-brand-accent transition-colors">Privacy Policy</button>
            <button onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); }} className="text-xs text-white/40 hover:text-brand-accent transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
