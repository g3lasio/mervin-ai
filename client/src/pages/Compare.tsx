import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Check, X, Zap, DollarSign, Bot, Shield, FileText, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const APP_URL = 'https://app.owlfenc.com';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface ComparisonFeature {
  name: string;
  owlFenc: boolean | string;
  jobber: boolean | string;
  housecallPro: boolean | string;
  buildertrend: boolean | string;
  highlight?: boolean;
}

const pricingComparison = [
  { name: 'Starting Price', owlFenc: '$0/month (PAYG)', jobber: '$89/mo', housecallPro: '$149/mo', buildertrend: '$666+/mo', highlight: true },
  { name: 'Credit Cost (PAYG)', owlFenc: '$0.20/credit', jobber: 'N/A', housecallPro: 'N/A', buildertrend: 'N/A', highlight: true },
  { name: 'Subscription Plan', owlFenc: '$50/mo', jobber: '$89/mo', housecallPro: '$149/mo', buildertrend: '$666+/mo' },
  { name: 'No Monthly Fee Option', owlFenc: '✓ Pay As You Go', jobber: 'No', housecallPro: 'No', buildertrend: 'No', highlight: true },
  { name: 'Annual Savings vs Jobber', owlFenc: '$468+/year', jobber: '-', housecallPro: '-$720/year', buildertrend: '-$7,392/year', highlight: true },
];

const aiFeatures: ComparisonFeature[] = [
  { name: 'AI-Powered Estimates (99 seconds)', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'AI Permit Advisor', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'AI Copilot (Mervin)', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'Property Verification with AI', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
];

const coreFeatures: ComparisonFeature[] = [
  { name: 'Estimates & Quotes', owlFenc: true, jobber: true, housecallPro: true, buildertrend: true },
  { name: 'Legal Contract Generator', owlFenc: true, jobber: false, housecallPro: false, buildertrend: 'Basic', highlight: true },
  { name: 'Built-in Dual E-Signatures', owlFenc: true, jobber: 'Add-on', housecallPro: 'Add-on', buildertrend: true, highlight: true },
  { name: 'Invoicing', owlFenc: true, jobber: true, housecallPro: true, buildertrend: true },
  { name: 'Payment Processing', owlFenc: true, jobber: true, housecallPro: true, buildertrend: true },
  { name: 'Project Management', owlFenc: true, jobber: true, housecallPro: true, buildertrend: true },
];

const advancedFeatures: ComparisonFeature[] = [
  { name: 'Replaces DocuSign + Rocket Lawyer', owlFenc: 'Save $780/year', jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'Permit Research & Compliance', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'Credit-Based Pricing (pay only what you use)', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'Legal Defense Engine (risk analysis)', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
  { name: 'Fraud Prevention (property ownership check)', owlFenc: true, jobber: false, housecallPro: false, buildertrend: false, highlight: true },
];

function ComparisonTable({ 
  title, 
  features 
}: { 
  title: string; 
  features: ComparisonFeature[] 
}) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="p-4 text-left font-semibold">Feature</th>
              <th className="p-4 text-center font-semibold">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-primary">Owl Fenc</span>
                  <Badge className="bg-primary">Best Value</Badge>
                </div>
              </th>
              <th className="p-4 text-center font-semibold">Jobber</th>
              <th className="p-4 text-center font-semibold">Housecall Pro</th>
              <th className="p-4 text-center font-semibold">Buildertrend</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr 
                key={index} 
                className={`border-b ${feature.highlight ? 'bg-primary/5' : ''}`}
              >
                <td className="p-4 font-medium">
                  {feature.name}
                  {feature.highlight && (
                    <Zap className="inline-block ml-2 w-4 h-4 text-primary" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {renderCell(feature.owlFenc, true)}
                </td>
                <td className="p-4 text-center">
                  {renderCell(feature.jobber)}
                </td>
                <td className="p-4 text-center">
                  {renderCell(feature.housecallPro)}
                </td>
                <td className="p-4 text-center">
                  {renderCell(feature.buildertrend)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function renderCell(value: boolean | string, isOwlFenc: boolean = false) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className={`w-6 h-6 mx-auto ${isOwlFenc ? 'text-primary' : 'text-green-600'}`} />
    ) : (
      <X className="w-6 h-6 mx-auto text-muted-foreground" />
    );
  }
  return (
    <span className={`font-medium ${isOwlFenc ? 'text-primary' : ''}`}>
      {value}
    </span>
  );
}

export default function Compare() {
  return (
    <>
      <Helmet>
        <title>Compare Owl Fenc vs Jobber, Housecall Pro & Buildertrend | Contractor Software</title>
        <meta 
          name="description" 
          content="Compare Owl Fenc with Jobber, Housecall Pro, and Buildertrend. See why contractors choose Owl Fenc: AI-powered estimates, 50% lower cost, and all-in-one features." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Honest Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Owl Fenc vs The Competition
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how Owl Fenc compares to Jobber, Housecall Pro, and Buildertrend. 
              Same features, AI-powered intelligence, 50% lower cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Owl Fenc Wins */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Contractors Choose Owl Fenc
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="border-primary/20">
                <CardHeader>
                  <Bot className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>AI-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate estimates in 99 seconds with AI. No manual calculations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <DollarSign className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>50% Cheaper</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    $50/mo vs $89-666/mo. Save $468-7,392 per year.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Legal Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Replace DocuSign + Rocket Lawyer. Save $780/year.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Search className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Property Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    AI-powered ownership verification. Prevent fraud before you quote.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Comparison Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ComparisonTable title="💰 Pricing Comparison" features={pricingComparison} />
            <ComparisonTable title="🤖 AI Features (Owl Fenc Exclusive)" features={aiFeatures} />
            <ComparisonTable title="⚙️ Core Features" features={coreFeatures} />
            <ComparisonTable title="🚀 Advanced Features" features={advancedFeatures} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-chart-2/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Save $468-7,392 Per Year?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of contractors who switched to Owl Fenc and never looked back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.location.href = APP_URL}
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              120 welcome credits included • $0.20/credit • No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
