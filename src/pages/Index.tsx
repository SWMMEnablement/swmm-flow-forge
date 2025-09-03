import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SEPProposals from "@/components/SEPProposals";
import LinkedInInsights from "@/components/LinkedInInsights";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SEPProposals />
      <LinkedInInsights />
      <Contact />
    </div>
  );
};

export default Index;
