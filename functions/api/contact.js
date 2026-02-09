export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    
    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response('Missing required fields', { status: 400 });
    }
    
    // Send email using CloudFlare's Email Routing
    await sendEmailViaSMTP(name, email, subject, message);
    
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}

// Helper function to send email via SMTP (email routing setup required)
async function sendEmailViaSMTP(name, email, subject, message) {
  const emailBody = `
    Nou missatge del formulari de contacte AED pel projecte DataTalks:
    
    Nom: ${name}
    Email: ${email}
    Assumpte: ${subject}
    
    Missatge:
    ${message}
    
    ---
    Enviat des del formulari de contacte del lloc web AED
  `;
}