import { NextResponse } from 'next/server';
import { sendZenderWhatsApp } from '@/lib/whatsapp';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, goal, preferredTime } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // 1. Save Lead to Leads Log File
    const leadEntry = {
      id: 'lead_' + Date.now(),
      name,
      email: email || 'N/A',
      phone,
      company: company || 'N/A',
      goal: goal || '100x Growth Strategy',
      preferredTime: preferredTime || 'Morning Slot',
      createdAt: new Date().toISOString(),
      formattedTime: timestamp,
    };

    try {
      const logsDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
      const logsFile = path.join(logsDir, 'consultation_leads.json');
      let existingLeads = [];
      if (fs.existsSync(logsFile)) {
        try {
          existingLeads = JSON.parse(fs.readFileSync(logsFile, 'utf8'));
        } catch (_) {}
      }
      existingLeads.unshift(leadEntry);
      fs.writeFileSync(logsFile, JSON.stringify(existingLeads, null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Failed to log lead to file:', fsErr);
    }

    // 2. Customer WhatsApp Message (WhatsApp Template Style)
    const customerMessage = `🚀 *Siegfried Outreach — VIP Strategy Session Confirmed!*

Dear *${name}*,

Thank you for requesting a 1-on-1 Business Growth Consultation with *Sonu Saini* (Founder & Chief Architect).

📋 *Your Session Details:*
• *Brand / Company:* ${company || 'Personal Brand'}
• *Primary Focus:* ${goal}
• *Preferred Slot:* ${preferredTime}
• *Session Format:* 1-on-1 Strategy Call (Google Meet / WhatsApp Call)

⚡ *Next Steps:*
Our senior strategy engineer will reach out to you 15 minutes before your scheduled slot. If you have immediate questions, simply reply directly to this message.

🌐 Platform Console: https://siegfriedoutreach.com
📚 Documentation: https://docs.siegfriedoutreach.com

Best regards,
*Sonu Saini*
Founder & Chief Product Architect
Siegfried Outreach Inc.`;

    // 3. Admin WhatsApp Notification Message
    const adminMessage = `🔥 *NEW VIP 1-ON-1 CONSULTATION LEAD!*

A new growth consultation was just booked on Siegfried Outreach:

👤 *Name:* ${name}
📱 *Phone:* ${phone}
📧 *Email:* ${email || 'N/A'}
🏢 *Company:* ${company || 'N/A'}
🎯 *Growth Goal:* ${goal}
⏰ *Time Window:* ${preferredTime}
🕒 *Timestamp:* ${timestamp}

👉 *Action:* Open WhatsApp or dial ${phone} to initiate the strategy consultation!`;

    // Send Customer WhatsApp Notification
    const customerPromise = sendZenderWhatsApp({
      recipient: phone,
      message: customerMessage,
    });

    // Send Admin Notification (to configured Admin number or fallback)
    const adminPhone = process.env.ADMIN_WHATSAPP_PHONE || '919876543210';
    const adminPromise = sendZenderWhatsApp({
      recipient: adminPhone,
      message: adminMessage,
    });

    const [customerRes, adminRes] = await Promise.allSettled([
      customerPromise,
      adminPromise,
    ]);

    return NextResponse.json({
      success: true,
      message: 'Consultation booked successfully & WhatsApp notification dispatched!',
      lead: leadEntry,
      whatsappStatus: {
        customer: customerRes.status === 'fulfilled' ? customerRes.value : 'failed',
        admin: adminRes.status === 'fulfilled' ? adminRes.value : 'failed',
      },
    });
  } catch (error: any) {
    console.error('Consultation API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const logsFile = path.join(process.cwd(), 'data/consultation_leads.json');
    let leads = [];
    if (fs.existsSync(logsFile)) {
      leads = JSON.parse(fs.readFileSync(logsFile, 'utf8'));
    }
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
