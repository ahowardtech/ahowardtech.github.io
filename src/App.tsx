/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from 'motion/react';
import Navbar, { Footer } from './components/Navigation';
import { HomeView, MethodologyView, ContactView, ServicesView } from './components/Views';

const viewIds = ['home', 'services', 'methodology', 'contact'] as const;
type ViewId = (typeof viewIds)[number];

function viewFromHash(): ViewId {
  const view = window.location.hash.slice(1);
  return viewIds.includes(view as ViewId) ? (view as ViewId) : 'home';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewId>(viewFromHash);
  const reduced = useReducedMotion();

  const navigate = useCallback((view: string) => {
    if (!viewIds.includes(view as ViewId)) return;

    const nextView = view as ViewId;
    setCurrentView(nextView);
    window.location.hash = nextView === 'home' ? '' : nextView;
  }, []);

  useEffect(() => {
    const handleHashChange = () => setCurrentView(viewFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on navigation (instant when the user prefers reduced motion)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }, [currentView, reduced]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-brand-bg overflow-x-hidden selection:bg-brand-accent/30">
        <Navbar onNavigate={navigate} currentView={currentView} />

        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentView === 'home' && <HomeView onNavigate={navigate} />}
              {currentView === 'services' && <ServicesView />}
              {currentView === 'methodology' && <MethodologyView />}
              {currentView === 'contact' && <ContactView />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
