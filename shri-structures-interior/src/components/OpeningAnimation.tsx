import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Trigger the exit sequence after 2.8 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
      style={{ perspective: "2000px" }}
    >
      {/* Left Door */}
      <motion.div 
        className="absolute inset-y-0 left-0 w-1/2 bg-zinc-950 z-10 border-r border-zinc-800/30 pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        initial={{ rotateY: 0 }}
        exit={{ rotateY: 100 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "left", transformStyle: "preserve-3d" }}
      >
         <motion.div 
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
         />
      </motion.div>
      
      {/* Right Door */}
      <motion.div 
        className="absolute inset-y-0 right-0 w-1/2 bg-zinc-950 z-10 border-l border-zinc-800/30 pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        initial={{ rotateY: 0 }}
        exit={{ rotateY: -100 }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right", transformStyle: "preserve-3d" }}
      >
         <motion.div 
            className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
         />
      </motion.div>

      {/* Central Logo Sequence */}
      <motion.div 
        className="absolute z-20 flex flex-col items-center"
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <motion.div 
          className="relative flex flex-col items-center justify-center"
          initial={{ scale: 0.8, opacity: 0, rotateX: 60 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="w-24 h-24 bg-amber-500 rounded-sm flex items-center justify-center text-zinc-900 text-5xl font-serif font-bold shadow-[0_0_40px_rgba(245,158,11,0.2)] mb-6"
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            S
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="text-6xl font-serif font-bold text-white tracking-widest drop-shadow-lg"
            >
              SHRI
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-3">
            <motion.p
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="font-sans font-medium text-amber-500 uppercase tracking-[0.4em] text-sm"
            >
              Structures Interior
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
