import { NavLink } from "react-router-dom";
import StartupImage from "../assets/images/Startup.jpg"; // Replace with correct path
import EnterpriseImage from "../assets/images/Enterprise.jpg"; // Replace with correct path

const StartUpAndEnterpriseSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:px-32">
          <h4 className="text-red-500 font-semibold mb-4 uppercase tracking-wider">
          YOUR DIGITAL FUTURE BEGINS HERE
          </h4>
          <h2 className="text-3xl lg:text-2xl font-semibold text-gray-800 mb-6">
          Top Website Development Company
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
          Recognized globally as a top website development company, 
          we deliver innovative, custom websites that empower businesses. 
          From simple informational websites to complex enterprise solutions, 
          we bring your digital vision to life.
          </p>
          <NavLink
            to="/aboutus"
            className="inline-block border border-gray-800 py-3 px-6 text-gray-800 font-semibold rounded-md hover:bg-gray-800 hover:text-white transition"
          >
            ABOUT COMPANY
          </NavLink>
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Startup Section */}
          <div className="relative flex flex-col items-center text-left">
          <div className="w-full h-max relative overflow-hidden rounded-md">
              <p className="absolute text-white inset-0 m-auto text-2xl font-bold flex items-center justify-center bg-black/60">
                Startup
              </p>
            <img
              src={StartupImage}
              alt="Startup"
              className="rounded-md shadow-md w-full h-48 object-cover"
            />
            </div>
            <p className="text-gray-600 mt-4 ">
              <span></span>
              Let us turn your startup idea into a high-performance website that attracts customers, 
              converts leads, and accelerates growth.
            </p>
          </div>

          {/* Enterprise Section */}
          <div className="relative flex flex-col items-center text-left">
            <div className="w-full h-max relative overflow-hidden rounded-md">
              <p className="absolute text-white inset-0 m-auto text-2xl font-bold flex items-center justify-center bg-black/60">
                Enterprise
              </p>
              <img
                src={EnterpriseImage}
                alt="Enterprise"
                className=" shadow-md w-full h-48 object-cover"
              />
            </div>
            <p className="text-gray-600 mt-4">
            We provide top-tier web development services custom-built to meet the unique 
            challenges and demands of enterprises in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUpAndEnterpriseSection;
