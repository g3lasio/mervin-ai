import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const APP_URL = 'https://app.owlfenc.com';

interface Feature {
  name: string;
  included: boolean;
  note?: string;
}

interface PricingPlan {
  id: number;
  name: string;
  code: string;
  motto: string;
  price: number;
  yearlyPrice: number;
  description: string;
  popular: boolean;
  features: Feature[];
  cta: string;
  ctaVariant: 'default' | 'outline';
}

const pricingPlans: PricingPlan[] = [
  {
    id: 5,
    name: 'Primo Chambeador',
    code: 'PRIMO_CHAMBEADOR',
    motto: 'Ningún trabajo es pequeño cuando tu espíritu es grande',
    price: 0,
    yearlyPrice: 0,
    description: 'Perfect for getting started',
    popular: false,
    features: [
      { name: '5 basic estimates per month', included: true, note: 'With watermark' },
      { name: '1 AI estimate per month', included: true, note: 'With watermark' },
      { name: '3 DeepSearch queries', included: true },
      { name: 'Legal contracts', included: false },
      { name: 'Property verification', included: false },
      { name: 'Project management', included: false },
      { name: 'Invoicing', included: false },
      { name: 'Payment tracking', included: false },
      { name: 'Permit advisor', included: false },
      { name: 'Community support', included: true },
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline',
  },
  {
    id: 9,
    name: 'Mero Patrón',
    code: 'mero_patron',
    motto: 'Para contratistas profesionales',
    price: 49.99,
    yearlyPrice: 499.90,
    description: 'Most popular for growing contractors',
    popular: true,
    features: [
      { name: '50 basic estimates per month', included: true, note: 'No watermark' },
      { name: '20 AI estimates per month', included: true, note: 'No watermark' },
      { name: '50 DeepSearch queries', included: true },
      { name: '50 legal contracts per month', included: true },
      { name: '15 property verifications', included: true },
      { name: 'Unlimited projects', included: true },
      { name: 'Unlimited invoicing', included: true },
      { name: 'Basic payment tracking', included: true },
      { name: '10 permit advisor queries', included: true },
      { name: 'Email support', included: true },
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'default',
  },
  {
    id: 6,
    name: 'Master Contractor',
    code: 'MASTER_CONTRACTOR',
    motto: 'Sin límites para profesionales',
    price: 99.99,
    yearlyPrice: 999.90,
    description: 'Unlimited everything for professionals',
    popular: false,
    features: [
      { name: 'Unlimited basic estimates', included: true, note: 'No watermark' },
      { name: 'Unlimited AI estimates', included: true, note: 'No watermark' },
      { name: 'Unlimited DeepSearch', included: true },
      { name: 'Unlimited legal contracts', included: true },
      { name: 'Unlimited property verifications', included: true },
      { name: 'Unlimited projects', included: true },
      { name: 'Unlimited invoicing', included: true },
      { name: 'Pro payment tracking', included: true },
      { name: 'Unlimited permit advisor', included: true },
      { name: 'Priority support', included: true },
      { name: 'QuickBooks integration', included: true },
      { name: 'Advanced analytics', included: true },
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'default',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const calculateYearlySavings = (monthlyPrice: number, yearlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    return Math.round(savings);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-pricing">
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the Right Plan for Your Business
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include a 14-day free trial with full access to features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-billing-monthly"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-background text-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-testid="button-billing-yearly"
            >
              Yearly
              <Badge className="ml-2" variant="default">Save up to 17%</Badge>
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={fadeIn}>
              <Card 
                className={`relative hover-elevate transition-all h-full ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}
                data-testid={`plan-${plan.code.toLowerCase()}`}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground" data-testid="badge-most-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="italic">{plan.motto}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      ${billingCycle === 'monthly' ? plan.price : (plan.yearlyPrice / 12).toFixed(2)}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {billingCycle === 'yearly' && plan.price > 0 && (
                    <div className="text-sm text-muted-foreground mt-2">
                      ${plan.yearlyPrice}/year • Save ${calculateYearlySavings(plan.price, plan.yearlyPrice)}
                    </div>
                  )}
                  {billingCycle === 'monthly' && plan.price > 0 && (
                    <div className="text-sm text-muted-foreground mt-2">
                      Billed monthly
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mt-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <span className={feature.included ? '' : 'text-muted-foreground line-through'}>
                          {feature.name}
                        </span>
                        {feature.note && (
                          <span className="text-xs text-muted-foreground ml-2">
                            ({feature.note})
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <a href={`${APP_URL}/signup`} className="w-full" data-testid={`button-cta-${plan.code.toLowerCase()}`}>
                  <Button 
                    variant={plan.ctaVariant} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </CardFooter>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Can I change plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any differences in your billing.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, debit cards, and ACH bank transfers through our secure 
                  Stripe integration. All payments are encrypted and PCI-compliant.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Is there a free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! All paid plans include a 14-day free trial with full access to all features. 
                  No credit card required to start. The free Primo Chambeador plan is available forever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
