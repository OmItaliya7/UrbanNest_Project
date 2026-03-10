import { ContactForm } from "../types/contact"

export const validateContactForm = (data: ContactForm): string | null => {
  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (name.length < 3) {
    return "Name must be at least 3 characters"
  }

  if (!emailRegex.test(email)) {
    return "Please enter a valid email"
  }

  if (message.length < 10) {
    return "Message must be at least 10 characters"
  }

  return null
}