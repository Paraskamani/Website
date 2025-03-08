import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";

const testimonials = [
  {
    name: "Rachel M",
    text: "Working with GetForceX for our Salesforce implementation was a game-changer for our business. Their team not only streamlined our sales processes but also provided valuable insights through customized dashboards and reports. The migration was seamless, and they ensured our team was thoroughly trained to use the platform effectively. Their expertise and professionalism are unmatched!",
    image: client1,
  },
  {
    name: "James L",
    text: "GetForceX has completely transformed our digital presence with their exceptional UI/UX design services. They understood our brand vision perfectly and created an intuitive, visually appealing, and user-friendly interface for our mobile app. The attention to detail and their commitment to delivering excellence made the entire process smooth and enjoyable. Highly recommended!",
    image: client2,
  },
  {
    name: "Subhash Mehta",
    text: "Our experience with GetForceX for website development has been outstanding. They built a robust, fast-loading, and responsive website that perfectly captures our brand identity. The team’s technical expertise and dedication to meeting our deadlines were impressive. Our website’s performance and user engagement have significantly improved since the launch. Kudos to the GetForceX team!",
    image: client3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-8 lg:px-16 text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Transformational Partnerships: <span className="text-red-500">Hear from Our Clients</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Explore our client testimonials to learn how we have helped hundreds of startups and enterprises leverage technology for their growth and success.
        </p>

        {/* Testimonial Cards */}
        <div className="flex justify-center gap-5 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg px-4 py-4 max-w-md flex flex-col items-center text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
              <h3 className="text-gray-800 font-semibold text-xl">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4">{testimonial.position}</p>
              <p className="text-gray-700 text-l leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;