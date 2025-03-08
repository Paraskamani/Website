// import CompanyInfo from "../components/CompanyInfo";
import ContactUs from "../components/ContactUsHomePage";
import Hero from "../components/Hero";
import StartUpAndEnterpriseSection from "../components/StartUpAndEnterpriseSection";
import OurServices from "../components/OurServices";
import Achivements from "../components/Achivements";
import Testimonials from "../components/Testimonials";
import Hero6 from "../components/Hero6";


const Home = () => {
  return (
    <div>
      <Hero />
      <StartUpAndEnterpriseSection />
      <OurServices />
      <Achivements />
      <Testimonials />
      {/* <Hero6 /> */}
      {/* <CompanyInfo /> */}
    </div>
  );
};

export default Home;
