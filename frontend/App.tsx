import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Landing from './components/Landing';
import Inbox from './components/Inbox';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-black text-white relative flex flex-col overflow-hidden cursor-default">
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
        </main>

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
        
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.05),transparent_90%)] z-0 pointer-events-none" />
      </div>
    </Router>
    </>
  );
};

export default App;