import { motion } from 'framer-motion';
import { cn } from './GlassCard'; // Reuse cn from GlassCard or better to put in a utils file

export function Badge({ children, color = 'primary', className, delay = 0, ...props }) {
  const colorStyles = {
    primary: 'bg-app-primary/10 border-app-primary/30 text-app-primary',
    tech: 'bg-app-tech/10 border-app-tech/30 text-app-tech',
    success: 'bg-app-success/10 border-app-success/30 text-app-success',
    warning: 'bg-app-warning/10 border-app-warning/30 text-app-warning',
    danger: 'bg-app-danger/10 border-app-danger/30 text-app-danger',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'inline-flex items-center justify-center px-4 py-1.5 rounded-full border text-sm font-mono font-medium tracking-wide',
        colorStyles[color],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
