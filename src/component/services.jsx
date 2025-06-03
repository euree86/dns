import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaServer, FaShieldAlt, FaNetworkWired, FaVideo } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
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
    icon: <FaServer className="text-4xl text-red-600" />,
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
    icon: <FaVideo className="text-4xl text-red-600" />,
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
    icon: <FaNetworkWired className="text-4xl text-red-600" />,
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
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
  },
];

const features = [
  {
    number: "01",
    title: "Fast Service Delivery",
    description:
      "We guarantee quick response times and efficient service completion to minimize your downtime.",
  },
  {
    number: "02",
    title: "Certified Professionals",
    description:
      "Our team consists of highly trained and certified IT experts with years of industry experience.",
  },
  {
    number: "03",
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance to address your IT emergencies whenever they occur.",
  },
  {
    number: "04",
    title: "Trusted Partner",
    description:
      "We build long-term relationships based on reliability, transparency, and exceptional service.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
];

const contactItems = [
  {
    icon: <IoMdCall className="text-3xl" />,
    title: "Call for inquiry",
    text: "+257 388-6895",
  },
  {
    icon: <MdEmail className="text-3xl" />,
    title: "Send us email",
    text: "nepwears@gmail.com",
  },
  {
    icon: <IoTime className="text-3xl" />,
    title: "Opening hours",
    text: "Mon - Fri: 10AM - 10PM",
  },
  {
    icon: <IoLocationSharp className="text-3xl" />,
    title: "Office",
    text: "Kathmandu, Nepal",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 mt-20">
      {/* Hero Section */}
      <Nav />
      <div className="relative text-black">
        <img
          src="https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_1280.jpg"
          alt=""
          className="w-full h-[800px]"
        />
        <div className="bg-red-50 z-10 absolute inset-0 w-full opacity-70"></div>
        <div className="absolute top-36 z-50 left-36">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">OUR SERVICES</h1>
          <div className="flex justify-start">
            <div className="w-24 h-1 bg-red-600 mb-12"></div>
          </div>
          <h2 className="text-2xl md:text-2xl font-bold text-red-700 mb-6 max-w-xl">
            From robust hardware installation to innovative software solutions
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-xl">
            We provide end-to-end IT services that ensure your business operates
            smoothly and securely. Our expert team delivers customized solutions
            that align with your specific requirements and budget.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get a Free Consultation
          </button>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Service Categories
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl  hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaServer className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Hardware Services
                </h3>
              </div>
              <p className="text-gray-600">
                Reliable installation, maintenance, and support for all your
                hardware needs including servers, workstations, and peripherals.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-red-600">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Software Services
                </h3>
              </div>
              <p className="text-gray-600">
                Custom software solutions, security configurations, and system
                optimizations tailored to your business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Comprehensive Services
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="mr-6">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-red-600 mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                      className="bg-red-100 hover:bg-red-600 hover:text-white text-red-700 font-medium 
                      py-2 px-6 rounded-full transition-all duration-300"
                    >
                      Learn More
                    </button>
                    <p className="font-bold text-gray-800">
                      Starting at{" "}
                      <span className="text-red-600">{service.rate}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Our IT Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business understanding to
                deliver solutions that drive your success. Our commitment to
                excellence ensures you get the best service every time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={src}
                      alt={`Service ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border-t-4 border-red-600"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 text-red-600 font-bold text-lg px-4 py-2 rounded-full">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-b from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Contact us today for a free consultation and let's discuss how we
              can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-red-600">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-black">
                          {item.title}
                        </h3>
                        <p className="font-medium text-black">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.588953931806!2d85.33417710942105!3d27.693047176091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854352dab33%3A0x6ccf7b5fa93ba745!2sD.N.S%20Technology%20Pvt.%20Ltd!5e1!3m2!1sen!2sus!4v1745391999780!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                <p className="mb-6">We'll get back to you within 24 hours</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
