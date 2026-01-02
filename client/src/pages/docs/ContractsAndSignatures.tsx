import DocArticle from './DocArticle';

const content = `
## Overview

Owl Fenc's Legal Contract Engine generates professional, legally compliant construction contracts with AI assistance and electronic signature capabilities. Transform your estimates into enforceable agreements in minutes.

## Key Features

### AI-Powered Contract Generation
- **Intelligent Drafting**: AI analyzes your estimate and generates contract terms
- **State-Specific Compliance**: Automatically includes required clauses for your state
- **Risk Analysis**: AI identifies potential legal risks and suggests protective clauses
- **Multiple Contract Types**: Residential, commercial, subcontractor agreements

### Dual-Signature System
- **Electronic Signatures**: Legally binding e-signatures with audit trail
- **Contractor Signature**: Sign directly in the app
- **Client Signature**: Share unique URL for client to sign remotely
- **Real-Time Status**: Track signature status in real-time
- **PDF Generation**: Automatic PDF creation with both signatures

### Contract Folio System
- **Automatic Numbering**: Each contract gets a unique folio number
- **Organized Storage**: All contracts saved in Firebase
- **Easy Retrieval**: Search and filter by project, client, or date
- **Version Control**: Track contract revisions and amendments

---

## Creating a Contract

### Step 1: Start from an Estimate

1. Navigate to **"Mis Estimados"** (My Estimates)
2. Find the approved estimate
3. Click **"Generate Contract"**
4. System loads estimate details automatically

### Step 2: Choose Contract Type

**Available Types:**
- **Residential Construction Agreement**: For home projects
- **Commercial Construction Contract**: For business properties
- **Subcontractor Agreement**: For hiring subcontractors
- **Service Agreement**: For maintenance/repair work

**AI Recommendation:**
The system analyzes your estimate and recommends the most appropriate contract type.

### Step 3: Enter Project Details

**Required Information:**
- **Project Address**: Full property address
- **Scope of Work**: Detailed description (AI-generated from estimate)
- **Contract Amount**: Total price from estimate
- **Payment Schedule**: Deposit, milestones, final payment
- **Start Date**: Projected start date
- **Completion Date**: Expected finish date

**Optional Details:**
- Warranty terms
- Change order procedures
- Dispute resolution method
- Insurance requirements

### Step 4: Review AI-Generated Terms

The AI generates contract clauses including:

**Standard Clauses:**
- Scope of work definition
- Payment terms and schedule
- Timeline and completion
- Materials and workmanship standards
- Change order procedures
- Warranty provisions
- Termination conditions

**State-Specific Requirements:**
- Lien waiver provisions
- Required disclosures
- Licensing information
- Insurance requirements
- Dispute resolution

**Risk Protection:**
- Limitation of liability
- Force majeure clause
- Indemnification
- Intellectual property rights

### Step 5: Customize and Edit

**Edit Options:**
- Modify any AI-generated clause
- Add custom terms
- Remove unnecessary sections
- Adjust payment schedule
- Update timeline

**AI Assistance:**
- Click "Improve this clause" for AI suggestions
- Ask AI to explain legal terms
- Request alternative phrasing

### Step 6: Generate PDF

1. Click **"Generate Contract PDF"**
2. System creates professional PDF with:
   - Company logo and information
   - Contract folio number
   - All terms and conditions
   - Signature blocks for both parties
   - Date and witness lines

---

## Electronic Signatures

### Contractor Signature

**How to Sign:**
1. Review the final contract
2. Click **"Sign as Contractor"**
3. Draw your signature on the canvas
4. Click **"Confirm Signature"**
5. Your signature is embedded in the PDF

**Signature Features:**
- Touch-screen compatible
- Mouse drawing supported
- Undo/redo functionality
- Clear and restart option

### Client Signature

**Sharing for Signature:**
1. After you sign, click **"Share with Client"**
2. System generates unique signature URL
3. Copy URL and send to client via:
   - Email (built-in)
   - Text message
   - Any messaging app

**Client Experience:**
1. Client opens the unique URL
2. Reviews the complete contract
3. Draws their signature
4. Confirms and submits
5. Receives copy via email

**Security Features:**
- One-time use URLs
- Timestamp recording
- IP address logging
- Device information capture
- SHA-256 hash verification

### Signature Status Tracking

**Real-Time Updates:**
- ⏳ **Pending**: Waiting for contractor signature
- ✅ **Contractor Signed**: Your signature complete
- 📧 **Sent to Client**: Client URL shared
- ✅ **Fully Executed**: Both parties signed
- 📄 **PDF Generated**: Final document ready

---

## Contract Management

### Viewing Contracts

**Access Your Contracts:**
1. Go to **"Contracts"** in sidebar
2. View all contracts in list format
3. Filter by:
   - Status (pending, signed, executed)
   - Client name
   - Date range
   - Contract amount

**Contract Details:**
- Folio number
- Client information
- Project address
- Contract amount
- Signature status
- Creation date
- Last modified

### Downloading Contracts

**PDF Download:**
1. Open contract details
2. Click **"Download PDF"**
3. Fully executed contracts include both signatures
4. Pending contracts show signature placeholders

**Email Copy:**
- Send to yourself
- Send to client
- Send to third parties (accountant, lawyer)

### Contract Amendments

**Change Orders:**
1. Open original contract
2. Click **"Create Change Order"**
3. Describe changes
4. Update pricing
5. Generate amendment document
6. Collect new signatures

**Version History:**
- Original contract preserved
- All amendments tracked
- Complete audit trail

---

## Subscription Limits

### Free Tier (Primo Chambeador)
- **5 Legal Contracts** per month
- Full AI generation
- Electronic signatures included
- PDF generation included

### Paid Tiers (Mero Patron & Master Contractor)
- **Unlimited Contracts**
- Priority AI processing
- Advanced contract templates
- Custom clause library

---

## Best Practices

### Before Creating a Contract

✅ **Ensure estimate is approved** by client  
✅ **Verify all pricing** is accurate  
✅ **Confirm project timeline** is realistic  
✅ **Check client information** is complete  
✅ **Review state requirements** for your area

### Contract Terms

✅ **Be specific** about scope of work  
✅ **Include detailed payment schedule**  
✅ **Set realistic completion dates**  
✅ **Define change order process**  
✅ **Include warranty terms**  
✅ **Specify dispute resolution method**

### Signature Process

✅ **Review thoroughly** before signing  
✅ **Sign in good lighting** for clarity  
✅ **Verify client contact** before sharing  
✅ **Follow up** if client hasn't signed in 48 hours  
✅ **Keep copies** of all executed contracts

---

## Legal Compliance

### State-Specific Requirements

The system automatically includes required clauses for all 50 US states, including:

- **California**: Home Improvement Contract requirements, 3-day right to cancel
- **Texas**: Residential Construction Contract Act provisions
- **Florida**: Construction lien law disclosures
- **New York**: Home Improvement Contract requirements
- **And all other states...**

### Federal Compliance

- **Truth in Lending Act** (if financing offered)
- **Fair Credit Reporting Act** (if credit checks performed)
- **Americans with Disabilities Act** (for commercial projects)

### Legal Disclaimer

⚠️ **Important**: While Owl Fenc generates legally compliant contracts, we recommend having important or complex contracts reviewed by a licensed attorney in your state.

---

## Troubleshooting

### Common Issues

**Q: Can I edit a contract after signing?**  
A: No. Once signed, contracts are locked. Create a change order for modifications.

**Q: What if client doesn't sign?**  
A: The URL remains valid for 30 days. You can resend or generate a new URL.

**Q: Can I use my own contract template?**  
A: Currently, you must use Owl Fenc templates. Custom templates coming soon.

**Q: Are electronic signatures legally binding?**  
A: Yes. E-signatures are legally binding under the ESIGN Act and UETA in all 50 states.

**Q: Can I print and sign manually?**  
A: Yes. Download the PDF and sign manually if preferred. Upload signed copy for records.

---

## Related Features

- **Estimates**: Create estimates before generating contracts
- **Invoicing**: Generate invoices after contract execution
- **Payment Tracker**: Track payments per contract terms
- **Property Verification**: Verify ownership before contracting

---

## Need Help?

If you have questions about contracts or signatures:
- Visit our [FAQ](/docs/getting-started/faq)
- Contact [Support](https://owlfenc.replit.app/support/get-support)
- Email: legal@owlfenc.com
`;

export default function ContractsAndSignatures() {
  return (
    <DocArticle
      title="Contracts & Electronic Signatures"
      description="Complete guide to generating legal contracts and collecting electronic signatures"
      content={content}
      category="contracts"
      categoryTitle="Legal Contracts"
      readTime="15 min read"
      lastUpdated="January 1, 2026"
    />
  );
}
