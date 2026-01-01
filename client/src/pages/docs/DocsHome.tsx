import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  BookOpen, 
  Search,
  FileText, 
  Video, 
  Code,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Bot,
  Users,
  CreditCard,
  Settings,
  Lock,
  MapPin,
  ChevronRight,
  Sparkles
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
    slug: 'getting-started',
    description: 'Set up your account and start creating estimates',
    articles: [
      { title: 'Creating Your First Estimate with Mervin AI', slug: 'creating-first-estimate', time: '10 min read' },
      { title: 'Frequently Asked Questions', slug: 'faq', time: '12 min read' },
      { title: 'Setting Up Your Company Profile', slug: 'company-profile', time: '5 min read' },
      { title: 'Getting Started with Mervin AI', slug: 'getting-started-guide', time: '7 min read' },
      { title: 'Understanding Your Dashboard', slug: 'understanding-dashboard', time: '6 min read' }
    ]
  },
  {
    icon: Bot,
    title: 'Mervin AI Assistant',
    slug: 'mervin-ai',
    description: 'Master the AI-powered estimation system',
    articles: [
      { title: 'Using Mervin AI for Estimates', slug: 'mervin-ai-estimates', time: '10 min read' },
      { title: 'AI-Powered Project Descriptions', slug: 'ai-descriptions', time: '6 min read' },
      { title: 'Understanding AI Calculations', slug: 'ai-calculations', time: '8 min read' }
    ]
  },
  {
    icon: FileText,
    title: 'Estimates & Proposals',
    slug: 'estimates',
    description: 'Create professional estimates manually or with AI',
    articles: [
      { title: 'Manual Estimate Creation', slug: 'manual-estimates', time: '12 min read' },
      { title: 'Managing Line Items', slug: 'line-items', time: '8 min read' },
      { title: 'Estimate Templates', slug: 'estimate-templates', time: '6 min read' },
      { title: 'Sharing Estimates', slug: 'sharing-estimates', time: '5 min read' }
    ]
  },
  {
    icon: Shield,
    title: 'Legal Contracts & Signatures',
    slug: 'contracts',
    description: 'Generate contracts and collect electronic signatures',
    articles: [
      { title: 'Generating Legal Contracts', slug: 'generating-contracts', time: '8 min read' },
      { title: 'Electronic Signatures', slug: 'e-signatures', time: '7 min read' },
      { title: 'Contract Templates', slug: 'contract-templates', time: '6 min read' },
      { title: 'Legal Compliance', slug: 'legal-compliance', time: '9 min read' }
    ]
  },
  {
    icon: MapPin,
    title: 'Property Verification',
    slug: 'property-verification',
    description: 'Verify property ownership before creating estimates',
    articles: [
      { title: 'How Property Verification Works', slug: 'property-verification-guide', time: '6 min read' },
      { title: 'Understanding Property Reports', slug: 'property-reports', time: '7 min read' },
      { title: 'Avoiding Fraud', slug: 'fraud-prevention', time: '9 min read' }
    ]
  },
  {
    icon: FileText,
    title: 'Permit Advisor',
    slug: 'permits',
    description: 'Identify required permits for your projects',
    articles: [
      { title: 'Using the Permit Advisor', slug: 'permit-advisor-guide', time: '8 min read' },
      { title: 'Permit Requirements by Type', slug: 'permit-requirements', time: '10 min read' },
      { title: 'Compliance Updates', slug: 'compliance-updates', time: '7 min read' }
    ]
  },
  {
    icon: CreditCard,
    title: 'Payments & Invoicing',
    slug: 'payments',
    description: 'Generate invoices and track payments',
    articles: [
      { title: 'Creating Invoices', slug: 'creating-invoices', time: '6 min read' },
      { title: 'Payment Processing', slug: 'payment-processing', time: '10 min read' },
      { title: 'Tracking Payments', slug: 'tracking-payments', time: '5 min read' },
      { title: 'Owl Funding Options', slug: 'owl-funding', time: '12 min read' }
    ]
  },
  {
    icon: Users,
    title: 'Client Management',
    slug: 'clients',
    description: 'Organize and manage your client database',
    articles: [
      { title: 'Managing Your Client Database', slug: 'managing-clients', time: '8 min read' },
      { title: 'Client Communication', slug: 'client-communication', time: '7 min read' },
      { title: 'Project History', slug: 'project-history', time: '5 min read' }
    ]
  },
  {
    icon: Settings,
    title: 'Account & Settings',
    slug: 'settings',
    description: 'Customize your account and preferences',
    articles: [
      { title: 'Account Settings', slug: 'account-settings', time: '5 min read' },
      { title: 'Subscription Management', slug: 'subscription-management', time: '6 min read' },
      { title: 'Pricing Preferences', slug: 'pricing-preferences', time: '8 min read' }
    ]
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    slug: 'security',
    description: 'Understand security features and legal compliance',
    articles: [
      { title: 'Data Security', slug: 'data-security', time: '8 min read' },
      { title: 'Privacy Compliance', slug: 'privacy-compliance', time: '10 min read' },
      { title: 'Two-Factor Authentication', slug: '2fa-setup', time: '5 min read' }
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
      { type: 'new', text: 'Legal Defense Engine: AI-powered contract generation with risk analysis' },
      { type: 'new', text: 'Dual-Signature System: Native electronic signatures with legal audit trail' },
      { type: 'new', text: 'Contract Folio System: Automatic legal document numbering' },
      { type: 'improved', text: 'Mervin AI: 40% faster response time with improved construction terminology' },
      { type: 'improved', text: 'PDF generation: Enhanced security with SHA-256 hashing' }
    ]
  },
  {
    version: '2.4.0',
    date: 'December 15, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Change Order Generator: Automatic pricing adjustments' },
      { type: 'new', text: 'Lien Waiver Templates: State-specific templates for all 50 US states' },
      { type: 'improved', text: 'Property Verification: Now includes HOA restrictions and zoning' },
      { type: 'improved', text: 'Client Management: Bulk import from CSV' }
    ]
  },
  {
    version: '2.3.0',
    date: 'November 30, 2025',
    badge: null,
    badgeVariant: 'secondary' as const,
    features: [
      { type: 'new', text: 'Permit Advisor: AI-powered permit requirement analysis' },
      { type: 'new', text: 'Owl Funding: Integrated financing options for contractors' },
      { type: 'improved', text: 'Mervin AI: Now supports bilingual conversations (English/Spanish)' }
    ]
  }
];

