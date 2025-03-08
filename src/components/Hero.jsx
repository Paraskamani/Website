import heroImage from "../assets/images/IndianHero.jpg"; 
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <header className="bg-[#f2e9e0] relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-20 left-40 w-48 h-48 lg:w-96 lg:h-96 rounded-full bg-red-300 opacity-50 z-0"
        animate={{ y: [0, -80, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      ></motion.div>
     

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between pt-16 px-4 lg:px-6 relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-center lg:w-1/2 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
        
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          EMPOWERING BUSINESS  <br /> WITH TECHNOLOGY
          </h1>
          <div className="flex justify-self-center mr-10 lg:justify-start">
        
            <NavLink
              to="/contactus"
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
            >
              Contact Us
            </NavLink>
            </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 pt-10 lg:pt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage} 
            alt="Innovation"
            className="max-w-full lg:max-w-half"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;