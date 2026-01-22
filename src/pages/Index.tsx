import { Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LazyLoadWrapper from "@/components/LazyLoadWrapper";

// Lazy load below-the-fold components to reduce initial bundle size
const About = lazy(() => import("@/components/About"));
const Resources = lazy(() => import("@/components/Resources"));
const SEPProposals = lazy(() => import("@/components/SEPProposals"));
const LinkedInInsights = lazy(() => import("@/components/LinkedInInsights"));
const Contact = lazy(() => import("@/components/Contact"));

// Loading skeleton component for better UX
const SectionSkeleton = () => (
  <div className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-muted rounded w-1/3 mx-auto" />
        <div className="h-4 bg-muted rounded w-2/3 mx-auto" />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-32 bg-muted rounded" />
          <div className="h-32 bg-muted rounded" />
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Lazy load sections with intersection observer for optimal performance */}
      <LazyLoadWrapper fallback={<SectionSkeleton />}>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<SectionSkeleton />}>
        <Suspense fallback={<SectionSkeleton />}>
          <Resources />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<SectionSkeleton />}>
        <Suspense fallback={<SectionSkeleton />}>
          <SEPProposals />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<SectionSkeleton />}>
        <Suspense fallback={<SectionSkeleton />}>
          <LinkedInInsights />
        </Suspense>
      </LazyLoadWrapper>
      
      <LazyLoadWrapper fallback={<SectionSkeleton />}>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </LazyLoadWrapper>
    </div>
  );
};

export default Index;