export default function DocsHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('docs');

  const filteredSections = searchQuery.trim()
    ? docSections.map(section => ({
        ...section,
        articles: section.articles.filter(
          article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.articles.length > 0)
    : docSections;

  return (
    <>
      <Helmet>
        <title>Documentation & Resources | Owl Fenc</title>
        <meta name="description" content="Complete documentation, guides, and updates for Owl Fenc - the AI-powered construction management platform." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Hero Section */}
        <motion.section 
          className="relative py-20 px-6 overflow-hidden"
          {...fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Documentation & Resources
                </Badge>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
                How can we help you?
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Search our knowledge base, browse documentation, or check the latest updates
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mt-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
              <TabsTrigger value="docs" className="text-base">
                <BookOpen className="w-4 h-4 mr-2" />
                Documentation
              </TabsTrigger>
              <TabsTrigger value="updates" className="text-base">
                <Sparkles className="w-4 h-4 mr-2" />
                What's New
              </TabsTrigger>
            </TabsList>

            {/* Documentation Tab */}
            <TabsContent value="docs" className="space-y-8">
              {filteredSections.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Try searching with different keywords
                  </p>
                </motion.div>
              ) : (
                <div className="grid gap-6">
                  {filteredSections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-2xl">{section.title}</CardTitle>
                                <CardDescription className="text-base mt-1">
                                  {section.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-3">
                              {section.articles.map((article) => (
                                <Link 
                                  key={article.slug} 
                                  href={`/docs/${section.slug}/${article.slug}`}
                                >
                                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                    <div className="flex-1">
                                      <h4 className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {article.title}
                                      </h4>
                                      <p className="text-xs text-slate-500 mt-1">{article.time}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            {/* Updates Tab */}
            <TabsContent value="updates" className="space-y-6">
              {updates.map((update, index) => (
                <motion.div
                  key={update.version}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl">Version {update.version}</CardTitle>
                            {update.badge && (
                              <Badge variant={update.badgeVariant}>{update.badge}</Badge>
                            )}
                          </div>
                          <CardDescription>{update.date}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {update.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 ${
                              feature.type === 'new' ? 'text-green-500' :
                              feature.type === 'improved' ? 'text-blue-500' :
                              'text-orange-500'
                            }`} />
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-1 text-xs">
                                {feature.type}
                              </Badge>
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                {feature.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>

          {/* Help CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Can't find what you're looking for? Our support team is here to assist you.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  asChild
                >
                  <a href="https://owlfenc.replit.app/support/get-support" target="_blank" rel="noopener noreferrer">
                    Get Support
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </>
  );
}
