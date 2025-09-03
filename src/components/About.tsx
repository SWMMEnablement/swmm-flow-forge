import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Linkedin, Users, Target, ExternalLink } from 'lucide-react';

const About = () => {
  const expertise = [
    'SWMM Core Development',
    'ICM & InfoWorks Integration', 
    'InfoDrainage Workflows',
    'Civil 3D Drainage Analysis',
    'Ensemble & Uncertainty Modeling',
    'JSON Schema Design',
    'Cross-Platform Interoperability',
    'Regulatory Compliance'
  ];

  const achievements = [
    {
      title: 'Autodesk Product Integration',
      description: 'Direct access to ICM, InfoDrainage, and Civil 3D DA teams for seamless interoperability development.',
      metric: '3 Products'
    },
    {
      title: 'LinkedIn Thought Leadership',
      description: 'Building a community around modern SWMM practices and probabilistic design methods.',
      metric: '10K+ Network'
    },
    {
      title: 'A+ Tier Vision',
      description: 'Architecting practice-changing enhancements that transform how the profession approaches stormwater modeling.',
      metric: '12 Month Roadmap'
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
              Autodesk SWMM Architect
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Transforming Stormwater Modeling from Single-Run to Probabilistic Design
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Autodesk, I leverage unique access to ICM, InfoDrainage, and Civil 3D Drainage Analysis 
              to architect the next generation of SWMM interoperability. My focus: moving utilities from 
              deterministic single-number answers to <span className="text-primary font-semibold">probabilistic design decisions</span> 
              through structured governance and proven benchmarks.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Core Mission</h3>
                <p className="text-muted-foreground">
                  Eliminate vendor lock-in and enable round-trip model exchanges while introducing 
                  ensemble analysis as a first-class citizen in SWMM workflows.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Strategic Advantage</h3>
                <p className="text-muted-foreground">
                  Combining Autodesk's platform reach with LinkedIn's professional network to drive 
                  adoption across 3+ GUIs, 10+ utilities, and 3+ universities within 12 months.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                <Linkedin className="mr-2 h-5 w-5" />
                Follow My Journey
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                View LinkedIn Profile
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
                  "Autodesk | SWMM architect & interop evangelist | ICM • InfoDrainage • Civil 3D | 
                  From single-run to probabilistic design."
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