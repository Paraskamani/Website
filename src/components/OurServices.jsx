import {
  FaMobileAlt,
  FaLaptopCode,
  FaApple,
  FaShoppingCart,
  FaSalesforce,
  FaPencilRuler,
} from "react-icons/fa"; // Updated icons

const OurServices = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 inline-block py-2 px-4 rounded-md">
          Our <span className="text-red-500">Services</span>
        </h2>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Website Development */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaLaptopCode className="text-red-700 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Website Development</h3>
            <p className="text-gray-700">
              Achieve bespoke website development that harmonizes creativity with functionality.
              Our services focus on modern designs, mobile optimization, and superior performance.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaMobileAlt className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
            <p className="text-gray-700">
              We turn your vision into powerful mobile apps with smooth performance and modern designs,
              ensuring tailored functionalities for every device.
            </p>
          </div>

          {/* iOS Development */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaApple className="text-black text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">iOS Development</h3>
            <p className="text-gray-700">
              We offer expert iOS app development, focusing on delivering user-friendly, robust,
              and high-performance applications optimized for all Apple devices.
            </p>
          </div>

          {/* Ecommerce Development */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaShoppingCart className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Ecommerce Development</h3>
            <p className="text-gray-700">
              We build dynamic and scalable e-commerce websites with intuitive UI/UX and
              secure payment gateways to enhance customer experiences and drive sales.
            </p>
          </div>

          {/* Salesforce Development */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaSalesforce className="text-blue-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Salesforce Development</h3>
            <p className="text-gray-700">
              GetForceX delivers tailored Salesforce development solutions that optimize sales,
              marketing, and customer service with custom apps and integrations.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaPencilRuler className="text-purple-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-700">
              Our user-centric UI/UX designs ensure aesthetic appeal and seamless navigation,
              enhancing engagement and delivering superior user experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
