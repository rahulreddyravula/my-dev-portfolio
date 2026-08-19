export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field (hidden from users, targeted at spam bots)
}

export type FormState = ContactFormData;

export interface ContactResponse {
  success: boolean;
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

/**
 * Submits the contact form data to the Express backend API.
 * Handles server and validation errors gracefully.
 */
export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    // If it's a validation error or user-facing issue (e.g. 400 or 409), raise with the custom message
    if (response.status === 400 || response.status === 409) {
      throw new Error(result.message || 'Please check your inputs and try again.');
    }
    // For other statuses (e.g. 500), throw the standard fallback error
    throw new Error('Unable to send your message right now. Please try again.');
  }

  return result;
};
