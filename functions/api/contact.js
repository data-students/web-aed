const escapeHtml = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const sendEmail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Contact Form <hola@aed.cat>',
        to: ['hola@aed.cat'],
        reply_to: email,
        subject: `[Web Contact] ${String(subject ?? '').replace(/[\r\n]+/g, ' ').slice(0, 200)}`,
        html: `
          <h3>New Contact from Website</h3>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (sendEmail.ok) {
      return new Response(JSON.stringify({ message: 'Sent successfully' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const errorData = await sendEmail.text();
      console.error('Email Provider Error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error: ' + err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}