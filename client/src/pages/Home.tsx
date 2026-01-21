import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
  Target,
  FileCheck,
  Scale,
  PenTool,
  DollarSign
} from 'lucide-react';

const APP_URL = 'https://app.owlfenc.com';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const features = [
  {
    icon: Bot,
    title: 'Mervin AI Copilot',
    description: 'Your AI copilot helps you work faster with instant answers and step-by-step guidance. Generate estimates, get permit advice, and make informed decisions through natural conversation.',
    gradient: 'from-primary to-chart-2'
  },

  {
    icon: Shield,
    title: 'Smart Contract Generator',
    description: 'Generate formal project contracts in 66 seconds with industry-specific legal clauses. Our Legal Defense Engine analyzes risks and generates protective clauses tailored to your project.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: FileText,
    title: 'Property Verification',
    description: 'AI-powered ownership verification prevents fraud and wasted time before you invest in creating estimates.',
    gradient: 'from-chart-2 to-primary'
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments & Invoicing',
    description: 'Generate professional invoices in 60 seconds. Accept payments through Stripe with integrated digital signatures. Get paid faster.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: TrendingUp,
    title: 'Project Management',
    description: 'Organize your projects, track progress, and manage documents efficiently.',
    gradient: 'from-chart-2 to-primary'
  }
];

