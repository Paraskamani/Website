// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ContactUsHomePage from "./components/ContactUsHomePage";
import Blog from "./components/Blog";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blogpage" element={<Blog />} />
        </Routes>
        <ContactUsHomePage />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
