import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Linkedin, 
  Globe, 
  Calendar, 
  ArrowRight,
  FileText,
  Code2,
  Cpu,
  Droplets,
  Lightbulb,
  Clock,
  TrendingUp,
  Zap
} from 'lucide-react';

const BlogArticles = () => {
  const linkedInArticles = [
    {
      title: 'AI Time Travel to Convert SWMM4 to SWMM5 Files',
      description: 'How AI-powered tools can bridge the gap between legacy SWMM4 models and modern SWMM5 format for seamless migration.',
      keyInsight: 'AI reduces manual conversion time from days to minutes while preserving model accuracy.',
      tags: ['AI', 'SWMM4', 'SWMM5', 'Conversion'],
      icon: Cpu,
      date: '2025',
      readTime: '8 min',
      category: 'AI & Automation',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Converting ICM InfoWorks PRN Files to CFS Units',
      description: 'Step-by-step guide using AI to convert PRN output files for SWMM5 validation and comparison workflows.',
      keyInsight: 'Automated unit conversion enables direct comparison between ICM and SWMM5 simulation results.',
      tags: ['ICM', 'PRN Files', 'AI'],
      icon: FileText,
      date: '2025',
      readTime: '6 min',
      category: 'Interoperability',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Getting Started with Ruby Scripting for InfoWorks',
      description: 'Introduction to automating InfoWorks ICM workflows using Ruby scripts for efficiency and repeatability.',
      keyInsight: 'Ruby scripts can batch-process hundreds of network scenarios, eliminating repetitive manual work.',
      tags: ['Ruby', 'InfoWorks', 'Automation'],
      icon: Code2,
      date: '2024',
      readTime: '10 min',
      category: 'Ruby Scripting',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Exporting Conduit Parameters to CSV with Ruby',
      description: 'Export up to 99 HW conduit parameters to CSV format using Ruby automation in InfoWorks ICM.',
      keyInsight: 'Exports all 99 Horton-Williams conduit parameters in one script execution.',
      tags: ['Ruby', 'CSV', 'ICM'],
      icon: Code2,
      date: '2024',
      readTime: '5 min',
      category: 'Ruby Scripting',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    }
  ];

  const swmm5Articles = [
    {
      title: 'EPA SWMM5 Tutorial with Images',
      description: 'Comprehensive tutorial covering model construction, simulation setup, and results analysis for SWMM 5.1.014.',
      keyInsight: 'Visual step-by-step guide from empty workspace to fully calibrated SWMM5 model.',
      tags: ['Tutorial', 'Beginner', 'SWMM5'],
      icon: Droplets,
      date: '2017',
      readTime: '15 min',
      category: 'Tutorial',
      url: 'https://swmm5.org/2017/08/14/epa-swmm5-tutorial-with-images-for-swmm-5-1-012/'
    },
    {
      title: 'InfoWorks ICM GeoPlan Tips',
      description: 'Essential tips and tricks for working effectively with the GeoPlan interface in InfoWorks ICM.',
      keyInsight: 'Master the GeoPlan interface to cut network editing time by 50%.',
      tags: ['ICM', 'GeoPlan', 'Tips'],
      icon: Globe,
      date: '2024',
      readTime: '7 min',
      category: 'Best Practices',
      url: 'https://swmm5.org'
    },
    {
      title: 'SWMM5 Import and Export for ICM Networks',
      description: 'Guide to seamless model exchange between SWMM5 and InfoWorks ICM/ICM SWMM networks.',
      keyInsight: 'Bidirectional model transfer preserves node, link, and subcatchment data across platforms.',
      tags: ['SWMM5', 'ICM', 'Interoperability'],
      icon: FileText,
      date: '2024',
      readTime: '12 min',
      category: 'Interoperability',
      url: 'https://swmm5.org'
    },
    {
      title: 'Useful Tables for InfoSWMM and SWMM5',
      description: "Reference appendix with Manning's n values, rainfall formats, and key parameter tables.",
      keyInsight: "Quick-reference Manning's n values and rainfall data formats for everyday modeling.",
      tags: ['Reference', 'Tables', 'Data'],
      icon: FileText,
      date: '2018',
      readTime: '4 min',
      category: 'Reference',
      url: 'https://swmm5.org/2018/07/21/appendix-a-useful-tables-for-infoswmm-and-swmm5/'
    }
  ];

  const categoryColors: Record<string, string> = {
    'AI & Automation': 'bg-accent/10 text-accent border-accent/20',
    'Interoperability': 'bg-secondary/10 text-secondary border-secondary/20',
    'Ruby Scripting': 'bg-primary/10 text-primary border-primary/20',
    'Tutorial': 'bg-accent/10 text-accent border-accent/20',
    'Best Practices': 'bg-secondary/10 text-secondary border-secondary/20',
    'Reference': 'bg-muted text-muted-foreground border-border',
  };

  const ArticleCard = ({ article, source }: { article: typeof linkedInArticles[0], source: 'linkedin' | 'swmm5' }) => {
    const accentColor = source === 'linkedin' ? 'primary' : 'secondary';

    return (
      <a 
        href={article.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <Card className="card-technical h-full flex flex-col overflow-hidden hover:shadow-flow transition-all duration-300 hover:-translate-y-1">
          {/* Visual Header Bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${source === 'linkedin' ? 'from-primary to-primary-glow' : 'from-secondary to-accent'}`} />
          
          <div className="p-6 flex flex-col flex-1">
            {/* Top meta row */}
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className={`text-xs ${categoryColors[article.category] || ''}`}>
                {article.category}
              </Badge>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </span>
              </div>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-3 mb-3">
              <div className={`p-2.5 rounded-lg shrink-0 bg-${accentColor}/10 group-hover:bg-${accentColor}/20 transition-colors`}>
                <article.icon className={`h-5 w-5 text-${accentColor}`} />
              </div>
              <h3 className={`font-semibold text-foreground group-hover:text-${accentColor} transition-colors leading-snug`}>
                {article.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {article.description}
            </p>

            {/* Key Insight callout */}
            <div className={`flex items-start gap-2 p-3 rounded-lg bg-${accentColor}/5 border border-${accentColor}/10 mb-4`}>
              <Lightbulb className={`h-4 w-4 text-${accentColor} shrink-0 mt-0.5`} />
              <p className="text-xs text-foreground/80 leading-relaxed">
                <span className="font-semibold">Key Insight:</span> {article.keyInsight}
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Read link */}
            <div className={`flex items-center text-sm font-medium text-${accentColor} group-hover:gap-2 transition-all`}>
              Read Article
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Card>
      </a>
    );
  };

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <FileText className="mr-2 h-4 w-4" />
            Latest Articles & Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Blog & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep dives into SWMM modeling, Ruby automation, AI-powered conversions, 
            and cross-platform interoperability — with actionable insights from 52 years of experience.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: FileText, value: '900+', label: 'Published Articles', color: 'primary' },
            { icon: TrendingUp, value: '50K+', label: 'Monthly Readers', color: 'secondary' },
            { icon: Code2, value: '200+', label: 'Ruby Code Snippets', color: 'accent' },
            { icon: Zap, value: '30+', label: 'AI Conversion Guides', color: 'primary' },
          ].map((stat) => (
            <Card key={stat.label} className="card-technical p-4 text-center">
              <stat.icon className={`h-5 w-5 text-${stat.color} mx-auto mb-2`} />
              <div className={`text-xl font-bold text-${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* LinkedIn Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">LinkedIn Articles</h3>
              <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/robertdickinson/" target="_blank" rel="noopener noreferrer">
                View All on LinkedIn
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {linkedInArticles.map((article, index) => (
              <ArticleCard key={index} article={article} source="linkedin" />
            ))}
          </div>
        </div>

        {/* SWMM5.org Articles */}
        <div>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Globe className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">SWMM5.org Posts</h3>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">900+ Articles</Badge>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="https://swmm5.org" target="_blank" rel="noopener noreferrer">
                Browse SWMM5.org
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {swmm5Articles.map((article, index) => (
              <ArticleCard key={index} article={article} source="swmm5" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="card-technical p-8 inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Want to stay updated on SWMM innovations?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Follow on LinkedIn for the latest articles on AI-powered conversions, Ruby automation, 
              and cross-platform modeling techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="btn-hero" asChild>
                <a href="https://www.linkedin.com/in/robertdickinson/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Follow on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://swmm5.org" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-5 w-5" />
                  Visit SWMM5.org
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
