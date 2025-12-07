import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";


const Hero = () => {
  return (
    <div className="hero flex">
      <img src=''></img>

              {/* LEFT NAVIGATION BUTTONS */}
      <div className="nav_buttons bg-[#D7D7D7] font-bold text-[0.8rem] w-[12vw] h-screen">
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item-wrapper">
              <a href="#home" className="nav-item">
                <span className="nav-item__icon">
                  <AiOutlineHome />
                </span>
                <span className="nav-item__label">Home</span>
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="#about" className="nav-item">
                <span className="nav-item__icon">
                  <IoPerson />
                </span>
                <span className="nav-item__label">About</span>
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="#skills" className="nav-item">
                <span className="nav-item__icon">
                  <CiFileOn />
                </span>
                <span className="nav-item__label">Skills</span>
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="#projects" className="nav-item">
                <span className="nav-item__icon">
                  <GrProjects />
                </span>
                <span className="nav-item__label">Projects</span>
              </a>
            </li>
            <li className="nav-item-wrapper">
              <a href="#contact" className="nav-item">
                <span className="nav-item__icon">
                  <MdOutlineConnectWithoutContact />
                </span>
                <span className="nav-item__label">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>


      {/* LEFT HERO CONTENT */}
      <div className="hero-left w-[50%] h-screen flex justify-center items-center">
        <div className="w-[36vw] h-[40vh] flex flex-col justify-center gap-4">

          <h1 className="text-[2rem] - font-semibold">
            Hi, I am
          </h1>

          <div className="flex flex-col gap-1">
            <h1 className="text-[3rem] font-bold">Abhishek Singh</h1>
            <h3 className="text-[1rem] font-semibold">Software Engineer</h3>
          </div>
<div className="flex items-center gap-6 ">
  
  <div className="icon-box">
    <a href="https://github.com/Absingh52">
      <IoLogoGithub className="icon-rotate" />
    </a>
  </div>

  <div className="icon-box">
    <a href="https://www.linkedin.com/in/abhishek-singh-312629323/">
      <BsLinkedin className="icon-rotate" />
    </a>
  </div>

  <div className="icon-box">
    <a href="">
      <BiLogoGmail className="icon-rotate" />
    </a>
  </div>

</div>


        </div>
      </div>

      {/* RIGHT SIDE (ON TOP OF BLACK TILTED BACKGROUND) */}
      <div className="hero-right w-[50%] h-screen flex items-end justify-center">
        {/* Insert your future image or content here */}
      </div>

    </div>
  );
};

export default Hero;
