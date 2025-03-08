import { FaLaptopCode, FaMobileAlt, FaApple, FaShoppingCart, FaSalesforce, FaPencilRuler } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        {/* Section Header with Underline */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 relative inline-block">
          GetForceX Provides Services in the <span className="text-red-500">Below Areas</span>
          <span className="block w-20 h-1 bg-red-500 mt-2 mx-auto"></span> {/* Red Underline */}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <service.icon className={`text-6xl mx-auto mb-4 ${service.color}`} />
              <h3 className="text-base sm:text-lg font-medium text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Data
const services = [
  { title: "Website Development", icon: FaLaptopCode, color: "text-red-700" },
  { title: "Mobile App Development", icon: FaMobileAlt, color: "text-blue-600" },
  { title: "iOS Development", icon: FaApple, color: "text-black" },
  { title: "Ecommerce Development", icon: FaShoppingCart, color: "text-green-600" },
  { title: "Salesforce Development", icon: FaSalesforce, color: "text-blue-500" },
  { title: "UI/UX Design", icon: FaPencilRuler, color: "text-purple-600" },
];

export default ServicesSection;
