import { motion } from 'framer-motion';

export function NavigationOverlay({ currentSlide, totalSlides }) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
      <div className="flex justify-between items-end p-8 w-full">
        {/* Placeholder for left bottom content if needed */}
        <div></div>

        <motion.div 
          className="font-mono text-sm tracking-widest text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {String(currentSlide + 1).padStart(2, '0')} <span className="text-white/20">/</span> {String(totalSlides).padStart(2, '0')}
        </motion.div>
      </div>

      <div className="h-1 bg-white/5 w-full relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-app-violet to-app-tech"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
