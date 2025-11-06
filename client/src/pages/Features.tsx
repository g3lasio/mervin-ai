import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
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
        description: 'Conversational AI that creates detailed estimates through natural language. Just chat with Mervin about your project, and get professional estimates in minutes.'
      },
      {
        icon: Calculator,
        title: 'Fence Calculators',
        description: 'Specialized calculators for wood, vinyl, and chain-link fencing. Accurate material quantities, labor costs, and pricing tailored to your market.'
      },
      {
        icon: Search,
        title: 'DeepSearch Material Intelligence',
        description: 'Real-time pricing research across multiple suppliers. Automatically find the best deals on materials and stay competitive on every bid.'
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
        title: 'Smart Contract Generator',
        description: 'AI-powered legal contracts that protect your business. Every contract includes industry-standard clauses, payment terms, and liability protection.'
      },
      {
        icon: PenTool,
        title: 'Digital Signatures',
        description: 'Legally-binding electronic signatures integrated into every contract. Clients can sign from any device, speeding up your approval process.'
      },
      {
        icon: MapPin,
        title: 'Property Verification',
        description: 'ATTOM Data integration for comprehensive property research. Verify ownership, boundaries, HOA restrictions, and property values before you bid.'
      },
      {
        icon: FileCheck,
        title: 'Permit Advisor',
        description: 'Navigate complex permit requirements with AI guidance. Get recommendations for local regulations, required permits, and compliance documentation.'
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
        title: 'Professional Invoicing',
        description: 'Create and send professional invoices in seconds. Track payment status, send automatic reminders, and manage outstanding balances effortlessly.'
      },
      {
        icon: TrendingUp,
        title: 'Payment Tracking',
        description: 'Monitor deposits, progress payments, and final balances. Visual dashboards show your cash flow and help you stay on top of collections.'
      },
      {
        icon: BookOpen,
        title: 'QuickBooks Integration',
        description: 'Seamlessly sync with QuickBooks for complete financial management. Automatic invoice sync, payment reconciliation, and expense tracking.'
      }
    ]
  },
  'management': {
    title: 'Project Management',
    icon: LayoutDashboard,
    color: 'from-chart-2 to-primary',
    items: [
      {
        icon: LayoutDashboard,
        title: 'Project Dashboard',
        description: 'Centralized hub for all your projects. See active jobs, upcoming deadlines, and project status at a glance with customizable widgets.'
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
