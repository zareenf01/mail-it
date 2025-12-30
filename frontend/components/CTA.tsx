
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onTryNow: () => void;
}

const CTA: React.FC<CTAProps> = ({ onTryNow }) => {
  return (
    <div className="relative py-56 overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle,rgba(185,28,28,0.2)_0%,transparent_75%)] blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-900/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/10 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
            Go Instant. <br />
            <span className="text-red-600">Go Anonymous.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-500 mb-16 max-w-xl mx-auto font-medium tracking-[0.3em] uppercase">
            No registration. No wait times. Just instant mail delivery.
          </p>
          <button
            onClick={onTryNow}
            className="group relative px-20 py-8 bg-white text-black font-black uppercase tracking-[0.4em] hover:bg-red-700 hover:text-white transition-all transform active:scale-95 shadow-[0_35px_80px_-20px_rgba(255,255,255,0.2)]"
          >
            <span className="flex items-center gap-4">
              Try mail:it now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
    </div>
  );
};

export default CTA;
