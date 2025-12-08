import React from "react";
import { motion } from "framer-motion";

import Shape1 from "../assets/shape-1.png"; // left-top
import Shape2 from "../assets/shape-2.png"; // left-bottom
import Shape3 from "../assets/shape-3.png"; // right-top
import Shape4 from "../assets/shape-4.png"; // right-bottom

// IMAGES
// IMAGES
const imageLeftVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    // small continuous movement
    y: [0, -10, 0],
    rotateZ: [0, 3, -5, 0],
    transition: {
      // entry (slide in + fade)
      opacity: {
        duration: 0.9,
        delay: 0.2 + i * 0.25,
        ease: "easeOut",
      },
      x: {
        duration: 1.2,
        delay: 0.2 + i * 0.25,
        ease: "easeOut",
      },
      // looped motion (runs after it’s visible)
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      rotateZ: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  }),
};

const imageRightVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
    rotateZ: [0, -3, 3, 0],
    transition: {
      opacity: {
        duration: 0.9,
        delay: 0.2 + i * 0.25,
        ease: "easeOut",
      },
      x: {
        duration: 1.2,
        delay: 0.2 + i * 0.25,
        ease: "easeOut",
      },
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      rotateZ: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  }),
};


// CONTENT
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,            // wait a bit before text starts
      duration: 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.35, // heading → para → para → button
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen  w-full bg-black text-white overflow-hidden flex flex-col items-center  px-20!important "
    >
      {/* LEFT IMAGES */}
      <motion.img
        src={Shape1}
        alt=""
        className="pointer-events-none absolute left-4 top-12 w-40 max-w-xs"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      />

      <motion.img
        src={Shape2}
        alt=""
        className="pointer-events-none absolute left-12 bottom-30 w-32 max-w-xs"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      />

      {/* RIGHT IMAGES */}
      <motion.img
        src={Shape3}
        alt=""
        className="pointer-events-none absolute right-4 top-10 w-40 max-w-xs"
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      />

      <motion.img
        src={Shape4}
        alt=""
        className="pointer-events-none absolute right-28 bottom-50 w-36 max-w-xs"
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      />

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 max-w-6xl flex flex-col items-center gap-10 text-center "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          className="text-[6rem]  font-extrabold tracking-[0.1em] mt-15! mb-6!"
          variants={child}
        >
          ABOUT ME
        </motion.h1>

       <motion.div  className="w-[50%]">
         <motion.p
          className="text-[1em] md:text-lg leading-relaxed text-gray-200 mb-4"
          variants={child}
        >
          Hi, I’m Abhishek Singh , a MERN stack developer who loves building backend systems with JavaScript. 

        </motion.p>
         <motion.p
          className="text-base md:text-lg leading-relaxed text-gray-300 mb-8"
          variants={child}
        >
        I enjoy solving problems, exploring new technologies, and improving the way things work behind the scenes.
I completed my BCA, have strong DSA fundamentals, and I’m currently learning TypeScript to level up my full-stack skills.
        </motion.p>
       </motion.div>

       

        <motion.button
          className="inline-flex items-center justify-center px-8! py-3! rounded-full bg-linear-to-r from-pink-500 to-purple-500 text-sm md:text-base font-semibold shadow-lg"
          variants={child}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          CONTACT ME
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
