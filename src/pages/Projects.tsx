import { projectsData } from "../data/projects";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { slideFromLeft } from "../utils/animation";

import Section from "../components/common/Section";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

const Projects = () => {

  const [index, setIndex] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 32); 
    }
  }, []);

  const nextSlide = () => {
    setIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
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
            title="Projects"
            highlight="Completed"
            subtitle="Crafting Spaces, Building Legacies—Explore Our Portfolio"
          />

          {/* Arrows */}
          <div className="flex justify-end gap-3 mb-8">
            <button
              aria-label="Previous project"
              onClick={prevSlide}
              className="p-3 transition bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <FaAngleLeft />
            </button>

            <button
              aria-label="Next project"
              onClick={nextSlide}
              className="p-3 transition bg-gray-100 rounded-md hover:bg-gray-200"
            >
              <FaAngleRight />
            </button>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: -index * cardWidth }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projectsData.map((project, i) => (
                <div
                  key={project.id}
                  ref={i === 0 ? cardRef : null}
                  className="min-w-[320px] relative"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="object-cover w-full rounded-md h-95"
                  />

                  <div className="absolute p-4 bg-white rounded-md shadow-lg bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {project.price} | {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;