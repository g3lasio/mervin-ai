import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  BookOpen, 
  Sparkles, 
  FileText, 
  Video, 
  Code,
  Calendar,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Bot,
  Users,
  CreditCard,
  Settings,
  Lock,
  MapPin
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Documentation sections aligned with real Owl Fenc features
const docSections = [
  {
    icon: Zap,
    title: 'Getting Started',
    description: 'Set up your account and start creating estimates',
    articles: [
      { title: 'Creating Your Account', time: '3 min read' },
      { title: 'Setting Up Your Profile', time: '5 min read' },
      { title: 'Understanding the Dashboard', time: '7 min read' },
      { title: 'Choosing the Right Subscription Plan', time: '4 min read' }
    ]
  },
  {
    icon: Bot,
    title: 'Mervin AI Assistant',
    description: 'Master the AI-powered estimation system',
    articles: [
      { title: 'Talking to Mervin: Natural Conversation Tips', time: '6 min read' },
      { title: 'Creating Estimates with AI in Under 60 Seconds', time: '8 min read' },
      { title: 'How Mervin Calculates Materials and Labor', time: '10 min read' },
      { title: 'Training Mervin with Your Pricing Preferences', time: '7 min read' }
    ]
  },
  {
    icon: FileText,
    title: 'Estimates & Proposals',
    description: 'Create professional estimates manually or with AI',
    articles: [
      { title: 'Manual Estimate Creation Step-by-Step', time: '12 min read' },
      { title: 'Using Estimate Templates (Basic, Premium, Luxury)', time: '8 min read' },
      { title: 'Customizing Your Estimate Design', time: '6 min read' },
      { title: 'Sharing Estimates with Clients', time: '5 min read' },
      { title: 'Converting Estimates to Projects', time: '7 min read' }
    ]
  },
  {
    icon: Shield,
    title: 'Legal Contracts & Signatures',
    description: 'Generate contracts and collect electronic signatures',
    articles: [
      { title: 'Generating a Legal Contract from an Estimate', time: '8 min read' },
      { title: 'Understanding the Legal Defense Engine', time: '10 min read' },
      { title: 'Using the Dual-Signature System', time: '7 min read' },
      { title: 'Creating Change Orders', time: '6 min read' },
      { title: 'Generating Lien Waivers', time: '5 min read' },
      { title: 'Independent Contractor Agreements', time: '8 min read' },
      { title: 'Contract Audit Trail and Legal Compliance', time: '9 min read' }
    ]
  },
  {
    icon: MapPin,
    title: 'Property Verification',
    description: 'Verify property ownership before creating estimates',
    articles: [
      { title: 'How Property Verification Works', time: '6 min read' },
      { title: 'Understanding ATTOM Data Integration', time: '8 min read' },
      { title: 'Interpreting Property Reports', time: '7 min read' },
      { title: 'Avoiding Fraud with Ownership Checks', time: '9 min read' }
    ]
  },
  {
    icon: FileText,
    title: 'Permit Advisor',
    description: 'Identify required permits for your projects',
    articles: [
      { title: 'Using the Permit Advisor Tool', time: '8 min read' },
      { title: 'Understanding Permit Requirements by Project Type', time: '10 min read' },
      { title: 'Compliance and Regulatory Updates', time: '7 min read' },
      { title: 'Avoiding Costly Permit Delays', time: '6 min read' }
    ]
  },
  {
    icon: CreditCard,
    title: 'Payments & Invoicing',
    description: 'Generate invoices and track payments',
    articles: [
      { title: 'Creating Professional Invoices', time: '6 min read' },
      { title: 'Setting Up Stripe Payment Processing', time: '10 min read' },
      { title: 'Tracking Payment Status', time: '5 min read' },
      { title: 'Managing Deposits and Progress Payments', time: '8 min read' },
      { title: 'Understanding Owl Funding Options', time: '12 min read' }
    ]
  },
  {
    icon: Users,
    title: 'Client Management',
    description: 'Organize and manage your client database',
    articles: [
      { title: 'Adding New Clients', time: '4 min read' },
      { title: 'Importing Contacts', time: '6 min read' },
      { title: 'Viewing Client Project History', time: '5 min read' },
      { title: 'Client Communication Best Practices', time: '7 min read' }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Project Management',
    description: 'Track and manage your construction projects',
    articles: [
      { title: 'Creating a New Project', time: '7 min read' },
      { title: 'Project Timeline and Milestones', time: '9 min read' },
      { title: 'Tracking Project Progress', time: '6 min read' },
      { title: 'Managing Project Documents', time: '5 min read' }
    ]
  },
  {
    icon: Settings,
    title: 'Account & Settings',
    description: 'Customize your account and preferences',
    articles: [
      { title: 'Editing Your Company Profile', time: '5 min read' },
      { title: 'Managing Your Subscription', time: '6 min read' },
      { title: 'Setting Pricing Rules and Preferences', time: '8 min read' },
      { title: 'Notification Settings', time: '4 min read' },
      { title: 'Security and Privacy Settings', time: '7 min read' }
    ]
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Understand security features and legal compliance',
    articles: [
      { title: 'Data Security and Encryption', time: '8 min read' },
      { title: 'GDPR and Privacy Compliance', time: '10 min read' },
      { title: 'Two-Factor Authentication Setup', time: '5 min read' },
      { title: 'Legal Document Retention Policies', time: '7 min read' }
    ]
  },
  {
    icon: Code,
    title: 'Advanced Features',
    description: 'Unlock advanced capabilities and integrations',
    articles: [
      { title: 'Custom Material Pricing Rules', time: '12 min read' },
      { title: 'Bulk Operations and Batch Processing', time: '10 min read' },
      { title: 'Exporting Data and Reports', time: '8 min read' },
      { title: 'API Access and Integrations', time: '15 min read' }
    ]
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides',
    articles: [
      { title: 'Complete Workflow: Estimate to Contract', time: '18 min video' },
      { title: 'Mervin AI Deep Dive', time: '12 min video' },
      { title: 'Contract Generation and Signing Demo', time: '10 min video' },
      { title: 'Property Verification Tutorial', time: '8 min video' },
      { title: 'Invoice and Payment Processing', time: '9 min video' }
    ]
  }
];

// Real updates based on actual Owl Fenc development
const updates = [
  {
    version: '2.5.0',
    date: 'December 28, 2025',
    badge: 'Latest',
    badgeVariant: 'default' as const,
    features: [
      { type: 'new', text: 'Legal Defense Engine: AI-powered contract generation with risk analysis and protective clauses' },
      { type: 'new', text: 'Dual-Signature System: Native electronic signatures with legal audit trail (no DocuSign needed)' },
      { type: 'new', text: 'Contract Folio System: Automatic legal document numbering (OWL-2025-XXXXXX format)' },
      { type: 'improved', text: 'Mervin AI: 40% faster response time with improved construction terminology understanding' },
      { type: 'improved', text: 'PDF generation: Enhanced security with SHA-256 hashing for legal compliance' },
      { type: 'fixed', text: 'Mobile signature pad: Improved responsiveness on tablets and smartphones' }
    ]
  },
  {
    version: '2.4.0',
    date: 'December 15, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Change Order Generator: Automatic pricing adjustments and contract amendments' },
      { type: 'new', text: 'Lien Waiver Templates: State-specific templates for all 50 US states' },
      { type: 'new', text: 'Independent Contractor Agreements: Pre-approved legal templates' },
      { type: 'improved', text: 'Property Verification: Now includes HOA restrictions and zoning information' },
      { type: 'improved', text: 'Client Management: Bulk import from CSV and contact synchronization' },
      { type: 'fixed', text: 'Invoice PDF generation: Resolved issues with large project invoices' }
    ]
  },
  {
    version: '2.3.0',
    date: 'November 30, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Permit Advisor: AI-powered permit requirement analysis for construction projects' },
      { type: 'new', text: 'Owl Funding: Integrated financing options for contractors (machinery, projects, credit lines)' },
      { type: 'improved', text: 'Estimate Templates: New luxury design option with enhanced customization' },
      { type: 'improved', text: 'Dashboard Analytics: Revenue forecasting and project pipeline visualization' },
      { type: 'improved', text: 'Mervin AI: Now supports bilingual conversations (English/Spanish)' }
    ]
  },
  {
    version: '2.2.0',
    date: 'November 10, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Property Verification: Instant ownership checks powered by ATTOM Data integration' },
      { type: 'new', text: 'Stripe Integration: Accept credit cards, debit cards, and ACH bank transfers' },
      { type: 'new', text: 'Subscription Management: Self-service plan upgrades and billing portal' },
      { type: 'improved', text: 'Estimate Sharing: Public links with password protection and expiration dates' },
      { type: 'fixed', text: 'Authentication: Resolved session persistence issues on mobile browsers' }
    ]
  },
  {
    version: '2.1.0',
    date: 'October 25, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Project Management: Timeline tracking, milestone management, and document organization' },
      { type: 'new', text: 'Invoice Generator: Professional invoices with automatic payment tracking' },
      { type: 'improved', text: 'Mervin AI: Enhanced material calculation accuracy for complex projects' },
      { type: 'improved', text: 'Mobile Experience: Optimized UI for smartphones and tablets' },
      { type: 'fixed', text: 'PDF Export: Resolved font rendering issues in Spanish language estimates' }
    ]
  }
];

