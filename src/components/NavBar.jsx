import { NavLink, useLocation } from "react-router-dom";
import GetforceX from "../assets/images/GetforceX.jpeg";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Track route changes

  // Close menu when navigating to another page or clicking the same page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white shadow-sm border-b relative z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={GetforceX} alt="Logo" className="h-16" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-black text-2xl focus:outline-none"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-8 items-start md:items-center text-black absolute md:static left-0 top-full w-full bg-white md:w-auto shadow-md md:shadow-none transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col md:flex-row space-y-2 md:space-y-0 pl-6 md:pl-0`}>
          
          <li>
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-2 hover:text-pink-500 font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aboutus" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-2 hover:text-pink-500 font-medium"
            >
              About Us
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li className="relative">
            <div 
              className="flex items-center space-x-1 hover:text-pink-500 font-medium cursor-pointer px-4 py-2" 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span>Services</span>
              <i className="fas fa-caret-down"></i>
            </div>
            {isServicesOpen && (
              <ul className="md:absolute left-0 bg-white border rounded shadow-lg mt-2 w-56 z-50 top-full pointer-events-auto md:block">
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Website Development</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Mobile App Development</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">iOS Development</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Ecommerce Development</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Salesforce Development</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">UI/UX Design</NavLink></li>
              </ul>
            )}
          </li>

          {/* Industries Dropdown */}
          <li className="relative">
            <div 
              className="flex items-center space-x-1 hover:text-pink-500 font-medium cursor-pointer px-4 py-2" 
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            >
              <span>Industries</span>
              <i className="fas fa-caret-down"></i>
            </div>
            {isIndustriesOpen && (
              <ul className="md:absolute left-0 bg-white border rounded shadow-lg mt-2 w-56 z-50 top-full pointer-events-auto md:block">
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Healthcare</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Manufacturing</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Education</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Travel</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Retail</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Real Estate</NavLink></li>
                <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-pink-100">Ecommerce</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="block px-4 py-2 hover:text-pink-500 font-medium"
            >
              Blog
            </NavLink>
          </li>
        </ul>

        {/* Call Icon and Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-red-500 p-2 rounded-full flex items-center justify-center w-10 h-10">
            <i className="fas fa-phone text-white text-lg"></i> 
          </div>
          <NavLink to="/contactus" className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">Contact Us</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
