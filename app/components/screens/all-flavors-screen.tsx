"use client";

import { memo, useCallback } from "react";
import { motion } from "motion/react";
import { JarComponent } from "../jar-component";

interface Flavor {
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
}

interface FlavorCardProps {
  flavor: Flavor;
  index: number;
}

const FlavorCard = memo(({ flavor, index }: FlavorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="relative flex-none w-full md:flex-1 h-full snap-center overflow-hidden group cursor-pointer border-r border-white/5 last:border-0 transition-all duration-700 md:hover:flex-[3]"
    >
      {/* Premium Background */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 group-hover:scale-105 ${
          {
            'mango-coconut': 'bg-gradient-to-b from-[#FFB800] to-[#C88A2E]',
            'pandan-gula-melaka': 'bg-gradient-to-b from-[#3A7D44] to-[#24522B]',
            'teh-tarik': 'bg-gradient-to-b from-[#C2410C] to-[#8A2D07]',
            'salted-caramel': 'bg-gradient-to-b from-[#D97706] to-[#924E00]',
            'pistachio-kunafa': 'bg-gradient-to-b from-[#65A30D] to-[#3F6406]',
            'jagung-susu': 'bg-gradient-to-b from-[#EAB308] to-[#9E7802]'
          }[flavor.id] || 'bg-white'
        }`}
      />

      {/* Content Layer */}
      <div className="relative h-full flex flex-col items-center justify-between py-16 md:py-24 z-20 px-6">
        
        {/* Top: Category Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
        >
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/60">
            {flavor.category}
          </span>
        </motion.div>

        {/* Center: THE JAR (Monumental) */}
        <div className="relative w-full flex-1 flex items-center justify-center">
          <div className="w-[300px] h-[400px] md:w-full md:h-full relative transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">
            <JarComponent 
              currentFlavor={flavor} 
              className="w-full h-full drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)]" 
              enableHover={false} 
              priority={index < 2} 
            />
            {/* Ambient Glow */}
            <div className={`absolute inset-0 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 ${
              {
                'mango-coconut': 'bg-[#FFB800]',
                'pandan-gula-melaka': 'bg-[#3A7D44]',
                'teh-tarik': 'bg-[#C2410C]',
                'salted-caramel': 'bg-[#D97706]',
                'pistachio-kunafa': 'bg-[#65A30D]',
                'jagung-susu': 'bg-[#EAB308]'
              }[flavor.id] || 'bg-white'
            }`} />
          </div>
        </div>

        {/* Bottom: Label */}
        <div className="text-center w-full transition-transform duration-500 group-hover:-translate-y-4">
          <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            {flavor.name}
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-8 bg-white/20" />
            <span className="text-xl md:text-3xl font-black text-white/40 tracking-tighter tabular-nums">
              {flavor.price}
            </span>
            <div className="h-[2px] w-8 bg-white/20" />
          </div>
        </div>
      </div>

      {/* Glass Overlay on Hover */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
});

FlavorCard.displayName = "FlavorCard";

export function AllFlavorsScreen({ flavors }: { flavors: Flavor[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen bg-[var(--color-background)] flex flex-col md:flex-row relative overflow-hidden"
    >
      {/* Clean Header - Fixed on Desktop, Relative on Mobile */}
      <div className="absolute top-10 md:top-20 left-0 w-full text-center z-40 pointer-events-none px-6">
        <h2 className="text-5xl md:text-[10vw] font-black text-white/10 leading-none tracking-tighter uppercase">
          THE COLLECTION.
        </h2>
      </div>

      {/* Gallery Container - Full Screen Swiper */}
      <div className="flex-1 flex overflow-x-auto md:overflow-hidden snap-x snap-mandatory no-scrollbar h-full">
        {flavors.map((flavor, idx) => (
          <FlavorCard key={flavor.id} flavor={flavor} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}
