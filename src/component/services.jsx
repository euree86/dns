import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const services = [
  {
    title: "Server and Computer Installation",
    benefits: [
      "Centralized management of data, applications, and resources",
      "Simplifies IT operations with single-point administration",
      "Improved data security and access control",
      "Scalable infrastructure for business growth",
    ],
    rate: "Rs 15,000+",
    icon: "🖥️",
  },
  {
    title: "CCTV Installation",
    benefits: [
      "24/7 surveillance for enhanced security",
      "Remote monitoring capabilities",
      "Deterrent against theft and vandalism",
      "High-resolution video evidence collection",
    ],
    rate: "Rs 12,000+",
    icon: "📹",
  },
  {
    title: "Networking and Troubleshooting",
    benefits: [
      "Reliable and fast network connectivity",
      "Quick resolution of network issues",
      "Optimized network performance",
      "Regular maintenance and updates",
    ],
    rate: "Rs 8,000+",
    icon: "🌐",
  },
  {
    title: "Firewall Configuration and Security",
    benefits: [
      "Protection against cyber threats",
      "Customized security policies",
      "Regular security audits",
      "Data breach prevention",
    ],
    rate: "Rs 10,000+",
    icon: "🛡️",
  },
];

const features = [
  {
    number: "01",
    title: "Service Delivery Timec",
    description:
      "From soothing aloe vera to revitalizing lavender, each element is handpicked.",
  },
  {
    number: "02",
    title: "Certified Professionals",
    description:
      "Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco.",
  },
  {
    number: "03",
    title: "Customer Support",
    description:
      "Experience hair that's not only clean but also deeply nourished and beautifully rejuvenated.",
  },
  {
    number: "04",
    title: "Trust Partner",
    description:
      "We are committed to reducing our carbon footprint. Our packaging is eco-friendly.",
  },
];

const images = [
  "https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/12/15/14/05/home-office-569153_1280.jpg",
];

const contactItems = [
  {
    icon: <IoMdCall />,
    title: "Call for inquiry",
    text: "+257 388-6895",
  },
  {
    icon: <MdEmail />,
    title: "Send us email",
    text: "nepwears@gmail.com",
  },
  {
    icon: <IoTime />,
    title: "Opening hours",
    text: "Mon - Fri: 10AM - 10PM",
  },
  {
    icon: <FaLocationDot />,
    title: "Office",
    text: "Lorem ipsum",
  },
];

const Services = () => {
  return (
    <div className="">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          OUR SERVICES
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            From robust hardware installation to innovative software solutions
          </h1>
          <p className="text-gray-600 mb-6">
            We provide end-to-end IT services that ensure your business operates
            smoothly and securely. Our expert team delivers customized solutions
            that align with your specific requirements and budget.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 self-start">
            Get a Free Consultation
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/00/10/laptop-2586933_1280.jpg"
            alt="IT Services"
            className="w-full h-auto lg:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-12 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center mb-8 md:mb-0 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <div className="text-4xl mb-4">💻</div>
            <p className="text-xl font-bold text-gray-800">Hardware Services</p>
            <p className="text-gray-600 text-center mt-2">
              Reliable installation and maintenance
            </p>
          </div>

          <div className="hidden md:block w-px h-24 bg-gray-300"></div>

          <div className="flex flex-col items-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <div className="text-4xl mb-4">📱</div>
            <p className="text-xl font-bold text-gray-800">Software Services</p>
            <p className="text-gray-600 text-center mt-2">
              Custom solutions for your needs
            </p>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Comprehensive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <h4 className="font-medium text-blue-600 mb-3">Key Benefits</h4>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex lg:justify-between items-center gap-16 ">
                  <button
                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium 
                  lg:py-1 lg:px-4 px-12 rounded-full transition-colors duration-300"
                  >
                    Learn More
                  </button>
                  <p className="font-bold text-gray-800">
                    Starting at {service.rate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* why choose us */}
      <div className="container mx-auto px-4 py-16 mb-12 bg-gradient-to-r from-blue-300 via-white to-white rounded-2xl border-1 border-blue-50 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 my-12">
          {/* Left Side */}
          <div className="flex flex-col gap-16">
            <h2 className="text-3xl font-bold text-gray-800 ">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh f
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="rounded-lg shadow-md object-cover"
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-8">
                <div className="bg-white shadow-md p-2 px-4 rounded-lg text-blue-500 font-bold text-lg">
                  {feature.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* free consultation */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/2 lg:py-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left mb-4">
                You Will Grow, You Will Succeed. We Promise That
              </h2>
              <p className="text-base text-center lg:text-left">
                Pellentesque arcu facilisis nunc mi proin. Dignissim mattisin
                lectus tincidunt tincidunt ultrices. Diam convallis morbi
                pellentesque adipiscing ultrices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between h-full min-h-[180px] p-6 rounded-lg
                 shadow-sm bg-white"
                >
                  <div className="text-[#D2302C] text-3xl">{item.icon}</div>

                  <div className="flex flex-col gap-2 ">
                    <h3 className="font-bold text-lg md:text-xl lg:text-2xl font-[Figtree]">
                      {item.title}
                    </h3>
                    <p className="font-medium text-base md:text-lg lg:text-xl font-[Figtree]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-[#EBEEED] rounded-lg p-6 sm:p-8 md:p-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Contact Info
                </h3>
                <p className="text-base">
                  Nibh dis faucibus proin lacus tristique
                </p>
              </div>

              <form className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="firstname"
                      className="block font-semibold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      placeholder="Your name"
                      className="w-full px-4 py-3  bg-white rounded-md focus:outline-none"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="lastname"
                      className="block font-semibold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your E-mail address"
                    className="w-full px-4 py-3  bg-white rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    className="w-full h-40 px-4  bg-white py-3 rounded-md focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#D2302C] text-white  rounded-md font-semibold
                 hover:bg-white hover:text-[#D2302C] "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
