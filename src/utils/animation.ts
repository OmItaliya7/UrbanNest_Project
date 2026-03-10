import { Variants } from "framer-motion";

export const slideFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

export const slideFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};
