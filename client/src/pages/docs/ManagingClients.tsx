import DocArticle from './DocArticle';

const content = `
# Managing Your Client Database

Owl Fenc provides a complete client management system to help you organize and maintain your customer information efficiently.

## What You Can Do

**Client Management Capabilities:**
- ✅ Add new clients with complete contact information
- ✅ View all clients in an organized list
- ✅ Edit client details anytime
- ✅ **Delete clients** when needed (with confirmation)
- ✅ Search clients by name, email, or phone
- ✅ Import clients from CSV files
- ✅ View client project history
- ✅ Quick access from estimate creation

## Accessing Client Management

Navigate to the Clients section:
1. Click **"Clients"** or **"Clientes"** in the sidebar
2. You'll see your complete client database

## Adding a New Client

**Method 1: From Clients Page**
1. Go to the Clients page
2. Click **"Add New Client"** or **"Nuevo Cliente"**
3. Fill in the client information form
4. Click **"Save"** to add to your database

**Method 2: During Estimate Creation**
- When creating an estimate, you can add a new client directly
- Client information is automatically saved to your database
- No need to add them separately first

**Required Information:**
- Client name (required)
- Email address (required)
- Phone number (required)
- Project address (optional but recommended)

**Optional Information:**
- Company name
- Additional notes
- Preferred contact method

## Viewing Your Clients

The Clients page displays all your customers with:
- Client name and company
- Contact information (email and phone)
- Number of projects or estimates
- Date added
- Quick action buttons

**Search Functionality:**
- Search by name
- Search by email
- Search by phone number
- Results update instantly as you type

## Editing Client Information

To update a client's details:
1. Find the client in your list
2. Click the **"Edit"** button or pencil icon
3. Update the information
4. Click **"Save Changes"**

**What You Can Edit:**
- Name and company information
- Email address
- Phone number
- Project address
- Notes and preferences

**Important:** Changes are saved immediately and will apply to all future estimates and projects.

## Deleting Clients

If you need to remove a client from your database:

1. Find the client in your list
2. Click the **"Delete"** button or trash icon
3. Confirm the deletion in the popup dialog
4. The client will be permanently removed

**⚠️ Important Notes:**
- Deletion is permanent and cannot be undone
- Existing estimates and projects with this client will remain
- Only the client record is deleted, not historical data
- Use caution when deleting clients

## Importing Clients

To import multiple clients at once:

1. Prepare a CSV file with client data
2. Go to the Clients page
3. Look for the **"Import"** option
4. Select your CSV file
5. Map the columns to client fields
6. Review and confirm the import

**CSV Format Requirements:**
- Include headers: Name, Email, Phone, Address
- One client per row
- Use proper formatting for email and phone

## Using Clients in Estimates

When creating an estimate:

**Select Existing Client:**
1. Start creating a new estimate
2. In Step 1 (Client Information), use the search box
3. Type the client's name, email, or phone
4. Select the client from the dropdown
5. Their information auto-fills

**Benefits:**
- Saves time - no re-typing information
- Ensures consistency across estimates
- Maintains accurate client records
- Quick access to client history

## Client Project History

View all projects and estimates for a specific client:
1. Click on a client's name
2. See their complete history:
   - All estimates created
   - Active projects
   - Completed work
   - Total value of work

This helps you:
- Track client relationships
- Identify your best customers
- Plan follow-up communications
- Maintain professional records

## Best Practices

✅ **Add Clients Immediately**: Save client info as soon as you get it

✅ **Keep Information Updated**: Update phone numbers and emails when they change

✅ **Use Consistent Naming**: Use full names for professionalism

✅ **Add Notes**: Include preferences, special requirements, or important details

✅ **Verify Before Deleting**: Double-check before removing a client

✅ **Regular Cleanup**: Periodically review and update your client list

✅ **Use Search**: Don't scroll - search to find clients quickly

## Common Questions

**Q: Can I delete a client?**
A: Yes! Click the delete button next to the client. You'll be asked to confirm before deletion.

**Q: What happens to estimates when I delete a client?**
A: Your existing estimates and projects remain intact. Only the client record is removed from your database.

**Q: Can I export my client list?**
A: Currently, export functionality is not available. You can view and manage all clients within the app.

**Q: How many clients can I have?**
A: There is no limit to the number of clients you can store in your database.

**Q: Can I merge duplicate clients?**
A: Currently, there is no automatic merge feature. You'll need to manually delete duplicates and keep the most complete record.

**Q: Is my client data secure?**
A: Yes! All client information is encrypted and stored securely in the cloud. Only you can access your client database.

**Q: Can I add custom fields for clients?**
A: Currently, you can use the "Notes" field for additional information. Custom fields are not yet available.

**Q: How do I import clients from another system?**
A: Export your clients to a CSV file from your old system, then use the Import feature in Owl Fenc.

---

Need more help? [Contact our support team](https://owlfenc.replit.app/support/get-support)
`;

export default function ManagingClients() {
  return (
    <DocArticle
      title="Managing Your Client Database"
      description="Complete guide to adding, editing, deleting, and organizing your clients in Owl Fenc"
      content={content}
      category="clients"
      categoryTitle="Client Management"
      readTime="8 min read"
      relatedArticles={[
        {
          title: "Creating Your First Estimate",
          slug: "creating-first-estimate",
          category: "getting-started"
        },
        {
          title: "Importing Client Data",
          slug: "importing-clients",
          category: "clients"
        }
      ]}
    />
  );
}
