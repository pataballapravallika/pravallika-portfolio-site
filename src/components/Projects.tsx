
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projectsData = [
    {
      title: "RAG-Based Chatbot",
      shortDescription: "Intelligent chatbot with semantic search capabilities",
      fullDescription: "Built an advanced RAG (Retrieval-Augmented Generation) chatbot using cutting-edge NLP techniques. The system combines semantic search with large language models to provide contextually accurate responses.",
      tools: ["Streamlit", "Pinecone", "HuggingFace", "N8N", "Cosine Similarity", "LLMs"],
      metrics: "90%+ semantic match accuracy across 100+ queries",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      features: [
        "Real-time semantic search using vector embeddings",
        "Integration with multiple LLM models",
        "Automated workflow orchestration with N8N",
        "High-performance vector database with Pinecone"
      ]
    },
    {
      title: "Autism Detection from Facial Features",
      shortDescription: "AI-powered screening system using computer vision",
      fullDescription: "Developed a sophisticated deep learning model for autism detection using facial feature analysis. The system leverages advanced CNN architectures to identify subtle patterns in facial expressions and features.",
      tools: ["CNN", "TensorFlow", "ResNet50", "Xception", "Computer Vision"],
      metrics: "96.39% accuracy using image-based screening",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      features: [
        "Transfer learning with ResNet50 and Xception",
        "Robust preprocessing pipeline for facial images",
        "High accuracy detection with medical-grade precision",
        "Ethical AI implementation for healthcare applications"
      ]
    },
    {
      title: "Face Recognition Attendance System",
      shortDescription: "Automated attendance tracking with facial recognition",
      fullDescription: "Created a comprehensive attendance management system using computer vision and facial recognition technology. The system automates the entire attendance process while maintaining high accuracy and security.",
      tools: ["Python", "OpenCV", "MySQL", "Face Recognition", "GUI"],
      metrics: "90% face-match accuracy for 30+ students",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      features: [
        "Real-time face detection and recognition",
        "Secure database integration with MySQL",
        "User-friendly interface for attendance tracking",
        "Automated report generation and analytics"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {project.shortDescription}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-accent/50 text-accent-foreground px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{project.tools.length - 3} more</span>
                  )}
                </div>

                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary">
                    🎯 {project.metrics}
                  </p>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.fullDescription}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary/10 p-4 rounded-lg">
                        <p className="font-medium text-primary">
                          📊 Achievement: {project.metrics}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
