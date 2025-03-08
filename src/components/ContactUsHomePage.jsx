import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope } from "react-icons/fa";
import IndianFlag from "../assets/images/IndianFlag.png";

const ContactUsHomePage = () => {
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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
      .send(
        "Contact_Us",
        "template_ljzy2aw",
        formData,
        "i9G3IpcnLna3oZsZc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
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
        (error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6">
      <ToastContainer />
      <div className="text-center pb-10 w-full">
        <h3 className="font-bold text-3xl sm:text-4xl">Contact Us</h3>
        <p className="text-lg sm:text-xl">You’ll hear from us within one business day.</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:px-32">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Time to plan our next big project!
          </h2>
          <p className="mb-6 text-lg">
            We capture your project vision to transform your brilliant ideas into reality.
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-2">
              <img src={IndianFlag} alt="Indian Flag" className="w-6 h-4" />
              +91-704 229 5974
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              info@quytech.com
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
            Get a Consultation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>
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
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded w-full h-24"
            ></textarea>
            <div className="grid grid-cols-2 gap-4 items-center">
              <p className="text-lg">
                {firstNumber} + {secondNumber} =
              </p>
              <input
                type="text"
                name="total"
                placeholder="Total*"
                value={formData.total}
                onChange={handleChange}
                className="border p-3 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHomePage;
