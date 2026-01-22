import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Code2, 
  Building2, 
  Award, 
  Globe, 
  Users,
  Cpu,
  BookOpen
} from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      year: '1973',
      endYear: '1978',
      title: 'University of Florida',
      description: 'Undergraduate studies with SWMM pioneers Wayne Huber and James Heaney. First experience with SWMM 2.5 on punch cards.',
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: '1977',
      endYear: '1991',
      title: 'Professional Research Assistant',
      description: 'University of Florida. Co-authored SWMM 3 (1981) and SWMM 4 (1988), rewriting the model in FORTRAN 77 with new Extran solutions.',
      icon: Code2,
      type: 'research',
      highlight: 'SWMM 3 & 4'
    },
    {
      year: '1991',
      endYear: '1998',
      title: 'XP Software',
      description: 'Senior Vice President in Canberra/Florida. Lead developer of XP-SWMM, transitioning the model to a graphical user interface.',
      icon: Building2,
      type: 'industry',
      highlight: 'XP-SWMM'
    },
    {
      year: '1998',
      endYear: '2000',
      title: 'CAiCE Software',
      description: 'Senior Application Engineer (later acquired by Autodesk). Architected Visual SWMM and Visual Drainage platforms.',
      icon: Cpu,
      type: 'industry'
    },
    {
      year: '2000',
      endYear: '2008',
      title: 'CDM Smith / EPA CRADA',
      description: 'Lead Developer under EPA partnership to create SWMM 5, featuring a new C-based engine and enhanced GUI.',
      icon: Code2,
      type: 'development',
      highlight: 'SWMM 5'
    },
    {
      year: '2007',
      endYear: 'Present',
      title: 'Innovyze / Autodesk',
      description: 'Product Sector Leader for InfoSWMM, InfoSewer, and InfoWorks ICM. Water Technologist for Storm Sewer & Flood modeling.',
      icon: Building2,
      type: 'current',
      highlight: '18 Years'
    },
    {
      year: '2008',
      endYear: 'Present',
      title: 'SWMM5.org Founded',
      description: 'Created community hub with 900+ technical blogs, tutorials, Ruby scripts, and AI-powered conversion tools.',
      icon: Globe,
      type: 'community',
      highlight: '900+ Articles'
    },
    {
      year: '2010',
      endYear: '2012',
      title: "President's Award",
      description: "Two-time recipient of Innovyze President's Award for Customer Service excellence.",
      icon: Award,
      type: 'recognition'
    },
    {
      year: '2020',
      endYear: 'Present',
      title: 'SWMM5+ TAC Chair',
      description: 'Chairperson/TAC for SWMM5+ project at CIMM, guiding the high-performance, open-source future of the engine.',
      icon: Users,
      type: 'leadership',
      highlight: 'SWMM5+'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-accent/10 text-accent border-accent/20';
      case 'research': return 'bg-primary/10 text-primary border-primary/20';
      case 'industry': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'development': return 'bg-primary/10 text-primary border-primary/20';
      case 'current': return 'bg-primary/10 text-primary border-primary/20';
      case 'community': return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'recognition': return 'bg-accent/10 text-accent border-accent/20';
      case 'leadership': return 'bg-primary/10 text-primary border-primary/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getDotColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-accent';
      case 'research': return 'bg-primary';
      case 'industry': return 'bg-secondary';
      case 'development': return 'bg-primary';
      case 'current': return 'bg-primary animate-pulse';
      case 'community': return 'bg-secondary';
      case 'recognition': return 'bg-accent';
      case 'leadership': return 'bg-primary';
      default: return 'bg-muted-foreground';
    }
  };

  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <BookOpen className="mr-2 h-4 w-4" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            52 Years of SWMM Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From punch cards at the University of Florida to leading Autodesk's water technology initiatives—a half-century journey shaping stormwater modeling.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background transform -translate-x-1/2 z-10">
                  <div className={`w-full h-full rounded-full ${getDotColor(milestone.type)}`} />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className="card-technical p-6 hover:shadow-flow transition-all duration-300">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-left' : ''}`}>
                      <div className={`p-3 rounded-lg shrink-0 ${getTypeColor(milestone.type)}`}>
                        <milestone.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`flex items-center gap-2 mb-2 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Badge variant="outline" className="text-xs font-mono">
                            {milestone.year}{milestone.endYear !== milestone.year && `–${milestone.endYear}`}
                          </Badge>
                          {milestone.highlight && (
                            <Badge className={getTypeColor(milestone.type)}>
                              {milestone.highlight}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="card-technical p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">52</div>
            <div className="text-sm text-muted-foreground">Years with SWMM</div>
          </Card>
          <Card className="card-technical p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5</div>
            <div className="text-sm text-muted-foreground">SWMM Versions Co-Authored</div>
          </Card>
          <Card className="card-technical p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">25K+</div>
            <div className="text-sm text-muted-foreground">Support Incidents Resolved</div>
          </Card>
          <Card className="card-technical p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">900+</div>
            <div className="text-sm text-muted-foreground">Technical Articles</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
