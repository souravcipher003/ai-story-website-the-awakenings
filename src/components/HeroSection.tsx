import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onBeginJourney: () => void;
}

const HeroSection = ({ onBeginJourney }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-glow mb-6 bg-gradient-to-r from-primary via-glow-purple to-accent bg-clip-text text-transparent">
            The Awakening
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          A mystical journey through forgotten realms where ancient powers await discovery
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={onBeginJourney}
            className="bg-primary hover:bg-primary/80 text-primary-foreground text-lg px-8 py-6 glow-cyan font-semibold transition-all duration-300 hover:scale-105"
          >
            Begin Your Journey
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
