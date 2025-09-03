import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Linkedin, Users, Target, ExternalLink } from 'lucide-react';

const About = () => {
  const expertise = [
    'ICM InfoWorks Expert',
    'SWMM4/5 Conversions with AI', 
    'Ruby Scripting Automation',
    'PRN File Format Handling',
    'Cross-Platform Integration',
    'EPASWMM Technical Advisory',
    'Hydraulic Model Validation',
    'Storm Sewer & Flood Modeling'
  ];

  const achievements = [
    {
      title: 'Industry Veteran',
      description: '52 years with EPASWMM, including 18 years leading water technology innovation at Innovyze/Autodesk.',
      metric: '52 Years'
    },
    {
      title: 'Technical Authority',
      description: 'Author of SWMM5.org with 100+ articles on ICM integration, Ruby scripting, and file conversions.',
      metric: 'SWMM5.org'
    },
    {
      title: 'AI Integration Pioneer',
      description: 'Leading AI-powered conversion tools for SWMM4 to SWMM5 migration and PRN file processing.',
      metric: 'AI Innovation'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
              <Building2 className="mr-2 h-4 w-4" />
              Autodesk Water Technologist
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              52 Years of SWMM Innovation, 18 Years Leading Autodesk Water Technology
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As an <span className="text-primary font-semibold">Autodesk Water Technologist</span> for Storm Sewer and Flood modeling, 
              I specialize in <span className="text-secondary font-semibold">ICM InfoWorks integration</span> and cross-platform interoperability. 
              My work spans AI-powered file conversions, Ruby scripting automation, and bridging the gap between 
              SWMM4/5 and modern hydraulic modeling platforms.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Core Mission</h3>
                <p className="text-muted-foreground">
                  Bridging legacy SWMM systems with modern ICM workflows through AI-powered conversions, 
                  Ruby automation, and seamless cross-platform model exchange capabilities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Technical Leadership</h3>
                <p className="text-muted-foreground">
                  With 52 years of EPASWMM expertise, combining deep legacy knowledge with cutting-edge AI tools 
                  to solve real-world interoperability challenges for water professionals worldwide.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero" asChild>
                <a href="https://linkedin.com/in/robertdickinson" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Articles
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://swmm5.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit SWMM5.org
                </a>
              </Button>
            </div>
          </div>

          {/* Expertise & Achievements */}
          <div className="space-y-8">
            {/* Technical Expertise */}
            <Card className="card-technical p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Target className="mr-3 h-5 w-5 text-primary" />
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Key Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-technical p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {achievement.metric}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>

            {/* Positioning Statement */}
            <Card className="card-technical p-6 border-primary/20 bg-primary/5">
              <div className="text-center">
                <h3 className="font-semibold text-primary mb-2">Professional Positioning</h3>
                <p className="text-sm text-muted-foreground italic">
                  "Autodesk Water Technologist for Storm Sewer and Flood | Expert in ICM InfoWorks ICM SWMM/Ruby | 
                  18 Years at Innovyze/Autodesk | 52 Years with EPASWMM"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;