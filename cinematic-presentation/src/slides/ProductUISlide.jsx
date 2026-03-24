import { motion } from 'framer-motion';
import { SlideWrapper } from '../components/layout/SlideWrapper';
import { TypewriterText, AnimatedWord } from '../components/ui/Typography';
import { Badge } from '../components/ui/Badge';
import { User, ShieldCheck, Database, FileJson, ArrowRightCircle } from 'lucide-react';

export function ProductUISlide() {
  return (
    <SlideWrapper>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Hook */}
        <div className="space-y-8">
          <Badge delay={0.2} color="warning">Escalation</Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <AnimatedWord text="If a user sounds confused," delay={0.4} />
            <span className="text-gradient from-app-warning to-app-primary">
              <TypewriterText text="we instantly escalate." delay={1.8} />
            </span>
          </h2>

          <p className="text-xl text-white/70 font-light">
            <AnimatedWord 
              text="Human agents don't start from scratch. They receive a structured JSON package with full session state." 
              delay={3.0} 
            />
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.0 }}
            className="flex items-center space-x-6 text-sm font-mono text-white/50"
          >
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-app-success" /> RBI Compliant</span>
            <span className="flex items-center"><Database className="w-4 h-4 mr-2 text-app-tech" /> 7-YR Audit Log</span>
          </motion.div>
        </div>

        {/* Right Side: Visual Mock UI */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
          className="relative w-full rounded-2xl bg-[#090e1f] border border-white/10 shadow-2xl overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {/* Mac Header */}
          <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="flex-1 text-center text-xs font-mono text-white/30">Agent Workspace</div>
          </div>

          <div className="p-6 grid grid-cols-3 gap-6">
            
            {/* Chat Sim */}
            <div className="col-span-2 space-y-4">
              <div className="text-xs font-mono text-white/40 mb-2 uppercase tracking-widest">Active Transcriptions</div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}
                className="bg-white/5 rounded-lg p-3 text-sm text-white/80"
              >
                "I tried to transfer 5000 to my son but it failed..."
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5 }}
                className="bg-app-warning/10 border border-app-warning/20 rounded-lg p-3 text-sm flex items-start space-x-2"
              >
                <ArrowRightCircle className="w-4 h-4 text-app-warning mt-0.5 shrink-0" />
                <span className="text-app-warning">Smart Escalation Triggered: Frustration detected.</span>
              </motion.div>
            </div>

            {/* AI Analysis Sidebar */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/50">Intent: Transfer</span>
                  <span className="text-app-tech">98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-app-tech" initial={{ width: 0 }} animate={{ width: '98%' }} transition={{ delay: 3.0, duration: 1 }} />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }}
                className="bg-white/5 rounded-lg p-4 border border-white/10 text-xs font-mono"
              >
                <div className="flex items-center space-x-2 mb-2 text-white/60">
                  <FileJson className="w-3 h-3" /> <span>Payload</span>
                </div>
                <div className="text-app-success">{`{`}</div>
                <div className="pl-4 text-white/80">"auth": "verified",</div>
                <div className="pl-4 text-white/80">"amt": 5000,</div>
                <div className="pl-4 text-white/80">"lang": "hi-IN"</div>
                <div className="text-app-success">{`}`}</div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
