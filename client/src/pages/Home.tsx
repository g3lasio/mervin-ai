import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Bot, 
  FileText, 
  Shield, 
  CreditCard, 
  TrendingUp,
  CheckCircle2,
  Zap,
  Target,
  FileCheck,
  Scale,
  PenTool,
  DollarSign,
  ChevronDown,
  Play
} from 'lucide-react';
import { useState } from 'react';

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

const features = [
  {
    icon: Bot,
    title: 'Mervin AI Copilot',
    description: 'Your AI copilot helps you work faster with instant answers and step-by-step guidance. Generate estimates, get permit advice, and make informed decisions through natural conversation.',
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    icon: Shield,
    title: 'Smart Contract Generator',
    description: 'Generate formal project contracts in 66 seconds with industry-specific legal clauses. Our Legal Defense Engine analyzes risks and generates protective clauses tailored to your project.',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    icon: FileText,
    title: 'Property Verification',
    description: 'AI-powered ownership verification prevents fraud and wasted time before you invest in creating estimates.',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments & Invoicing',
    description: 'Generate professional invoices in 60 seconds. Accept payments through Stripe with integrated digital signatures. Get paid faster.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Project Management',
    description: 'Organize your projects, track progress, and manage documents efficiently. Everything in one place so nothing falls through the cracks.',
    gradient: 'from-rose-500 to-pink-500'
  }
];

const faqs = [
  {
    question: 'How accurate are the AI-generated estimates?',
    answer: 'Our AI achieves 98% accuracy by analyzing real-time material pricing, labor rates, and regional cost data. Every estimate is based on current market conditions, not outdated templates.'
  },
  {
    question: 'Are the electronic signatures legally binding?',
    answer: 'Yes. Our dual-signature system complies with the ESIGN Act and UETA, making all electronic signatures legally binding across all 50 states. Each signature includes a complete audit trail.'
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Absolutely. Start with a free trial — no credit card required. You get full access to all features so you can see the value before you pay.'
  },
  {
    question: 'Does it work for my trade?',
    answer: 'Owl Fenc works for all construction trades — fencing, roofing, electrical, plumbing, HVAC, painting, landscaping, general contracting, and more. From $500 service calls to $5M+ projects.'
  },
  {
    question: 'What about my existing contracts and documents?',
    answer: 'You can start fresh with our AI-generated contracts or use our system alongside your existing workflow. There is no migration required — start creating better documents from day one.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Your data is encrypted at rest and in transit. We use bank-level security standards and never share your business data with third parties. Your client information stays yours.'
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Owl Fenc - AI-Powered Construction Management for Contractors</title>
        <meta name="description" content="Complete construction management platform with AI-powered estimates, legal contracts, property verification, and payment processing. Built for contractors of all trades." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5" />
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
              {...fadeIn}
            >
              Your AI Team Member That{' '}
              <span className="text-primary">Never Sleeps</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              {...fadeIn}
            >
              Generate estimates in 99 seconds. Create legal contracts in 66 seconds. 
              Verify property ownership instantly. One platform to close more deals and eliminate paperwork.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              {...fadeIn}
            >
              <a href={APP_URL} data-testid="button-hero-cta" onClick={() => { if (window.fbq) window.fbq('track', 'CompleteRegistration'); }}>
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Target className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-view-pricing">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
            <motion.p 
              className="mt-4 text-sm text-muted-foreground"
              {...fadeIn}
            >
              No credit card required · Free trial for all features
            </motion.p>
          </div>

          {/* Demo Video Placeholder */}
          <motion.div 
            className="max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div id="demo-video-container" className="relative rounded-xl overflow-hidden border border-border shadow-2xl bg-card aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground font-medium">Product Demo Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Contractors Choose Owl Fenc
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful AI tools that save you time and help you win more jobs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow" data-testid="stat-0">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                10x
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">Faster Estimates</div>
              <p className="text-muted-foreground">
                Generate quotes in minutes, not hours
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow" data-testid="stat-1">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                98%
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">Calculation Accuracy</div>
              <p className="text-muted-foreground">
                AI-powered precision for materials & labor
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow" data-testid="stat-2">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                +40%
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">More Jobs Won</div>
              <p className="text-muted-foreground">
                Professional proposals close more deals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for construction professionals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300" data-testid={`feature-card-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-sm`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/features">
              <Button variant="outline" size="lg" className="text-base">
                See All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Powerhouse Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6" variant="secondary">
              <Shield className="w-3 h-3 mr-1" />
              Your Legal Command Center
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Say Goodbye to DocuSign & Rocket Lawyer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Save <span className="font-bold text-primary">$780+ per year</span> by replacing multiple subscriptions with one powerful system
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Generate legal contracts AND collect electronic signatures—all in one place. No more juggling between platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Scale className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Legal Defense Engine</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our AI analyzes your project details and automatically generates contracts with protective clauses tailored to your specific risks. No more generic templates.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">AI-powered risk analysis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Industry-specific legal clauses</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Automatic compliance updates</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <PenTool className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Dual-Signature System</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Collect legally-binding electronic signatures from both you and your client—no DocuSign subscription needed. Fast, secure, and built right into your workflow.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Legally binding e-signatures</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Sign from any device</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">Automatic audit trail</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-primary/10 to-chart-2/10 border border-border shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Complete Document Library</h3>
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
                      <span className="text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">DocuSign ($300/yr) + Rocket Lawyer ($480/yr) = $780/year</span>
            </div>
            <p className="text-xl font-bold text-primary mb-4">
              With Owl Fenc: Everything included in your subscription
            </p>
            <a href={APP_URL}>
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                Start Saving Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Got questions? We have answers.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
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
                Join contractors who are saving time, winning more jobs, and scaling their businesses with Owl Fenc
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={APP_URL} data-testid="button-cta-signup" onClick={() => { if (window.fbq) window.fbq('track', 'CompleteRegistration'); }}>
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
