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
            18 Years Innovyze/Autodesk • 52 Years EPASWMM • ICM Expert
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
            <span className="text-primary font-semibold">Innovyze and Autodesk SSF Simulation Software</span> for Storm Sewer & Flood modeling.
            Expert in <span className="text-secondary font-semibold">ICM InfoWorks integration</span> and <span className="text-accent font-semibold">Ruby scripting</span> for hydraulic modeling workflows.
          </p>

          {/* Key Value Props */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm">
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
              ICM InfoWorks • SWMM4/5 • Ruby Scripting
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2" />
              AI-Powered File Conversions
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-2" />
              Cross-Platform Interoperability
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero px-8 py-3 text-lg" asChild>
              <a href="https://swmm5.org" target="_blank" rel="noopener noreferrer">
                Visit SWMM5.org
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-secondary/30 hover:bg-secondary/10" asChild>
              <a href="https://openswmm.org" target="_blank" rel="noopener noreferrer">
                Visit OpenSWMM.org
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/10" asChild>
              <a href="https://www.linkedin.com/in/robertdickinson/" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                LinkedIn Articles
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Years at Innovyze/Autodesk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">52</div>
              <div className="text-sm text-muted-foreground">Years with EPASWMM</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Technical Articles</div>
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