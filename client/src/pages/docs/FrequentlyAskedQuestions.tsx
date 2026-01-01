import DocArticle from './DocArticle';

const content = `
# Frequently Asked Questions

Find quick answers to common questions about Owl Fenc features and capabilities.

## Estimates

### Can I delete estimates from my history?
**No.** Currently, you cannot delete estimates from your history. All estimates remain in your account for complete record-keeping. You can view and edit them, but deletion is not available.

### Can I generate PDF estimates?
**Yes!** PDF generation is fully available. When creating or viewing an estimate, click the "Generate PDF" button to download a professional PDF document.

### Can I email estimates to clients?
**Yes!** You can send estimates directly to your client's email from within the app. The estimate will be delivered as a professional email with PDF attachment or link.

### Are my estimates saved automatically?
**Yes!** All estimates are automatically saved to your account and stored securely in the cloud. You can access them anytime from the "Mis Estimados" page.

### Can I share estimates with a public link?
**Yes!** You can generate a shareable public link for any estimate. This allows clients to view the estimate in their browser without needing an account.

### Can I edit an estimate after saving it?
**Yes!** Go to "Mis Estimados", find your estimate, and click the "Edit" button to make changes.

### How many estimates can I create?
This depends on your subscription plan:
- **Primo Chambeador (Free)**: 5 estimates per month
- **Mero Patrón**: 50 estimates per month  
- **Master Contractor**: Unlimited estimates

## Clients

### Can I delete clients from my database?
**Yes!** You can delete clients by clicking the delete button next to their name. You'll be asked to confirm before the client is permanently removed.

### What happens to my estimates when I delete a client?
Your existing estimates and projects remain intact. Only the client contact record is removed from your database.

### Can I import clients from a CSV file?
**Yes!** You can import multiple clients at once using a CSV file. Look for the Import option on the Clients page.

### Is there a limit to how many clients I can have?
**No.** You can store unlimited clients in your database regardless of your subscription plan.

## Contracts

### Can I generate legal contracts?
**Yes!** Owl Fenc includes multiple contract generators including the Legal Defense Engine with AI-powered risk analysis.

### How do electronic signatures work?
Owl Fenc has a built-in dual-signature system. You generate a contract, send a signing link to your client, and both parties sign electronically with full legal audit trail.

### Can I edit a contract after it's been signed?
**No.** For legal compliance, signed contracts cannot be edited. You would need to create a change order or new contract.

### Are electronic signatures legally binding?
**Yes!** Owl Fenc's electronic signature system complies with e-signature laws and includes SHA-256 hashing for legal compliance.

## Property Verification

### How does property verification work?
Enter a property address, and Owl Fenc will search public records and ATTOM Data to verify ownership, parcel information, and property details.

### Can I export verification reports?
**Not currently.** You can view verification results in the app, but PDF export of verification reports is not yet available.

### How accurate is the property data?
Property data comes from ATTOM Data and public records, which are generally very accurate. However, always verify critical information with official sources.

## Permit Advisor

### Can I apply for permits through Owl Fenc?
**No.** Permit Advisor is a research tool that helps you identify required permits. You still need to apply through your local government offices.

### How does Permit Advisor find permit requirements?
Mervin AI searches building codes, local regulations, and permit databases to identify what permits your project likely needs.

### Can I track my permit applications?
**Not currently.** Permit Advisor helps you research requirements, but doesn't track applications you've submitted to government offices.

## Owl Funding

### Can I apply for loans directly in the app?
**No.** Owl Funding provides information about financing options. To apply for funding, you'll need to follow the external application process.

### What types of financing are available?
Owl Funding can help with equipment financing, project financing, and business credit lines. Visit the Owl Funding page for current options.

## Mervin AI

### What can Mervin AI help me with?
Mervin AI can:
- Enhance project descriptions for estimates
- Research permit requirements
- Answer construction-related questions
- Provide guidance on using Owl Fenc features
- Assist with contract language

### Does Mervin AI speak Spanish?
**Yes!** Mervin AI supports both English and Spanish conversations.

### Can Mervin AI create complete estimates automatically?
**No.** Mervin AI can enhance descriptions and provide guidance, but you still need to input line items, pricing, and client information manually.

## Account & Settings

### Can I upload my company logo?
**Not currently.** Company logo upload is not yet available. You can configure your company name, address, and license information in your profile.

### Can I customize PDF templates?
**Not currently.** PDF templates use standard professional formatting. Custom branding and templates are not yet available.

### How do I change my password?
Go to Profile/Settings, look for the Security section, and click "Change Password".

### Can I have multiple users on one account?
This depends on your subscription plan. Check your plan details or contact support for multi-user access.

## Subscription & Billing

### How do I upgrade my plan?
Go to the Subscription page and click "Upgrade Plan". Select your new plan and update your payment method if needed.

### Can I cancel my subscription?
**Contact support to cancel.** Cancellation is not self-service through the app. Email support or use the Get Support page.

### What happens if my payment fails?
Your account will be temporarily suspended. You'll see a notification to update your payment method. Access is restored once payment is successful.

### Can I get a refund?
Refund policies vary. Contact support through the Get Support page to discuss your specific situation.

## Technical Issues

### Why can't I see my saved estimates?
Make sure you're logged into the correct account. If estimates are still missing, try refreshing the page or contact support.

### The PDF generation isn't working. What should I do?
Try refreshing the page and generating again. If the issue persists, contact support with details about the estimate.

### I'm not receiving email notifications. Why?
Check your spam/junk folder. If emails aren't there, verify your email address in your profile settings.

### The app is loading slowly. Is this normal?
Some features require data loading. If performance is consistently slow, try:
- Clearing your browser cache
- Using a different browser
- Checking your internet connection
- Contacting support if issues persist

## Data & Privacy

### Is my data secure?
**Yes!** All data is encrypted and stored securely in the cloud. Owl Fenc follows industry-standard security practices.

### Who can see my estimates and client data?
Only you can access your data. Clients can only see estimates you explicitly share with them via link or email.

### Can I export my data?
Currently, full data export is not available. You can download individual estimates as PDFs.

### What happens to my data if I cancel?
Your data is retained for a period after cancellation in case you want to reactivate. Contact support for specific data retention policies.

## Still Have Questions?

If your question isn't answered here:

1. **Search the Documentation** - Use the search feature to find specific topics
2. **Ask Mervin AI** - Chat with Mervin for quick answers
3. **Contact Support** - Submit a support ticket for personalized help

[Contact Support](https://owlfenc.replit.app/support/get-support) | [Chat with Mervin AI](https://owlfenc.replit.app/mervin)
`;

export default function FrequentlyAskedQuestions() {
  return (
    <DocArticle
      title="Frequently Asked Questions"
      description="Quick answers to common questions about Owl Fenc features, capabilities, and limitations"
      content={content}
      category="getting-started"
      categoryTitle="Getting Started"
      readTime="12 min read"
      relatedArticles={[
        {
          title: "Creating Your First Estimate",
          slug: "creating-first-estimate",
          category: "getting-started"
        },
        {
          title: "Managing Your Client Database",
          slug: "managing-clients",
          category: "clients"
        }
      ]}
    />
  );
}