const getFeatureIcon = (type: string) => {
  switch (type) {
    case 'new':
      return <Sparkles className="w-4 h-4 text-primary" />;
    case 'improved':
      return <TrendingUp className="w-4 h-4 text-blue-500" />;
    case 'fixed':
      return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    default:
      return <CheckCircle2 className="w-4 h-4" />;
  }
};

const getFeatureLabel = (type: string) => {
  switch (type) {
    case 'new':
      return 'New';
    case 'improved':
      return 'Improved';
    case 'fixed':
      return 'Fixed';
    default:
      return '';
  }
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState('docs');

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Resources - Owl Fenc</title>
        <meta name="description" content="Documentation, guides, and updates for Owl Fenc - the all-in-one platform for construction contractors" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6" variant="secondary">
              <BookOpen className="w-3 h-3 mr-1" />
              Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need to Master Owl Fenc
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive guides, tutorials, and product updates to help you maximize your success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="docs" className="text-base">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation
                </TabsTrigger>
                <TabsTrigger value="updates" className="text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  Updates
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Documentation Tab */}
            <TabsContent value="docs" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {docSections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="hover-elevate transition-all h-full">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <section.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {section.description}
                          </p>
                          <div className="space-y-2">
                            {section.articles.map((article, idx) => (
                              <button
                                key={idx}
                                className="w-full text-left p-2 rounded-md hover:bg-muted/50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm group-hover:text-primary transition-colors">
                                    {article.title}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {article.time}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Coming Soon Notice */}
                <motion.div
                  className="mt-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="bg-muted/30 border-dashed">
                    <CardContent className="p-8">
                      <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Full Documentation Coming Soon</h3>
                      <p className="text-muted-foreground mb-4">
                        We're working hard to create comprehensive guides for every feature. 
                        In the meantime, reach out to our support team for personalized help.
                      </p>
                      <Button variant="outline">
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Updates Tab */}
            <TabsContent value="updates" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="space-y-6">
                  {updates.map((update, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold">Version {update.version}</h3>
                                {update.badge && (
                                  <Badge variant={update.badgeVariant}>
                                    {update.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {update.date}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {update.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                {getFeatureIcon(feature.type)}
                                <div className="flex-1">
                                  <span className="text-xs font-semibold text-muted-foreground uppercase mr-2">
                                    {getFeatureLabel(feature.type)}
                                  </span>
                                  <span className="text-sm">{feature.text}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Subscribe to Updates */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5">
                    <CardContent className="p-8 text-center">
                      <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                      <p className="text-muted-foreground mb-4">
                        Get notified when we ship new features and improvements
                      </p>
                      <Button>
                        Subscribe to Updates
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
