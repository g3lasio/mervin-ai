import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {

  // POST /api/partner-apply — receives partner application and emails gelasio@chyrris.com
  app.post("/api/partner-apply", async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        city,
        state,
        currentRole,
        experience,
        territory,
        whyFit,
        linkedin,
      } = req.body;

      if (!fullName || !email || !phone || !currentRole) {
        return res.status(400).json({ message: "Missing required fields." });
      }

      const submittedAt = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        dateStyle: "full",
        timeStyle: "short",
      });

      const adminHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
  .wrapper { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; }
  .header { background: #0f172a; padding: 28px 32px; }
  .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
  .header p { color: #94a3b8; margin: 6px 0 0; font-size: 13px; }
  .badge { display: inline-block; background: #22c55e; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; margin-top: 10px; letter-spacing: 0.5px; }
  .body { padding: 28px 32px; }
  .section-title { font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; margin: 24px 0 10px; border-bottom: 1px solid #f3f4f6; padding-bottom: 6px; }
  .field { margin-bottom: 14px; }
  .field-label { display: block; font-size: 12px; color: #6b7280; margin-bottom: 3px; }
  .field-value { display: block; font-size: 14px; color: #111827; font-weight: 500; }
  .highlight-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px 20px; margin: 20px 0; }
  .highlight-box p { margin: 0; font-size: 13px; color: #166534; line-height: 1.6; }
  .why-fit { background: #f8fafc; border-left: 4px solid #0f172a; border-radius: 4px; padding: 14px 18px; margin: 10px 0; font-size: 14px; color: #374151; line-height: 1.7; font-style: italic; }
  .footer { background: #f8fafc; padding: 18px 32px; border-top: 1px solid #e5e7eb; }
  .footer p { margin: 0; font-size: 12px; color: #9ca3af; }
  .action-btn { display: inline-block; background: #0f172a; color: #ffffff !important; text-decoration: none; padding: 10px 22px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-top: 16px; }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🦉 New Sales Partner Application</h1>
      <p>Owl Fenc — Sales Partner Program</p>
      <span class="badge">NEW APPLICATION</span>
    </div>
    <div class="body">
      <div class="highlight-box">
        <p><strong>${fullName}</strong> just applied to become an Owl Fenc Sales Partner. Review their profile below and respond within 48 hours.</p>
      </div>
      <div class="section-title">Contact Information</div>
      <div class="field"><span class="field-label">Full Name</span><span class="field-value">${fullName}</span></div>
      <div class="field"><span class="field-label">Email</span><span class="field-value"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></span></div>
      <div class="field"><span class="field-label">Phone</span><span class="field-value"><a href="tel:${phone}" style="color:#2563eb;">${phone}</a></span></div>
      <div class="field"><span class="field-label">Location</span><span class="field-value">${city}, ${state}</span></div>
      ${linkedin ? `<div class="field"><span class="field-label">LinkedIn</span><span class="field-value"><a href="${linkedin.startsWith('http') ? linkedin : 'https://' + linkedin}" style="color:#2563eb;" target="_blank">${linkedin}</a></span></div>` : ''}
      <div class="section-title">Sales Background</div>
      <div class="field"><span class="field-label">Current Role / What They Sell</span><span class="field-value">${currentRole}</span></div>
      <div class="field"><span class="field-label">Years of Experience with Contractors</span><span class="field-value">${experience}</span></div>
      <div class="field"><span class="field-label">Territory / Area They Cover</span><span class="field-value">${territory}</span></div>
      <div class="section-title">Why They're a Good Fit</div>
      <div class="why-fit">${whyFit}</div>
      <div class="section-title">Next Steps</div>
      <p style="font-size:13px; color:#374151; line-height:1.6;">Reply to their email, send the Sales Partner Agreement + tracking link. Request W-9 before first commission payment.</p>
      <a href="mailto:${email}?subject=Welcome to Owl Fenc Sales Partner Program" class="action-btn">Reply to ${fullName}</a>
    </div>
    <div class="footer">
      <p>Submitted: ${submittedAt} (PT) &nbsp;|&nbsp; mervin.chyrris.com/partners</p>
    </div>
  </div>
</body>
</html>`;

      const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
  .wrapper { max-width: 580px; margin: 32px auto; background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; }
  .header { background: #0f172a; padding: 28px 32px; }
  .header h1 { color: #fff; margin: 0; font-size: 20px; }
  .header p { color: #94a3b8; margin: 6px 0 0; font-size: 13px; }
  .body { padding: 28px 32px; }
  .body p { font-size: 14px; color: #374151; line-height: 1.7; }
  .footer { background: #f8fafc; padding: 16px 32px; border-top: 1px solid #e5e7eb; }
  .footer p { font-size: 12px; color: #9ca3af; margin: 0; }
</style></head>
<body>
  <div class="wrapper">
    <div class="header"><h1>🦉 Application Received</h1><p>Owl Fenc Sales Partner Program</p></div>
    <div class="body">
      <p>Hi ${fullName},</p>
      <p>Thanks for applying to the Owl Fenc Sales Partner Program. We received your application and will review it within <strong>48 hours</strong>.</p>
      <p>If you're a good fit, we'll reach out with your <strong>Sales Partner Agreement</strong> and your personal tracking link so you can start earning right away.</p>
      <p>In the meantime, feel free to explore the app at <a href="https://app.owlfenc.com" style="color:#2563eb;">app.owlfenc.com</a>.</p>
      <p>Questions? Email us at <a href="mailto:partners@owlfenc.com" style="color:#2563eb;">partners@owlfenc.com</a>.</p>
      <p style="margin-top:24px;">— The Owl Fenc Team</p>
    </div>
    <div class="footer"><p>Owl Fenc · mervin.chyrris.com/partners</p></div>
  </div>
</body>
</html>`;

      // Send notification to Gelasio
      const { error: adminError } = await resend.emails.send({
        from: "Owl Fenc Partners <partners@owlfenc.com>",
        to: ["gelasio@chyrris.com"],
        replyTo: email,
        subject: `🦉 New Partner Application: ${fullName} — ${city}, ${state}`,
        html: adminHtml,
      });

      if (adminError) {
        console.error("Resend admin error:", adminError);
        return res.status(500).json({ message: "Failed to send notification.", error: adminError });
      }

      // Send confirmation to applicant
      await resend.emails.send({
        from: "Owl Fenc <partners@owlfenc.com>",
        to: [email],
        subject: "We received your application — Owl Fenc Sales Partner Program",
        html: confirmHtml,
      });

      return res.status(200).json({ message: "Application submitted successfully." });
    } catch (err: any) {
      console.error("Partner apply error:", err);
      return res.status(500).json({ message: "Server error.", error: err.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
