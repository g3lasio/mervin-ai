import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Search,
  Bot,
  FileCheck,
  Shield,
  CreditCard,
  Hammer,
  Receipt,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  FileText,
  Zap,
  TrendingUp
} from 'lucide-react';

const APP_URL = 'https://app.owlfenc.com';

interface WorkflowStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  features: {
    title: string;
    description: string;
    icon: any;
    badge?: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  quote?: {
    text: string;
    author: string;
  };
  gradient: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: 'Capture & Qualify the Lead',
    subtitle: 'Client Requests an Estimate',
    description: 'Work smarter, not harder. Verify ownership and generate professional estimates in minutes.',
    icon: Search,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    features: [
      {
        title: 'Property Verification',
        description: 'Verify ownership instantly with ATTOM Data. Confirm you\'re talking to the real owner and avoid fraud before investing time.',
        icon: MapPin,
        badge: 'Optional but Smart'
      },
      {
        title: 'AI-Powered Estimation',
        description: 'Chat with Mervin AI to generate professional estimates in 60 seconds. DeepSearch calculates materials & costs automatically.',
        icon: Bot,
        badge: 'Core Feature'
      }
    ],
    stats: [
      { value: '60 sec', label: 'Average estimate time' },
      { value: '95%', label: 'Accuracy rate' },
      { value: '$0', label: 'Extra software needed' }
    ],
    quote: {
      text: 'I closed a $15K deal in 20 minutes thanks to Owl Fenc',
      author: 'Juan M., Fence Contractor'
    }
  },
  {
    id: 2,
    title: 'Close the Deal',
    subtitle: 'Client Approves the Estimate',
    description: 'Close deals faster with AI-powered contracts and permit research.',
    icon: FileCheck,
    gradient: 'from-purple-500/20 to-pink-500/20',
    features: [
      {
        title: 'Permit Research',
        description: 'AI-powered permit advisor identifies required permits and helps you understand project implications before you start.',
        icon: FileText,
        badge: 'Risk Reduction'
      },
      {
        title: 'Contract Generation',
        description: 'AI generates legal contracts from estimates. Legal Defense Engine adds protective clauses. Send signature link instantly.',
        icon: Shield,
        badge: 'Legal Protection'
      }
    ],
    stats: [
      { value: '10 min', label: 'Estimate to contract' },
      { value: '$780', label: 'Saved per year' },
      { value: '100%', label: 'Legal compliance' }
    ],
    quote: {
      text: 'The permit advisor saved me from a $5K mistake',
      author: 'Carlos R., General Contractor'
    }
  },
  {
    id: 3,
    title: 'Dual Signature',
    subtitle: 'Both Parties Sign the Contract',
    description: 'Legal protection included. No DocuSign fees, no hassle.',
    icon: Shield,
    gradient: 'from-green-500/20 to-emerald-500/20',
    features: [
      {
        title: 'Electronic Signatures',
        description: 'Client receives secure signature link. Both parties sign electronically. Legal audit trail automatically created.',
        icon: FileCheck,
        badge: 'No Extra Fees'
      },
      {
        title: 'Legal Compliance',
        description: 'Contract sealed with unique folio number (OWL-2025-XXXXXX). Full audit trail for legal protection.',
        icon: Shield,
        badge: 'Legally Binding'
      }
    ],
    stats: [
      { value: '2 min', label: 'Average signing time' },
      { value: '$300', label: 'DocuSign cost saved' },
      { value: '∞', label: 'Signatures included' }
    ],
    quote: {
      text: 'No more paying for DocuSign. This is a game changer.',
      author: 'Maria L., Remodeling Contractor'
    }
  },
  {
    id: 4,
    title: 'Secure the Deposit',
    subtitle: 'Collect 50% Down Payment',
    description: 'Get paid upfront. Professional invoicing with integrated payments.',
    icon: CreditCard,
    gradient: 'from-orange-500/20 to-red-500/20',
    features: [
      {
        title: 'Professional Invoicing',
        description: 'Generate beautiful invoices instantly. Send payment link to client. Accept cards, ACH, and bank transfers.',
        icon: Receipt,
        badge: 'Stripe Powered'
      },
      {
        title: 'Payment Tracking',
        description: 'Track payments automatically. Get notifications when clients pay. Never chase payments again.',
        icon: TrendingUp,
        badge: 'Real-time Updates'
      }
    ],
    stats: [
      { value: '3 min', label: 'Invoice creation' },
      { value: '2.9%', label: 'Stripe fee only' },
      { value: '24/7', label: 'Payment acceptance' }
    ],
    quote: {
      text: 'Getting deposits is so easy now. Clients pay within hours.',
      author: 'Roberto S., Landscaping Contractor'
    }
  },
  {
    id: 5,
    title: 'Execute Like a Pro',
    subtitle: 'Complete the Project',
    description: 'Focus on what you do best. Let Owl Fenc handle the paperwork.',
    icon: Hammer,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    features: [
      {
        title: 'Change Order Management',
        description: 'Generate change orders instantly when scope changes. Get client approval and signatures digitally.',
        icon: FileText,
        badge: 'Scope Protection'
      },
      {
        title: 'Document Everything',
        description: 'Keep all project documents organized. Access contracts, estimates, and invoices from anywhere.',
        icon: FileCheck,
        badge: 'Cloud Storage'
      }
    ],
    stats: [
      { value: '5 min', label: 'Change order creation' },
      { value: '100%', label: 'Document retention' },
      { value: 'Mobile', label: 'Access anywhere' }
    ],
    quote: {
      text: 'Change orders used to be a nightmare. Now they take minutes.',
      author: 'David P., Construction Manager'
    }
  },
  {
    id: 6,
    title: 'Final Payment',
    subtitle: 'Invoice & Collect Final 50%',
    description: 'Complete the cycle. Get paid in full, move to next project.',
    icon: CheckCircle2,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    features: [
      {
        title: 'Final Invoice',
        description: 'Generate final invoice with one click. Include all change orders and adjustments automatically.',
        icon: Receipt,
        badge: 'Automated'
      },
      {
        title: 'Project Completion',
        description: 'Mark project as complete. Generate lien waivers if needed. Archive all documents for future reference.',
        icon: CheckCircle2,
        badge: 'Professional Close'
      }
    ],
    stats: [
      { value: '100%', label: 'Payment collection' },
      { value: '5★', label: 'Client satisfaction' },
      { value: 'Next', label: 'Project ready' }
    ],
    quote: {
      text: 'Professional from start to finish. My clients love the experience.',
      author: 'Ana G., Interior Designer'
    }
  }
];

