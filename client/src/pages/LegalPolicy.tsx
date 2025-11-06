import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Scale } from 'lucide-react';

export default function LegalPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-legal">
            <Scale className="w-3 h-3 mr-1" />
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Policy</h1>
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
                <h2 className="text-2xl font-bold mb-4">1. Legal Disclaimer</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc provides construction management software and AI-powered tools designed to assist 
                  contractors in their business operations. However, it is important to understand the following:
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Important Notice:</p>
                  <p className="text-muted-foreground">
                    Owl Fenc and its AI assistant Mervin do NOT provide legal advice. The AI-generated contracts 
                    and legal documents are templates meant to assist your business operations but should always 
                    be reviewed by a qualified attorney before use.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. AI-Generated Legal Documents</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Not Legal Advice</h3>
                <p className="text-muted-foreground mb-4">
                  The "Legal Defense Contracts" feature uses artificial intelligence to generate contract templates 
                  based on industry standards and common practices. These documents:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Are educational tools and starting points</li>
                  <li>Should not replace consultation with a licensed attorney</li>
                  <li>May not address specific legal requirements in your jurisdiction</li>
                  <li>May not account for unique circumstances in your projects</li>
                  <li>Require professional legal review before execution</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Your Responsibility</h3>
                <p className="text-muted-foreground">
                  You are solely responsible for ensuring that all contracts and legal documents comply with 
                  applicable laws and adequately protect your business interests. Owl Fenc assumes no liability 
                  for the legal sufficiency of AI-generated documents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Estimates and Pricing Accuracy</h2>
                <p className="text-muted-foreground mb-4">
                  While DeepSearch Material Intelligence provides real-time material pricing data, please note:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Prices are estimates based on available market data</li>
                  <li>Actual costs may vary based on supplier, location, and timing</li>
                  <li>You should verify prices with suppliers before committing to projects</li>
                  <li>Owl Fenc is not liable for pricing discrepancies or estimation errors</li>
                  <li>Labor cost calculations are general guidelines, not guarantees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Professional Licensing</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc does not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Verify contractor licenses or credentials</li>
                  <li>Ensure compliance with local licensing requirements</li>
                  <li>Provide professional certifications or endorsements</li>
                  <li>Guarantee compliance with building codes or regulations</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You are responsible for maintaining all necessary licenses, permits, insurance, and 
                  professional qualifications required in your jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. ATTOM Data Property Verification</h2>
                <p className="text-muted-foreground mb-4">
                  Property data provided through ATTOM Data integration:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Is for informational purposes only</li>
                  <li>May not be completely current or accurate</li>
                  <li>Should be verified through official channels when necessary</li>
                  <li>Does not constitute a property appraisal or title search</li>
                  <li>Should not be the sole basis for business decisions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Tax and Accounting</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc provides tools to track income, expenses, and financial data. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We do not provide tax, accounting, or financial advice</li>
                  <li>You should consult with a qualified accountant or tax professional</li>
                  <li>Financial reports are for informational purposes only</li>
                  <li>You are responsible for accurate tax reporting and compliance</li>
                  <li>QuickBooks integration data should be reviewed for accuracy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Insurance and Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Using Owl Fenc does not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide business insurance coverage</li>
                  <li>Replace the need for professional liability insurance</li>
                  <li>Guarantee protection from lawsuits or claims</li>
                  <li>Ensure compliance with insurance requirements</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You should maintain adequate insurance coverage for your business operations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Data Accuracy and Reliability</h2>
                <p className="text-muted-foreground">
                  While we strive to provide accurate and reliable information through our platform and 
                  integrations, Owl Fenc makes no warranties regarding the completeness, accuracy, or 
                  timeliness of any data. Users should independently verify critical information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. User Decisions and Conduct</h2>
                <p className="text-muted-foreground mb-4">
                  You acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All business decisions remain your responsibility</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>You will not use the platform for fraudulent or illegal activities</li>
                  <li>You will maintain professional standards in your business operations</li>
                  <li>Owl Fenc is not liable for your business decisions or outcomes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Third-Party Content and Services</h2>
                <p className="text-muted-foreground">
                  Our platform integrates with various third-party services (OpenAI, Anthropic, Google AI, 
                  Stripe, ATTOM Data, QuickBooks, etc.). We do not control and are not responsible for the 
                  content, accuracy, or practices of these third parties. Your use of these services is 
                  subject to their respective terms and policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Regulatory Compliance</h2>
                <p className="text-muted-foreground mb-4">
                  Construction and contracting are highly regulated industries. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Understanding and complying with federal, state, and local regulations</li>
                  <li>Obtaining necessary permits and approvals</li>
                  <li>Following safety standards and building codes</li>
                  <li>Maintaining proper documentation as required by law</li>
                  <li>Meeting environmental and waste disposal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
                <p className="text-muted-foreground">
                  Any disputes arising from your use of Owl Fenc shall be resolved through binding arbitration 
                  in accordance with the American Arbitration Association rules. You waive the right to 
                  participate in class actions or class-wide arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact for Legal Matters</h2>
                <p className="text-muted-foreground mb-4">
                  For legal questions or concerns:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Owl Fenc Legal Department</p>
                  <p className="text-muted-foreground">Email: legal@owlfenc.com</p>
                  <p className="text-muted-foreground">Mail: [Company Address]</p>
                  <p className="text-muted-foreground mt-4">
                    For legal advice regarding your specific situation, please consult with a licensed attorney 
                    in your jurisdiction.
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
