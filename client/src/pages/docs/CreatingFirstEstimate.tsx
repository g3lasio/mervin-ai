import DocArticle from './DocArticle';

const content = `
# Creating Your First Estimate with Owl Fenc

Owl Fenc provides a powerful 4-step wizard to help you create professional estimates for your construction projects with AI assistance.

## What You Can Do

**Current Capabilities:**
- ✅ Organize and save client information automatically
- ✅ Create detailed project descriptions with AI enhancement
- ✅ Add and calculate line items (materials, labor, costs)
- ✅ Automatically calculate subtotals, tax, and totals
- ✅ **Generate professional PDF estimates**
- ✅ **Send estimates directly to clients via email**
- ✅ **Save estimates permanently** - All estimates are saved to your account
- ✅ **Share estimates with public links** - Send a link to clients for viewing
- ✅ View complete history of all your estimates

Your estimates are automatically saved to your account and can be accessed anytime from the "Mis Estimados" page.

## Step 1: Navigate to Estimates

1. Log into your Owl Fenc account
2. Click on **"Estimates"** in the sidebar
3. Click the **"Create Estimate"** or **"New Estimate"** button

## Step 2: Client Information (Step 1 of 4)

The wizard starts with client details:

**Required Information:**
- Client name
- Client email
- Client phone number
- Project address

**Quick Options:**
- **Select Existing Client**: Choose from your saved client database
- **Search Clients**: Find a client by name, email, or phone
- **Add New Client**: Enter new client information manually

**Tips:**
- Use the search feature to find existing clients quickly
- Client information is saved automatically to your client database
- You can update client details from the Clients page

## Step 3: Project Details (Step 2 of 4)

Enter your project information:

**Project Information:**
- Estimate title
- Project description
- Property/work location

**AI-Powered Description Enhancement:**
- Use the **"Enhance with AI"** button to improve your project description
- Mervin AI will expand and clarify your project details professionally
- You can refine the AI-generated description before proceeding
- This feature uses your AI credits (check your plan limits)

**Tips:**
- Be specific in your project description for accurate estimates
- The enhanced description helps create professional, detailed scopes
- You can always edit the description manually after AI enhancement

## Step 4: Line Items (Step 3 of 4)

Add all materials and labor to your estimate:

**Adding Line Items:**
1. Click **"Add Item"** button
2. Enter item details:
   - Item name
   - Description
   - Quantity
   - Unit of measure
   - Unit price
3. Total automatically calculates for each item

**Managing Items:**
- **Edit**: Click the edit icon to modify any item
- **Delete**: Remove items with the trash icon
- **Reorder**: Drag and drop items to reorder (where supported)

**Calculations:**
- Subtotal: Automatically calculated from all line items
- Tax: Optional tax percentage (automatically applied)
- Total: Final amount including tax

## Step 5: Review & Finalize (Step 4 of 4)

Final review and delivery options:

**Review All Details:**
- Verify client information is correct
- Check project description
- Confirm all line items and pricing
- Review subtotal, tax, and total amounts

**Add Notes:**
- Include any special terms or conditions
- Add payment terms
- Include warranty information
- Add project timeline

**Delivery Options:**
- **Generate PDF**: Download a professional PDF of your estimate
- **Email to Client**: Send the estimate directly to your client's email
- **Get Share Link**: Generate a public link to share with your client
- **Save for Later**: All estimates are automatically saved to your account

## Viewing Your Saved Estimates

Access your estimate history from **"Mis Estimados"** in the sidebar:

**What You Can Do:**
- View all your saved estimates
- See total value of all estimates
- Filter by client or date
- View detailed statistics
- **Edit estimates** - Make changes to existing estimates
- **View estimate details** - See complete information

**Note:** Currently, you cannot delete estimates from your history. All estimates remain in your account for record-keeping purposes.

## Tips for Success

✅ **Use AI Enhancement**: Mervin AI creates professional descriptions that impress clients

✅ **Save Client Data**: Build your client database for faster future estimates

✅ **Be Detailed**: Include all materials and labor for accurate calculations

✅ **Review Before Sending**: Double-check all calculations and details

✅ **Use PDF Generation**: Professional PDFs make a great impression

✅ **Track Your Estimates**: Use "Mis Estimados" to monitor all your quotes

## Plan Limits

Estimate creation and AI features vary by plan:

**Primo Chambeador (Free):**
- 5 estimates per month
- 1 AI-enhanced description per month
- Basic PDF generation

**Mero Patrón ($49.99/month):**
- 50 estimates per month
- 20 AI-enhanced descriptions per month
- Professional PDF templates
- Email delivery

**Master Contractor ($99.99/month):**
- Unlimited estimates
- Unlimited AI enhancements
- Premium PDF templates
- Priority support

## Common Questions

**Q: Are my estimates saved automatically?**
A: Yes! All estimates are automatically saved to your account and stored securely in the cloud.

**Q: Can I generate a PDF of my estimate?**
A: Yes! Click the "Generate PDF" button in the final step to download a professional PDF.

**Q: Can I email estimates to clients?**
A: Yes! You can send estimates directly to your client's email from the final step.

**Q: Can I delete old estimates?**
A: Currently, estimates cannot be deleted from your history. This ensures you maintain complete records for your business.

**Q: What's the difference between basic and AI-enhanced estimates?**
A: Using the "Enhance with AI" feature on the project description counts as an AI estimate and uses your AI credits. It creates more professional and detailed descriptions.

**Q: Can I edit an estimate after saving it?**
A: Yes! Go to "Mis Estimados", find your estimate, and click the "Edit" button.

**Q: How do I share an estimate with a client?**
A: You can email it directly, generate a PDF to send manually, or use the share link feature to send a public URL.

---

Need more help? [Contact our support team](https://owlfenc.replit.app/support/get-support)
`;

export default function CreatingFirstEstimate() {
  return (
    <DocArticle
      title="Creating Your First Estimate with Owl Fenc"
      description="Complete guide to creating professional estimates with AI assistance, PDF generation, and client delivery"
      content={content}
      category="getting-started"
      categoryTitle="Getting Started"
      readTime="10 min read"
      relatedArticles={[
        {
          title: "Managing Your Client Database",
          slug: "managing-clients",
          category: "clients"
        },
        {
          title: "Using Mervin AI for Project Descriptions",
          slug: "ai-descriptions",
          category: "mervin-ai"
        }
      ]}
    />
  );
}
