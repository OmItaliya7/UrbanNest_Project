import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { fadeIn } from "../../utils/animation";

import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/header_img.webp"
        alt="Modern house background"
        loading="eager"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <Container className="relative z-10">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="inline-block max-w-3xl pt-20 text-5xl font-semibold sm:text-6xl md:text-[82px]">
            Explore Homes that fit your dreams
          </h2>

          <div className="flex justify-center gap-6 mt-16">
            <NavLink to="/projects">
              <Button variant="outline">Projects</Button>
            </NavLink>

            <NavLink to="/contact">
              <Button>Contact Us</Button>
            </NavLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;