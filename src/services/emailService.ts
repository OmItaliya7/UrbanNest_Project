import emailjs from "@emailjs/browser";
import { ContactForm } from "../types/contact";

export const sendEmail = async (data: ContactForm) => {
  if (!navigator.onLine) {
    throw new Error("Network error. Please check your internet connection.");
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    );

    return response;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};
