import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6" variant="secondary" data-testid="badge-privacy">
            <Shield className="w-3 h-3 mr-1" />
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
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
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Owl Fenc ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  AI-powered construction management platform and related services.
                </p>
                <p className="text-muted-foreground">
                  By using Owl Fenc, you agree to the collection and use of information in accordance with 
                  this policy. If you do not agree with our policies and practices, do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">2.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, phone number, company details)</li>
                  <li>Payment information (processed securely through Stripe)</li>
                  <li>Project data (estimates, contracts, client information, job details)</li>
                  <li>Communications with Mervin AI and support team</li>
                  <li>User-generated content and files uploaded to the platform</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-4">2.2 Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Usage data (features used, time spent, interaction patterns)</li>
                  <li>Device information (browser type, operating system, IP address)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log data (access times, pages viewed, clicks)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use collected information for:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Providing and improving our services</li>
                  <li>Training and optimizing Mervin AI for your specific business needs</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Sending service updates, security alerts, and support messages</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Complying with legal obligations and enforcing our terms</li>
                  <li>Preventing fraud and maintaining platform security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share information with:
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-4">4.1 Service Providers</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment processors (Stripe)</li>
                  <li>Cloud infrastructure providers (hosting, storage)</li>
                  <li>AI model providers (OpenAI, Anthropic, Google)</li>
                  <li>Email service providers (SendGrid)</li>
                  <li>Analytics services</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Legal Requirements</h3>
                <p className="text-muted-foreground">
                  We may disclose information if required by law, court order, or government request, 
                  or to protect our rights, property, or safety.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-4">4.3 Business Transfers</h3>
                <p className="text-muted-foreground">
                  In the event of a merger, acquisition, or sale of assets, your information may be 
                  transferred to the acquiring entity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Secure HTTPS connections</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Encrypted database storage</li>
                  <li>Regular backups and disaster recovery plans</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data (subject to legal requirements)</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Disable cookies through browser settings</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, contact us at privacy@owlfenc.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your information for as long as your account is active or as needed to provide 
                  services. After account deletion, we may retain certain information for legal compliance, 
                  dispute resolution, and fraud prevention purposes for up to 7 years.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Owl Fenc is not intended for users under 18 years of age. We do not knowingly collect 
                  personal information from children. If you believe we have collected information from a 
                  child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information in accordance 
                  with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. We will notify you of significant changes 
                  via email or platform notification. Continued use of Owl Fenc after changes constitutes 
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  For questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="font-semibold mb-2">Owl Fenc Privacy Team</p>
                  <p className="text-muted-foreground">Email: privacy@owlfenc.com</p>
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
