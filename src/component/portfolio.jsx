"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./nav";
import Footer from "./footer";
import portfolio from "../image/portfolio.png";
import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaLink,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  zoomIn,
  slideIn,
  fadeIn,
  staggerContainer,
  scaleIn,
  rotateIn,
  bounceIn,
  slideUp,
  flip,
} from "../variants";

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
    icon: <FaCertificate className="text-red-600 text-xl sm:text-2xl" />,
    value: "100+",
    title: "Reputations Restored",
    description: "With permanent solutions",
  },
  {
    icon: <FaLink className="text-red-600 text-xl sm:text-2xl" />,
    value: "98 +",
    title: "Client Satisfaction",
    description: "From search results",
  },
  {
    icon: <FaUserShield className="text-red-600 text-xl sm:text-2xl" />,
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
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Portfolio = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={zoomIn(0.2, 0.8)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-2/3 max-w-lg">
                <img
                  src={portfolio || "/placeholder.svg"}
                  alt="IT Solutions on multiple devices"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3, 0.8)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-black space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <motion.h1
                variants={slideUp(0.4, 0.8)}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                Enterprise-grade software, hardware, and network services for
                businesses of all sizes
              </motion.h1>
              <motion.p
                variants={fadeUp(0.6, 0.6)}
                className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </motion.p>
              <motion.div variants={fadeUp(0.6, 0.6)} className="pt-4">
                <Link to="/contact">
                  {" "}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-6 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all rounded-md flex items-center py-2 sm:py-3 text-sm sm:text-base"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
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
          className="w-full h-auto"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F2F2F2"
          />
        </svg>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Stats Boxes */}
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col sm:flex-row lg:flex-col xl:flex-row lg:w-1/2 gap-6 sm:gap-8 w-full"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={zoomIn(index * 0.1, 0.6)}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col items-start gap-4 hover:shadow-xl 
                transition-shadow duration-300 border-l-4 border-red-600 hover:-translate-y-1 flex-1"
              >
                <div className="bg-red-100 p-3 rounded-full">{stat.icon}</div>
                <motion.p
                  variants={fadeUp(0.3, 0.4)}
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  {stat.value}
                </motion.p>
                <motion.p
                  variants={fadeUp(0.4, 0.4)}
                  className="text-gray-700 text-base sm:text-lg"
                >
                  {stat.title}
                </motion.p>
                <motion.p
                  variants={fadeUp(0.5, 0.4)}
                  className="text-gray-500 text-sm"
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-1/2 text-left"
          >
            <motion.p
              variants={fadeUp(0.5, 0.4)}
              className="text-red-600 font-semibold mb-2 text-sm sm:text-base"
            >
              OUR NETWORK
            </motion.p>
            <motion.h2
              variants={slideUp(0.6, 0.6)}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Largest Network Of <br />
              <span className="text-red-600">Anti-Defamation</span> Experts.
            </motion.h2>
            <motion.p
              variants={fadeUp(0.7, 0.6)}
              className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg"
            >
              We've tapped experts from around the globe to create an
              unparalleled network of reputation experts with an unwavering
              passion to succeed. Our team includes former legal professionals,
              cybersecurity experts, and digital marketing specialists.
            </motion.p>
            <motion.button
              variants={fadeUp(0.7, 0.6)}
              className="group relative border-2 border-red-600 text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold overflow-hidden hover:text-white transition duration-300 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center">
                LEARN MORE
                <div>
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-5" />
                </div>
              </span>
              <span className="absolute inset-0 bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#F2F2F2] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <motion.div
            variants={fadeIn("up", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2939] mb-2">
              Recent Projects
            </h2>
            <motion.div
              variants={scaleIn(0.3, 0.6)}
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"
            ></motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer(0, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={flip(index * 0.1, 0.8)}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white shadow-lg transition-all duration-300 transform group overflow-hidden rounded-lg"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <motion.div className="p-4 sm:p-6 flex items-start flex-col text-start">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-red-600 font-medium mb-2 text-sm sm:text-base">
                    Client: {project.client}
                  </p>
                  <motion.div
                    variants={staggerContainer(0.1, 0.4)}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </motion.div>
                  <button className="text-red-600 font-semibold hover:text-red-800 transition duration-300 text-sm sm:text-base">
                    View details →
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn("up", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              Trusted By
            </h2>
            <motion.div
              variants={scaleIn(0.3, 0.6)}
              className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-2"
            ></motion.div>
            <motion.p
              variants={fadeUp(0.4, 0.6)}
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Leading organizations across multiple sectors
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Slider {...settings}>
              {clients.map((client, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl sm:text-4xl mb-2">
                      {client.logo}
                    </div>
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      {client.name}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
