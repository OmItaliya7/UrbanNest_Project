import { slideRight } from "../animation/animation";
import { testimonialsData } from "../assets/assets";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">

      <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Title */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Customer <span className="underline font-normal">Testimonials</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real Stories from Those Who Found Home with Us
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonialsData.map((testimonial, index) => (

            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition"
            >

              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>

              {/* Title */}
              <p className="text-gray-500 text-sm mb-3">
                {testimonial.title}
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">

                {[...Array(testimonial.rating)].map((_, i) => (
                  <img
                    key={i}
                    src={assets.star_icon}
                    alt="star"
                    className="w-4 h-4 mx-0.5"
                  />
                ))}

              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Testimonials;