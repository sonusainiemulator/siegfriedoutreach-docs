interface SendWhatsAppOptions {
  recipient: string;
  message: string;
}

export async function sendZenderWhatsApp({ recipient, message }: SendWhatsAppOptions) {
  const ZENDER_URL = process.env.ZENDER_API_URL || 'https://zender.bhadracity.com/api/send/whatsapp';
  const ZENDER_SECRET = process.env.ZENDER_API_SECRET || '2d1b3edd2a18daf336a900c95b646c178ce1914b';
  const ZENDER_ACCOUNT = process.env.ZENDER_ACCOUNT_ID || '1788447095c81e728d9d4c2f636f067f89cc14862c6a99897711a75';

  // Clean phone number: remove +, spaces, dashes
  let cleanRecipient = recipient.replace(/[^0-9]/g, '');
  if (cleanRecipient.length === 10) {
    cleanRecipient = '91' + cleanRecipient; // Default to India country code if 10 digits
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', ZENDER_SECRET);
    params.append('account', ZENDER_ACCOUNT);
    params.append('recipient', cleanRecipient);
    params.append('type', 'text');
    params.append('message', message);

    const response = await fetch(ZENDER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const result = await response.json();
    return { success: response.ok, data: result };
  } catch (error: any) {
    console.error('Zender WhatsApp API Error:', error);
    return { success: false, error: error.message };
  }
}
