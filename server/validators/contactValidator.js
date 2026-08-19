export const validateContactInput = (req, res, next) => {
  let { name, email, subject, message } = req.body;

  // Trim inputs and fallback to empty string if not a string
  name = typeof name === 'string' ? name.trim() : '';
  email = typeof email === 'string' ? email.trim() : '';
  subject = typeof subject === 'string' ? subject.trim() : '';
  message = typeof message === 'string' ? message.trim() : '';

  // Validation checks
  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }
  if (name.length < 3) {
    return res.status(400).json({ success: false, message: 'Name must be at least 3 characters.' });
  }

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email address is required.' });
  }
  // Validate email against regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  if (!subject) {
    return res.status(400).json({ success: false, message: 'Subject is required.' });
  }
  if (subject.length < 3) {
    return res.status(400).json({ success: false, message: 'Subject must be at least 3 characters.' });
  }

  if (!message) {
    return res.status(400).json({ success: false, message: 'Message cannot be empty.' });
  }
  if (message.length < 10) {
    return res.status(400).json({ success: false, message: 'Message must be at least 10 characters.' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ success: false, message: 'Message cannot exceed 2000 characters.' });
  }

  // Update req.body with trimmed values
  req.body.name = name;
  req.body.email = email;
  req.body.subject = subject;
  req.body.message = message;

  next();
};
