import MarksSpencer from "../assets/images/MarksSpencer.jpg";
import HPLogo from "../assets/images/HPLogo.png";
import ExxonMobil from "../assets/images/ExxonMobil.png";
import NTPC from "../assets/images/NPTC.png";

const logos = [
  { src: MarksSpencer, alt: "Marks & Spencer" },
  { src: HPLogo, alt: "HP Logo" },
  { src: ExxonMobil, alt: "Exxon Mobil" },
  { src: NTPC, alt: "NTPC" },
];

const Hero6 = () => {
  return (
    <section
      className="py-16 bg-gray-50"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-red-500">Clients</span>
        </h2>

        {/* Scrolling Logos */}
        <div className="overflow-hidden relative py-8">
          <div
            className="flex"
            style={{
              display: "flex",
              animation: "scroll 25s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicating the logos to create an infinite loop */}
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex justify-center items-center mx-8"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Keyframes for Scrolling */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero6;
