
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[250vw] h-[120vh] bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.4)_0%,rgba(153,27,27,0.1)_40%,transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none z-0" />

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto px-6 text-center z-20 relative pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center items-center gap-3"
        >
          <div className="px-4 py-1.5 bg-zinc-950 border border-red-900/30 text-[9px] uppercase tracking-[0.6em] font-black text-red-500 shadow-[0_0_25px_rgba(220,38,38,0.25)]">
            Secure and Fast
          </div>
        </motion.div>

        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase mb-6"
          >
            <span className="block text-white">INSTANT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-500 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              MAIL.
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] text-zinc-400"
          >
            Zero Wait. Zero Trace.
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-[10px] md:text-xs text-zinc-500 max-w-lg mx-auto mb-16 leading-relaxed font-bold tracking-[0.3em] uppercase"
        >
          Create a temporary inbox in seconds. No registration required. <br />
          Keep your main inbox safe and stay anonymous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={onGetStarted}
            className="group relative px-14 py-6 bg-white text-black font-black uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(220,38,38,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            
            <span className="relative z-10 flex items-center gap-3 text-[10px] group-hover:text-white transition-colors duration-300">
              Start Now
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </span>

            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
          </button>
          
          <button className="group relative px-12 py-6 bg-transparent border border-white/10 text-zinc-500 hover:text-white font-black uppercase tracking-[0.3em] transition-all text-[10px] hover:bg-white/5 overflow-hidden">
             <div className="absolute inset-0 w-0 group-hover:w-full bg-white/5 transition-all duration-300" />
             <span className="relative z-10">How it works</span>
          </button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent z-10" />
    </div>
  );
};

export default Hero;
