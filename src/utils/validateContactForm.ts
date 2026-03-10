import { ContactForm } from "../types/contact"

export const validateContactForm = (data: ContactForm): string | null => {
  const { name, email, message } = data

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


  if (trimmedName.length < 3) {
    return "Name must be at least 3 characters"
  }

  if (!emailRegex.test(trimmedEmail)) {
    return "Please enter a valid email"
  }

  if (trimmedMessage.length < 10) {
    return "Message must be at least 10 characters"
  }

  return null
}