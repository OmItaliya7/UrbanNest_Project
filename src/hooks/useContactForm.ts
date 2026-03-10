import { useState, useCallback, use } from "react";
import toast from "react-hot-toast";
import { validateContactForm } from "../utils/validateContactForm";
import { sendEmail } from "../services/emailService";
import { ContactForm } from "../types/contact";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

//   handle form submission

  const handleSubmit = async (form: HTMLFormElement) => {
    if (loading) return;

    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)
      ?.value;

    if (honeypot) return;

    const error = validateContactForm(formData);

    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      await sendEmail(formData);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      if (!navigator.onLine) {
        toast.error("Network error. Please check your internet connection.");
        return;
      }

      if (error instanceof Error) {
        console.error(error.message);
      }

      if (typeof error === "object" && error !== null && "status" in error) {
        const err = error as { status?: number };

        if (err.status === 400) {
          toast.error("Invalid form data.");
        } else if (err.status === 500) {
          toast.error("Email service unavailable.");
        } else {
          toast.error("Something went wrong.");
        }
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
};
