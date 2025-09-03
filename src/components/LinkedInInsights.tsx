import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, TrendingUp, Users, Calendar, MessageSquare, FileText } from 'lucide-react';

const LinkedInInsights = () => {
  const contentPillars = [
    {
      title: 'Patterns & Pitfalls',
      description: 'Short carousel posts about surcharge transitions, RTC stability, and RDII traps',
      format: 'Carousel Posts',
      frequency: 'Weekly',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: 'Interop Diaries',
      description: 'Screenshots of round-trip diffs and what tolerances mean in practice',
      format: 'Document Posts',
      frequency: 'Bi-weekly',
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: 'Benchmarks in Public',
      description: 'Side-by-side plots comparing SWMM vs. ICM vs. InfoDrainage—lessons, not blame',
      format: 'Native Video',
      frequency: 'Monthly',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: 'Ensembles in Practice',
      description: 'How P90 analysis actually changes pipe sizing and storage volume decisions',
      format: '2-4 min Demos',
      frequency: 'Monthly',
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  const metrics = [
    { label: 'Target Followers', value: '10K+', color: 'text-primary' },
    { label: 'Newsletter Open Rate', value: '15%', color: 'text-secondary' },
    { label: 'Carousel Save Rate', value: '30%', color: 'text-accent' }
  ];

  const readyToPosts = [
    {
      type: 'Interop Announcement',
      format: 'Document Post',
      description: 'Pain → Schema/Adapters → Diff Screenshots → "Comment PILOT to join"',
      cta: 'Comment PILOT',
      engagement: 'Expected: High engagement from engineering community'
    },
    {
      type: 'Ensembles Demo',
      format: '2:30 Video',
      description: '50 runs → P50/P90 overlay → Changed design decision demonstration',
      cta: 'Reply ENSEMBLE',
      engagement: 'Expected: Strong interest from utility managers'
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn Thought Leadership Strategy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Own the SWMM Conversation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building authority through consistent, valuable content that transforms how professionals 
            approach stormwater modeling and interoperability challenges.
          </p>
        </div>

        {/* Metrics Overview */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="card-technical p-6 text-center">
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>

        {/* Content Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Weekly Content Pillars
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contentPillars.map((pillar, index) => (
              <Card key={index} className="card-technical p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{pillar.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {pillar.frequency}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{pillar.description}</p>
                    <div className="inline-flex items-center text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                      {pillar.format}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ready-to-Ship Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ready-to-Ship Content
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {readyToPosts.map((post, index) => (
              <Card key={index} className="card-technical p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-semibold text-foreground">{post.type}</h4>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {post.format}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <span className="font-medium text-foreground mr-2">CTA:</span>
                    <code className="bg-muted px-2 py-1 rounded text-xs">{post.cta}</code>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{post.engagement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Office Hours */}
        <Card className="card-technical p-8 text-center border-accent/20 bg-accent/5">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Monthly Office Hours
            </h3>
            <p className="text-muted-foreground mb-6">
              Interactive Q&A sessions where community questions drive GitHub issues, 
              feature requests, and future content direction. Each answer becomes actionable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-flow">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Office Hours
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-5 w-5" />
                Join Community Discussion
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LinkedInInsights;