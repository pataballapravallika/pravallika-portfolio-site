
import React from 'react';
import { Brain, Code, Palette, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description: "Building deep learning & NLP models like RAG chatbots and predictive systems.",
      features: [
        "Custom ML model development",
        "Natural Language Processing",
        "Predictive analytics",
        "AI system integration"
      ]
    },
    {
      icon: Code,
      title: "Python Full-Stack Development",
      description: "End-to-end application development using Django and Flask.",
      features: [
        "Django web applications",
        "Flask API development",
        "Database design & optimization",
        "RESTful API integration"
      ]
    },
    {
      icon: Palette,
      title: "Web Design & Development",
      description: "Creating responsive, minimal websites with clean UI.",
      features: [
        "Responsive web design",
        "Modern UI/UX principles",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision Applications",
      description: "Projects like face recognition and image-based classification.",
      features: [
        "Image processing & analysis",
        "Object detection & recognition",
        "Facial recognition systems",
        "Medical image analysis"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions through cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={32} />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative AI solutions and modern web technologies.
            </p>
            <a
              href="mailto:pataballapravallika@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
