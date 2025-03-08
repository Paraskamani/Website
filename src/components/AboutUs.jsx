import { useEffect, useState } from "react";
import AboutUsbg from "../assets/images/AboutUsbg.jpg";
import EnterpriseImage from "../assets/images/Enterprise.jpg";
import StartupImage from "../assets/images/Startup.jpg";
import VisionAndMission from "../assets/images/V1.jpg";
import Services from "./Services";
import Hero4 from "./Achivements";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white">
       <div
        className="relative h-[250px] sm:h-[300px] md:h-[450px] w-full bg-no-repeat bg-cover bg-[center_top] md:bg-[center_5%]"
        style={{
          backgroundImage: `url(${AboutUsbg})`,
        }}
      >
        <div className="absolute left-6 sm:left-12 md:left-20 top-1/2 transform -translate-y-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            About Us
          </h1>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 sm:px-6 md:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Your Partner in Customized Web and Mobile Solutions
        </h2>
        <p className="text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
          Established in 2024, GetForceX specializes in delivering customized
          web development solutions. With a proven track record in niche
          technology services, we excel in mobile application development, iOS
          app development, e-commerce development, and Salesforce development.
          By combining technical expertise with a client-focused approach, we
          ensure the delivery of high-quality, tailored results that meet
          specific business needs. Our global presence spans the U.S., UK,
          Canada, UAE, Europe, and beyond.
        </p>
      </div>

      <div className="bg-white py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800">
            We Serve
          </h2>
          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-base sm:text-lg">
            We create powerful web applications designed to deliver exactly what
            your users need. With unique features, an attractive UI/UX, and
            intelligent assistance, our applications empower your business to
            unlock endless opportunities across various segments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 px-4 sm:px-8">
            {/* Startup Section */}
            <div className="relative flex flex-col items-center text-left">
              <div className="w-full h-max relative overflow-hidden rounded-md">
                <p className="absolute text-white inset-0 m-auto text-xl md:text-2xl font-bold flex items-center justify-center bg-black/60">
                  Startup
                </p>
                <img
                  src={StartupImage}
                  alt="Startup"
                  className="rounded-md shadow-md w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <p className="text-gray-600 mt-4 text-center sm:text-left">
                Let us turn your startup idea into a high-performance website
                that attracts customers, converts leads, and accelerates growth.
              </p>
            </div>

            {/* Enterprise Section */}
            <div className="relative flex flex-col items-center text-left">
              <div className="w-full h-max relative overflow-hidden rounded-md">
                <p className="absolute text-white inset-0 m-auto text-xl md:text-2xl font-bold flex items-center justify-center bg-black/60">
                  Enterprise
                </p>
                <img
                  src={EnterpriseImage}
                  alt="Enterprise"
                  className="rounded-md shadow-md w-full h-72 sm:h-80 object-cover"
                />
              </div>
              <p className="text-gray-600 mt-4 text-center sm:text-left">
                We provide top-tier web development services custom-built to
                meet the unique challenges and demands of enterprises in the
                digital age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-gray-900 py-16">
        <div className="relative w-full">
          <div
            className={`relative w-full h-auto md:h-[500px] flex items-center justify-start px-6 sm:px-10 md:px-20 ${
              isMobile ? "bg-gray-900" : "bg-cover bg-center"
            }`}
            style={
              !isMobile
                ? { backgroundImage: `url(${VisionAndMission})`, backgroundSize: "cover", backgroundPosition: "center" }
                : {}
            }
          >
            <div className="bg-black bg-opacity-80 text-white p-6 sm:p-8 md:p-12 rounded-lg max-w-3xl shadow-lg w-full md:w-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                VISION AND MISSION
              </h2>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg">
                At GetForceX, our mission is to exceed customer expectations by
                delivering exceptional web development solutions. Recognized
                globally as a leading web development company, we empower
                startups and enterprises with cutting-edge web applications
                designed for Android and iOS platforms.
              </p>
              <p className="mb-4 sm:mb-6 text-base sm:text-lg">
                Our expert team specializes in creating tailored solutions
                across diverse industries, including advanced websites powered
                by AI, machine learning, and Salesforce, all while adhering to
                strict timelines.
              </p>
              <p className="text-base sm:text-lg">
                Our vision is to enhance the efficiency of the solutions we
                deliver through high-quality enterprise mobility services. Our
                team collaborates closely with clients, offering professional
                consultations to ensure optimized decisions and dependable
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <div className="mb-10">
        <Hero4 />
      </div>
    </div>
  );
};

export default AboutUs;
