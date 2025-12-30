
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ShieldCheck, Zap, Trash2 } from 'lucide-react';

const steps = [
  {
    id: "01",
    label: "Generate",
    description: "One click. Zero lag. Instantly create a secure email address ready for deployment.",
    icon: Zap,
    status: "INSTANT"
  },
  {
    id: "02",
    label: "Receive",
    description: "Emails land immediately. No refresh required. View content in a secure environment.",
    icon: Mail,
    status: "REALTIME"
  },
  {
    id: "03",
    label: "Dispose",
    description: "Finished? Delete it. Or wait 24 hours for our automated purge to clear everything.",
    icon: Trash2,
    status: "VOLATILE"
  },
  {
    id: "04",
    label: "Repeat",
    description: "Launch as many inboxes as you need. Unlimited speed for unlimited use cases.",
    icon: ShieldCheck,
    status: "INFINITE"
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovering) {
      if (cycleRef.current) clearInterval(cycleRef.current);
      return;
    }

    cycleRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [isHovering]);

  return (
    <div className="py-56 bg-black overflow-visible relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[900px] h-[900px] bg-red-950/15 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="relative">
            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-red-600 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600 animate-pulse" />
             HOW IT WORKS
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter max-w-2xl leading-[0.85]">
              Instant. <span className="text-zinc-800">Volatile.</span> <br />
              Disposable.
            </h3>
          </div>
          <div className="hidden md:block text-right">
            <div className="mono text-[10px] text-zinc-700 uppercase tracking-widest mb-2">Protocol Status</div>
            <div className="mono text-sm font-bold text-red-900">READY // STREAMING</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5 relative overflow-visible">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                setActiveStep(idx);
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative p-12 transition-all duration-700 cursor-crosshair h-full border-b-2 ${
                activeStep === idx 
                ? 'bg-zinc-950 scale-[1.02] z-20 shadow-2xl border-red-600' 
                : 'bg-black/50 opacity-30 hover:opacity-100 border-transparent'
              }`}
            >
              <AnimatePresence mode="wait">
                {activeStep === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 0 }}
                    className="absolute left-6 z-30 pointer-events-none"
                  >
                    <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(220,38,38,0.5)]">
                      STAGE {step.id}
                      <div className="absolute bottom-[-6px] left-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-red-600" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`mb-12 transition-all duration-700 ${activeStep === idx ? 'text-red-500 scale-110' : 'text-zinc-800'}`}>
                <step.icon className="w-10 h-10" />
              </div>

              <div className="relative z-10">
                <div className={`text-4xl font-black mb-8 transition-colors duration-500 ${activeStep === idx ? 'text-zinc-800/50' : 'text-zinc-900'}`}>
                  {step.id}
                </div>
                <h4 className={`text-xl font-black uppercase tracking-widest mb-4 transition-colors duration-500 ${activeStep === idx ? 'text-white' : 'text-zinc-600'}`}>
                  {step.label}
                </h4>
                <p className="text-zinc-500 font-light leading-relaxed text-[11px] uppercase tracking-wide">
                  {step.description}
                </p>
              </div>

              {/* Status Indicator */}
              <div className={`absolute bottom-8 right-8 mono text-[8px] tracking-[0.3em] transition-colors duration-500 font-bold ${activeStep === idx ? 'text-red-800' : 'text-zinc-900'}`}>
                {step.status}
              </div>

              <AnimatePresence>
                {activeStep === idx && (
                  <motion.div 
                    layoutId="progress-bar-line"
                    className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-red-400 z-30 hidden md:block"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </AnimatePresence>
              
              <div className={`absolute inset-0 bg-red-900/5 transition-opacity duration-700 pointer-events-none ${activeStep === idx ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
