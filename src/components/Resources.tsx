import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Code2, 
  Database, 
  FileText, 
  ExternalLink, 
  Users, 
  GraduationCap,
  Newspaper,
  FolderOpen,
  Cpu
} from 'lucide-react';

const Resources = () => {
  const swmm5Resources = [
    {
      title: 'EPA SWMM5 Tutorial',
      description: 'Comprehensive step-by-step tutorial with images for SWMM 5.1.014 covering model construction, simulation, and analysis.',
      icon: GraduationCap,
      url: 'https://swmm5.org/2017/08/14/epa-swmm5-tutorial-with-images-for-swmm-5-1-012/',
      tags: ['Tutorial', 'Beginner']
    },
    {
      title: 'Ruby Scripting for ICM',
      description: 'Getting started guides and advanced scripts for automating InfoWorks ICM workflows with Ruby.',
      icon: Code2,
      url: 'https://swmm5.org',
      tags: ['Ruby', 'Automation']
    },
    {
      title: 'AI SWMM4 to SWMM5 Conversion',
      description: 'AI-powered tools for converting legacy SWMM4, Runoff 4, and EXTRAN 4 files to modern SWMM5 format.',
      icon: Cpu,
      url: 'https://swmm5.org',
      tags: ['AI', 'Conversion']
    },
    {
      title: 'PRN File Conversion Tools',
      description: 'Convert ICM InfoWorks PRN files to CFS units for seamless SWMM5 comparisons and validation.',
      icon: FileText,
      url: 'https://swmm5.org',
      tags: ['ICM', 'Tools']
    },
    {
      title: 'Technical Reference Tables',
      description: "Useful appendices including Manning's n tables, rainfall file formats, and parameter references.",
      icon: Database,
      url: 'https://swmm5.org/2018/07/21/appendix-a-useful-tables-for-infoswmm-and-swmm5/',
      tags: ['Reference', 'Data']
    }
  ];

  const openswmmResources = [
    {
      title: 'SWMM Knowledge Base',
      description: 'Searchable knowledge center with 29 years of shared knowledge, 2,000+ contributors, and 20,000+ posts.',
      icon: Users,
      url: 'https://www.openswmm.org',
      tags: ['Community', 'Q&A']
    },
    {
      title: 'SWMM Code Viewer',
      description: 'Engineer-friendly source code browser to understand the SWMM engine, with comments and modifications.',
      icon: Code2,
      url: 'https://www.openswmm.org',
      tags: ['Source Code', 'Technical']
    },
    {
      title: 'Example Models',
      description: 'Repository of community-contributed models for testing SWMM concepts and learning best practices.',
      icon: FolderOpen,
      url: 'https://www.openswmm.org/SWMMExamples',
      tags: ['Examples', 'Learning']
    },
    {
      title: 'Journal of Water Management Modeling',
      description: 'Peer-reviewed, open-access journal (JWMM) for sharing modeling innovations and research.',
      icon: Newspaper,
      url: 'https://www.chijournal.org/JWMM',
      tags: ['Research', 'Journal']
    },
    {
      title: 'ICWMM Conference',
      description: 'Annual International Conference on Water Management Modeling for networking and knowledge sharing.',
      icon: BookOpen,
      url: 'https://www.icwmm.org',
      tags: ['Conference', 'Events']
    }
  ];

  const ResourceCard = ({ resource, accent }: { resource: typeof swmm5Resources[0], accent: 'primary' | 'secondary' }) => (
    <Card className="card-technical p-6 h-full flex flex-col group hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg ${accent === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
          <resource.icon className={`h-6 w-6 ${accent === 'primary' ? 'text-primary' : 'text-secondary'}`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {resource.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {resource.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground flex-1 mb-4">
        {resource.description}
      </p>
      <Button variant="ghost" size="sm" className="w-fit group/btn" asChild>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          Learn More
          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </Button>
    </Card>
  );

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <BookOpen className="mr-2 h-4 w-4" />
            Resources & Documentation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tools, Tutorials & Community Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore comprehensive resources from SWMM5.org and OpenSWMM.org for stormwater modeling, 
            automation scripts, and community-driven knowledge.
          </p>
        </div>

        {/* SWMM5.org Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary-glow rounded-full" />
            <h3 className="text-2xl font-bold text-foreground">SWMM5.org</h3>
            <Badge className="bg-primary/10 text-primary border-primary/20">Technical Blog</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swmm5Resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} accent="primary" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button className="btn-hero" asChild>
              <a href="https://swmm5.org" target="_blank" rel="noopener noreferrer">
                Visit SWMM5.org
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* OpenSWMM.org Resources */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full" />
            <h3 className="text-2xl font-bold text-foreground">OpenSWMM.org</h3>
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">Community Hub</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openswmmResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} accent="secondary" />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-secondary/30 hover:bg-secondary/10" asChild>
              <a href="https://www.openswmm.org" target="_blank" rel="noopener noreferrer">
                Visit OpenSWMM.org
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
