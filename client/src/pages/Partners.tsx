import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  Star,
  Zap,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const COMMISSION_DETAILS = {
  upfront: '25%',
  recurring: '10%',
  avgMonthly: '$49–$99',
  potential10: '$990',
  residual10: '$99–$247',
};

const BENEFITS = [
  {
    icon: DollarSign,
    title: '25% Upfront Commission',
    description:
      'Earn 25% of the first month\'s payment for every contractor you close. On a $99/mo plan, that\'s $24.75 per client — day one.',
  },
  {
    icon: TrendingUp,
    title: '10% Monthly Residual',
    description:
      'Keep earning every month your client stays active. Build a book of 50 clients and earn $495–$990/month without making another call.',
  },
  {
    icon: Zap,
    title: 'Easy to Sell',
    description:
      'Contractors already hate doing estimates on paper. You\'re not convincing them to change — you\'re showing them the shortcut they\'ve been waiting for.',
  },
  {
    icon: Shield,
    title: 'Full Marketing Support',
    description:
      'We give you a personal tracking link, marketing materials, and a dedicated onboarding flow for your clients. You sell, we handle the rest.',
  },
  {
    icon: Users,
    title: 'No Territory Limits',
    description:
      'Sell anywhere in the US. We\'re growing fast in CA, TX, FL, and AZ — but your commissions are not limited by geography.',
  },
  {
    icon: Clock,
    title: 'Flexible & Independent',
    description:
      'Add Owl Fenc to your existing product lines. No quotas, no micromanagement. You\'re a 1099 partner — sell on your terms.',
  },
];

const IDEAL_PROFILE = [
  'Currently selling building materials, fencing supplies, or contractor tools',
  'Have existing relationships with fence contractors or home improvement pros',
  'Self-motivated closer who understands recurring revenue',
  'Bilingual English/Spanish (big plus, not required)',
  'Based in CA, TX, FL, or AZ (preferred, not required)',
  'Entrepreneurial mindset — you want to build passive income',
];

const FAQS = [
  {
    q: 'How do I get paid?',
    a: 'Once your referred client completes their first payment, we process your commission within 7 business days via direct deposit or check. Monthly residuals are paid on the 15th of each month.',
  },
  {
    q: 'How is my client tracked to me?',
    a: 'You get a unique affiliate tracking link. Every client who signs up through your link is permanently attributed to you — even if they upgrade plans later.',
  },
  {
    q: 'Do I need to be a tech expert?',
    a: 'Not at all. Owl Fenc is designed so a contractor can learn it in 10 minutes. Your job is to open the door — we handle the demo, onboarding, and support.',
  },
  {
    q: 'What is a W-9 and why do I need to submit one?',
    a: 'A W-9 is a standard IRS form that allows us to report your earnings at year-end on a 1099. It\'s required for all 1099 independent contractors in the US. You only fill it out once.',
  },
  {
    q: 'Can I sell other products alongside Owl Fenc?',
    a: 'Yes. We have no exclusivity requirement. Many of our best partners also sell fencing materials, insurance, or other contractor software.',
  },
  {
    q: 'What happens if a client cancels?',
    a: 'Your residual commission stops when the client cancels. Your upfront commission on the first month is always yours to keep.',
  },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  currentRole: string;
  experience: string;
  territory: string;
  whyFit: string;
  linkedin: string;
  agreeTerms: boolean;
}

