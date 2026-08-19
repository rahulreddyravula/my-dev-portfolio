import Contact from '../models/Contact.js';

// In-memory cache to detect duplicate submissions within 60 seconds
const recentSubmissions = new Map();

export const createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message, website } = req.body;

    // 1. Honeypot spam protection
    if (website) {
      console.log('Spam attempt blocked silently via honeypot.');
      // Return 201 Created to deceive spam bots
      return res.status(201).json({
        success: true,
        message: 'Message sent successfully.'
      });
    }

    // 2. Duplicate submission check (based on IP, Email, and Message)
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const submissionKey = `${ip}-${email.toLowerCase()}-${message}`;
    const now = Date.now();

    if (recentSubmissions.has(submissionKey)) {
      const lastTime = recentSubmissions.get(submissionKey);
      if (now - lastTime < 60000) { // 60-second window
        return res.status(409).json({
          success: false,
          message: 'Duplicate submission detected. Please wait a minute before submitting again.'
        });
      }
    }
    
    // Store/update submission timestamp
    recentSubmissions.set(submissionKey, now);

    // Clean up from memory after 1 minute
    setTimeout(() => {
      recentSubmissions.delete(submissionKey);
    }, 60000);

    // 3. Save contact message to MongoDB
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    await contact.save();
    console.log(`Contact message saved successfully from email: ${email}`);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully.'
    });
  } catch (error) {
    next(error);
  }
};
