"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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

interface HomeScreenProps {
  currentFlavor: Flavor;
  allFlavors: Flavor[];
  currentIndex: number;
  direction: number;
  isTransitioning: boolean;
  onFlavorSelect: (index: number, direction?: number) => void;
  onNavigate: (screen: string) => void;
}

export function HomeScreen({
  currentFlavor,
  allFlavors,
  currentIndex,
  direction,
  isTransitioning,
  onFlavorSelect,
  onNavigate,
}: HomeScreenProps) {
  const prevIndex = (currentIndex - 1 + allFlavors.length) % allFlavors.length;
  const nextIndex = (currentIndex + 1) % allFlavors.length;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getJarPosition = (pos: '11' | '10' | '9' | '7' | '5') => {
    if (isMobile) {
      switch (pos) {
        case '11': return { 
          x: '35%', y: '-70%', z: -350, rotate: -30, scale: 0.4, opacity: 0, filter: 'blur(8px)' 
        };
        case '10': return { 
          x: '35%', y: '-35%', z: -150, rotate: -15, scale: 0.6, opacity: 0.3, filter: 'blur(4px)' 
        };
        case '9': return { 
          x: '0%', y: '0%', z: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' 
        };
        case '7': return { 
          x: '35%', y: '35%', z: -150, rotate: 15, scale: 0.6, opacity: 0.3, filter: 'blur(4px)' 
        };
        case '5': return { 
          x: '35%', y: '70%', z: -350, rotate: 30, scale: 0.4, opacity: 0, filter: 'blur(8px)' 
        };
      }
    }

    // Desktop: Correct Clock Orbit (Active 9, Top 10, Bottom 7)
    switch (pos) {
      case '11': return { 
        x: '38%', y: '-80%', z: -550, rotate: -40, scale: 0.3, opacity: 0, filter: 'blur(12px)' 
      };
      case '10': return { 
        x: '38%', y: '-42%', z: -350, rotate: -20, scale: 0.55, opacity: 0.4, filter: 'blur(8px)' 
      };
      case '9': return { 
        x: '0%', y: '0%', z: 250, rotate: 0, scale: 1.3, opacity: 1, filter: 'blur(0px)' 
      };
      case '7': return { 
        x: '38%', y: '42%', z: -350, rotate: 20, scale: 0.55, opacity: 0.4, filter: 'blur(8px)' 
      };
      case '5': return { 
        x: '38%', y: '80%', z: -550, rotate: 40, scale: 0.3, opacity: 0, filter: 'blur(12px)' 
      };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onWheel={(e) => {
        if (isTransitioning) return;
        if (e.deltaY > 0) {
          onFlavorSelect((currentIndex + 1) % allFlavors.length, 1);
        } else if (e.deltaY < 0) {
          onFlavorSelect((currentIndex - 1 + allFlavors.length) % allFlavors.length, -1);
        }
      }}
      onPanEnd={(e, info) => {
        if (isTransitioning) return;
        const threshold = 50;
        if (info.offset.y < -threshold) {
          onFlavorSelect((currentIndex + 1) % allFlavors.length, 1);
        } else if (info.offset.y > threshold) {
          onFlavorSelect((currentIndex - 1 + allFlavors.length) % allFlavors.length, -1);
        }
      }}
      className="w-full h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-1000 touch-none"
      style={{ 
        background: `radial-gradient(circle at center, ${currentFlavor.bgColor}, ${currentFlavor.accentColor}dd, var(--color-background))`
      }}
      role="region"
      aria-label="Flavor Carousel"
    >
      {/* 1. BACKGROUND: THE ORBIT */}
      <div className="absolute bottom-0 md:inset-0 w-full h-[65%] md:h-full flex items-center justify-center md:justify-end md:pr-[10%] z-10 perspective-[2000px] pointer-events-none">
        <AnimatePresence initial={false} custom={direction}>
          {allFlavors.map((flavor, idx) => {
            let pos: '10' | '9' | '7' | 'hidden' = 'hidden';
            if (idx === currentIndex) pos = '9';
            else if (idx === prevIndex) pos = '10';
            else if (idx === nextIndex) pos = '7';

            if (pos === 'hidden') return null;
            
            // Visual Normalization: Pistachio asset is visually larger, scale it down
            const isPistachio = flavor.id === 'pistachio-kunafa';
            const normalizationFactor = isPistachio ? 0.85 : 1;
            
            const basePos = getJarPosition(pos as any);
            let normalizedPos = {};
            if (basePos) {
              normalizedPos = {
                ...basePos,
                scale: (basePos.scale as number) * normalizationFactor
              };
            }

            return (
              <motion.div
                key={flavor.id} // Strictly ID so Framer Motion animates transitions
                custom={direction}
                variants={{
                  initial: (dir: number) => {
                    const enterPos = dir > 0 ? '5' : '11';
                    const base = getJarPosition(enterPos as any);
                    return base ? { ...base, scale: (base.scale as number) * normalizationFactor } : {};
                  },
                  animate: normalizedPos,
                  exit: (dir: number) => {
                    const exitPos = dir > 0 ? '11' : '5';
                    const base = getJarPosition(exitPos as any);
                    return base ? { ...base, scale: (base.scale as number) * normalizationFactor } : {};
                  }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[320px] h-[400px] md:w-[800px] md:h-[950px] flex items-center justify-center will-change-transform transform-gpu"
                style={{
                  filter: `drop-shadow(0 40px 80px ${flavor.bgColor}60)` // Pro Max Tinted Shadow
                }}
              >
                <JarComponent currentFlavor={flavor} className="w-full h-full" priority={pos === '9'} />
                {pos === '9' && (
                  <div 
                    className={`absolute inset-0 blur-[150px] rounded-full -z-10 opacity-30 ${
                      {
                        'mango-coconut': 'bg-[#FFB800]',
                        'pandan-gula-melaka': 'bg-[#3A7D44]',
                        'teh-tarik': 'bg-[#C2410C]',
                        'salted-caramel': 'bg-[#D97706]',
                        'pistachio-kunafa': 'bg-[#65A30D]',
                        'jagung-susu': 'bg-[#EAB308]'
                      }[flavor.id] || 'bg-white'
                    }`} 
                  />
                )}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* 2. FOREGROUND: EDITORIAL TEXT */}
      <div className="absolute top-[10%] md:top-0 left-0 w-full h-full md:flex md:items-center z-30 pointer-events-none">
        <div className="px-8 md:px-24 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFlavor.id + '-text'}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-4 md:mb-8 flex flex-col md:flex-row items-center gap-4">
                <span className="text-[10px] md:text-sm font-black tracking-[0.4em] uppercase text-white/50 border-b-2 md:border-b-0 md:border-l-2 border-white/30 pb-2 md:pb-0 md:pl-4">
                  {currentFlavor.category}
                </span>
                <span className="hidden md:inline-block px-4 py-1 rounded-full text-[9px] font-black tracking-[0.2em] uppercase border border-white/20 bg-white/5 text-white/80">
                  {currentFlavor.headline}
                </span>
              </div>

              <h1 
                className="text-[16vw] md:text-[14vw] font-black text-white leading-[0.8] tracking-tighter uppercase mix-blend-normal md:mix-blend-exclusion [text-shadow:0_10px_40px_rgba(0,0,0,0.5)]"
              >
                {currentFlavor.name.split(' ').map((word, i) => (
                  <span key={i} className="block md:hover:translate-x-6 transition-transform duration-500 cursor-default pointer-events-auto">{word}</span>
                ))}
              </h1>

              <div className="mt-8 md:mt-12 md:ml-32 flex flex-col items-center md:items-start gap-8">
                <div className="flex items-center gap-6">
                  <span className="text-5xl md:text-7xl font-black text-white tabular-nums tracking-tighter">{currentFlavor.price}</span>
                  <div className="flex gap-1">
                    {currentFlavor.allergens.map(a => (
                      <span key={a} className="px-2 py-0.5 rounded-sm text-[8px] font-black uppercase bg-white text-black shadow-lg">{a}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-start gap-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full z-10 pointer-events-auto shadow-2xl"
                  >
                    <div className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B9D] opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B9D]"></span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-white/90">Only 12 boxes left today</span>
                  </motion.div>

                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('how-it-works')}
                  className="relative overflow-hidden bg-[#FF6B9D] text-white px-12 py-5 rounded-full md:rounded-none font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-4 transition-all duration-300 pointer-events-auto shadow-[0_20px_50px_rgba(255,107,157,0.3)] hover:shadow-[0_20px_60px_rgba(255,107,157,0.5)] group"
                >
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                  <span className="relative z-10 flex items-center gap-4 group-hover:text-white">
                    discover more
                    <div className="w-8 h-px bg-current group-hover:bg-white" />
                  </span>
                </motion.button>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
