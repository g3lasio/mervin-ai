import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Check, X, Sparkles, Calendar, Zap, ShoppingCart } from 'lucide-react';

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
  leadprimeDiscount?: boolean;
  welcomeCredits?: number;
  monthlyCredits?: number;
  isPAYG?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 5,
    name: 'Primo Chambeador',
    code: 'PRIMO_CHAMBEADOR',
    motto: 'Ningún trabajo es pequeño cuando tu espíritu es grande',
    price: 0,
    yearlyPrice: 0,
    description: 'Pay As You Go — full access, no monthly fee',
    popular: false,
    welcomeCredits: 20,
    monthlyCredits: 0,
    isPAYG: true,
    features: [
      { name: 'Full access to all features', included: true, note: 'Powered by credits' },
      { name: 'AI Estimates', included: true, note: '8 credits each' },
      { name: 'Legal Contracts + e-signatures', included: true, note: '18 credits bundle' },
      { name: 'Permit Advisor', included: true, note: '15 credits each' },
      { name: 'Property Verification', included: true, note: '15 credits each' },
      { name: 'Invoicing & Payment Tracking', included: true, note: '5 credits per invoice' },
      { name: 'Projects Management', included: true, note: 'With credits' },
      { name: 'Watermark on documents', included: true, note: 'Removed on paid plans' },
      { name: 'Community support', included: true },
    ],
    cta: 'Get Started Free',
    ctaVariant: 'outline',
    leadprimeDiscount: false,
  },
  {
    id: 9,
    name: 'Mero Patrón',
    code: 'mero_patron',
    motto: 'Para contratistas profesionales',
    price: 49.99,
    yearlyPrice: 509.88,
    description: 'Most popular for growing contractors',
    popular: true,
    welcomeCredits: 120,
    monthlyCredits: 500,
    features: [
      { name: '500 AI credits per month', included: true, note: 'Resets monthly' },
      { name: 'Unlimited basic estimates', included: true, note: 'No watermark' },
      { name: 'AI estimates', included: true, note: 'No watermark' },
      { name: 'Legal contracts + e-signatures', included: true },
      { name: 'Property verifications', included: true },
      { name: 'Permit advisor queries', included: true },
      { name: 'Invoicing', included: true },
      { name: 'Unlimited projects', included: true },
      { name: 'Payment tracking', included: true },
      { name: 'Access to networking/training events', included: true },
      { name: '30% discount on LeadPrime CRM', included: true, note: 'Exclusive benefit' },
      { name: 'Priority support', included: true },
    ],
    cta: 'Get Started',
    ctaVariant: 'default',
    leadprimeDiscount: true,
  },
  {
    id: 6,
    name: 'Master Contractor',
    code: 'MASTER_CONTRACTOR',
    motto: 'Sin límites para profesionales',
    price: 99.99,
    yearlyPrice: 1019.89,
    description: 'Unlimited everything for professionals',
    popular: false,
    welcomeCredits: 120,
    monthlyCredits: 1200,
    features: [
      { name: '1,200 AI credits per month', included: true, note: 'Resets monthly' },
      { name: 'Unlimited basic estimates', included: true, note: 'No watermark' },
      { name: 'Unlimited AI estimates', included: true, note: 'No watermark' },
      { name: 'Unlimited legal contracts + e-signatures', included: true },
      { name: 'Unlimited property verifications', included: true },
      { name: 'Unlimited permit advisor', included: true },
      { name: 'Unlimited invoicing', included: true },
      { name: 'Unlimited projects', included: true },
      { name: 'Pro payment tracking', included: true },
      { name: 'Access to networking/training events', included: true },
      { name: '30% discount on LeadPrime CRM', included: true, note: 'Exclusive benefit' },
      { name: 'VIP support 24/7', included: true },
    ],
    cta: 'Get Started',
    ctaVariant: 'default',
    leadprimeDiscount: true,
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
      <Helmet>
        <title>Pricing Plans - Owl Fenc</title>
        <meta name="description" content="Choose the perfect plan for your construction business. Start Pay As You Go at $0.20/credit with 20 welcome credits — no monthly fee, no credit card required. Upgrade anytime." />
      </Helmet>

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Start <strong>Pay As You Go</strong> with <strong>20 welcome credits</strong> at <strong>$0.20/credit</strong> — no monthly fee, no credit card required. Upgrade to a subscription for automatic monthly credit refills and no watermarks.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
            Credits power every AI feature: estimates, contracts, permit advisor, property verification, and more.
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
              <Badge className="ml-2" variant="default">Save 2 months</Badge>
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
                  {plan.isPAYG ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">$0</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <div className="text-sm text-primary font-medium mt-2 flex items-center gap-1">
                        <ShoppingCart className="w-3 h-3" />
                        Pay only for what you use
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        $0.20 per credit — credits never expire
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">
                          ${billingCycle === 'monthly' ? plan.price.toFixed(2) : (plan.yearlyPrice > 0 ? (plan.yearlyPrice / 12).toFixed(2) : '0.00')}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      {billingCycle === 'yearly' && plan.price > 0 && (
                        <div className="text-sm text-muted-foreground mt-2">
                          ${plan.yearlyPrice.toFixed(2)}/year • Save ${calculateYearlySavings(plan.price, plan.yearlyPrice)}
                        </div>
                      )}
                      {billingCycle === 'monthly' && plan.price > 0 && (
                        <div className="text-sm text-muted-foreground mt-2">
                          Billed monthly
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Credits badge */}
                {plan.isPAYG ? (
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                    <Zap className="w-4 h-4" />
                    <span>20 welcome credits included</span>
                  </div>
                ) : plan.monthlyCredits && plan.monthlyCredits > 0 ? (
                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                    <Zap className="w-4 h-4" />
                    <span>{plan.monthlyCredits.toLocaleString()} AI credits/month</span>
                  </div>
                ) : null}

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
                        <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''}`}>
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

                {/* PAYG Credit Packages hint */}
                {plan.isPAYG && (
                  <div className="mt-6 p-3 bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 text-sm font-medium mb-2">
                      <ShoppingCart className="w-4 h-4 text-primary" />
                      <span>Credit Packages</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-center">
                      <div className="bg-background rounded p-2 border border-border">
                        <div className="font-bold text-primary">50</div>
                        <div className="text-muted-foreground">$10</div>
                      </div>
                      <div className="bg-background rounded p-2 border border-primary/30">
                        <div className="font-bold text-primary">225</div>
                        <div className="text-muted-foreground">$30</div>
                      </div>
                      <div className="bg-background rounded p-2 border border-border">
                        <div className="font-bold text-primary">700</div>
                        <div className="text-muted-foreground">$75</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Credits never expire</p>
                  </div>
                )}

                {/* LeadPrime Discount Badge */}
                {plan.leadprimeDiscount && (
                  <div className="mt-6 p-3 bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span>Includes 30% off LeadPrime CRM</span>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <a href={APP_URL} className="w-full" data-testid={`button-cta-${plan.code.toLowerCase()}`} onClick={() => { if ((window as any).fbq) (window as any).fbq('track', 'CompleteRegistration'); }}>
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

        {/* Credit System Explainer */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">How the Credit System Works</h3>
                  <p className="text-muted-foreground mb-4">
                    Every AI-powered action in Owl Fenc uses credits. All new accounts receive <strong>20 welcome credits</strong> to explore the full platform — credits cost <strong>$0.20 each</strong>, no monthly fee required.
                    Paid plans include automatic monthly credit refills so you never run out mid-project.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary">8</div>
                      <div className="text-xs text-muted-foreground mt-1">AI Estimate</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary">18</div>
                      <div className="text-xs text-muted-foreground mt-1">Contract + e-signature</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs text-muted-foreground mt-1">Permit Advisor</div>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg border border-border">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs text-muted-foreground mt-1">Property Verification</div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Basic estimates and chat with Mervin are always free — no credits needed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events Section for Paid Plans */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-chart-2/5 to-primary/5 border-chart-2/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-chart-2" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Networking & Training Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Mero Patrón and Master Contractor members get exclusive access to networking events and 
                    training sessions. Connect with other contractors, learn new skills, and grow your business.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <CardTitle className="text-xl">What are AI credits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI credits power every intelligent feature in Owl Fenc — generating contracts, running permit analysis, 
                  creating AI-powered estimates, property verification, and more. All new accounts start with <strong>20 welcome credits</strong> (credits cost <strong>$0.20 each</strong>). 
                  Paid plans automatically refill your credits every billing cycle: 500 credits/month for Mero Patrón 
                  and 1,200 credits/month for Master Contractor. On the Pay As You Go plan, you can purchase credit packages anytime — they never expire.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What is the Pay As You Go plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The <strong>Primo Chambeador</strong> plan is our Pay As You Go option — no monthly subscription fee. 
                  You get full access to every feature in Owl Fenc using credits at <strong>$0.20 per credit</strong>. Start with 20 welcome credits, 
                  then buy more anytime in packages ($10, $30, or $75). Credits never expire, so you only pay for what you actually use.
                  Documents will include a watermark; upgrade to a paid plan to remove it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What are AI estimates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AI estimates use our intelligent cost calculator to generate detailed material lists 
                  with accurate pricing and labor costs automatically. It eliminates the need to manually 
                  add materials to your estimates, saving you hours of work.
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
                <CardTitle className="text-xl">Can I create contracts on the Pay As You Go plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes — using your credits. All new accounts receive 20 welcome credits, and each contract 
                  with e-signature costs 18 credits. Once your welcome credits are used, purchase a credit package 
                  or upgrade to a paid plan to get automatic monthly credit refills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
