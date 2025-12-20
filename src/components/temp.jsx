import React from 'react'
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { IoMdArrowDown } from "react-icons/io";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import heroImage from '../assets/image.png';
import About from './About';
import image from '../assets/08.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.7,
    },
  },
};

const navVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.15 + i * 0.12,
    },
  }),
};

const Hero = () => {
  return (
    <>
    <div className="hero   ">
        
              <motion.nav 
                className="w-full h-[8vh]  font-semibold text-xl text-white flex justify-between mb-10! pt-7!  px-[10rem]! items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  href="#about" 
                  className="nav-link hover:text-gray-400 transition-all duration-300 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  variants={navVariants}
                >
                  About
                </motion.a>
                <motion.a 
                  href="#skills" 
                  className="nav-link hover:text-gray-400 transition-all duration-300 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  variants={navVariants}
                >
                  Skills
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className="nav-link hover:text-gray-400 transition-all duration-300 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  variants={navVariants}
                >
                  Project
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="nav-link hover:text-gray-400 transition-all duration-300 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  variants={navVariants}
                >
                  Contact
                </motion.a>
              </motion.nav>

              <motion.div 
                className="w-full    h-full flex px-20!  justify-start items-center   "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className=" flex flex-col border-2  px-! ml-20! py-2! w-[50%]   "
                  variants={itemVariants}
                >
                <motion.h1 
                  className="text-white font-bold text-[6rem] z-10"
                  variants={itemVariants}
                >
                  HI, I'M ABHISHEK 
                </motion.h1>
                <motion.div 
                  className=" text-white w-[80%] tracking-wider text-lg  "
                  variants={itemVariants}
                >
                  a Mern stack developer who loves building backend systems. I work with JavaScript, Node.js, Express, MongoDB, and enjoy creating fast, scalable, and reliable backend architectures. I also understand frontend workflows, but my real strength and passion lie in backend problem-solving, APIs, and system design.
                </motion.div>

                </motion.div>
               
              </motion.div>
             
                
                  <motion.img 
                    src={image} 
                    className="absolute bottom-0 right-[10%] w-[33%]  " 
                    alt="" 
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                  />
                
                
              
    </div>
    <About/>
    </>
  );
};

export default Hero;
