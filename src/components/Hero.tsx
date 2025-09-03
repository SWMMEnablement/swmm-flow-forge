import { Button } from '@/components/ui/button';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SWMM Water Flow Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-pulse-glow">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            SWMM Enhancement Proposals (SEPs) • A+ Tier Initiative
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Architecting the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-glow to-accent animate-flow">
              Stormwater Modeling
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading <span className="text-primary font-semibold">SWMM interoperability</span> and <span className="text-secondary font-semibold">ensemble modeling</span> initiatives at Autodesk. 
            Transforming single-run analysis into <span className="text-accent font-semibold">probabilistic design</span>.
          </p>

          {/* Key Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              ICM • InfoDrainage • Civil 3D Integration
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
              Round-trip Model Interoperability
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-2" />
              P50/P90 Ensemble Analysis
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero px-8 py-3 text-lg" asChild>
              <a href="#sep-proposals">
                Explore SEP Proposals
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/10" asChild>
              <a href="#benchmarks">
                <Download className="mr-2 h-5 w-5" />
                Benchmark Pack
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Curated Test Cases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Target GUI Integrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">12</div>
              <div className="text-sm text-muted-foreground">Month Roadmap</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;