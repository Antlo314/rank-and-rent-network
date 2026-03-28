import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      name, phone, email, domain, locationName, 
      serviceType, timeline, 
      incidentType, fault 
    } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // If API keys aren't added to Vercel yet, just return success so the UI still works
    if (!botToken || !chatId) {
      console.warn("Next.js Warning: Missing Telegram Environment Variables.");
      return NextResponse.json({ success: true, warning: 'mocked' });
    }

    let message = `🚨 *NEW RANK & RENT LEAD!* 🚨\n\n` +
      `🌐 *Site:* ${domain}\n` +
      `📍 *Location:* ${locationName || 'Main Page'}\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email || 'Not Provided'}\n`;

    if (serviceType) {
      message += `🛠️ *Service:* ${serviceType}\n`;
      message += `⏱️ *Timeline:* ${timeline || 'Not Specified'}\n`;
    }

    if (incidentType) {
      message += `⚖️ *Incident:* ${incidentType}\n`;
      message += `🚔 *At Fault:* ${fault || 'Not Specified'}\n`;
    }

    message += `\n_Call them immediately!_`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead Capture Error:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}
