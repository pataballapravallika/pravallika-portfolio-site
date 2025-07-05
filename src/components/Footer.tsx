
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Scroll to Top Button */}
          <div className="flex justify-center mb-8">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <ArrowUp size={20} />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Pravallika Pataballa</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              AI & Full Stack Developer passionate about creating intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:pataballapravallika@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/pravallika-pataballa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/pataballapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © 2024 Built with <Heart className="text-red-500 w-4 h-4" /> by Pravallika Pataballa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
