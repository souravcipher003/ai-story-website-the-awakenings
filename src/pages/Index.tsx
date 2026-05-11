import { useRef } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import HeroSection from '@/components/HeroSection';
import ChapterSection from '@/components/ChapterSection';
import CharacterCard from '@/components/CharacterCard';
import chapter1Img from '@/assets/chapter1.jpg';
import chapter2Img from '@/assets/chapter2.jpg';
import chapter3Img from '@/assets/chapter3.jpg';
import heroImg from '@/assets/hero.jpg';

const Index = () => {
  const storyRef = useRef<HTMLDivElement>(null);

  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      
      <HeroSection onBeginJourney={scrollToStory} />

      <div ref={storyRef} className="relative z-10">
        {/* Characters Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-background to-shadow-dark">
          <div className="container mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif text-glow bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                The Characters
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the souls that will shape your journey through this mystical realm
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <CharacterCard
                name="The Hero"
                trait="Curious, brave, slightly amnesiac"
                visuals="Hooded cloak, glowing pendant, magical aura"
                purpose="Discover their true power"
                imageSrc={heroImg}
                delay={0.2}
              />
              
              <CharacterCard
                name="The Companion"
                trait="Loyal, witty, can guide hero"
                visuals="Floating holographic animal or spirit creature"
                purpose="Guide and protect the hero"
                delay={0.4}
              />
              
              <CharacterCard
                name="Shadow Entity"
                trait="Mysterious, menacing"
                visuals="Dark swirling smoke or robotic entity with glowing eyes"
                purpose="Challenge the hero's resolve"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Chapter 1 */}
        <ChapterSection
          chapterNumber={1}
          title="The Awakening"
          content="In a realm where reality bends to the whispers of ancient magic, our hero awakens beneath a canopy of luminescent trees. A mysterious sphere hovers above, pulsating with otherworldly energy. The forest breathes with life unseen, and in the misty air, particles of pure magic dance like fireflies. This is where it all begins—where destiny calls and the forgotten past starts to reveal itself."
          imageSrc={chapter1Img}
        />

        {/* Chapter 2 */}
        <ChapterSection
          chapterNumber={2}
          title="The Journey"
          content="The path leads through ruins of a civilization long forgotten, where shadows writhe with malevolent intent. Ancient pathways glow with residual magic, illuminating the way forward. A faithful companion appears—a spectral guardian that knows secrets of this mystical land. Together, they must navigate through darkness, facing shadow creatures that hunger for the hero's newfound power."
          imageSrc={chapter2Img}
          reverse
        />

        {/* Chapter 3 */}
        <ChapterSection
          chapterNumber={3}
          title="The Finale"
          content="At the summit of understanding, where earth meets sky, the final confrontation awaits. The shadow entity materializes, a force of pure darkness seeking to extinguish all light. But the hero has grown, learned, transformed. The mystical sphere releases a torrent of radiant energy—cyan and gold intertwining—as the hero ascends to their true potential. Light triumphs, and a new dawn breaks over the mystical realm."
          imageSrc={chapter3Img}
        />

        {/* Footer */}
        <footer className="relative py-12 px-4 text-center border-t border-primary/20">
          <p className="text-muted-foreground">
            The story continues... Your journey is just beginning.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
