
import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech, AI & Data Science",
      institution: "Bonam Venkata Chalamayya Engineering College",
      period: "2021–2025",
      score: "CGPA: 8.70"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      period: "2019–2021",
      score: "GPA: 9.10"
    },
    {
      degree: "SSC",
      institution: "ZP High School",
      period: "2018–2019",
      score: "GPA: 9.8"
    }
  ];

  const experienceData = [
    {
      role: "Python Full Stack Development Intern",
      company: "IIDT Black Bucks",
      period: "May–Aug 2024",
      achievements: [
        "Developed a Django-based e-commerce platform for 50+ agricultural products",
        "Optimized backend and achieved a 40% faster load time"
      ]
    },
    {
      role: "AI/ML Intern",
      company: "APSSDC",
      period: "May–July 2024",
      achievements: [
        "Built a sentiment classifier with over 85% accuracy using NLP and logistic regression"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="animate-slide-in">
            <Card className="mb-8 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm Pravallika Pataballa, a graduate in <span className="text-primary font-medium">Artificial Intelligence & Data Science</span> with a passion for machine learning and Python full-stack development. I've built projects like a RAG-based chatbot and a face recognition attendance system, combining AI with practical web solutions. I enjoy turning ideas into smart, scalable applications.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Python", "Django", "Flask", "Machine Learning", 
                    "TensorFlow", "OpenCV", "MySQL", "HTML/CSS", 
                    "JavaScript", "NLP", "Computer Vision", "Data Science"
                  ].map((skill, index) => (
                    <div 
                      key={skill} 
                      className="bg-accent/30 px-4 py-2 rounded-full text-center text-sm font-medium hover:bg-accent/50 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="border-0 shadow-lg animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-primary mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-primary">Education</h3>
                </div>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-6 pb-4">
                      <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                        <span className="text-sm font-medium text-primary">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-0 shadow-lg animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Briefcase className="text-primary mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-primary">Experience</h3>
                </div>
                <div className="space-y-6">
                  {experienceData.map((exp, index) => (
                    <div key={index} className="border-l-2 border-secondary/50 pl-6 pb-4">
                      <h4 className="font-semibold text-lg text-foreground">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
