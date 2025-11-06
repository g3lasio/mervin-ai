import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-terms">
            <FileText className="w-3 h-3 mr-1" />
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last Updated: November 6, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using Owl Fenc's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any part of these terms, 
                  you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc provides an AI-powered construction management platform designed for fencing 
                  contractors and construction professionals. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mervin AI Assistant for conversational estimate creation</li>
                  <li>DeepSearch Material Intelligence for real-time pricing</li>
                  <li>Legal Defense Contracts with AI-generated legal protection</li>
                  <li>Property Verification through ATTOM Data integration</li>
                  <li>Payment Processing via Stripe</li>
                  <li>Project Management Dashboard and tools</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
                <p className="text-muted-foreground mb-4">To use Owl Fenc, you must:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Be at least 18 years of age</li>
                  <li>Use the service for lawful business purposes only</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You are responsible for all activities conducted through your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Billing</h3>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc offers three subscription tiers: Primo Chambeador (Free), Mero Patrón ($49.99/month), 
                  and Master Contractor ($99.99/month). Paid subscriptions are billed monthly or annually based 
                  on your selection.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Payment Processing</h3>
                <p className="text-muted-foreground mb-4">
                  All payments are processed securely through Stripe. By providing payment information, you 
                  authorize us to charge the applicable fees to your payment method.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Refunds</h3>
                <p className="text-muted-foreground mb-4">
                  Subscription fees are non-refundable except as required by law or at our sole discretion. 
                  You may cancel your subscription at any time, effective at the end of the current billing period.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">4.4 Price Changes</h3>
                <p className="text-muted-foreground">
                  We reserve the right to modify subscription pricing with 30 days' notice. Continued use of 
                  the service after the notice period constitutes acceptance of the new pricing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
                <p className="text-muted-foreground mb-4">You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Upload malicious code, viruses, or harmful content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Use automated scripts to access the service</li>
                  <li>Resell or redistribute our services without permission</li>
                  <li>Reverse engineer our software or AI models</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc and its original content, features, and functionality are owned by Owl Fenc and 
                  are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground mb-4">
                  You retain ownership of your project data, estimates, and content. By using our service, 
                  you grant us a limited license to use your data to provide and improve our services, 
                  including training AI models.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. AI-Generated Content</h2>
                <p className="text-muted-foreground mb-4">
                  Mervin AI generates estimates, contracts, and other content based on your input. While we 
                  strive for accuracy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>AI-generated content should be reviewed before use</li>
                  <li>We do not guarantee 100% accuracy of estimates or legal advice</li>
                  <li>You are responsible for verifying all generated content</li>
                  <li>Legal contracts should be reviewed by a qualified attorney</li>
                  <li>Material prices are estimates and subject to market changes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Disclaimers and Limitations</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">8.1 Service Availability</h3>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. The service 
                  is provided "as is" without warranties of any kind.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">8.2 Limitation of Liability</h3>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use or inability to use the service. Our total liability 
                  shall not exceed the amount you paid in the past 12 months.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">8.3 Third-Party Services</h3>
                <p className="text-muted-foreground">
                  Our platform integrates with third-party services (Stripe, ATTOM Data, OpenAI, etc.). We 
                  are not responsible for the availability, accuracy, or content of these external services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account immediately, without prior notice, for violations 
                  of these Terms. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Your right to use the service ceases immediately</li>
                  <li>You may export your data within 30 days</li>
                  <li>Unpaid fees become immediately due</li>
                  <li>Certain provisions of these Terms survive termination</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to defend, indemnify, and hold harmless Owl Fenc from any claims, damages, 
                  obligations, losses, liabilities, costs, or debt arising from your use of the service 
                  or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                  without regard to its conflict of law provisions. Any disputes shall be resolved through 
                  binding arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will notify users of material 
                  changes via email or platform notification. Continued use after changes constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Owl Fenc Legal Team</p>
                  <p className="text-muted-foreground">Email: legal@owlfenc.com</p>
                  <p className="text-muted-foreground">Mail: [Company Address]</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
