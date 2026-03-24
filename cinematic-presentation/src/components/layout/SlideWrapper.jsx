import { motion } from 'framer-motion';

export function SlideWrapper({ children, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 w-full h-full flex flex-col justify-center items-center px-8 pb-16 pt-8"
      {...props}
    >
      {children}
    </motion.div>
  );
}
