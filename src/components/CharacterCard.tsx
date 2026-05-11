import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

interface CharacterCardProps {
  name: string;
  trait: string;
  visuals: string;
  purpose: string;
  imageSrc?: string;
  delay?: number;
}

const CharacterCard = ({ name, trait, visuals, purpose, imageSrc, delay = 0 }: CharacterCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 group">
        {imageSrc && (
          <div className="relative h-64 overflow-hidden">
            <img 
              src={imageSrc} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </div>
        )}
        
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-serif text-primary">{name}</h3>
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Trait:</span>
              <p className="text-foreground">{trait}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground">Visuals:</span>
              <p className="text-foreground">{visuals}</p>
            </div>
            
            <div>
              <span className="text-muted-foreground">Purpose:</span>
              <p className="text-foreground">{purpose}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CharacterCard;
