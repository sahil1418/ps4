import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/layout/SlideWrapper';
import { TypewriterText, AnimatedWord } from '../components/ui/Typography';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Mic, Languages, Sparkles } from 'lucide-react';

export function SolutionSlide() {
  return (
    <SlideWrapper>
      <div className="max-w-5xl w-full flex flex-col items-center text-center space-y-16">
        
        <div className="space-y-6">
          <Badge delay={0.2} color="tech">The Solution</Badge>
          
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            <AnimatedWord text="Throwing away the menus for a" delay={0.4} />
            <br />
            <span className="text-gradient from-app-tech to-app-primary">
              <TypewriterText text="voice-first interface." delay={1.8} />
            </span>
          </h2>
        </div>

        {/* Central Visual Metaphor - Glowing Mic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.8, type: 'spring' }}
          className="relative"
        >
          <div className="absolute inset-0 bg-app-tech/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="relative w-32 h-32 rounded-full border border-app-tech/50 bg-white/5 flex items-center justify-center backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.3)]">
            <Mic className="w-12 h-12 text-app-tech" />
          </div>

          {/* Floating feature pills */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.5 }}
            className="absolute -left-32 top-10 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <Languages className="w-4 h-4 text-app-tech" />
            <span className="text-sm font-medium">7+ Indian Languages</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.0 }}
            className="absolute -right-24 bottom-4 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-app-primary" />
            <span className="text-sm font-medium">Natural Conversation</span>
          </motion.div>
        </motion.div>

        <p className="text-xl text-white/70 max-w-2xl font-light">
          <AnimatedWord 
            text="Whether at a branch kiosk or calling a contact centre, they simply speak their request. No buttons, no complex navigation." 
            delay={4.6} 
          />
        </p>

      </div>
    </SlideWrapper>
  );
}
