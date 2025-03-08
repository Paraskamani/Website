import { FaDesktop, FaUsers, FaTrophy, FaHandshake } from "react-icons/fa";
import Companies from "../assets/images/Companies.webp"; // Replace with correct path

const Achivements = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Companies})` }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black/60 py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Projects Delivered */}
          <div className="flex flex-col items-center">
            <FaDesktop className="text-5xl md:text-6xl mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold">35+</h3>
            <p className="text-base md:text-lg">Projects Delivered</p>
          </div>

          {/* Ongoing Projects */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl md:text-6xl mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold">12+</h3>
            <p className="text-base md:text-lg">Ongoing Projects</p>
          </div>

          {/* Years of Existence */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-5xl md:text-6xl mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold">15+</h3>
            <p className="text-base md:text-lg">Years of Existence</p>
          </div>

          {/* Satisfied Clients */}
          <div className="flex flex-col items-center">
            <FaHandshake className="text-5xl md:text-6xl mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold">98%+</h3>
            <p className="text-base md:text-lg">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
