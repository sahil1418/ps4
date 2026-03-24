import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/layout/SlideWrapper';
import { TypewriterText, AnimatedWord } from '../components/ui/Typography';
import { GlassCard } from '../components/ui/GlassCard';
import { AlertCircle, TerminalSquare, RefreshCwOff } from 'lucide-react';

export function ProblemSlide() {
  return (
    <SlideWrapper>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Hook */}
        <div className="space-y-8">
          <Badge delay={0.2} color="danger">The Challenge</Badge>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <AnimatedWord text="Millions excluded by" delay={0.4} />
            <span className="text-gradient from-app-danger to-orange-400">
              <TypewriterText text="rigid interfaces." delay={1.4} />
            </span>
          </h1>

          <div className="text-xl text-white/70 space-y-4 pt-4 font-light">
            <p>
              <AnimatedWord 
                text="Current kiosks and IVRs rely on complex menus." 
                delay={2.5} 
              />
            </p>
            <p className="text-white/50 text-base">
              <AnimatedWord 
                text="Elderly, rural, and vernacular speakers are left behind." 
                delay={3.2} 
              />
            </p>
          </div>
        </div>

        {/* Right Side: Visual Metaphor - Broken Dashboard */}
        <div className="relative h-full min-h-[400px]">
          <GlassCard delay={1.0} className="absolute top-10 right-10 w-80 z-20 border-red-500/30">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-red-500/20 text-red-500">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-mono text-white/50">Drop-off Rate</h3>
                <div className="text-3xl font-bold text-red-500">65.0%</div>
              </div>
            </div>
            <motion.div 
              className="h-2 w-full bg-white/5 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div 
                className="h-full bg-red-500" 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1.5, delay: 2.0, ease: 'easeOut' }}
              />
            </motion.div>
          </GlassCard>

          <GlassCard delay={1.4} className="absolute bottom-10 left-0 w-72 z-10 opacity-60 grayscale blur-[1px]">
            <div className="flex items-center space-x-4">
              <TerminalSquare className="w-8 h-8 text-white/40" />
              <div>
                <div className="text-sm font-mono text-white/50">Menu Navigation</div>
                <div className="text-lg font-bold">Failed</div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard delay={1.8} className="absolute top-48 left-20 w-64 z-30 border-orange-400/30">
            <div className="flex items-center space-x-4">
              <RefreshCwOff className="w-6 h-6 text-orange-400" />
              <div>
                <div className="text-sm font-mono text-white/50">Vernacular Support</div>
                <div className="text-lg font-bold text-orange-400">Offline</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SlideWrapper>
  );
}

// Temporary inline import until I refactor Badge properly into index or update imports
import { Badge } from '../components/ui/Badge';
