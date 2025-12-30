import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Bot, 
  Calculator, 
  Search, 
  FileText, 
  Shield, 
  PenTool, 
  MapPin, 
  FileCheck,
  CreditCard,
  Receipt,
  TrendingUp,
  BookOpen,
  LayoutDashboard,
  Clock,
  Users,
  Paperclip
} from 'lucide-react';

const features = {
  'estimates': {
    title: 'Estimates & AI',
    icon: Bot,
    color: 'from-primary to-chart-2',
    items: [
      {
        icon: Bot,
        title: 'Mervin AI Assistant',
        description: 'Create complete, accurate estimates in less than 60 seconds. Conversational AI powered by advanced automation and dynamic cost analysis delivers professional estimates through natural language chat.'
      },
      {
        icon: Calculator,
        title: 'Smart Calculators',
        description: 'Specialized calculators for all construction trades and materials. Accurate quantities, labor costs, and pricing tailored to your market and specialty.'
      },

      {
        icon: FileText,
        title: 'Professional Templates',
        description: 'Choose from Basic, Premium, or Luxury estimate templates. Customizable designs that make your proposals stand out from the competition.'
      }
    ]
  },
  'legal': {
    title: 'Legal & Contracts',
    icon: Shield,
    color: 'from-chart-2 to-primary',
    items: [
      {
        icon: Shield,
        title: 'Legal Defense Engine',
        description: 'Replace Rocket Lawyer with our AI-powered contract generator. In just 70 seconds, create contracts with protective clauses tailored to your specific project risks. Includes Change Orders, Lien Waivers, Independent Contractor Agreements, and more—all with industry-standard legal protection.'
      },
      {
        icon: PenTool,
        title: 'Dual-Signature System (No DocuSign Needed)',
        description: 'Save $300/year by eliminating your DocuSign subscription. Our built-in dual-signature system provides legally-binding electronic signatures for both contractor and client. Sign from any device with automatic audit trails and legal compliance—all included in your Owl Fenc subscription.'
      },
      {
        icon: MapPin,
        title: 'Property Verification (Ownership Check)',
        description: 'AI-powered ownership verification prevents fraud and wasted time before you invest in creating estimates. Get precise ownership data, property boundaries, HOA restrictions, and values through ATTOM Data integration.'
      },
      {
        icon: FileCheck,
        title: 'Permit Advisor',
        description: 'Automatically analyzes and identifies all possible permits required for your project—including those both you and your client might overlook. AI-powered recommendations ensure full regulatory compliance and prevent costly delays.'
      }
    ]
  },
  'payments': {
    title: 'Payments & Finance',
    icon: CreditCard,
    color: 'from-primary to-chart-2',
    items: [
      {
        icon: CreditCard,
        title: 'Stripe Payment Processing',
        description: 'Accept credit cards, debit cards, and ACH bank transfers. PCI-compliant processing with automatic receipt generation and payment tracking.'
      },
      {
        icon: Receipt,
        title: 'Invoice Generator',
        description: 'Generate professional invoices for completed projects in less than 60 seconds. Ready to send or share immediately with automatic tracking, payment reminders, and balance management.'
      },
      {
        icon: TrendingUp,
        title: 'Payment Tracking',
        description: 'Monitor deposits, progress payments, and final balances. Visual dashboards show your cash flow and help you stay on top of collections.'
      },

    ]
  },
  'management': {
    title: 'Project Management',
    icon: LayoutDashboard,
    color: 'from-chart-2 to-primary',
    items: [
      {
        icon: LayoutDashboard,
        title: 'Project Management',
        description: 'Manage scheduling, progress, documents, and communication for every project from one centralized dashboard. Designed for maximum efficiency and control with real-time updates and customizable views.'
      },
      {
        icon: Clock,
        title: 'Timeline Tracking',
        description: 'Visual project timelines with milestones and dependencies. Track progress, identify delays, and keep projects on schedule with automated alerts.'
      },
      {
        icon: Users,
        title: 'Client Management',
        description: 'Organize client information, communication history, and project notes. Build stronger relationships with comprehensive client profiles.'
      },
      {
        icon: Paperclip,
        title: 'File Attachments',
        description: 'Store contracts, photos, permits, and documents in one secure location. Cloud storage with version control and easy sharing capabilities.'
      }
    ]
  }
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Features() {
  return (
    <div className="min-h-screen py-20">
      <Helmet>
        <title>Features - Owl Fenc Construction Platform</title>
        <meta name="description" content="Discover Owl Fenc's powerful features: AI estimates with Mervin, legal contract generation, property verification, payment processing, project management, and more." />
      </Helmet>

      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-features">
            Complete Feature Set
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to Run Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Owl Fenc provides a comprehensive suite of tools designed specifically for construction professionals. 
            From AI-powered estimates to payment processing, we've got you covered.
          </p>
        </motion.div>

        <Tabs defaultValue="estimates" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
            {Object.entries(features).map(([key, category]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
                data-testid={`tab-${key}`}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(features).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  Powerful tools to streamline your workflow
                </p>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
              >
                {category.items.map((feature, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <Card className="hover-elevate transition-all h-full" data-testid={`feature-${key}-${index}`}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
