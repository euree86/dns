import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./nav";
import Footer from "./footer";
import product from "../image/product.png";
import {
  FaCertificate,
  FaLink,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";
// Projects data
const projects = [
  {
    id: 1,
    title: "ERP Software",
    client: "First National Bank",
    services: ["Software", "Security"],
    image:
      "https://cdn.pixabay.com/photo/2019/06/20/17/59/online-banking-4287719_1280.jpg",
  },
  {
    id: 2,
    title: "Nex Courier System",
    client: "City Medical Center",
    services: ["Hardware", "Network"],
    image:
      "https://cdn.pixabay.com/photo/2015/07/10/20/54/labor-840131_960_720.jpg",
  },
  {
    id: 3,
    title: "Retail POS System",
    client: "Urban Retail Chain",
    services: ["Software", "Hardware"],
    image:
      "https://media.istockphoto.com/id/1405734677/photo/close-up-on-a-waitress-using-a-tablet-to-take-an-order-at-a-restaurant.jpg?s=2048x2048&w=is&k=20&c=EAGfO9Sg0Y0PeSlDvjip27YK8kenkl1ccMXg9OQjaRY=",
  },
  {
    id: 4,
    title: "University Cloud Migration",
    client: "State University",
    services: ["Cloud", "Network"],
    image:
      "https://media.istockphoto.com/id/2166444497/photo/cloud-computing-infrastructure-technology-data-system-storage-service-concept-modern-white.jpg?s=2048x2048&w=is&k=20&c=C-G4cvlxdcwXJngrTntVuOx31vQyKzKYiB4jVGdpb58=",
  },
];

const statsData = [
  {
    icon: <FaCertificate className="text-red-600 text-2xl" />,
    value: "100+",
    title: "Reputations Restored",
    description: "With permanent solutions",
  },
  {
    icon: <FaLink className="text-red-600 text-2xl" />,
    value: "98 +",
    title: "Client Satisfaction",
    description: "From search results",
  },
  {
    icon: <FaUserShield className="text-red-600 text-2xl" />,
    value: "100%",
    title: "Custom Approach",
    description: "Tailored to each client",
  },
];

// Clients data
const clients = [
  { name: "First National Bank", logo: "🏦" },
  { name: "City Medical Center", logo: "🏥" },
  { name: "Urban Retail Chain", logo: "🛒" },
  { name: "State University", logo: "🎓" },
  { name: "Metro Transportation", logo: "🚆" },
  { name: "Global Logistics", logo: "🚚" },
  { name: "Tech Innovations", logo: "💻" },
  { name: "Green Energy Solutions", logo: "🌱" },
  { name: "Smart Home Systems", logo: "🏠" },
  { name: "Digital Marketing Agency", logo: "📈" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Portfolio = () => {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="pt-8 bg-gray-100 ">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-4xl">
                <img
                  src={product}
                  alt="IT Solutions on multiple devices"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="text-black space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Enterprise-grade software, hardware, and network services for
                businesses of all sizes
              </h1>
              <p className="text-md text-black leading-relaxed max-w-2xl italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all group rounded-md flex items-center py-2">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
            fill="#F2F2F2"
          ></path>
        </svg>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Stats Boxes */}
          <div className="flex flex-col md:flex-row md:w-1/2 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-start gap-4 hover:shadow-xl 
                transition-shadow duration-300 border-l-4 border-red-600 hover:-translate-y-1"
              >
                <div className="bg-red-100 p-3 rounded-full">{stat.icon}</div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-700 text-lg">{stat.title}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <p className="text-red-600 font-semibold mb-2">OUR NETWORK</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Largest Network Of <br />
              <span className="text-red-600">Anti-Defamation</span> Experts.
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              We've tapped experts from around the globe to create an
              unparalleled network of reputation experts with an unwavering
              passion to succeed. Our team includes former legal professionals,
              cybersecurity experts, and digital marketing specialists.
            </p>
            <button className="group relative border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold overflow-hidden hover:text-white transition duration-300">
              <span className="relative z-10 flex items-center">
                LEARN MORE
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-5" />
              </span>
              <span className="absolute inset-0 bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Projects div */}
      <div className="bg-[#F2F2F2] py-16">
        <div className="container mx-auto px-4 text-center ">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E2939] mb-2">
              Recent Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg  transition-all duration-300 transform  group  overflow-hidden"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex items-start flex-col text-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-red-600 font-medium mb-2">
                    Client: {project.client}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <button className="text-red-600 font-semibold hover:text-red-800 transition duration-300">
                    View details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients div */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-2">
              Trusted By
            </h2>
               <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-2"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations across multiple sectors
            </p>
          </div>
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl mb-2">{client.logo}</div>
                  <p className="text-gray-700 font-medium">{client.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* CTA Section */}
      <div className=" bg-red-800 rounded-xl p-8 text-center container mx-auto my-12 ">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Transform Your IT Infrastructure?
        </h3>
        <p className="text-red-100 mb-6 max-w-2xl mx-auto">
          Our team of experts is ready to assess your needs and provide
          customized software and hardware solutions.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center mx-auto">
          GET STARTED TODAY
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
