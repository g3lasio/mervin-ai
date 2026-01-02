import DocArticle from './DocArticle';

const content = `
## Overview

Owl Fenc's Invoicing system helps you create professional invoices quickly and efficiently. Generate invoices from completed estimates, track payment status, and maintain organized financial records. The system includes AI assistance, automatic calculations, PDF generation, and email delivery.

## Creating an Invoice

The invoicing process begins by selecting a completed estimate or project. Navigate to the Invoices section from your dashboard sidebar and click "Create New Invoice." The system displays a list of your completed estimates, allowing you to select the project you want to invoice.

When you select an estimate, the system automatically populates invoice details including client information, project description, line items, and pricing. This eliminates manual data entry and ensures consistency between your estimate and invoice. You can modify any details as needed to reflect actual work performed or agreed-upon changes.

### Invoice Information

Every invoice requires certain key information to be complete and professional. The invoice number is automatically generated using a sequential numbering system, ensuring each invoice has a unique identifier. You can customize the numbering format in your account settings if desired.

The invoice date defaults to today but can be adjusted if you're creating invoices for past work. The due date is calculated based on your payment terms—typically net 30, net 15, or due upon receipt. You can modify payment terms for each invoice or set default terms in your settings.

Client information pulls from your saved client database, including name, address, email, and phone number. Verify this information is current, as invoices serve as official payment requests and need accurate contact details.

### Line Items and Pricing

Line items transfer from the selected estimate, showing each component of work with descriptions, quantities, unit prices, and totals. You can add, remove, or modify line items to reflect the actual work performed. This is particularly useful when projects involve change orders or adjustments from the original estimate.

The system automatically calculates subtotals, applies tax rates based on your location and settings, and computes the total amount due. Tax calculations follow the rules you've configured in your pricing settings, applying appropriate rates to taxable items while exempting non-taxable services or materials.

Discounts can be applied as fixed amounts or percentages. If you're offering an early payment discount, prompt payment incentive, or goodwill adjustment, enter the discount and the system recalculates the total automatically.

### Payment Terms and Methods

Clearly specify payment terms on every invoice. Common terms include "Due Upon Receipt" for immediate payment, "Net 15" for payment within 15 days, "Net 30" for payment within 30 days, and "Net 60" for extended payment periods. The system calculates the due date based on your selected terms.

List accepted payment methods so clients know how they can pay. Include information about checks, bank transfers, credit cards, or any online payment systems you use. If you charge processing fees for certain payment methods, disclose this on the invoice.

For partial payments or payment plans, create multiple invoices or clearly note the payment schedule on a single invoice. The Payment Tracker feature (covered separately) helps manage multi-payment projects.

---

## Invoice Customization

### Company Branding

Professional invoices reflect your brand identity. Add your company logo at the top of the invoice for instant recognition. Include your business name, address, phone number, email, and website. If you have a contractor license number, include it as required by your state.

The system allows you to customize colors and fonts to match your brand, though it's recommended to keep invoices clean and professional. Avoid excessive styling that might make invoices difficult to read or print.

### Notes and Terms

Add notes to provide context or instructions. Common notes include project completion confirmation, warranty information, thank you messages, and special instructions. Notes appear prominently on the invoice, ensuring clients see important information.

Terms and conditions can be included at the bottom of invoices. These might cover late payment fees, lien rights, warranty limitations, or dispute resolution procedures. While detailed terms are typically in contracts, key points can be reiterated on invoices.

---

## Generating and Sending Invoices

### PDF Generation

Once you've finalized invoice details, generate a professional PDF. Click "Generate PDF" and the system creates a formatted invoice document. The PDF includes all invoice information, your branding, line items, totals, and payment instructions.

Generated PDFs are automatically saved to your account for future reference. You can download PDFs to your device, print them for mailing, or send them electronically. The system maintains a record of all generated invoices, creating an audit trail for your business.

### Email Delivery

Send invoices directly to clients via email from within Owl Fenc. Enter the client's email address (pre-filled from their profile), customize the email subject and message, attach the invoice PDF, and click send. The system tracks email delivery, providing confirmation when the email is sent successfully.

Email templates help you maintain consistent, professional communication. Customize templates to include your standard message, payment instructions, and contact information. Templates save time when sending multiple invoices.

### Alternative Delivery Methods

While email is convenient, some clients prefer other delivery methods. Download the PDF and send it via text message, print and mail physical copies, or hand-deliver invoices at project completion. The system accommodates various delivery preferences while maintaining digital records.

---

## Invoice Management

### Tracking Invoice Status

The Invoices dashboard shows all your invoices with current status indicators. Status options include Draft for invoices being prepared, Sent for invoices delivered to clients, Viewed when clients open email invoices, Paid for completed payments, and Overdue for unpaid invoices past the due date.

Status tracking helps you prioritize follow-up actions. Focus on overdue invoices for collection efforts, send reminders for sent but unpaid invoices, and maintain records of paid invoices for accounting.

### Payment Recording

When you receive payment, record it in the system. Open the invoice, click "Record Payment," enter the payment amount, date, and method, and save. The invoice status updates to Paid, and the payment is logged in your records.

For partial payments, record each payment as received. The system tracks the remaining balance and updates the invoice accordingly. This is particularly useful for projects with milestone payments or payment plans.

### Invoice History

Access complete invoice history from your dashboard. Filter invoices by client, date range, status, or amount. Search functionality helps you quickly locate specific invoices. This historical record is invaluable for accounting, tax preparation, and business analysis.

Export invoice data to CSV or Excel for integration with accounting software. The export includes all invoice details, making it easy to maintain comprehensive financial records outside of Owl Fenc.

---

## Best Practices

### Timing and Frequency

Send invoices promptly upon project completion or according to your agreed payment schedule. Delays in invoicing lead to delays in payment. For ongoing projects, invoice at regular intervals or upon reaching milestones.

For large projects, consider progress invoicing. Break the project into phases and invoice as each phase completes. This improves cash flow and reduces the risk of non-payment for completed work.

### Clear Communication

Ensure invoices clearly describe the work performed. Vague descriptions lead to payment disputes. Be specific about what was done, when, and why the charges are justified. Reference the original estimate or contract to connect the invoice to agreed-upon work.

Include all relevant project details such as project address, dates of service, and any change orders or modifications. This context helps clients understand what they're paying for and reduces questions or disputes.

### Professional Presentation

Professional invoices reflect positively on your business. Ensure all information is accurate and complete, use consistent formatting and branding, proofread for errors before sending, and maintain a professional tone in all communications.

Errors on invoices create confusion and delay payment. Double-check amounts, dates, and client information before finalizing. A few minutes of review prevents costly mistakes.

### Follow-Up Procedures

Establish a consistent follow-up process for unpaid invoices. Send a friendly reminder a few days before the due date, follow up on the due date if payment hasn't been received, send a formal past-due notice 7-10 days after the due date, and escalate to phone calls or legal action if necessary.

Most payment delays result from oversight rather than refusal to pay. Polite reminders often resolve the issue quickly. Maintain professionalism even when dealing with overdue accounts.

---

## Subscription Access

The Free Tier (Primo Chambeador) includes full invoicing functionality with no monthly limits. Create unlimited invoices, generate PDFs, and send via email. This ensures all contractors can manage their billing regardless of subscription level.

Paid tiers (Mero Patron & Master Contractor) include additional features such as customizable invoice templates, automated payment reminders, integration with accounting software, and advanced reporting and analytics.

---

## Legal Considerations

Invoices are legal documents that establish payment obligations. Ensure your invoices comply with local requirements, which may include specific information disclosures, tax identification numbers, contractor license numbers, and lien rights notifications.

Some states require invoices to include specific language about mechanic's lien rights or payment bond claims. Consult with a legal professional to ensure your invoices meet all regulatory requirements in your jurisdiction.

Keep invoice records for at least seven years as required by tax authorities. These records support your tax filings and provide documentation in case of audits or legal disputes.

---

## Troubleshooting

**Q: Can I edit an invoice after sending it?**  
A: You can create a revised invoice with a new invoice number. Don't modify sent invoices, as this creates confusion. If corrections are needed, issue a credit memo or revised invoice clearly marked as such.

**Q: What if a client disputes an invoice?**  
A: Address disputes promptly and professionally. Review the original estimate and contract, provide documentation of work performed, and be willing to discuss and resolve legitimate concerns. Most disputes result from miscommunication rather than bad faith.

**Q: How do I handle partial payments?**  
A: Record each payment as received in the system. The invoice will show the remaining balance. For projects with planned partial payments, consider creating separate invoices for each payment installment.

**Q: Can I charge late fees?**  
A: If your contract or invoice terms include late fee provisions, you can charge them. Clearly state late fee terms on invoices and in contracts. Check local regulations, as some jurisdictions limit late fee amounts.

**Q: What if I need to refund a payment?**  
A: Issue a credit memo documenting the refund. Process the refund through your payment system and record it in Owl Fenc for accurate records.

---

## Related Features

Use the Estimate Generator to create detailed estimates that become the basis for invoices. Generate Contracts to establish payment terms and conditions before invoicing. Use the Payment Tracker to manage multi-payment projects and monitor cash flow. Integrate with Owl Funding to offer financing options to clients who need payment assistance.

---

## Need Help?

For questions about invoicing, visit our FAQ section, contact Support through the help center, or email support@owlfenc.com. For accounting or tax questions, consult with a qualified accountant or tax professional.
`;

export default function Invoicing() {
  return (
    <DocArticle
      title="Invoicing Guide"
      description="Complete guide to creating and managing professional invoices"
      content={content}
      category="invoicing"
      categoryTitle="Invoicing"
      readTime="12 min read"
      lastUpdated="January 1, 2026"
    />
  );
}
