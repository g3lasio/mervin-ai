import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, MessageSquare, Lightbulb, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Talk to Mervin in plain English, just like texting a colleague. No technical jargon or complicated forms.',
    examples: [
      '"Create an estimate for bathroom remodeling"',
      '"What\'s the current price for 2x4 lumber?"',
      '"Show me my projects with pending invoices"',
    ],
  },
  {
    icon: Brain,
    title: 'Context-Aware Intelligence',
    description: 'Mervin remembers your business details, previous conversations, and project history to give accurate answers.',
    examples: [
      'Recalls your preferred materials and suppliers',
      'Learns your pricing strategies over time',
      'Understands regional cost variations',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Proactive Suggestions',
    description: 'Mervin doesn\'t just respond—it anticipates needs and offers helpful recommendations.',
    examples: [
      'Suggests material alternatives to save costs',
      'Recommends project timelines based on weather',
      'Alerts you to potential issues before they arise',
    ],
  },
  {
    icon: Zap,
    title: 'Instant Estimates',
    description: 'Generate professional, accurate estimates in seconds through simple conversation.',
    examples: [
      'Real-time material pricing from DeepSearch',
      'Automatic labor cost calculations',
      'PDF generation ready to send to clients',
    ],
  },
];

const aiModels = [
  { name: 'OpenAI GPT-4', specialty: 'General reasoning and conversation' },
  { name: 'Anthropic Claude', specialty: 'Contract analysis and legal content' },
  { name: 'Google Gemini', specialty: 'Multi-modal processing and data analysis' },
];

export default function AboutMervin() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-mervin">
            <Sparkles className="w-3 h-3 mr-1" />
            Meet Mervin AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your AI Construction Assistant
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mervin is more than just a chatbot—it's your intelligent business partner that understands 
            ALL construction trades—from cleaning and hauling to electrical, plumbing, roofing, and 
            general contracting. Built to handle everything from simple jobs to complex million-dollar projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="overflow-hidden bg-gradient-to-br from-primary/5 to-blue-500/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">What Makes Mervin Different</h2>
                  <p className="text-muted-foreground text-lg">
                    Unlike generic AI assistants, Mervin is specifically trained on the ENTIRE construction 
                    industry across all trades. It understands material types, labor requirements, local building 
                    codes, and the unique challenges contractors face every day—whether you're doing basic 
                    hauling, specialized electrical work, or managing complex multi-trade projects.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-card/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Estimates Generated</div>
                </div>
                <div className="bg-card/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="bg-card/50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Always Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mervin's Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From creating estimates to analyzing contracts, Mervin handles the tasks that 
              used to take hours of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <capability.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{capability.description}</p>
                    <div className="space-y-2">
                      {capability.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Powered by Leading AI Technology</h2>
              <p className="text-muted-foreground mb-8">
                Mervin leverages multiple state-of-the-art AI models to provide the best possible 
                assistance for different tasks. We combine the strengths of each model to deliver 
                accurate, helpful, and reliable results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiModels.map((model, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{model.name}</h3>
                    <p className="text-sm text-muted-foreground">{model.specialty}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="bg-muted/30">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">How Mervin Learns Your Business</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The more you use Mervin, the smarter it gets. Every conversation, estimate, and 
                  project helps Mervin understand your unique business needs, pricing strategies, 
                  and preferred workflows—regardless of your trade or specialty.
                </p>
                <p>
                  Mervin uses this knowledge to provide increasingly personalized and accurate assistance. 
                  It learns your typical markup percentages, favorite material suppliers, regional 
                  pricing variations, seasonal patterns, and can even handle high-volume operations—
                  up to 100 estimates per day for busy contractors.
                </p>
                <p>
                  <strong>Privacy First:</strong> All your data is encrypted and used only to improve 
                  your experience. Mervin never shares your business information with competitors or 
                  third parties.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Experience Mervin Today</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of contractors who are saving time and growing their business 
                with Mervin's AI assistance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.owlfenc.com/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-signup">
                    Start Free Trial
                  </Button>
                </a>
                <a href="https://app.owlfenc.com/login" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" data-testid="button-login">
                    Sign In
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
