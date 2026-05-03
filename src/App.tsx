/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar, { Footer } from './components/Navigation';
import { HomeView, MethodologyView, ContactView, ServicesView } from './components/Views';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  // Simple scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-brand-bg overflow-x-hidden selection:bg-brand-accent/30">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
            {currentView === 'services' && <ServicesView />}
            {currentView === 'methodology' && <MethodologyView />}
            {currentView === 'contact' && <ContactView />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
