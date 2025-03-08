import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"; // Icons for address, phone, and email
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 divide-y-2">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-32 py-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-red-500 font-bold text-2xl sm:text-3xl mb-4">GETFORCEX</h2>
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
            EMPOWERING BUSINESS WITH TECHNOLOGY
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left">
            GetForceX delivers comprehensive website development services tailored
            to your business needs. We design dynamic, user-friendly websites that
            help attract, engage, and retain customers, boosting your digital success.
          </p>
        </div>

        {/* India Office */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">INDIA</h3>
          <p className="text-gray-400 text-sm flex items-start leading-relaxed mb-4">
            <MdLocationOn className="text-red-500 text-5xl sm:text-7xl mr-3" />
            Shakthi Nilaya, Marathahalli Main Road, Bengaluru East, Karnataka - 560037, India.
          </p>
          <p className="text-gray-400 text-sm flex items-center mb-5">
            <MdPhone className="text-red-500 text-2xl sm:text-3xl mr-3" /> +91-704 229 5974
          </p>
          <a href="mailto:info@quytech.com" className="text-gray-400 text-sm flex items-center">
            <MdEmail className="text-red-500 text-2xl sm:text-3xl mr-3" /> info@quytech.com
          </a>
        </div>

        {/* Key Expertise */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">KEY EXPERTISE</h3>
          <ul className="text-gray-400 text-sm space-y-3 text-center sm:text-left">
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>iOS Development</li>
            <li>E-commerce Development</li>
            <li>Salesforce Development</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">RESOURCES</h3>
          <ul className="text-gray-400 text-sm space-y-3 text-center sm:text-left">
            <li>Sitemap</li>
            <li>
              <NavLink to="/contactus" className="hover:text-gray-200">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mx-auto text-center pt-5 text-gray-400 text-sm px-4">
        <p>&copy; {new Date().getFullYear()} GETFORCEX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
