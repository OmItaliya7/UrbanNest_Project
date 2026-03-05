import { slideLeft, slideRight } from "../animation/animation";
import brandImg from "../assets/brand_img.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">

      <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            About <span className="underline font-normal">Our Brand</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Passionate About Properties, Dedicated to Your Vision
          </p>
        </div>

        {/* Content */}
        <div  className="flex flex-col md:flex-row items-center gap-14">

          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src={brandImg}
              alt="brand"
              className="w-full max-w-md object-cover rounded-t-[200px]"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full" >

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">

              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={15} duration={2} />+
                </h3>
                <p className="text-gray-500 text-sm">Years of Excellence</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={12} duration={2} />+
                </h3>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={20} duration={2} />+
                </h3>
                <p className="text-gray-500 text-sm">Mn. Sq. Ft. Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                    <CountUp end={25} duration={2} />+
                </h3>
                <p className="text-gray-500 text-sm">Ongoing Projects</p>
              </div>

            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            {/* Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Learn more
            </button>

          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;