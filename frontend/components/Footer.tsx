
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-black uppercase tracking-tighter italic">mail:it</div>
          <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-medium">
            © 2024 MAIL:IT.
          </p>
        </div>

        <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400">System</span>
            <a href="#" className="hover:text-red-500">Uptime</a>
            <a href="#" className="hover:text-red-500">API</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400">Legal</span>
            <a href="#" className="hover:text-red-500">Terms</a>
            <a href="#" className="hover:text-red-500">Privacy</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400">Connect</span>
            <a href="#" className="hover:text-red-500">X / Twitter</a>
            <a href="#" className="hover:text-red-500">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
