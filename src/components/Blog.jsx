import BlogImage from "../assets/images/BlogImage.png";

const BlogPage = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col justify-center items-center text-center px-6 bg-blue-900 text-white shadow-lg"
        style={{ backgroundImage: `url(${BlogImage})` }}
      ></div>

      <div className="container mx-auto pt-16 pb-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to GetForceX: Your Partner in Customized Web and Mobile
          Solutions
        </h1>
        <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed">
          At GetForceX, we understand that each business is unique, and so are
          its digital needs. Founded in 2024, our mission is to help businesses
          realize their true potential by providing tailored web and mobile
          solutions that drive growth and innovation. With a strong focus on
          delivering high-quality, customized results, we’ve quickly become a
          trusted partner for companies across the U.S., UK, Canada, UAE,
          Europe, and beyond.
        </p>
      </div>

      <div className="container mx-auto py-2 px-6 text-left">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Expertise
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We specialize in cutting-edge technology services, from mobile app
          development to Salesforce solutions, e-commerce development, and iOS
          app development. Our team of skilled IT professionals brings deep
          technical expertise and a client-focused approach, ensuring that each
          project is crafted to meet the unique needs of your business.
          <br />
          <br />
          Whether you're looking to develop a powerful web application, build an
          intuitive mobile app, or launch a robust e-commerce platform,
          GetForceX is here to turn your vision into reality. We offer a
          comprehensive suite of services, including:
        </p>

        <ul className="mt-6 text-gray-700 list-disc list-inside max-w-3xl mx-auto text-left leading-relaxed">
          <li>
            <strong>Website Development:</strong> Crafting responsive,
            functional, and visually appealing websites that provide the best
            user experience.
          </li>
          <li>
            <strong>Mobile App Development:</strong> Designing seamless mobile
            applications for both Android and iOS platforms that boost
            engagement and performance.
          </li>
          <li>
            <strong>iOS Development:</strong> Delivering high-quality,
            feature-rich iOS applications built to maximize performance and user
            satisfaction.
          </li>
          <li>
            <strong>E-commerce Development:</strong> Helping businesses create
            powerful, scalable e-commerce platforms that drive sales and
            customer loyalty.
          </li>
          <li>
            <strong>Salesforce Development:</strong> Offering custom Salesforce
            solutions to streamline business operations and drive customer
            success.
          </li>
          <li>
            <strong>UI/UX Design:</strong> Designing user interfaces and
            experiences that are intuitive, visually stunning, and optimized for
            functionality.
          </li>
        </ul>
      </div>

      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
            We cater to a diverse range of industries, including:
          </p>
          <ul className="mt-6 text-gray-700 list-disc list-inside max-w-3xl mx-auto text-left leading-relaxed">
            <li>
              <strong>Healthcare</strong>
            </li>
            <li>
              <strong>Manufacturing</strong>
            </li>
            <li>
              <strong>Education</strong>
            </li>
            <li>
              <strong>Travel</strong>
            </li>
            <li>
              <strong>Retail</strong>
            </li>
            <li>
              <strong>Real Estate</strong>
            </li>
            <li>
              <strong>E-commerce</strong>
            </li>
          </ul>
        </div>
      </div>

           <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Mission and Vision
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>At GetForceX, our core mission is simple:</strong> to exceed
            customer expectations by delivering exceptional web and mobile
            solutions that make a real difference. Our vision is to enhance the
            efficiency and effectiveness of every solution we deliver, ensuring
            that our clients’ businesses not only thrive but lead in their
            respective industries.
            <br />
            <br />
            We work closely with our clients, offering personalized
            consultations to ensure the best decisions are made, while adhering
            to strict timelines. Our focus is on empowering businesses with the
            tools and technology they need to succeed in an ever-evolving
            digital world.
          </p>
        </div>
      </div>

      {/* 🔹 Added the Missing Sections Below Mission and Vision */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            A Global Presence with a Local Touch
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With our offices spanning across key regions including the U.S., UK,
            Canada, UAE, India, and Europe, we bring global expertise with a
            personalized, local touch. No matter where you're located, GetForceX
            is committed to delivering solutions that meet your specific
            business needs, ensuring you stay ahead in an increasingly
            competitive market.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Commitment to Innovation and Excellence
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are driven by our commitment to innovation and the desire to
            simplify, improve, and protect the digital lives of our clients.
            Through the intelligent use of AI, machine learning, and other
            advanced technologies, we aim to provide solutions that not only
            meet but exceed the expectations of businesses worldwide.
          </p>
          <br />
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At GetForceX, we don’t just create digital solutions; we build
            long-lasting partnerships. With a focus on reliability, quality, and
            dedication, we strive to make a difference in the businesses we
            serve, helping them achieve success and unlock new opportunities.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            If you're ready to take your business to the next level with
            customized web and mobile solutions, GetForceX is here to help.
            Let’s work together to turn your ideas into innovative, digital
            products that will drive growth and success. <br />
            <br />
            <strong>Reach out to us today, and let's start building the future you envision.</strong>
          </p>
        </div>
      </div>

      {/* ✅ Keeping FAQs Below as You Requested */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
            {[
              {
                q: "Who is GetForceX?",
                a: "GetForceX is a leading provider of customized web and mobile solutions, founded in 2024.",
              },
              {
                q: "What services does GetForceX offer?",
                a: "We offer website development, mobile app development, iOS development, e-commerce solutions, Salesforce solutions, and UI/UX design.",
              },
              {
                q: "Where is GetForceX located?",
                a: "We have offices in Bengaluru, India, along with locations in the U.S., UK, Canada, UAE, and Europe.",
              },
              {
                q: "What industries does GetForceX serve?",
                a: "We cater to industries like Healthcare, Manufacturing, Education, Travel, Retail, Real Estate, and E-commerce.",
              },
              {
                q: "How does GetForceX ensure project success?",
                a: "By offering personalized consultations, adhering to strict timelines, and delivering high-quality, customized results.",
              },
              {
                q: "What is GetForceX's approach to innovation?",
                a: "We leverage AI, machine learning, and advanced technologies to exceed client expectations.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
