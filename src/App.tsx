/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, useReducedMotion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Navbar, { Footer } from './components/Navigation';
import { HomeView, MethodologyView, ContactView, LegalView, ServicesView } from './components/Views';

const viewIds = ['home', 'services', 'methodology', 'contact', 'privacy', 'terms'] as const;
type ViewId = (typeof viewIds)[number];

function viewFromHash(): ViewId {
  const view = window.location.hash.slice(1);
  return viewIds.includes(view as ViewId) ? (view as ViewId) : 'home';
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewId>(viewFromHash);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);
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

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    const htmlOverscrollBehavior = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      document.documentElement.style.overscrollBehavior = htmlOverscrollBehavior;
    };
  }, [menuOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-brand-bg overflow-x-hidden selection:bg-brand-accent/30">
        <Navbar
          onNavigate={navigate}
          onNavigateSection={(sectionId) => {
            navigate('services');
            setPendingSection(sectionId);
          }}
          currentView={currentView}
          menuOpen={menuOpen}
          onMenuToggle={setMenuOpen}
        />

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
              {currentView === 'services' && (
                <ServicesView
                  sectionToOpen={pendingSection}
                  onSectionOpened={() => setPendingSection(null)}
                />
              )}
              {currentView === 'methodology' && <MethodologyView />}
              {currentView === 'contact' && <ContactView />}
              {currentView === 'privacy' && <LegalView type="privacy" />}
              {currentView === 'terms' && <LegalView type="terms" />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        {showScrollTop && !menuOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-white shadow-lg shadow-brand-ink/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </MotionConfig>
  );
}
