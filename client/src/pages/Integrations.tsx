import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SiStripe, SiOpenai, SiGooglecloud, SiQuickbooks, SiPostgresql } from 'react-icons/si';

interface Integration {
  name: string;
  category: string;
  description: string;
  features: string[];
  status: 'active' | 'premium';
  color: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    category: 'Payments',
    description: 'Accept credit cards, debit cards, and ACH payments securely',
    features: [
      'Process credit and debit card payments',
      'ACH bank transfers for large payments',
      'Automatic receipt generation',
      'PCI-compliant payment processing',
    ],
    status: 'active',
    color: '#635bff',
    icon: SiStripe,
  },
  {
    name: 'ATTOM Data',
    category: 'Property Intelligence',
    description: 'Comprehensive property data and ownership verification',
    features: [
      'Property ownership verification',
      'Boundary and lot size information',
      'HOA and deed restriction data',
      'Property value estimates',
    ],
    status: 'active',
    color: 'hsl(var(--primary))',
  },
  {
    name: 'OpenAI',
    category: 'AI Models',
    description: 'Advanced AI for estimates, contracts, and customer communication',
    features: [
      'GPT-4 for intelligent conversations',
      'Natural language estimate creation',
      'Contract generation and review',
      'Customer inquiry responses',
    ],
    status: 'active',
    color: '#10a37f',
    icon: SiOpenai,
  },
  {
    name: 'Claude (Anthropic)',
    category: 'AI Models',
    description: 'Advanced AI reasoning for complex construction scenarios',
    features: [
      'Deep analysis of project requirements',
      'Legal contract intelligence',
      'Technical specification review',
      'Cost estimation validation',
    ],
    status: 'active',
    color: '#f97316',
  },
  {
    name: 'Google AI',
    category: 'AI Models',
    description: 'Google Gemini for multimodal AI capabilities',
    features: [
      'Image analysis for project planning',
      'Document processing and extraction',
      'Multilingual support',
      'Real-time data processing',
    ],
    status: 'active',
    color: '#4285f4',
    icon: SiGooglecloud,
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    description: 'Seamless accounting integration for financial management',
    features: [
      'Automatic invoice sync',
      'Payment reconciliation',
      'Expense tracking',
      'Financial reporting',
    ],
    status: 'premium',
    color: '#2ca01c',
    icon: SiQuickbooks,
  },
  {
    name: 'PostgreSQL (Neon)',
    category: 'Database',
    description: 'Scalable, secure database with automatic backups',
    features: [
      'Multi-tenant data isolation',
      'Automatic daily backups',
      'Point-in-time recovery',
      'Serverless scaling',
    ],
    status: 'active',
    color: '#3b82f6',
    icon: SiPostgresql,
  },
  {
    name: 'SendGrid',
    category: 'Email',
    description: 'Reliable email delivery for estimates, contracts, and notifications',
    features: [
      'Estimate and contract delivery',
      'Payment reminders',
      'Project status updates',
      'Email tracking and analytics',
    ],
    status: 'active',
    color: '#1a82e2',
  },
];

const categories = Array.from(new Set(integrations.map(i => i.category)));

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

export default function Integrations() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-integrations">
            Powerful Integrations
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connect with the Tools You Already Use
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Owl Fenc integrates seamlessly with industry-leading platforms to provide 
            you with a complete construction management solution.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge variant="outline" className="px-4 py-2 cursor-pointer hover-elevate">
            All Integrations ({integrations.length})
          </Badge>
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline" 
              className="px-4 py-2 cursor-pointer hover-elevate"
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category} ({integrations.filter(i => i.category === category).length})
            </Badge>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {integrations.map((integration, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="hover-elevate transition-all h-full" data-testid={`integration-${integration.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: integration.color }}
                  >
                    {integration.icon ? (
                      <integration.icon className="w-6 h-6" />
                    ) : (
                      <span className="text-xl font-bold">
                        {integration.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <Badge 
                    variant={integration.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {integration.status === 'active' ? 'Active' : 'Premium'}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{integration.name}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {integration.category}
                  </Badge>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {integration.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold mb-2">Key Features:</div>
                  {integration.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-muted/30">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">More Integrations Coming Soon</h2>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're constantly adding new integrations to help you work more efficiently. 
                Have a suggestion? Let us know!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="outline" className="px-4 py-2">Xero</Badge>
                <Badge variant="outline" className="px-4 py-2">Zapier</Badge>
                <Badge variant="outline" className="px-4 py-2">Slack</Badge>
                <Badge variant="outline" className="px-4 py-2">Google Calendar</Badge>
                <Badge variant="outline" className="px-4 py-2">DocuSign</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
