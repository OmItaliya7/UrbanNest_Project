import { projectsData, assets } from "../assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../animation/animation";

const Projects = () => {

  const [index, setIndex] = useState(0);

  const cardWidth = 260; 

 const nextSlide = () => {
  if (index === projectsData.length - 1) {
    setIndex(0);
  } else {
    setIndex(index + 1);
  }
};

const prevSlide = () => {
  if (index === 0) {
    setIndex(projectsData.length - 1);
  } else {
    setIndex(index - 1);
  }
};

  return (
    <section id="projects" className="py-20 bg-gray-50">

      <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
          </h2>

          <p className="text-gray-500 mt-4">
            Crafting Spaces, Building Legacies—Explore Our Portfolio
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mb-8">

          <button
            onClick={prevSlide}
            className="p-3 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <img src={assets.left_arrow} className="w-4"/>
          </button>

          <button
            onClick={nextSlide}
            className="p-3 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            <img src={assets.right_arrow} className="w-4"/>
          </button>

        </div>

        {/* Slider */}
        <div className="overflow-hidden">

          <motion.div
            className="flex gap-8"
            animate={{ x: -index * cardWidth }}
            transition={{ duration: 0.5 }}
          >

            {projectsData.map((project, i) => (

              <div
                key={i}
                className="min-w-75 md:min-w-[320px] lg:min-w-[320px] relative"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-95 object-cover rounded-md"
                />

                {/* Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white shadow-lg p-4 rounded-md">

                  <h3 className="font-semibold text-lg">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {project.price} | {project.location}
                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
};

export default Projects;