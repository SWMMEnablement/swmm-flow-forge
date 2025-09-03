import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GitBranch, Target, Zap, BarChart3, Layers } from 'lucide-react';

const SEPProposals = () => {
  const seps = [
    {
      id: 'SEP-001',
      title: 'SWMM-JSON + Interop SDK',
      status: 'Draft',
      priority: 'Critical',
      description: 'A versioned JSON model exchange format with reference converters for round-trip compatibility across SWMM ↔ ICM ↔ InfoDrainage ↔ Civil 3D DA.',
      deliverables: [
        'Lossless inp ⇄ swmm.json conversion',
        'Autodesk app connector samples',
        'Tolerance-aware result comparers',
        'Plugin registration framework'
      ],
      impact: 'Removes vendor lock-in, standardizes QA workflows',
      timeline: '0-6 months',
      icon: <Layers className="h-6 w-6" />
    },
    {
      id: 'SEP-002',
      title: 'Ensembles & Uncertainty as First-Class Citizens',
      status: 'Review',
      priority: 'High',
      description: 'Built-in ensemble runner with sensitivity analysis hooks, enabling utilities to move from single-number answers to probabilistic design decisions.',
      deliverables: [
        'Engine-level ensemble manager',
        'Global sensitivity analysis (Sobol/LHS)',
        'Native percentile outputs (P50/P90)',
        'Three regulatory decision tutorials'
      ],
      impact: 'Changes how design decisions are justified and defended',
      timeline: '3-9 months',
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const benchmarkFeatures = [
    'Mass balance ≤ 0.1% tolerance',
    'RMSE accuracy thresholds vs legacy',
    'Deterministic repeat runs',
    'Cross-platform result validation',
    'Performance benchmarking suite'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Accepted': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="sep-proposals" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <GitBranch className="mr-2 h-4 w-4" />
            SWMM Enhancement Proposals
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Structured Innovation for SWMM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent governance process for proposing, reviewing, and implementing 
            practice-changing enhancements to the SWMM ecosystem.
          </p>
        </div>

        {/* SEP Process Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {['Draft', 'Review', 'Accepted', 'Implementation'].map((phase, index) => (
            <div key={phase} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{phase}</h3>
              <p className="text-sm text-muted-foreground">
                {index === 0 && 'Scope definition & community input'}
                {index === 1 && 'Technical review & acceptance tests'}
                {index === 2 && 'Community approval & planning'}
                {index === 3 && 'Safe rollout & adoption'}
              </p>
            </div>
          ))}
        </div>

        {/* Active SEPs */}
        <div className="space-y-8 mb-16">
          {seps.map((sep) => (
            <Card key={sep.id} className="card-technical p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon & Header */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4">
                    {sep.icon}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className={getStatusColor(sep.status)}>{sep.status}</Badge>
                    <Badge className={getPriorityColor(sep.priority)}>{sep.priority}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{sep.id}: {sep.title}</h3>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      Timeline: {sep.timeline}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{sep.description}</p>

                  {/* Deliverables */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {sep.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Expected Impact</h4>
                      <p className="text-sm text-muted-foreground">{sep.impact}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="btn-hero" size="sm">
                      View Full Proposal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Join Review Process
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Benchmark Pack CTA */}
        <Card className="card-technical p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Gold-Standard Benchmark Pack
            </h3>
            <p className="text-muted-foreground mb-6">
              50-100 curated test cases with CI gates for accuracy, mass balance, performance, and determinism. 
              This quality signature underlies both SEP proposals.
            </p>
            <div className="grid sm:grid-cols-5 gap-4 mb-8">
              {benchmarkFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-2 h-2 bg-accent rounded-full mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
            <Button className="btn-flow" size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Access Benchmark Suite
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SEPProposals;