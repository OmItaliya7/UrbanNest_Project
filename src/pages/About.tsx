import brandImg from "../assets/images/common/brand_img.webp";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { slideFromRight } from "../utils/animation";

import Section from "../components/common/Section";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

const About = () => {
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
            title="About"
            highlight="Our Brand"
            subtitle="Passionate About Properties, Dedicated to Your Vision"
          />

          {/* Content */}
          <div className="flex flex-col items-center md:flex-row gap-14">
            {/* Image */}
            <div className="flex justify-center w-full md:w-1/2">
              <img
                src={brandImg}
                alt="brand"
                loading="lazy"
                className="w-full max-w-md object-cover rounded-t-[200px]"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={15} duration={2} />+
                  </h3>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={12} duration={2} />+
                  </h3>
                  <p className="text-sm text-gray-500">Projects Completed</p>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={20} duration={2} />+
                  </h3>
                  <p className="text-sm text-gray-500">Mn. Sq. Ft. Delivered</p>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={25} duration={2} />+
                  </h3>
                  <p className="text-sm text-gray-500">Ongoing Projects</p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* Button */}
              <Button>Learn more</Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;