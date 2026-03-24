import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/layout/SlideWrapper';
import { TypewriterText, AnimatedWord } from '../components/ui/Typography';
import { Badge } from '../components/ui/Badge';
import { ScanFace, FileLock2, Network, CheckCircle2 } from 'lucide-react';

export function ArchitectureSlide() {
  const steps = [
    {
      icon: ScanFace,
      title: "Proactive Presence",
      desc: "Edge AI face detection wakes up the kiosk instantly for a zero-touch start."
    },
    {
      icon: FileLock2,
      title: "Entity-Locked Translation",
      desc: "Locks critical financial numbers before translation, verifying against strict rules."
    },
    {
      icon: Network,
      title: "Offline Intent Queuing",
      desc: "AES-256 encrypted local cache safely holds transactions if network drops."
    }
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl w-full flex flex-col items-center space-y-16">
        
        <div className="text-center space-y-6">
          <Badge delay={0.2} color="tech">The Magic</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <AnimatedWord text="How do we make this" delay={0.4} /> <br/>
            <span className="text-gradient from-app-success to-app-tech">
              <TypewriterText text="seamless and safe?" delay={1.4} />
            </span>
          </h2>
        </div>

        {/* Timeline Visualization */}
        <div className="relative w-full max-w-5xl flex justify-between items-start pt-10">
          
          {/* Animated Connecting Line */}
          <div className="absolute top-20 left-10 right-10 h-0.5 bg-white/10 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-app-tech via-app-success to-app-primary"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 2.0, ease: 'easeInOut' }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            const delay = 2.0 + (i * 0.8);

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                className="relative z-10 flex flex-col items-center w-72 text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: delay + 0.2, type: 'spring' }}
                  className="w-20 h-20 rounded-2xl bg-[#0a1024] border border-white/10 shadow-2xl flex items-center justify-center mb-6 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
                  <Icon className="w-8 h-8 text-white z-10" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {step.desc}
                </p>
                
                {/* Success Indicator appearing later */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.6 }}
                  className="mt-6 text-app-success flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-mono tracking-widest hidden sm:inline">VERIFIED</span>
                </motion.div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  );
}
