import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Calendar, 
  Building2,
  MapPin,
  ExternalLink,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      type: 'LinkedIn',
      primary: true,
      description: 'Professional networking & SEP discussions',
      action: 'Connect on LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      link: 'https://linkedin.com'
    },
    {
      type: 'Email',
      primary: false,
      description: 'Pilot projects & technical collaboration',
      action: 'robert.dickinson@autodesk.com',
      icon: <Mail className="h-5 w-5" />,
      link: 'mailto:robert.dickinson@autodesk.com'
    },
    {
      type: 'GitHub',
      primary: false,
      description: 'SEP proposals & benchmark contributions',
      action: 'View Repositories',
      icon: <Github className="h-5 w-5" />,
      link: 'https://github.com'
    }
  ];

  const collaborationTypes = [
    {
      title: 'SEP Review & Feedback',
      description: 'Technical review of SWMM-JSON schema or ensemble proposals',
      badge: 'Open',
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      title: 'Pilot Utility Partnership',
      description: 'Real-world validation with complex models and regulatory requirements',
      badge: 'Priority',
      color: 'bg-primary/10 text-primary border-primary/20'
    },
    {
      title: 'GUI Integration Planning',
      description: 'Coordination with vendors for SWMM-JSON adoption roadmaps',
      badge: 'Strategic',
      color: 'bg-secondary/10 text-secondary border-secondary/20'
    },
    {
      title: 'Academic Collaboration',
      description: 'University partnerships for benchmark pack integration in coursework',
      badge: 'Research',
      color: 'bg-accent/10 text-accent border-accent/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Building2 className="mr-2 h-4 w-4" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Join the SWMM Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a utility manager, GUI vendor, researcher, or fellow engineer—
            let's work together to make SWMM interoperability and ensemble modeling the new standard.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-technical p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <Button
                      variant={method.primary ? "default" : "outline"}
                      className={`w-full justify-start ${method.primary ? 'btn-hero' : ''}`}
                      asChild
                    >
                      <a href={method.link} target="_blank" rel="noopener noreferrer">
                        {method.icon}
                        <div className="ml-3 text-left flex-1">
                          <div className="font-medium">{method.type}</div>
                          <div className="text-xs opacity-80">{method.description}</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="card-technical p-6">
              <h4 className="font-semibold text-foreground mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Office Hours
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Benchmark Pack
                </Button>
              </div>
            </Card>
          </div>

          {/* Collaboration Opportunities */}
          <div className="lg:col-span-2">
            <Card className="card-technical p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Collaboration Opportunities
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {collaborationTypes.map((type, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-technical transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{type.title}</h4>
                      <Badge className={type.color}>{type.badge}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Start a Conversation
                </h4>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input 
                        id="organization" 
                        placeholder="Company/University" 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest">Collaboration Interest</Label>
                    <select 
                      id="interest" 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option>SEP Review & Feedback</option>
                      <option>Pilot Utility Partnership</option>
                      <option>GUI Integration Planning</option>
                      <option>Academic Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your interest in SWMM interoperability or ensemble modeling..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;