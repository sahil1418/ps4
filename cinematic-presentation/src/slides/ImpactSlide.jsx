import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/layout/SlideWrapper';
import { TypewriterText, AnimatedWord } from '../components/ui/Typography';
import { GlassCard } from '../components/ui/GlassCard';
import CountUp from 'react-countup';
import { TrendingUp, Clock, CheckCircle } from 'lucide-react';

export function ImpactSlide() {
  return (
    <SlideWrapper>
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        
        <div className="text-center space-y-6">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            <AnimatedWord text="Accessibility is not a feature." delay={0.2} />
            <br />
            <span className="text-gradient from-app-violet to-app-primary">
              <TypewriterText text="It is our default interface." delay={1.5} />
            </span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-8">
          
          <GlassCard delay={2.5} className="flex flex-col items-center text-center p-10 border-t-4 border-t-app-success border-white/10">
            <CheckCircle className="w-10 h-10 text-app-success mb-6 opacity-80" />
            <div className="text-6xl font-bold font-mono text-white mb-4">
              <CountUp start={0} end={78} duration={3} delay={3.0} suffix="%" />
            </div>
            <h3 className="text-xl font-medium text-white/80">Self-Service Rate</h3>
            <p className="text-sm text-white/40 mt-2">Target resolution without human intervention</p>
          </GlassCard>

          <GlassCard delay={2.9} className="flex flex-col items-center text-center p-10 border-t-4 border-t-app-tech border-white/10">
            <TrendingUp className="w-10 h-10 text-app-tech mb-6 opacity-80" />
            <div className="text-6xl font-bold font-mono text-white mb-4">
              <CountUp start={0} end={94.2} decimals={1} duration={3} delay={3.4} suffix="%" />
            </div>
            <h3 className="text-xl font-medium text-white/80">NLU Accuracy</h3>
            <p className="text-sm text-white/40 mt-2">Across 7+ regional Indian languages</p>
          </GlassCard>

          <GlassCard delay={3.3} className="flex flex-col items-center text-center p-10 border-t-4 border-t-app-primary border-white/10">
            <Clock className="w-10 h-10 text-app-primary mb-6 opacity-80" />
            <div className="text-6xl font-bold font-mono text-white mb-4 flex items-baseline justify-center">
              <span className="text-4xl mr-1">&lt;</span>
              <CountUp start={120} end={60} duration={3} delay={3.8} suffix="s" />
            </div>
            <h3 className="text-xl font-medium text-white/80">Avg Handling Time</h3>
            <p className="text-sm text-white/40 mt-2">Reduced friction and instant AI processing</p>
          </GlassCard>

        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.0, duration: 2 }}
          className="pt-10 text-center"
        >
          <div className="text-sm font-mono tracking-[0.3em] text-white/40 uppercase">Thank You</div>
          <div className="text-xl font-medium text-white/80 mt-2">Team Aurdinary</div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
