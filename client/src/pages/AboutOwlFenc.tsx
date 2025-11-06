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
    title: 'Built for Contractors',
    description: 'Every feature designed with real fencing contractors in mind, solving actual problems they face daily.',
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
    title: 'Focused Mission',
    description: 'Dedicated to making construction management accessible, affordable, and effective for all.',
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
            Owl Fenc is the AI-powered platform built specifically for fencing contractors and 
            construction professionals who want to streamline their operations and grow their business.
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
                  Owl Fenc was born from a simple observation: fencing contractors were drowning in paperwork, 
                  spending more time on administrative tasks than actual construction work. We saw talented 
                  professionals losing jobs because they couldn't create estimates fast enough, facing legal 
                  disputes due to poorly written contracts, and struggling to manage multiple projects simultaneously.
                </p>
                <p>
                  Our founders, coming from both the construction industry and Silicon Valley tech sector, 
                  recognized that artificial intelligence could solve these problems. But it had to be done 
                  right—AI that actually understands the fencing business, not just generic project management software.
                </p>
                <p>
                  After two years of development and feedback from hundreds of contractors, we launched Owl Fenc 
                  as the first AI-powered platform specifically designed for fencing professionals. Today, we're 
                  helping contractors save an average of 15 hours per week, increase their bid win rate by 40%, 
                  and grow their business with confidence.
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
              To empower every fencing contractor with enterprise-level tools and AI assistance, 
              leveling the playing field and helping small businesses compete with larger companies.
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
