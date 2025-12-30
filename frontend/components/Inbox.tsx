
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RefreshCw, 
  Trash2, 
  Copy, 
  Check, 
  RotateCcw, 
  Inbox as InboxIcon, 
  ShieldCheck,
  Mail
} from 'lucide-react';
import { generateEmailAddress, generateMockEmail } from '../services/emailService';
import { Email } from '../types';

const Inbox: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEmailAddress(generateEmailAddress());
    const initialTimer = setTimeout(() => receiveNewEmail(), 3000);
    const interval = setInterval(() => {
      if (Math.random() > 0.85) receiveNewEmail();
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const receiveNewEmail = useCallback(() => {
    const newMail = generateMockEmail();
    setEmails(prev => [newMail, ...prev]);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      receiveNewEmail();
    }, 600);
  };

  const handleRegenerate = () => {
    setEmailAddress(generateEmailAddress());
    setEmails([]);
    setSelectedEmail(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 min-h-[calc(100vh-140px)] flex flex-col gap-8 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] -z-10 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-stretch gap-px bg-white/5 border border-white/5 shadow-2xl"
      >
        <div className="flex-grow bg-zinc-950 p-6 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.4em] font-black text-zinc-500">
            <Mail className="w-3 h-3 text-red-500" />
            Your Temporary Address
          </div>
          <div className="flex items-center justify-between">
            <div className="mono text-2xl font-bold text-white tracking-tighter">
              {emailAddress}
            </div>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(emailAddress);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="p-3 bg-zinc-900/50 border border-white/5 hover:border-red-900/50 text-zinc-400 hover:text-white transition-all group"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
            </button>
          </div>
        </div>

        <div className="bg-zinc-950 p-6 flex items-center gap-2">
          <button 
            onClick={handleRefresh}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-800 hover:bg-zinc-900 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
          >
            <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-red-500' : ''}`} />
            Refresh
          </button>
          <button 
            onClick={handleRegenerate}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-800 hover:bg-zinc-900 transition-all text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white"
          >
            <RotateCcw className="w-3 h-3" />
            New Email
          </button>
          <button 
            onClick={() => {setEmails([]); setSelectedEmail(null);}}
            className="p-3 border border-zinc-800 hover:border-red-900 text-zinc-600 hover:text-red-500 transition-all"
            title="Clear All"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* main invox */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
    
        <div className="lg:col-span-4 bg-zinc-950 border border-white/5 flex flex-col min-h-[500px] relative">
          <div className="p-5 border-b border-white/5 flex items-center justify-between bg-zinc-900/10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">Received ({emails.length})</span>
            <motion.div 
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
            />
          </div>
          
          <div className="flex-grow overflow-y-auto">
            <AnimatePresence initial={false}>
              {emails.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center p-12 text-center opacity-20">
                  <div className="w-20 h-20 border border-dashed border-zinc-800 flex items-center justify-center mb-6">
                    <InboxIcon className="w-8 h-8 text-zinc-600" />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-zinc-500">
                    Waiting for emails...
                  </p>
                </div>
              ) : (
                emails.map((email, idx) => (
                  <motion.button
                    key={email.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelectedEmail(email)}
                    className={`w-full text-left p-6 border-b border-white/5 transition-all group relative ${
                      selectedEmail?.id === email.id ? 'bg-red-950/10' : 'hover:bg-zinc-900/40'
                    }`}
                  >
                    {selectedEmail?.id === email.id && (
                      <motion.div layoutId="active-pill" className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                    )}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] mono text-zinc-500 font-bold uppercase truncate pr-4">
                        {email.sender.split('@')[0]}
                      </span>
                      <span className="text-[8px] mono text-zinc-700">{email.timestamp}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight mb-2 truncate group-hover:text-red-500 transition-colors">
                      {email.subject}
                    </h4>
                    <p className="text-[11px] text-zinc-600 truncate font-light">
                      {email.content}
                    </p>
                  </motion.button>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* vontent viewer */}
        <div className="lg:col-span-8 bg-zinc-950 border border-white/5 flex flex-col relative overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedEmail ? (
              <motion.div
                key={selectedEmail.id}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                className="flex flex-col h-full z-10"
              >
                <div className="p-10 border-b border-white/5 bg-zinc-900/30">
                  <div className="flex items-center gap-3 mb-8">
                     <div className="px-3 py-1 bg-red-950/20 border border-red-900/30 text-[8px] font-black uppercase tracking-widest text-red-500">
                        Secure View
                     </div>
                     <div className="h-[1px] flex-grow bg-zinc-900/50" />
                  </div>
                  <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">
                    {selectedEmail.subject}
                  </h1>
                  
                  <div className="grid grid-cols-2 gap-8">
                     <div className="flex flex-col gap-1">
                        <label className="text-[8px] uppercase tracking-widest font-black text-zinc-600">From</label>
                        <span className="text-xs text-white mono">{selectedEmail.sender}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <label className="text-[8px] uppercase tracking-widest font-black text-zinc-600">Time</label>
                        <span className="text-xs text-white mono">{selectedEmail.timestamp}</span>
                     </div>
                  </div>
                </div>

                <div className="p-10 flex-grow bg-black/40">
                  <div className="p-8 border border-white/5 bg-zinc-950/50 font-light text-zinc-400 leading-relaxed text-sm tracking-tight relative">
                    <ShieldCheck className="absolute top-4 right-4 w-5 h-5 text-red-900/20" />
                    {selectedEmail.content}
                    <div className="mt-20 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 mono">
                      REF: {Math.random().toString(36).substring(7).toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="p-8 border-t border-white/5 bg-zinc-900/20 flex justify-end gap-4">
                   <button 
                    onClick={() => setSelectedEmail(null)}
                    className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                   >
                      Back to Inbox
                   </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-20 opacity-40">
                <div className="mb-8 w-24 h-24 border-l border-t border-zinc-900 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-900/30" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4">Select an Email</h3>
                <p className="text-[11px] text-zinc-600 max-w-[200px] leading-relaxed uppercase tracking-widest">
                  Choose an item from the list to view its contents securely.
                </p>
              </div>
            )}
          </AnimatePresence>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/5 blur-[100px] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
