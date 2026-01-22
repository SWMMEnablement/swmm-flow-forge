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
  Droplets
} from 'lucide-react';

const BlogArticles = () => {
  const linkedInArticles = [
    {
      title: 'AI Time Travel to Convert SWMM4 to SWMM5 Files',
      description: 'How AI-powered tools can bridge the gap between legacy SWMM4 models and modern SWMM5 format for seamless migration.',
      tags: ['AI', 'SWMM4', 'SWMM5', 'Conversion'],
      icon: Cpu,
      date: '2025',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Converting ICM InfoWorks PRN Files to CFS Units',
      description: 'Step-by-step guide using AI to convert PRN output files for SWMM5 validation and comparison workflows.',
      tags: ['ICM', 'PRN Files', 'AI'],
      icon: FileText,
      date: '2025',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Getting Started with Ruby Scripting for InfoWorks',
      description: 'Introduction to automating InfoWorks ICM workflows using Ruby scripts for efficiency and repeatability.',
      tags: ['Ruby', 'InfoWorks', 'Automation'],
      icon: Code2,
      date: '2024',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    },
    {
      title: 'Exporting Conduit Parameters to CSV with Ruby',
      description: 'Export up to 99 HW conduit parameters to CSV format using Ruby automation in InfoWorks ICM.',
      tags: ['Ruby', 'CSV', 'ICM'],
      icon: Code2,
      date: '2024',
      url: 'https://www.linkedin.com/in/robertdickinson/'
    }
  ];

  const swmm5Articles = [
    {
      title: 'EPA SWMM5 Tutorial with Images',
      description: 'Comprehensive tutorial covering model construction, simulation setup, and results analysis for SWMM 5.1.014.',
      tags: ['Tutorial', 'Beginner', 'SWMM5'],
      icon: Droplets,
      date: '2017',
      url: 'https://swmm5.org/2017/08/14/epa-swmm5-tutorial-with-images-for-swmm-5-1-012/'
    },
    {
      title: 'InfoWorks ICM GeoPlan Tips',
      description: 'Essential tips and tricks for working effectively with the GeoPlan interface in InfoWorks ICM.',
      tags: ['ICM', 'GeoPlan', 'Tips'],
      icon: Globe,
      date: '2024',
      url: 'https://swmm5.org'
    },
    {
      title: 'SWMM5 Import and Export for ICM Networks',
      description: 'Guide to seamless model exchange between SWMM5 and InfoWorks ICM/ICM SWMM networks.',
      tags: ['SWMM5', 'ICM', 'Interoperability'],
      icon: FileText,
      date: '2024',
      url: 'https://swmm5.org'
    },
    {
      title: 'Useful Tables for InfoSWMM and SWMM5',
      description: "Reference appendix with Manning's n values, rainfall formats, and key parameter tables.",
      tags: ['Reference', 'Tables', 'Data'],
      icon: FileText,
      date: '2018',
      url: 'https://swmm5.org/2018/07/21/appendix-a-useful-tables-for-infoswmm-and-swmm5/'
    }
  ];

  const ArticleCard = ({ article, source }: { article: typeof linkedInArticles[0], source: 'linkedin' | 'swmm5' }) => (
    <Card className="card-technical p-6 h-full flex flex-col group hover:shadow-flow transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-lg shrink-0 ${source === 'linkedin' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
          <article.icon className={`h-5 w-5 ${source === 'linkedin' ? 'text-primary' : 'text-secondary'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {article.date}
            </Badge>
          </div>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground flex-1 mb-4 line-clamp-3">
        {article.description}
      </p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {article.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      
      <Button variant="ghost" size="sm" className="w-fit group/btn mt-auto" asChild>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read Article
          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </Button>
    </Card>
  );

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
            Stay current with the latest in SWMM modeling, Ruby automation, AI-powered conversions, 
            and cross-platform interoperability techniques.
          </p>
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
                View All
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
                View All
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