const targetAudiences = [
  {
    icon: Building2,
    title: 'General Contractors',
    description: 'Managing multiple projects and trades efficiently—from $500 jobs to multi-million dollar developments',
    specialties: ['Multi-Project Management', 'Subcontractor Coordination', 'Budget Control']
  },
  {
    icon: Users,
    title: 'Specialized Contractors',
    description: 'Electrical, plumbing, HVAC, roofing, painting, flooring, and all trades',
    specialties: ['Quick Estimates', 'Professional Proposals', 'Material Pricing']
  },
  {
    icon: Hammer,
    title: 'Service Contractors',
    description: 'Cleaning, hauling, demolition, landscaping, and maintenance services',
    specialties: ['Rapid Quoting', 'Volume Operations', 'Payment Processing']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Owl Fenc - AI-Powered Construction Management for Contractors</title>
        <meta name="description" content="Complete construction management platform with AI-powered estimates, legal contracts, property verification, and payment processing. Built for fence contractors and subcontractors." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
        <motion.div 
          className="container mx-auto max-w-7xl px-4 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <Badge className="mb-6" variant="secondary" data-testid="badge-ai-powered">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Construction Management
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-chart-2 bg-clip-text text-transparent"
              {...fadeIn}
            >
              Your AI Team Member That Never Sleeps
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              {...fadeIn}
            >
              Generate estimates in 99 seconds. Create legal contracts in 66 seconds. Verify property ownership instantly. 
              Close more deals, eliminate paperwork, and scale your construction business with AI that works as hard as you do.
              <span className="block mt-4 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                From $500 jobs to $5M+ projects—one platform, unlimited power.
              </span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              {...fadeIn}
            >
              <a href={APP_URL} data-testid="button-hero-cta" onClick={() => { 
                if (window.fbq) window.fbq('track', 'CompleteRegistration');
                if (window.gtag) window.gtag('event', 'conversion', {'send_to': 'AW-17220070682/CTA_Click'});
              }}>
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Contractors Choose Owl Fenc
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of contractors transforming their businesses with AI-powered tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-lg bg-card border border-border/40 hover:shadow-lg transition-shadow" data-testid="stat-0">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-3">
                10x
              </div>
              <div className="text-xl font-semibold mb-2">Faster Estimates</div>
              <p className="text-muted-foreground">
                Generate quotes in minutes, not hours
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card border border-border/40 hover:shadow-lg transition-shadow" data-testid="stat-1">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-3">
                98%
              </div>
              <div className="text-xl font-semibold mb-2">Calculation Accuracy</div>
              <p className="text-muted-foreground">
                AI-powered precision for materials & labor
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card border border-border/40 hover:shadow-lg transition-shadow" data-testid="stat-2">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-3">
                +40%
              </div>
              <div className="text-xl font-semibold mb-2">More Jobs Won</div>
              <p className="text-muted-foreground">
                Professional proposals close more deals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for construction professionals
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="hover-elevate transition-all h-full" data-testid={`feature-card-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for ALL Construction Trades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple hauling jobs to complex multi-million dollar projects—Owl Fenc adapts to your 
              trade, your volume, and your workflow
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {targetAudiences.map((audience, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="hover-elevate transition-all h-full" data-testid={`audience-card-${index}`}>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Legal Powerhouse Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Shield className="w-3 h-3 mr-1" />
              Your Legal Command Center
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Say Goodbye to DocuSign & Rocket Lawyer
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Save <span className="font-bold text-primary">$780+ per year</span> by replacing multiple subscriptions with one powerful system
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate legal contracts AND collect electronic signatures—all in one place. No more juggling between platforms or paying for separate services.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="hover-elevate transition-all h-full border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legal Defense Engine</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI analyzes your project details and automatically generates contracts with protective clauses tailored to your specific risks. No more generic templates from Rocket Lawyer.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI-powered risk analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Industry-specific legal clauses</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automatic compliance updates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover-elevate transition-all h-full border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <PenTool className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dual-Signature System</h3>
                  <p className="text-muted-foreground mb-6">
                    Collect legally-binding electronic signatures from both you and your client—no DocuSign subscription needed. Fast, secure, and built right into your workflow.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Legally binding e-signatures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Sign from any device</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Automatic audit trail</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Complete Document Library</h3>
                    <p className="text-muted-foreground">
                      Generate any legal document your construction business needs—all from one platform
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Project Contracts',
                    'Change Orders',
                    'Lien Waivers',
                    'Independent Contractor Agreements',
                    'Work Orders',
                    'Certificate of Completion',
                    'Warranty Agreements',
                    'Contract Addendums'
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-semibold">DocuSign ($300/year) + Rocket Lawyer ($480/year) = $780/year</span>
            </div>
            <p className="text-xl font-bold text-primary mb-4">
              With Owl Fenc: Everything included in your subscription
            </p>
            <a href={APP_URL} onClick={() => {
              if (window.gtag) window.gtag('event', 'conversion', {'send_to': 'AW-17220070682/CTA_Click'});
            }}>
              <Button size="lg" className="text-lg px-8 py-6">
                Start Saving Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* LeadPrime CRM Partnership Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Users className="w-3 h-3 mr-1" />
              Exclusive Partnership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supercharge Your Sales with LeadPrime CRM
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Owl Fenc handles your estimates and contracts. LeadPrime manages your entire sales pipeline.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-chart-2/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">LeadPrime CRM</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    A specialized mobile CRM built exclusively for contractors. Manage leads, track your sales pipeline, communicate with clients via SMS, and close more deals—all from your phone.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Lead management & pipeline tracking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">SMS communication with clients</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Meta (Facebook/Instagram) lead integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">AI voice assistant for calls</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Public booking system</span>
                    </div>
                  </div>
                  <a href="https://leadprime.chyrris.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      Learn More About LeadPrime
                    </Button>
                  </a>
                </CardContent>

                <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-chart-2/5 to-primary/5">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-primary">Exclusive Benefit</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      30% Discount for Owl Fenc Members
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      As a paid Owl Fenc subscriber, you get exclusive access to LeadPrime at a significantly reduced rate. Build the perfect contractor tech stack and dominate your market.
                    </p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-6 border border-border/50">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">70%</span>
                      <span className="text-muted-foreground">of regular price</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Available exclusively to Mero Patrón and Master Contractor plan members
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Automatic discount applied at checkout</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto max-w-7xl px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join hundreds of contractors who are saving time and winning more jobs with Owl Fenc
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={APP_URL} data-testid="button-cta-signup" onClick={() => { 
                  if (window.fbq) window.fbq('track', 'CompleteRegistration');
                  if (window.gtag) window.gtag('event', 'conversion', {'send_to': 'AW-17220070682/CTA_Click'});
                }}>
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
        </motion.div>
      </section>
    </div>
  );
}
