import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  BookOpen, 
  Search,
  CheckCircle2,
  Zap,
  Bot,
  Users,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// ONLY articles with real content
const availableArticles = [
  {
    id: 1,
    title: 'Creating Your First Estimate with Owl Fenc',
    category: 'getting-started',
    categoryTitle: 'Getting Started',
    categoryIcon: Zap,
    description: 'Complete guide to creating professional estimates with AI assistance, PDF generation, and client delivery',
    readTime: '10 min read',
    slug: 'creating-first-estimate',
    featured: true
  },
  {
    id: 2,
    title: 'Managing Your Client Database',
    category: 'clients',
    categoryTitle: 'Client Management',
    categoryIcon: Users,
    description: 'Complete guide to adding, editing, deleting, and organizing your clients',
    readTime: '8 min read',
    slug: 'managing-clients',
    featured: true
  },
  {
    id: 3,
    title: 'Frequently Asked Questions',
    category: 'getting-started',
    categoryTitle: 'Getting Started',
    categoryIcon: BookOpen,
    description: 'Quick answers to common questions about features, capabilities, and limitations',
    readTime: '12 min read',
    slug: 'faq',
    featured: false
  },
  {
    id: 4,
    title: 'Contracts & Electronic Signatures',
    category: 'contracts',
    categoryTitle: 'Legal Contracts',
    categoryIcon: Bot,
    description: 'Generate legal contracts and collect electronic signatures from clients',
    readTime: '15 min read',
    slug: 'contracts-and-signatures',
    featured: false
  },
  {
    id: 5,
    title: 'Property Ownership Verification',
    category: 'property-verification',
    categoryTitle: 'Property Verification',
    categoryIcon: CheckCircle2,
    description: 'Verify property ownership and protect against fraud before starting work',
    readTime: '12 min read',
    slug: 'property-verification',
    featured: false
  },
  {
    id: 6,
    title: 'Permit Advisor Guide',
    category: 'permits',
    categoryTitle: 'Permit Advisor',
    categoryIcon: BookOpen,
    description: 'Identify and obtain required construction permits with AI assistance',
    readTime: '14 min read',
    slug: 'permit-advisor',
    featured: false
  },
  {
    id: 7,
    title: 'Invoicing Guide',
    category: 'invoicing',
    categoryTitle: 'Invoicing',
    categoryIcon: BookOpen,
    description: 'Create and manage professional invoices for your projects',
    readTime: '12 min read',
    slug: 'invoicing',
    featured: false
  },
  {
    id: 8,
    title: 'Payment Tracker Guide',
    category: 'payments',
    categoryTitle: 'Payment Tracker',
    categoryIcon: BookOpen,
    description: 'Track project payments and manage cash flow effectively',
    readTime: '11 min read',
    slug: 'payment-tracker',
    featured: false
  },
  {
    id: 9,
    title: 'Owl Funding Guide',
    category: 'funding',
    categoryTitle: 'Owl Funding',
    categoryIcon: BookOpen,
    description: 'Offer financing options to clients and increase project close rates',
    readTime: '10 min read',
    slug: 'owl-funding',
    featured: false
  },
  {
    id: 10,
    title: 'Pricing Settings Guide',
    category: 'settings',
    categoryTitle: 'Settings',
    categoryIcon: BookOpen,
    description: 'Configure your service catalog, labor rates, and pricing structure',
    readTime: '10 min read',
    slug: 'pricing-settings',
    featured: false
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

  const filteredArticles = searchQuery.trim()
    ? availableArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : availableArticles;

  const featuredArticles = availableArticles.filter(a => a.featured);

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
                Search our knowledge base or browse available documentation
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
              {filteredArticles.length === 0 ? (
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
                <>
                  {/* Featured Articles */}
                  {!searchQuery && featuredArticles.length > 0 && (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        Featured Guides
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {featuredArticles.map((article, index) => {
                          const Icon = article.categoryIcon;
                          return (
                            <motion.div
                              key={article.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Link href={`/docs/${article.category}/${article.slug}`}>
                                <Card className="h-full border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl cursor-pointer group">
                                  <CardHeader>
                                    <div className="flex items-start gap-4">
                                      <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                                        <Icon className="w-6 h-6 text-white" />
                                      </div>
                                      <div className="flex-1">
                                        <Badge variant="outline" className="mb-2">
                                          {article.categoryTitle}
                                        </Badge>
                                        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                          {article.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-base">
                                          {article.description}
                                        </CardDescription>
                                      </div>
                                    </div>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-slate-500">{article.readTime}</span>
                                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                  </CardContent>
                                </Card>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* All Articles */}
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {searchQuery ? 'Search Results' : 'All Documentation'}
                    </h2>
                    <div className="space-y-3">
                      {filteredArticles.map((article, index) => {
                        const Icon = article.categoryIcon;
                        return (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link href={`/docs/${article.category}/${article.slug}`}>
                              <Card className="border hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg cursor-pointer group">
                                <CardContent className="p-6">
                                  <div className="flex items-center gap-4">
                                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <Badge variant="outline" className="text-xs">
                                          {article.categoryTitle}
                                        </Badge>
                                        <span className="text-xs text-slate-500">{article.readTime}</span>
                                      </div>
                                      <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {article.title}
                                      </h3>
                                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                        {article.description}
                                      </p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                  </div>
                                </CardContent>
                              </Card>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Coming Soon Notice */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-2">
                              More Documentation Coming Soon
                            </h3>
                            <p className="text-blue-800 dark:text-blue-200 mb-4">
                              We're actively working on comprehensive documentation for all Owl Fenc features. New guides are added regularly.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">Advanced Analytics</Badge>
                              <Badge variant="secondary">Mobile App</Badge>
                              <Badge variant="secondary">Team Collaboration</Badge>
                              <Badge variant="secondary">API Documentation</Badge>
                              <Badge variant="secondary">And more...</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </>
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
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              feature.type === 'new' 
                                ? 'text-green-600 dark:text-green-400' 
                                : 'text-blue-600 dark:text-blue-400'
                            }`} />
                            <div>
                              <Badge variant={feature.type === 'new' ? 'default' : 'secondary'} className="mb-1">
                                {feature.type === 'new' ? 'New' : 'Improved'}
                              </Badge>
                              <p className="text-slate-700 dark:text-slate-300">{feature.text}</p>
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

          {/* Need Help CTA */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-slate-900 to-blue-900 dark:from-slate-800 dark:to-blue-800 border-0 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Need personalized help?</h3>
                    <p className="text-slate-200">
                      Can't find what you're looking for? Submit a support ticket and our team will assist you.
                    </p>
                  </div>
                  <a 
                    href="https://owlfenc.replit.app/support/get-support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors whitespace-nowrap"
                  >
                    Get Support
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </>
  );
}
