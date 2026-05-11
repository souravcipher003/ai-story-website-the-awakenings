import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ChapterSectionProps {
  chapterNumber: number;
  title: string;
  content: string;
  imageSrc: string;
  reverse?: boolean;
}

const ChapterSection = ({ chapterNumber, title, content, imageSrc, reverse = false }: ChapterSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-20 px-4">
      <div className={`container mx-auto grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={reverse ? 'md:col-start-2' : ''}
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 glow-cyan">
            <img 
              src={imageSrc} 
              alt={title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`space-y-6 ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
        >
          <div className="inline-block">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase border border-primary/50 px-4 py-2 rounded-full">
              Chapter {chapterNumber}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-glow bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {content}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChapterSection;
