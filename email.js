// Free email alerts via EmailJS (emailjs.com). Fill in your own IDs below.
export const EMAILJS = {
  serviceId: "service_7wdee8q",
  publicKey: "shSkJVjdFyrWK5IGa",
  adminTemplate: "template_fqpdl7a",   // email to you when a booking arrives
  clientTemplate: "template_ghdj7i4", // email to the client when status changes
  adminEmail: "behindthescenes.webpage@gmail.com"
};
const ready = !EMAILJS.publicKey.startsWith("YOUR_");

// Emails are a bonus: a failure never blocks a booking or status change.
async function send(template_id, template_params) {
  if (!ready) return;
  try {
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: EMAILJS.serviceId, template_id, user_id: EMAILJS.publicKey, template_params })
    });
  } catch (e) { /* ignore */ }
}

export const notifyAdmin = b => send(EMAILJS.adminTemplate, {
  to_email: EMAILJS.adminEmail, client_name: b.name || b.email, client_email: b.email,
  package: b.package, date: b.date, message: b.message
});
export const notifyClient = (b, status) => send(EMAILJS.clientTemplate, {
  to_email: b.email, client_name: b.name || b.email, package: b.package, date: b.date, status
});