const timelineSteps = [
  { label: 'Lead', icon: Search },
  { label: 'Verify', icon: MapPin },
  { label: 'Estimate', icon: Bot },
  { label: 'Approve', icon: FileCheck },
  { label: 'Contract', icon: Shield },
  { label: 'Sign', icon: FileCheck },
  { label: 'Deposit', icon: CreditCard },
  { label: 'Execute', icon: Hammer },
  { label: 'Invoice', icon: Receipt },
  { label: 'Paid', icon: CheckCircle2 }
];

export default function Features() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const stepHeight = windowHeight * 0.8;
      const currentStep = Math.min(
        Math.floor(scrollPosition / stepHeight),
        workflowSteps.length - 1
      );
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Features - Owl Fenc</title>
        <meta name="description" content="Discover how Owl Fenc transforms your construction workflow from lead to payment" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl px-4 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              Complete Workflow Solution
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Your Complete Construction Workflow, Simplified
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              From lead to payment, Owl Fenc handles everything. Focus on building, we'll handle the rest.
            </p>

            {/* Animated Timeline */}
            <div className="mt-12 relative">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                      index <= activeStep 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <step.icon className="w-4 h-4" />
                      <span className="text-sm font-medium hidden sm:inline">{step.label}</span>
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-32">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">{step.id}</span>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold">{step.title}</h2>
                    <p className="text-xl text-muted-foreground mt-1">{step.subtitle}</p>
                  </div>
                </div>

                {/* Main Card */}
                <Card className={`relative overflow-hidden border-2 hover-elevate transition-all bg-gradient-to-br ${step.gradient}`}>
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Features */}
                      <div className="space-y-6">
                        <p className="text-lg text-muted-foreground mb-8">
                          {step.description}
                        </p>

                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                {feature.badge && (
                                  <Badge variant="secondary" className="text-xs">
                                    {feature.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Right Column - Stats & Visual */}
                      <div className="space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {step.stats.map((stat, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-4 rounded-lg bg-background/50 backdrop-blur-sm text-center"
                            >
                              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Icon Visual */}
                        <div className="relative h-48 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <step.icon className="w-32 h-32 text-primary/20" />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                        </div>

                        {/* Quote */}
                        {step.quote && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border-l-4 border-primary"
                          >
                            <p className="text-sm italic mb-2">"{step.quote.text}"</p>
                            <p className="text-xs text-muted-foreground font-medium">
                              — {step.quote.author}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto max-w-4xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="p-12">
                <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of contractors who are closing deals faster and getting paid on time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={APP_URL}>
                    <Button size="lg" className="text-lg px-8">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="/pricing">
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      View Pricing
                    </Button>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
