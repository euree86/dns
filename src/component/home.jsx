import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import Slider from "react-slick";
import Products from "./products";
import Services from "./services";
import Portfolio from "./portfolio";
import Whatwedo from "./whatwedo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Shield,
  Cable,
  Cctv,
  Server,
  Monitor,
  Wifi,
  Network,
  ChevronRight,
  ArrowRight,
  Globe,
  Code,
  Smartphone,
  Palette,
  HardDrive,
  Database,
  Cpu,
  Lock,
} from "lucide-react";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cardData = [
    {
      icon: <Shield />,

      title: "Firewalls Devices",
      description:
        "Protect your networks with our advanced firewall solutions.",
    },
    {
      icon: <Lock />,

      title: "Firewall Configuration",
      description: "Expert setup and management for optimal security.",
    },
    {
      icon: <Globe />,

      title: "Our Mission",
      description: "Empowering businesses with cutting-edge network solutions.",
    },
  ];

  const products = [
    {
      title: "FireWalls Devices and Licences",
      icon: <Shield className="w-12 h-12 text-red-600" />,
      description: "Enterprise-grade security solutions",
    },
    {
      title: "Network Cables",
      icon: <Cable className="w-12 h-12  text-red-600" />,
      description: "High-performance connectivity",
    },
    {
      title: "CCTV and Surveillance",
      icon: <Cctv className="w-12 h-12  text-red-600" />,
      description: "Advanced monitoring systems",
    },
    {
      title: "Server and Network Rack",
      icon: <Server className="w-12 h-12  text-red-600" />,
      description: "Reliable infrastructure solutions",
    },
    {
      title: "Network Switches",
      icon: <Monitor className="w-12 h-12  text-red-600" />,
      description: "Intelligent connectivity management",
    },
    {
      title: "AP (Access Point Devices)",
      icon: <Wifi className="w-12 h-12  text-red-600" />,
      description: "Seamless wireless coverage",
    },
    {
      title: "Wireless Devices",
      icon: <Wifi className="w-12 h-12  text-red-600" />,
      description: "Modern wireless technology",
    },
    {
      title: "Server and Computers",
      icon: <Network className="w-12 h-12  text-red-600" />,
      description: "Powerful computing solutions",
    },
  ];

  const hardwareservice = [
    {
      title: "Server and Computer Installation",
      icon: <HardDrive className="w-12 h-12  text-red-700" />,
      description: "Expert setup and configuration",
    },
    {
      title: "CCTV Installation",
      icon: <Cctv className="w-12 h-12  text-red-700" />,
      description: "Comprehensive security monitoring",
    },
    {
      title: "Networking and Troubleshooting",
      icon: <Network className="w-12 h-12  text-red-700" />,
      description: "Resolving complex connectivity issues",
    },
    {
      title: "Firewall Configuration and Security",
      icon: <Lock className="w-12 h-12  text-red-700" />,
      description: "Robust protection systems",
    },
  ];

  const softwareservice = [
    {
      title: "Website and Software Development",
      icon: <Code className="w-12 h-12  text-red-800" />,
      description: "Custom digital solutions",
    },
    {
      title: "Domain and Hosting",
      icon: <Globe className="w-12 h-12  text-red-800" />,
      description: "Reliable web infrastructure",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-12 h-12  text-red-800" />,
      description: "Native and cross-platform apps",
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-12 h-12  text-red-800" />,
      description: "Intuitive user experiences",
    },
  ];

  const whatWeDo = [
    {
      title: "Hardware Expertise",
      icon: <Cpu className="w-16 h-16 text-red-500" />,
      description:
        "Comprehensive hardware solutions for businesses of all sizes",
    },
    {
      title: "Software Expertise",
      icon: <Database className="w-16 h-16 text-red-500" />,
      description: "Custom software development and implementation",
    },
    {
      title: "Highlighted Services",
      icon: <Shield className="w-16 h-16 text-red-500" />,
      description: "Premier networking and security services",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div className="relative  py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 my-16">
          <div className="text-left ps-24">
            <span className="bg-red-100 text-red-800 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              Network Solutions
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">
              WELCOME TO <span className="text-red-700">DNS TECHNOLOGY</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-8">
              Innovative Solutions For Your Network Needs
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-red-800 hover:bg-red-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </Link>

              <button className="bg-transparent border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-10 right-16 w-64 h-64 bg-red-50  rounded-xl "></div>

            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-50 rounded-xl   "></div>
            <img
              src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
              alt="DNS Technology"
              className="relative rounded-xl  max-w-xl mx-auto transform rotate-0"
            />
          </div>
        </div>

         <div className="max-w-7xl mx-auto px-4 relative z-10 py-12">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="p-4">
                <div
                  className="bg-gradient-to-r from-red-800 to-red-700 rounded-xl p-8 text-center border
                  border-white border-opacity-20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 text-red-700 shadow-lg">
                    {card.icon}
                  </div>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    {card.title}
                  </h2>
                  <p className="text-white text-opacity-90">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div> 
      </div>
      {/* About Us */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-36 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-red-200 rounded-lg transform -rotate-3"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-red-300 rounded-lg transform rotate-3"></div>
            <img
              src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
              alt="DNS Technology"
              className="w-full h-full object-cover rounded-lg shadow-xl relative z-10"
            />
          </div>
          <div>
            <span className="bg-red-100 text-red-800 text-sm font-medium px-4 py-1 rounded-full">
              WHO WE ARE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              About DNS
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            <p className="text-gray-700 leading-relaxed mb-6">
              DNS Technology is a premier provider of network solutions and IT
              services, dedicated to empowering businesses with innovative and
              reliable technology. With decades of expertise and a team of
              seasoned professionals, we specialize in delivering end-to-end
              solutions tailored to meet the unique needs of businesses across
              diverse industries.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our comprehensive offerings include network design,
              implementation, optimization, and managed services, ensuring
              seamless connectivity and peak performance for organizations of
              all sizes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              At DNS Technology, we pride ourselves on staying ahead of the
              curve, leveraging the latest advancements in technology to provide
              cutting-edge solutions that drive growth and efficiency.
            </p>
            <Link to="/about">
              <button className="group bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More About Us
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of networking and security products
            designed to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center 
                hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-red-50 rounded-full flex items-center p-4 mb-4">
                {product.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/products">
            <button className="group bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
      {/* Our Services */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT services tailored to meet your business
              requirements and enhance your operations.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-center text-red-800">
              Hardware Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {hardwareservice.map((hardware, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center 
                   hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-red-50 rounded-full p-4 mb-4">
                    {hardware.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {hardware.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {hardware.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-center text-red-800">
              Software Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {softwareservice.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center  hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-red-50 rounded-full p-4 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services">
              <button className="group bg-red-600 hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* What We Do */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 text-white py-12 px-4">
        <div className="container mx-auto px-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-red-100 max-w-2xl mx-auto">
              Our core competencies and specialized services that drive business
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 px-12 py-4 rounded-xl  border border-white border-opacity-20 hover:bg-opacity-20 transition-all transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-red-800">
                  {item.title}
                </h3>
                <p className="text-red-400 text-center ">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/whatwedo"
              className="group bg-white text-red-900 hover:bg-red-100 font-medium py-3 px-8 rounded-full transition-all flex items-center shadow-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      {/* Our Portfolio */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and implementations across various
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://img.freepik.com/free-vector/business-plan-presentation-template-cover-page_53876-114880.jpg?t=st=1744700759~exp=1744704359~hmac=224a4d89fbcf681a02f54ebfc600d9e9bd169e649d7732a25504c8fad28e577c&w=826"
              alt="Business Plan"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Corporate Network Solution
                </h3>
                <p className="text-gray-200">
                  Enterprise security implementation
                </p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/26/10/47/businessman-2682712_1280.jpg"
              alt="Business Man"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Financial Sector Security
                </h3>
                <p className="text-gray-200">Advanced protection systems</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637_1280.jpg"
              alt="Network"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Data Center Infrastructure
                </h3>
                <p className="text-gray-200">High-performance networking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/portfolio">
            <button className="group bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
