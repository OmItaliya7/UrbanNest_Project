import { testimonialsData } from "../data/testimonials";
import { motion } from "framer-motion";
import starIcon from "../assets/images/testimonials/star_icon.webp";
import { slideFromRight } from "../utils/animation";

import Section from "../components/common/Section";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <motion.div
          variants={slideFromRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Customer"
            highlight="Testimonials"
            subtitle="Real Stories from Those Who Found Home with Us"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="text-center card">
                {/* Profile Image */}
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  loading="lazy"
                  className="object-cover w-20 h-20 mx-auto mb-4 rounded-full"
                />

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h3>

                {/* Role */}
                <p className="mb-3 text-sm text-gray-500">
                  {testimonial.title}
                </p>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <img
                      key={i}
                      src={starIcon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-4 h-4 mx-0.5"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials;
