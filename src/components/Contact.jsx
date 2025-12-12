import React, { useState } from 'react'
import { motion } from "framer-motion";
import Shape1 from "../assets/shape-1.png";
import Shape2 from "../assets/shape-2.png";
import Shape3 from "../assets/shape-3.png";
import Shape4 from "../assets/shape-4.png";
import element1 from "../assets/element1.png";
import element2 from "../assets/element2.png";   
import element3 from "../assets/element3.png";
import element4 from "../assets/element4.png";
import element5 from "../assets/element5.png";
import element6 from "../assets/element6.png";
import element7 from "../assets/element7.png";
import element8 from "../assets/element8.png";

// Animation variants
const imageLeftVariants = {
  hidden: { opacity: 0, x: -120 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
    rotateZ: [0, 3, -5, 0],
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

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
    <section id="contact" className="relative w-screen bg-white min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-0 md:gap-12 py-20 overflow-hidden">
      
      {/* LEFT SHAPES */}
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
        className="pointer-events-none absolute left-35 bottom-45 w-32 max-w-xs"
        variants={imageLeftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      />

      {/* RIGHT SHAPES */}
      <motion.img
        src={Shape3}
        alt=""
        className="pointer-events-none absolute right-34 top-10 w-40 max-w-xs"
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      />

      <motion.img
        src={Shape4}
        alt=""
        className="pointer-events-none absolute right-12 bottom-32 w-32 max-w-xs"
        variants={imageRightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      />

      {/* LEFT CONTENT - HEADING */}
      <motion.div 
        className="text-black flex flex-col justify-center items-center md:items-start mb-10 md:mb-0 md:w-[30%] z-10"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className='uppercase text-[3rem] md:text-[5rem] font-bold text-center md:text-left'>Let's Get In Touch</h1>
      </motion.div>

      {/* RIGHT CONTENT - FORM */}
      <div className="flex justify-center items-center w-full bg-white md:w-auto z-10">
        <form onSubmit={handleSubmit} className="w-full md:w-[40vw]  rounded-lg  p-10">
          
          {/* Full Name Field */}
          <div className="mb-4!">
         
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Enter your full name' 
              className='w-full p-2! rounded-2xl focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition shadow-md'
              required
            />
          </div>

          {/* Email Field */}
         <div className=' flex gap-1 justify-space '>
             <div className="mb-4!">
            
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email' 
              className='w-[19rem] p-2! rounded-2xl focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition shadow-md'
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4!">
            
            <input 
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder='Enter your phone number' 
              className='w-[19rem] p-2! rounded-2xl focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition shadow-md'
              required
            />
          </div>
         </div>

          {/* Message Field */}
          <div className="mb-8!">
         
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message' 
              rows="6"
              className='w-full p-2! rounded-2xl focus:outline-none border-2 border-gray-300 focus:border-blue-500 transition resize-none shadow-md'
              required
            />
          </div>

          {/* Send Button */}
          <button 
            type="submit"
            className='w-full bg-black text-white font-bold text-lg py-3! rounded-lg hover:bg-gray-800 transition duration-300 border-2 border-black'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    <section className=' bg-black w-full h-[60vh] rounded-t-[3rem] flex  flex-col  justify-between   text-white'>
       <div className='px-30! mt-20! flex justify-between items-center '>
            <div className=''>
                <h1 className='text-[8rem] text-transparent font-extrabold [-webkit-text-stroke:0.1px_white] '>Abhishek singh</h1>
            </div>
            <div className=' flex flex-col gap-4'>
              <h3 className='text-2xl text-bold'>Social media</h3>
              <div className='flex flex-col'>
                <a href="https://www.instagram.com/absingh__00/">Instagram</a>
                <a href="https://github.com/Absingh52">github</a>
                <a href="https://www.linkedin.com/in/abhishek-singh-312629323/">linkdin</a>
                
              </div>
            </div>
            <div> 
              <h3 className='text-2xl'>Contact me</h3>
               <a href="" className='lowercase'>Abhisheksingh26460@gmail.com</a>
            </div>
       </div>
       <div className='flex size-48'>
          <img src={element1} alt="" />
          <img src={element2} alt="" />
          <img src={element3} alt="" />
          <img src={element4} alt="" />
          <img src={element5} alt="" />
          <img src={element6} alt="" />
          <img src={element7} alt="" />
          <img src={element8} alt="" />

       </div>
    </section>
    </>
  )
}

export default Contact
