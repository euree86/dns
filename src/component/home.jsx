import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import Products from "./products";
import Services from "./services";
import Portfolio from "./portfolio";
import Whatwedo from "./whatwedo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homehero from "./homehero";

import Producthome from "./producthome";
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
  const hardwareservice = [
    {
      title: "Server and Computer Installation",
      icon: <HardDrive className="w-6 h-6  text-white" />,
      description: "Expert setup and configuration",
    },
    {
      title: "CCTV Installation",
      icon: <Cctv className="w-6 h-6  text-white" />,
      description: "Comprehensive security monitoring",
    },
    {
      title: "Networking and Troubleshooting",
      icon: <Network className="w-6 h-6  text-white" />,
      description: "Resolving complex connectivity issues",
    },
    {
      title: "Firewall Configuration and Security",
      icon: <Lock className="w-6 h-6  text-white" />,
      description: "Robust protection systems",
    },
  ];

  const softwareservice = [
    {
      title: "Website and Software Development",
      icon: <Code className="w-6 h-6  text-white" />,
      description: "Custom digital solutions",
    },
    {
      title: "Domain and Hosting",
      icon: <Globe className="w-6 h-6  text-white" />,
      description: "Reliable web infrastructure",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6  text-white" />,
      description: "Native and cross-platform apps",
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6  text-white" />,
      description: "Intuitive user experiences",
    },
  ];

  const whatWeDo = [
    {
      title: "Hardware Expertise",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "Comprehensive hardware solutions for businesses of all sizes",
    },
    {
      title: "Software Expertise",
      icon: <Database className="w-6 h-6 " />,
      description: "Custom software development and implementation",
    },
    {
      title: "Highlighted Services",
      icon: <Shield className="w-6 h-6 " />,
      description: "Premier networking and security services",
    },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <Homehero />

      {/* About Us */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-36">
          <div className="flex items-center gap-36">
            <div className="relative w-full">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-lg transform -rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-100 rounded-lg transform rotate-3"></div>
              <img
                src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
                alt="DNS Technology"
                className="w-full h-full object-cover rounded-lg shadow-xl relative z-10"
              />
            </div>

            <div className="w-full">
              <span className="bg-gray-200 text-red-800 text-xs font-bold px-4 py-1 rounded-full">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
                About DNS
              </h2>
              <div className="w-28 h-1 bg-red-800 mb-8"></div>
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
                curve, leveraging the latest advancements in technology to
                provide cutting-edge solutions that drive growth and efficiency.
              </p>
              <button className="group bg-red-800 hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <Producthome />
      {/* Our Portfolio */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
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

      {/* Our Services */}
      <div className="bg-gray-100 py-16 px-4 min-h-screen">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold ">Our Services</h2>
            <div className="w-20 h-1 bg-red-800 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Comprehensive IT services tailored to meet your business
              requirements and enhance your operations.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-4  text-black">
              Hardware Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
              {hardwareservice.map((hardware, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-sm
                   hover:shadow-xl transition-all transform hover:-translate-y-1  h-54"
                >
                  <div className="bg-red-800 rounded-full p-4 mb-4 ">
                    {hardware.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {hardware.title}
                  </h3>
                  <p className="text-gray-500 text-center text-sm font-medium">
                    {hardware.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4  text-black">
              Software Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
              {softwareservice.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex flex-col items-center justify-center  hover:shadow-xl h-54 shadow-sm
                   transition-all transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-red-800 rounded-full p-4 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-center text-sm font-medium">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services">
              <button className="group bg-gray-900 hover:bg-red-800 text-white font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white text-black py-12 px-4">
        <div className="container mx-auto px-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core competencies and specialized services that drive business
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center 
                   hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 "
              >
                <div className="bg-red-800 rounded-full p-4 mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-black">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-center ">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/whatwedo"
              className="group bg-red-700 text-white  font-medium py-3 px-8 rounded-full transition-all flex items-center shadow-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
