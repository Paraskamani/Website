import ContactUsBg from "../assets/images/ContactUsBg.jpg";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    total: "",
  });

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    setFirstNumber(Math.floor(Math.random() * 20) + 1);
    setSecondNumber(Math.floor(Math.random() * 20) + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctSum = firstNumber + secondNumber;
    if (parseInt(formData.total, 10) !== correctSum) {
      toast.error("Please provide the correct sum for the math question.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    emailjs
      .send("Contact_Us", "template_ljzy2aw", formData, "i9G3IpcnLna3oZsZc")
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            total: "",
          });
          generateRandomNumbers();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section with Left-Aligned Text & Right Image */}
      <div className="relative h-[400px] flex flex-col md:flex-row bg-gray-100">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-32 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">Contact Us For</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Your Project</h2>
        </div>
        <div
          className="w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${ContactUsBg})` }}
        ></div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-4 px-6 text-center md:text-left">
        <div className="container mx-auto text-gray-600">
          <span className="text-gray-500">Home</span> <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Contact Us</span>
        </div>
      </div>

      {/* Contact Form - Styled Like Reference */}
      <section className="py-16 px-4 md:px-0">
        <div className="bg-white py-16 px-6 md:px-10 max-w-4xl mx-auto shadow-md">
          <ToastContainer />

          {/* Heading */}
          <div className="text-center pb-8">
            <h2 className="text-2xl font-semibold">START YOUR NEW PROJECT</h2>
            <p className="text-gray-600">Fill out the form & we’ll be in touch soon!</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>

            {/* Second Row - Phone & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                placeholder="Skype or Phone No"
                value={formData.phone}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded w-full h-32"
              required
            ></textarea>

            {/* Captcha */}
            <div className="flex items-center space-x-2">
              <p className="border p-2 bg-gray-100">{firstNumber} + {secondNumber} =</p>
              <input
                type="text"
                name="total"
                placeholder="Total*"
                value={formData.total}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 w-full">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
