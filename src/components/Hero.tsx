import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface HeroProps {
  onViewWork: () => void;
}
const Hero: React.FC<HeroProps> = ({
  onViewWork
}) => {
  return <section id="home" className="min-h-screen flex items-center justify-center gradient-bg pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img alt="Pravallika Pataballa" className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-primary/30 animate-float" src="/lovable-uploads/40369861-d860-4257-92e7-397463734473.jpg" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Hi, I'm Pravallika 
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">AI & Full Stack Developer</span> — 
            I build intelligent and scalable solutions with ML & Python.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={onViewWork} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all transform hover:scale-105">
              View My Work
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all" onClick={() => window.open('mailto:pataballapravallika@gmail.com')}>
              Get In Touch
            </Button>
          </div>

          <div className="animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
            <ArrowDown className="mx-auto text-muted-foreground animate-bounce" size={32} />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;