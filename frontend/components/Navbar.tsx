
import React from 'react';
import { Mail, Orbit } from 'lucide-react';

interface NavbarProps {
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={onLogoClick}
          className="flex items-center gap-4 group transition-all"
        >
          <div className="relative">
            <div className="w-10 h-10 border border-red-900/40 flex items-center justify-center group-hover:border-red-500 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute left-1 top-3 w-2 h-[1px] bg-red-600/40 group-hover:w-4 group-hover:bg-red-500 transition-all duration-300 -translate-x-full group-hover:translate-x-0" />
              <div className="absolute left-2 top-5 w-1.5 h-[1px] bg-red-600/30 group-hover:w-3 group-hover:bg-red-500 transition-all duration-300 delay-75 -translate-x-full group-hover:translate-x-0" />
              <div className="absolute left-1 top-7 w-2.5 h-[1px] bg-red-600/40 group-hover:w-5 group-hover:bg-red-500 transition-all duration-300 delay-150 -translate-x-full group-hover:translate-x-0" />
              
              <Mail className="w-5 h-5 text-red-600 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 relative z-10" />
            </div>
            <Orbit className="absolute -top-1 -right-1 w-3 h-3 text-red-900 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-xl font-black tracking-tighter uppercase italic leading-none">mail:it</span>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-zinc-600">Secure Email System</span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          {['Product', 'How it works', 'Privacy', 'API'].map((item) => (
            <a key={item} href="#" className="hover:text-red-500 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => window.location.hash = 'inbox'}
            className="group relative px-6 py-2.5 bg-zinc-950 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black overflow-hidden"
          >
            <span className="relative z-10">Go to Inbox</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
    </nav>
  );
};

export default Navbar;
