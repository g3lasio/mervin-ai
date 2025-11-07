import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
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

const stats = [
  {
    value: '<60s',
    label: 'Estimate Creation',
    description: 'Generate complete, accurate estimates in under a minute'
  },
  {
    value: '70s',
    label: 'Contract Generation',
    description: 'Formal legal contracts with all clauses integrated'
  },
  {
    value: '1-100+',
    label: 'Estimates Per Day',
    description: 'Platform scales from simple jobs to enterprise volume'
  }
];

const features = [
  {
    icon: Bot,
    title: 'Mervin AI Assistant',
    description: 'Create complete, accurate estimates in under 60 seconds. AI-powered automation and dynamic cost analysis through natural conversation.',
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
    title: 'Smart Contract Generator',
    description: 'Generate formal project contracts in just 70 seconds with all legal clauses integrated. Complete protection, zero hassle.',
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
    description: 'Generate invoices in under 60 seconds. Accept payments through Stripe with integrated digital signatures.',
    gradient: 'from-primary to-chart-2'
  },
  {
    icon: TrendingUp,
    title: 'Complete Project Management',
    description: 'Manage scheduling, progress, documents, and communication from one centralized dashboard.',
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
              Build Faster, Win More Jobs
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              {...fadeIn}
            >
              Owl Fenc is the AI-powered platform that helps ALL construction professionals—from cleaning 
              crews to general contractors—create estimates 10x faster, generate legal contracts, and manage 
              projects effortlessly. Handle 1 or 100 estimates per day with ease.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              {...fadeIn}
            >
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-card/50">
        <motion.div 
          className="container mx-auto max-w-7xl px-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center" 
                data-testid={`stat-${index}`}
                variants={scaleIn}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
        </motion.div>
      </section>
    </div>
  );
}
