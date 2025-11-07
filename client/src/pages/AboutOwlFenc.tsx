import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Hammer, Users, Target, Zap, Shield, TrendingUp } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const values = [
  {
    icon: Hammer,
    title: 'Built for All Trades',
    description: 'Every feature designed for the entire construction industry—from cleaning and hauling to electrical, plumbing, roofing, and general contracting.',
  },
  {
    icon: Zap,
    title: 'Powered by AI',
    description: 'Cutting-edge artificial intelligence that learns your business and helps you work smarter, not harder.',
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Industry-first AI-generated contracts that protect your business from liability and disputes.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Built with feedback from hundreds of contractors to ensure it meets real-world needs.',
  },
  {
    icon: Target,
    title: 'Scalable for Any Size',
    description: 'Whether you do 1 estimate per month or 100 per day, from $500 jobs to million-dollar projects—Owl Fenc scales with you.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Constantly evolving with new features, integrations, and improvements based on your feedback.',
  },
];

export default function AboutOwlFenc() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-about">
            About Owl Fenc
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionizing Construction Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Owl Fenc is the AI-powered platform built for ALL construction professionals—from cleaning 
            and hauling to general contractors managing million-dollar projects. Streamline your operations 
            and grow your business, whether you handle 1 or 100 estimates per day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Owl Fenc was born from a simple observation: contractors across ALL construction trades were 
                  drowning in paperwork, spending more time on administrative tasks than actual work. We saw talented 
                  professionals—from cleaning crews to general contractors—losing jobs because they couldn't create 
                  estimates fast enough, facing legal disputes due to poorly written contracts, and struggling to 
                  manage multiple projects simultaneously.
                </p>
                <p>
                  Our founders, coming from both the construction industry and Silicon Valley tech sector, 
                  recognized that artificial intelligence could solve these problems across the entire construction 
                  ecosystem. But it had to be done right—AI that actually understands construction work at every 
                  level, from simple hauling jobs to complex multi-million dollar projects, not just generic 
                  project management software.
                </p>
                <p>
                  After two years of development and feedback from hundreds of contractors across all trades, we 
                  launched Owl Fenc as the first AI-powered platform designed for the ENTIRE construction industry. 
                  Today, we're helping contractors save an average of 15 hours per week, increase their bid win rate 
                  by 40%, and grow their business with confidence—whether they're doing 1 estimate per week or 100 per day.
                </p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To empower EVERY construction professional—from solo operators doing cleaning and hauling 
              to general contractors managing multi-million dollar projects—with enterprise-level tools 
              and AI assistance, leveling the playing field and helping businesses of all sizes compete 
              and thrive.
            </p>
          </div>
        </motion.div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-elevate transition-all">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Join Thousands of Contractors</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your free trial today and see why contractors are switching to Owl Fenc 
                for their business management needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.owlfenc.com/signup" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" data-testid="button-signup">
                    Get Started Free
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" data-testid="button-pricing">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
