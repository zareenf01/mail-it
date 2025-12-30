
import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Clock, ShieldCheck, Code, UserX, Target } from 'lucide-react';

const featureData = [
  {
    title: "Instant Setup",
    description: "Generate a new inbox in milliseconds. No waiting, just speed.",
    icon: Mail,
    className: "md:col-span-8",
  },
  {
    title: "Auto-Purge",
    description: "Emails disappear after 24 hours. No data stays on our servers.",
    icon: Clock,
    className: "md:col-span-4",
  },
  {
    title: "Always On",
    description: "Built for performance. Real-time updates so you never miss a message.",
    icon: Target,
    className: "md:col-span-4",
  },
  {
    title: "Testing Made Easy",
    description: "Perfect for testing registration flows and automated emails.",
    icon: Code,
    className: "md:col-span-8",
  },
  {
    title: "Complete Privacy",
    description: "No logs, no cookies, no tracking. Use it and be forgotten.",
    icon: UserX,
    className: "md:col-span-12",
  },
];

const FeatureCard = ({ feature, idx }: { feature: typeof featureData[0], idx: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      className={`group relative p-12 bg-zinc-950/40 border border-white/5 hover:border-red-600/40 transition-all duration-700 ${feature.className} overflow-hidden cursor-default`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(450px circle at ${x}px ${y}px, rgba(220, 38, 38, 0.18), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-6 mb-10">
           <div className="w-14 h-14 border border-zinc-900 bg-zinc-950/50 flex items-center justify-center group-hover:bg-red-950/20 transition-all duration-700">
             <feature.icon className="w-6 h-6 text-zinc-600 group-hover:text-red-500 transition-colors" />
           </div>
           <div className="h-[1px] flex-grow bg-zinc-900/40" />
           <div className="mono text-[10px] text-zinc-800 font-black">ST-0{idx + 1}</div>
        </div>
        
        <h3 className="text-3xl font-black uppercase tracking-tighter mb-5 group-hover:translate-x-3 transition-transform duration-700">
          {feature.title}
        </h3>
        <p className="text-zinc-500 font-light leading-relaxed max-w-sm text-sm tracking-wide">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="py-40 bg-black relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(153,27,27,0.15)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(69,10,10,0.15)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex items-end justify-between">
          <div className="max-w-xl">
            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-red-600 mb-8">FEATURES</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              Simple <br />
              <span className="text-zinc-800">and Fast.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 border border-white/5 shadow-2xl">
          {featureData.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/50 to-transparent z-10" />
    </div>
  );
};

export default Features;
