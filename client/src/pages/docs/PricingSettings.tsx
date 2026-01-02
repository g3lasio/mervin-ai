import DocArticle from './DocArticle';

const content = `
## Overview

Pricing Settings allow you to configure your service catalog, labor rates, material markups, and tax settings. Proper configuration ensures accurate estimates, consistent pricing across projects, and efficient estimate generation. Think of Pricing Settings as your business's pricing database that powers all estimates.

## Why Configure Pricing Settings?

Manually entering prices for every estimate is time-consuming and error-prone. Different estimates might use different prices for the same service, creating inconsistency and potential profitability issues. Pricing Settings solve this by creating a centralized pricing database that ensures consistency and accuracy.

When you configure your pricing once, every estimate automatically uses your current rates. If you raise prices, update your settings once and all future estimates reflect the new pricing. This consistency improves professionalism, simplifies pricing management, and ensures you're always charging appropriate rates.

## Service Categories

Organizing services into categories makes estimate creation faster and more intuitive. Instead of searching through hundreds of services, you navigate by category to find what you need. Common categories for construction contractors include framing, electrical, plumbing, drywall, painting, flooring, roofing, concrete, landscaping, and specialty services.

Create categories that match how you think about your work. If you specialize in kitchen remodeling, you might have categories like demolition, cabinets, countertops, appliances, backsplash, and finishing. The goal is intuitive organization that speeds up estimate creation.

---

## Configuring Services

### Adding New Services

Access Pricing Settings from your dashboard and navigate to the service category where you want to add a service. Click "Add Service" and enter the service name, description, unit of measurement, and base price.

The service name should be clear and specific. Instead of "Framing," use "Wall Framing - 2x4 Studs 16" OC" or "Wall Framing - 2x6 Studs 24" OC." Specificity prevents confusion and ensures accurate estimates.

The description provides additional context about what's included in the service. For example, "Includes materials, labor, and waste factor. Does not include permits or engineering." Clear descriptions help you remember what's included and communicate scope to clients.

### Units of Measurement

Choose appropriate units for each service. Common units include linear feet for trim and molding, square feet for flooring and drywall, cubic yards for concrete, each for fixtures and appliances, hours for labor-only services, and lump sum for complete packages.

Using standard units makes estimates easier to understand and compare. Clients can verify measurements and understand what they're paying for. Consistent units also simplify quantity takeoffs and material ordering.

### Pricing Structure

For each service, configure the pricing structure that makes sense for your business. Options include fixed price per unit, labor plus materials, cost-plus markup, and time and materials.

Fixed price per unit is simplest and most common. You charge $X per square foot, linear foot, or item. This approach is transparent and easy for clients to understand. It works well for standardized services where costs are predictable.

Labor plus materials separates labor and material costs. This transparency helps clients understand where their money goes and makes it easier to adjust estimates if they want to provide their own materials or upgrade material quality.

Cost-plus markup involves calculating actual costs and adding a percentage markup. This approach works for custom or unpredictable work where fixed pricing is difficult. However, it requires detailed cost tracking and may be less transparent to clients.

Time and materials charges based on actual time spent and materials used. This approach is common for repair work, troubleshooting, or projects with uncertain scope. It provides flexibility but requires careful time tracking and clear communication with clients.

---

## Labor Rates

### Setting Base Labor Rates

Configure your base labor rate in Pricing Settings. This rate represents your standard hourly charge for labor, including overhead and profit. Consider all costs when setting your rate, including direct labor wages, payroll taxes and benefits, insurance, tools and equipment, vehicle costs, overhead (office, utilities, administrative), and desired profit margin.

Many contractors underprice labor by only considering direct wages. If you pay a worker $25/hour, your labor rate should be $60-$80/hour to cover all costs and generate profit. Use industry benchmarks and financial analysis to set appropriate rates.

### Skill-Level Variations

Consider different rates for different skill levels. A master carpenter might command $85/hour while an apprentice charges $45/hour. Configure multiple labor categories to reflect these differences and ensure accurate pricing.

When creating estimates, specify which skill level is required for each task. This precision improves estimate accuracy and helps you plan crew composition for projects.

### Regional Adjustments

Labor rates vary significantly by region. Urban areas typically have higher rates than rural areas, and some states have higher prevailing rates than others. If you work in multiple regions, configure regional rate adjustments to ensure competitive and profitable pricing everywhere.

---

## Material Pricing and Markups

### Material Cost Tracking

For services that include materials, configure base material costs in Pricing Settings. Update these costs periodically to reflect current market prices. Material costs fluctuate, especially for lumber, metals, and petroleum-based products, so regular updates maintain pricing accuracy.

Some contractors update material costs quarterly, while others do so monthly or even weekly during periods of high volatility. Choose an update frequency that balances accuracy with administrative burden.

### Markup Percentages

Apply markup percentages to material costs to cover procurement time, transportation, storage, waste, and profit. Typical markups range from 15% to 50%, depending on the material type, project size, and competitive environment.

Higher markups are justified for small quantities, specialty items, or materials requiring significant handling. Lower markups may be appropriate for large orders or commodity materials. Configure default markups by category and adjust for specific services as needed.

### Waste Factors

Include waste factors in material pricing to account for cutting, damage, and unusable remnants. Waste factors vary by material and installation method. Typical waste factors include 5-10% for lumber and trim, 10-15% for tile and stone, 5-10% for drywall, 10-20% for concrete, and 5-10% for paint.

Failing to account for waste leads to underpricing and reduced profitability. Build waste factors into your pricing to ensure you're compensated for all materials purchased, not just those installed.

---

## Tax Configuration

### Sales Tax Settings

Configure your sales tax rate in Pricing Settings. The system applies this rate to taxable items in estimates. Tax rates vary by state and locality, so verify the correct rate for your area. Some jurisdictions have different rates for materials versus labor, which you can configure separately.

Update tax rates when they change. Most jurisdictions announce rate changes well in advance, giving you time to update your settings. Applying incorrect tax rates creates problems during invoicing and payment.

### Taxable vs. Non-Taxable Items

Not all services and materials are taxable in all jurisdictions. Labor is often tax-exempt, while materials are taxable. Some states exempt certain types of construction work or have special rules for new construction versus remodeling.

Configure each service as taxable or non-taxable based on your local regulations. This ensures estimates automatically apply tax only where required. Consult with a tax professional to understand your jurisdiction's specific rules.

---

## Using Pricing Settings in Estimates

### Automatic Price Population

When creating estimates, services you've configured in Pricing Settings appear in dropdown menus or search results. Select a service and its price automatically populates. This eliminates manual price entry and ensures consistency across all estimates.

You can still override prices for specific estimates if needed. For example, if you're offering a discount or a client is providing materials, adjust the price for that estimate. The override doesn't change your base pricing settings.

### Quantity Calculations

Enter quantities for each service (square feet, linear feet, etc.) and the system calculates line item totals. Combined with automatic price population, this makes estimate creation fast and accurate. You focus on measuring and quantifying work, while the system handles pricing calculations.

### Estimate Consistency

Using Pricing Settings ensures all estimates use current, consistent pricing. You don't accidentally use outdated prices or create pricing discrepancies between estimates. This consistency improves professionalism and client trust.

---

## Updating Prices

### When to Update

Review and update pricing settings regularly. Common triggers for updates include annual price increases, significant material cost changes, changes in overhead costs, expansion into new service areas, and competitive pressure.

Some contractors schedule annual pricing reviews, adjusting rates based on inflation, cost changes, and profitability analysis. Others update prices more frequently in response to market conditions.

### Impact on Existing Estimates

Updating Pricing Settings affects future estimates but doesn't change existing estimates or contracts. Once an estimate is created, it maintains the prices that were current at creation. This protects you and clients from unexpected price changes.

If you need to update an existing estimate to reflect new pricing, create a revised estimate rather than editing the original. This maintains a clear record of pricing changes and client communications.

---

## Best Practices

### Regular Review

Schedule regular pricing reviews, at least annually. Analyze profitability by service type to identify underpriced services. Compare your rates to competitors and industry benchmarks. Adjust prices to maintain profitability while remaining competitive.

Many contractors discover they've been underpricing certain services for years. Regular reviews prevent this and ensure your pricing evolves with your costs and market conditions.

### Detailed Service Definitions

Create detailed, specific service definitions rather than broad categories. Specific services improve estimate accuracy and reduce confusion. They also make it easier to analyze profitability by service type.

For example, instead of one "Painting" service, create separate services for interior painting (walls), interior painting (trim), exterior painting (siding), exterior painting (trim), and specialty finishes. This granularity improves pricing precision.

### Document Assumptions

Document what's included and excluded in each service. This prevents scope creep and ensures you and clients have the same understanding. For example, "Drywall installation includes hanging, taping, and finishing to level 4. Does not include texture, primer, or paint."

Clear documentation also helps when training new estimators or delegating estimate creation. Anyone creating estimates can understand what each service includes.

### Test Pricing

Before finalizing new pricing, create test estimates for typical projects. Verify that total prices are competitive and profitable. Compare test estimates to recent actual projects to ensure pricing aligns with real-world costs.

Testing prevents surprises when you start using new pricing. It's better to discover pricing issues in test estimates than in real proposals to clients.

---

## Subscription Access

Pricing Settings are available on all subscription tiers, including the free tier (Primo Chambeador). All users can configure services, set rates, and manage their pricing database. This ensures even new contractors can create professional, consistent estimates.

---

## Troubleshooting

**Q: Can I have different pricing for different clients?**  
A: Pricing Settings establish base prices, but you can adjust prices in individual estimates. For clients with negotiated rates, create estimates and adjust prices as needed. The base settings remain unchanged.

**Q: What if I offer volume discounts?**  
A: Apply volume discounts in individual estimates rather than in Pricing Settings. This gives you flexibility to offer discounts based on project size, client relationship, or competitive factors.

**Q: How do I handle price increases for existing clients?**  
A: Communicate price increases in advance and explain the reasons (cost increases, inflation, etc.). Honor quoted prices for pending estimates, but apply new prices to future work. Most clients understand reasonable price increases.

**Q: Can I import pricing from another system?**  
A: Currently, pricing must be entered manually in Owl Fenc. Bulk import functionality is planned for future releases. For now, focus on entering your most common services first, then add others as needed.

---

## Related Features

Use configured pricing when creating Estimates for fast, accurate pricing. Reference pricing settings when creating Contracts to ensure contract prices match estimates. Update pricing based on profitability analysis from completed projects.

---

## Need Help?

For questions about pricing settings, visit our FAQ, contact Support, or email support@owlfenc.com. For pricing strategy advice, consider consulting with a business advisor or industry association.
`;

export default function PricingSettings() {
  return (
    <DocArticle
      title="Pricing Settings Guide"
      description="Complete guide to configuring your service catalog and pricing"
      content={content}
      category="settings"
      categoryTitle="Settings"
      readTime="10 min read"
      lastUpdated="January 1, 2026"
    />
  );
}