export default function Partners() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    currentRole: '',
    experience: '',
    territory: '',
    whyFit: '',
    linkedin: '',
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with real API endpoint
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Sales Partner Program | Owl Fenc</title>
        <meta
          name="description"
          content="Join the Owl Fenc Sales Partner Program. Earn 25% upfront + 10% monthly residual commissions selling AI-powered construction software to contractors."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted/30 border-b py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              1099 Independent Sales Partner Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Turn Your Contractor{' '}
              <span className="text-primary">Contacts Into</span>{' '}
              Monthly Income
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              If you already talk to fence contractors, general contractors, or home improvement
              pros — you can earn <strong>25% upfront + 10% monthly residual</strong> just by
              showing them what Owl Fenc does.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#apply">
                <Button size="lg" className="gap-2">
                  Apply to Become a Partner <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMMISSION SNAPSHOT */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Upfront Commission', value: COMMISSION_DETAILS.upfront, sub: 'of first month per client' },
              { label: 'Monthly Residual', value: COMMISSION_DETAILS.recurring, sub: 'for life of the client' },
              { label: 'App Price Range', value: COMMISSION_DETAILS.avgMonthly, sub: 'per contractor per month' },
              { label: 'Residual at 10 Clients', value: COMMISSION_DETAILS.residual10, sub: 'every month, passively' },
            ].map((stat) => (
              <Card key={stat.label} className="border-primary/20">
                <CardContent className="pt-6 pb-4">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm font-semibold mt-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Three steps from application to your first commission check.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Apply & Get Approved',
                desc: 'Fill out the form below. We review your background and send you a Sales Partner Agreement + your personal tracking link within 48 hours.',
              },
              {
                step: '02',
                title: 'Show the App, Close the Deal',
                desc: 'Share your link with contractors you already know. We provide the demo video, one-pager, and talking points. You just open the door.',
              },
              {
                step: '03',
                title: 'Get Paid Every Month',
                desc: 'Earn 25% when they pay their first month. Then 10% every month they stay active — automatically, without any additional work.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-black text-primary/10 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Why Partners Choose Owl Fenc</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <Card key={b.title} className="border-border/50">
                <CardContent className="pt-6">
                  <b.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL PROFILE */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We're Looking For</h2>
              <p className="text-muted-foreground mb-6">
                We don't need salespeople who can memorize a pitch. We need people who already
                have the trust of contractors and understand the hustle of the trades.
              </p>
              <ul className="space-y-3">
                {IDEAL_PROFILE.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Earning Example
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Clients closed this month</span>
                  <span className="font-semibold">10 contractors</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Avg plan price</span>
                  <span className="font-semibold">$99/mo</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Upfront (25% × 10 × $99)</span>
                  <span className="font-semibold text-primary">$247.50</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Monthly residual (10% × 10 × $99)</span>
                  <span className="font-semibold text-primary">$99/mo ongoing</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold">After 12 months (same clients)</span>
                  <span className="font-bold text-primary text-base">$1,435+</span>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  * Based on 10 clients at $99/mo staying active for 12 months. Actual results vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Card key={i} className="border-border/50">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Apply Now</Badge>
            <h2 className="text-3xl font-bold mb-4">Become an Owl Fenc Sales Partner</h2>
            <p className="text-muted-foreground">
              Fill out the form below. We review every application and respond within 48 hours.
              Approved partners receive a Sales Partner Agreement and their personal tracking link.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thanks for applying. We'll review your background and reach out within 48 hours
                with next steps and your personal tracking link.
              </p>
            </motion.div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Full Name *</label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Ramirez"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                      <input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">LinkedIn Profile</label>
                      <input
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="linkedin.com/in/yourname"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">City *</label>
                      <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Sacramento"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select state</option>
                        {['CA', 'TX', 'FL', 'AZ', 'NV', 'CO', 'WA', 'OR', 'NY', 'Other'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Current Role / What You Currently Sell *</label>
                    <input
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Outside Sales Rep at Hoover Fence Supply"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Years of Sales Experience with Contractors *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select range</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-2">1–2 years</option>
                      <option value="2-5">2–5 years</option>
                      <option value="5-10">5–10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Territory / Area You Cover *</label>
                    <input
                      name="territory"
                      value={formData.territory}
                      onChange={handleChange}
                      required
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Sacramento Valley, Bay Area, all of California"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Why are you a good fit? Tell us about your contractor network. *
                    </label>
                    <textarea
                      name="whyFit"
                      value={formData.whyFit}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="e.g. I've been selling fencing materials to contractors in the Bay Area for 5 years. I have 200+ active contractor contacts and already talk to them weekly..."
                    />
                  </div>

                  {/* W-9 Notice */}
                  <div className="bg-muted/50 rounded-lg p-4 flex gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">W-9 Required After Approval:</strong> Once
                      approved, we'll send you a secure link to submit your W-9 form. This is required
                      for all 1099 partners before your first commission payment is processed.
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                    <label htmlFor="agreeTerms" className="text-sm text-muted-foreground">
                      I understand that this is a 1099 independent contractor arrangement. I agree to
                      receive the Sales Partner Agreement by email after approval, and I confirm that
                      the information provided above is accurate.
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Questions? Email us at{' '}
                    <a href="mailto:partners@owlfenc.com" className="underline">
                      partners@owlfenc.com
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
