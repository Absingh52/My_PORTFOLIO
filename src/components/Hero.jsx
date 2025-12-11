import React from 'react'
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
const Hero = () => {
  return (
    <>
    <div className="hero   ">
        
              <nav className="w-full h-[8vh]  font-semibold text-xl text-white flex justify-between mb-10! pt-4!  px-[10rem]! items-center">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Project</a>
                <a href="#contact">Contact</a>
              </nav>

              <div className="w-full    h-full flex px-20!  justify-start items-center   ">
                <div className=" flex flex-col border-2  px-! ml-20! py-2! w-[50%]   ">
                <h1 className="text-white font-bold text-[6rem] z-10">HI, I'M ABHISHEK </h1>
                <div className=" text-white w-[80%] tracking-wider text-lg  ">a Mern stack developer who loves building backend systems. I work with JavaScript, Node.js, Express, MongoDB, and enjoy creating fast, scalable, and reliable backend architectures. I also understand frontend workflows, but my real strength and passion lie in backend problem-solving, APIs, and system design.</div>

                </div>
               
              </div>
              <div className="">
                
                  <img src={image} className="absolute bottom-0 right-[10%] w-[37%]  " alt="" />
                
                
              </div>
    </div>
    <About/>
    </>
  );
};

export default Hero;
