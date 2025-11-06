import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { 
  Bot, 
  Search, 
  FileText, 
  Shield, 
  CreditCard, 
  TrendingUp,
  Hammer,
  Building2,
  Users,
  CheckCircle2,
  Zap,
  Target
} from 'lucide-react';

const APP_URL = 'https://app.owlfenc.com';

const stats = [
  {
    value: '10x',
    label: 'Faster Estimates',
    description: 'Generate quotes in minutes, not hours'
  },
  {
    value: '98%',
    label: 'Calculation Accuracy',
    description: 'AI-powered precision for materials & labor'
  },
  {
    value: '+40%',
    label: 'More Jobs Won',
    description: 'Professional proposals close more deals'
  }
];

const features = [
  {
    icon: Bot,
    title: 'Mervin AI Assistant',
    description: 'Chat with our AI to create detailed estimates in minutes. Just describe your project and Mervin handles the calculations.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: Search,
    title: 'DeepSearch Material Intelligence',
    description: 'Real-time material pricing research across suppliers. Always get the best prices and availability.',
    gradient: 'from-chart-2 to-primary'
  },
  {
    icon: Shield,
    title: 'Legal Defense Contracts',
    description: 'AI-generated legal contracts that protect you. Every contract reviewed for compliance and clarity.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: FileText,
    title: 'Property Verification',
    description: 'Verify ownership, boundaries, and restrictions with ATTOM Data integration before you start.',
    gradient: 'from-chart-2 to-primary'
  },
  {
    icon: CreditCard,
    title: 'Stripe Payment Processing',
    description: 'Accept credit cards, ACH, and digital payments. Get paid faster with automated invoicing.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: TrendingUp,
    title: 'Project Management',
    description: 'Track all projects, timelines, and client communications in one centralized dashboard.',
    gradient: 'from-chart-2 to-primary'
  }
];

const targetAudiences = [
  {
    icon: Hammer,
    title: 'Fencing Contractors',
    description: 'Specialists in wood, vinyl, chain-link, and ornamental fencing',
    specialties: ['Residential Fencing', 'Commercial Projects', 'Fence Repair']
  },
  {
    icon: Building2,
    title: 'General Contractors',
    description: 'Managing multiple projects and subcontractors efficiently',
    specialties: ['Multi-Project Management', 'Subcontractor Coordination', 'Budget Control']
  },
  {
    icon: Users,
    title: 'Subcontractors',
    description: 'Professionals working with GCs on large-scale projects',
    specialties: ['Quick Estimates', 'Professional Proposals', 'Payment Tracking']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="secondary" data-testid="badge-ai-powered">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Construction Management
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-chart-2 bg-clip-text text-transparent">
              Build Faster, Win More Jobs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Owl Fenc is the AI-powered platform that helps contractors create estimates 10x faster, 
              generate legal contracts, and manage projects effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`${APP_URL}/signup`} data-testid="button-hero-cta">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Target className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" data-testid="button-view-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-card/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for construction professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`feature-card-${index}`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Construction Professionals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you specialize in fencing or manage multiple projects, Owl Fenc adapts to your workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="hover-elevate transition-all" data-testid={`audience-card-${index}`}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <audience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{audience.title}</h3>
                  <p className="text-muted-foreground mb-6">{audience.description}</p>
                  <div className="space-y-2">
                    {audience.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of contractors who are saving time and winning more jobs with Owl Fenc
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`${APP_URL}/signup`} data-testid="button-cta-signup">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                    Start Free Trial
                  </Button>
                </a>
                <Link href="/features">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/20" data-testid="button-explore-features">
                    Explore All Features
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
