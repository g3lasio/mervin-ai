import DocArticle from './DocArticle';

const content = `
# Creating Your First Estimate with Mervin AI

Mervin AI provides a simple 4-step wizard to help you organize and calculate estimate data for your construction projects.

## Important: Current Capabilities

**What This Tool Does:**
- ✅ Organize client information
- ✅ Create detailed project descriptions with AI assistance
- ✅ Add and calculate line items (materials, labor, costs)
- ✅ Automatically calculate subtotals, tax, and totals
- ✅ Store client data for future use

**Coming Soon (Not Yet Available):**
- ⏳ PDF generation
- ⏳ Email delivery to clients
- ⏳ Persistent saving of estimates
- ⏳ Download options

Currently, the estimate tool helps you **organize and calculate** your project data. You'll need to manually transfer this information to your own documents or systems.

## Step 1: Navigate to Estimates

1. Log into your Mervin AI account
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
- The AI will expand and clarify your project details
- You can refine the AI-generated description before proceeding
- This is one of the most powerful features currently available!

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

## Step 5: Review & Calculate (Step 4 of 4)

Final review of your estimate calculations:

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

**What You Can Do Next:**
- Review all calculated totals
- Make notes of the information for your records
- Manually create your own PDF using this data
- Copy/paste the information into your own documents

## Tips for Success

✅ **Save Client Data**: Build your client database for faster future estimates

✅ **Use AI Enhancement**: The ProjectDescriptionEnhancer is a powerful tool - use it!

✅ **Be Detailed**: Include all materials and labor for accurate calculations

✅ **Keep Your Own Records**: Currently, you'll need to save this information externally

✅ **Double-Check Math**: Review all calculations before using

## Plan Limits

Estimate creation limits vary by plan:

**Primo Chambeador (Free):**
- 5 basic estimates per month
- 1 AI-enhanced estimate per month

**Mero Patrón ($49.99/month):**
- 50 basic estimates per month
- 20 AI-enhanced estimates per month

**Master Contractor ($99.99/month):**
- Unlimited estimates

## Common Questions

**Q: Can I save my estimates?**
A: Persistent saving is not yet implemented. We recommend copying the information to your own documents or systems.

**Q: Can I generate a PDF?**
A: PDF generation is planned for a future update. Currently, you'll need to create your own documents using the calculated data.

**Q: Can I email estimates to clients?**
A: Direct email functionality is not yet available. You can use the estimate tool to calculate totals, then create and send your own documents.

**Q: What's the difference between basic and AI-enhanced estimates?**
A: Using the "Enhance with AI" feature on the project description counts as an AI estimate and uses your AI credits.

**Q: Can I use my company logo and branding?**
A: Company profile settings are available. Check Settings > Company Profile for available options.

---

Need more help? [Contact our support team](https://owlfenc.replit.app/support/get-support)
`;

export default function CreatingFirstEstimate() {
  return (
    <DocArticle
      title="Creating Your First Estimate with Mervin AI"
      description="Step-by-step guide to creating estimate data with the Owl Fenc platform"
      content={content}
      category="getting-started"
      categoryTitle="Getting Started"
      readTime="8 min read"
      relatedArticles={[
        {
          title: "Setting Up Your Company Profile",
          slug: "company-profile",
          category: "getting-started"
        },
        {
          title: "Understanding Your Dashboard",
          slug: "understanding-dashboard",
          category: "getting-started"
        }
      ]}
    />
  );
}
