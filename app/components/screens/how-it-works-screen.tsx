"use client";

import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Truck, Clock, Shield, Heart } from "lucide-react";
import { JarComponent } from "../jar-component";

interface HowItWorksScreenProps {
  currentFlavor: {
    id: string;
    category: string;
    name: string;
    shortName: string;
    headline: string;
    subtitle: string;
    ghostText: string;
    bgColor: string;
    accentColor: string;
    imagePath: string;
    price: string;
    allergens: string[];
  };
}

const steps = [
  {
    icon: Sparkles,
    title: "Handcrafted Daily",
    description: "Every jar is made fresh in small batches using premium ingredients sourced from local Malaysian suppliers.",
    color: "#FF6B9D"
  },
  {
    icon: Clock,
    title: "12-Hour Setting",
    description: "We let it set for exactly 12 hours to achieve that signature wobble texture that melts in your mouth.",
    color: "#FFB800"
  },
  {
    icon: CheckCircle2,
    title: "Quality Tested",
    description: "Each batch undergoes rigorous quality checks to ensure consistency and perfection in every jar.",
    color: "#3A7D44"
  },
  {
    icon: Truck,
    title: "Cold Delivery",
    description: "Shipped in insulated packaging with ice packs to ensure it arrives perfectly chilled at your doorstep.",
    color: "#C2410C"
  },
  {
    icon: Shield,
    title: "Halal Certified",
    description: "All ingredients and preparation methods are halal-certified for your peace of mind.",
    color: "#65A30D"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted by passionate dessert lovers who believe in spreading joy through every wobble.",
    color: "#D97706"
  }
];

export function HowItWorksScreen({ currentFlavor }: HowItWorksScreenProps) {
  const highlights = [
    {
      title: "The Golden Ratio",
      desc: "Exactly 12 hours of chilled setting to achieve the signature 'wobble' that melts instantly.",
      side: "left"
    },
    {
      title: "Premium Base",
      desc: "Rich, velvety cream infused with real Madagascan vanilla and local treasures.",
      side: "right"
    },
    {
      title: "Hand-Cut Toppings",
      desc: "Fresh tropical fruits and artisanal crumbles added by hand just before delivery.",
      side: "left"
    },
    {
      title: "Chilled Integrity",
      desc: "Insulated cold-chain delivery ensuring your jar arrives at the perfect 4°C serving temp.",
      side: "right"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-24 overflow-hidden relative"
      role="region"
      aria-label="The Anatomy of Perfection"
    >
      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none select-none">
        <h2 className="text-[35vw] font-black leading-none">WOBBLE</h2>
      </div>

      <div className="relative max-w-7xl w-full flex flex-col items-center">
        {/* Title Section - Back to Bold Sans */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16 md:mb-32 z-20"
        >
          <h2 className="text-6xl md:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter uppercase">
            The Anatomy of <span className="text-white/20">Perfection.</span>
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="h-px w-12 bg-white/20" />
            <p className="text-white/40 font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
              established quality standard
            </p>
            <div className="h-px w-12 bg-white/20" />
          </div>
        </motion.div>

        {/* Central Layout - Enhanced Grid for Maximum Jar Impact */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-[28%_44%_28%] items-center gap-4 md:gap-0">
          
          {/* Left Side Highlights */}
          <div className="hidden md:flex flex-col gap-32 items-end pr-12 z-20">
            {highlights.filter(h => h.side === 'left').map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="max-w-[280px] text-right group"
              >
                <h3 className="text-2xl font-black text-white mb-3 tracking-tighter flex items-center justify-end gap-4">
                  {item.title}
                  <div className="w-10 h-1 bg-white/20 group-hover:w-16 group-hover:bg-white/50 transition-all duration-500" />
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Central Jar Component - MONUMENTAL SCALE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-center"
          >
            <div className="relative w-[500px] h-[600px] md:w-[600px] md:h-[750px] lg:w-[750px] lg:h-[900px]">
              <JarComponent currentFlavor={currentFlavor} className="w-full h-full drop-shadow-[0_80px_150px_rgba(0,0,0,0.8)]" enableHover={true} />
              
              {/* Massive Radial Glow */}
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-[-20%] blur-[120px] rounded-full -z-10"
                style={{ backgroundColor: currentFlavor.bgColor }}
              />
            </div>
          </motion.div>

          {/* Right Side Highlights */}
          <div className="hidden md:flex flex-col gap-32 items-start pl-12 z-20">
            {highlights.filter(h => h.side === 'right').map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="max-w-[280px] text-left group"
              >
                <h3 className="text-2xl font-black text-white mb-3 tracking-tighter flex items-center justify-start gap-4">
                  <div className="w-10 h-1 bg-white/20 group-hover:w-16 group-hover:bg-white/50 transition-all duration-500" />
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile-only List */}
        <div className="grid grid-cols-1 gap-12 mt-16 md:hidden z-20">
          {highlights.map((item) => (
            <div key={item.title} className="text-center px-4">
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter italic">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 md:mt-24 z-20 opacity-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
}
