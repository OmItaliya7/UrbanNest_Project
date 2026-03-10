import { motion } from "framer-motion";
import { slideFromLeft } from "../utils/animation";

import Section from "../components/common/Section";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

import { useContactForm } from "../hooks/useContactForm";

const Contact = () => {
  const { formData, loading, handleChange, handleSubmit } = useContactForm();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e.currentTarget);
  };

  return (
    <Section>
      <Container>
        <motion.div
          variants={slideFromLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Contact"
            highlight="With Us"
            subtitle="Have questions or want to learn more? Get in touch with us!"
          />

          <form
            onSubmit={onSubmit}
            className="max-w-3xl mx-auto space-y-6"
            aria-label="Contact Form"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              aria-hidden="true"
              tabIndex={-1}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Input
                id="name"
                label="Your Name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                id="email"
                label="Your Email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="input-field"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                aria-label="Send Contact Form"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
