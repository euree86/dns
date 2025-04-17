import React from "react";
import { FaBus } from "react-icons/fa";

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

const choose = [
  {
    title: "Service Delivery Time",
    icon: <FaBus />,
  },

  {
    title: "Certified Professionals",
    icon: null,
  },

  {
    title: "Customer Support",
    icon: null,
  },

  {
    title: "Trust Partner",
    icon: null,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50">
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
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine quality, expertise and outstanding service to deliver
            exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {choose.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 rounded-xl "
              >
                <div className="text-blue-600 text-2xl">{item.icon}</div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg"
              alt="Why choose us illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
