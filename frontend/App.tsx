
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Inbox from './components/Inbox';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');

  // Handle URL Hash for simple navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#inbox') {
        setView('inbox');
      } else {
        setView('landing');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const transitionToInbox = () => {
    window.location.hash = 'inbox';
    setView('inbox');
  };

  const transitionToLanding = () => {
    window.location.hash = '';
    setView('landing');
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col selection:bg-red-900 selection:text-white overflow-hidden">
      <Navbar onLogoClick={transitionToLanding} />
      
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          {view === 'landing' ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero onGetStarted={transitionToInbox} />
              <Features />
              <HowItWorks />
              <CTA onTryNow={transitionToInbox} />
            </motion.div>
          ) : (
            <motion.div
              key="inbox"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Inbox />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      {/* 
          GLOBAL AMBIENT SPOTTING (DIFFUSION)
          Aggressive red tints that flow across the page to create constant depth.
      */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [-100, 100, -100],
            y: [50, -50, 50],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-red-600/10 blur-[180px]" 
        />
        <motion.div 
          animate={{ 
            x: [100, -100, 100],
            y: [-50, 50, -50],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-[900px] h-[900px] bg-red-900/10 blur-[200px]" 
        />
      </div>
      
      {/* Texture Layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.05),transparent_90%)] z-0 pointer-events-none" />
    </div>
  );
};

export default App;
