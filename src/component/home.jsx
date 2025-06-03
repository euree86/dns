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
  ArrowRight,
  Globe,
  Code,
  Smartphone,
  Palette,
  HardDrive,
  Database,
  Cpu,
} from "lucide-react";

const Home = () => {
  const hardwareservice = [
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/21/03/circuit-board-973311_960_720.jpg",
      title: "Server and Computer Installation",

      description: "Expert setup and configuration",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/04/10/10/30/keyboard-7913431_1280.jpg",
      title: "CCTV Installation",

      description: "Comprehensive security monitoring",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/04/03/19/37/soldering-7897827_1280.jpg",
      title: "Networking and Troubleshooting",

      description: "Resolving complex connectivity issues",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/10/23/14/34/network-cables-499792_1280.jpg",
      title: "Firewall Configuration and Security",

      description: "Robust protection systems",
    },
  ];

  const softwareservice = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/05/07/17/laptop-1571702_1280.jpg",
      title: "Website and Software Development",
      icon: <Code className="w-6 h-6  text-white" />,
      description: "Custom digital solutions",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
      title: "Domain and Hosting",
      icon: <Globe className="w-6 h-6  text-white" />,
      description: "Reliable web infrastructure",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/22/16/10/dj-2089814_1280.jpg",
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6  text-white" />,
      description: "Native and cross-platform apps",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/21/08/22/media-998990_1280.jpg",
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
                className="w-full h-full object-cover rounded-lg shadow-xl relative z-10 animate-fade-in-left"
              />
            </div>

            <div className="w-full animate-fade-in-right">
              {/* <span className="bg-gray-200 text-red-800 text-xs font-bold px-4 py-1 rounded-full">
                WHO WE ARE
              </span> */}
              <h2 className="text-3xl md:text-5xl font-medium mt-4 mb-2">
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
              <button className="group text-lg outline-1 outline-gray-400 hover:bg-red-800 hover:text-white text-red-700 font-semibold py-1 px-6 rounded-full transition-all flex items-center">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <Producthome />

      {/* What we do */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative">
              <div className="relative">
                <img
                  src="https://cdn.pixabay.com/photo/2017/07/20/09/25/businessman-2521703_1280.jpg"
                  alt="What We Do"
                  className="mx-auto rounded-xl overflow-hidden h-[600px]"
                />
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <Code className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Agile Development</p>
                      <p className="text-xs text-slate-500">
                        Iterative approach
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
                Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
                What We Do
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 relative">
                    <span className="font-bold">1</span>
                    <div className="absolute h-full w-0.5 bg-red-100 top-10 left-1/2 -translate-x-1/2 h-[calc(100%+1.5rem)]"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Discover</h3>
                    <p className="text-slate-500 mt-2">
                      We start by understanding your business needs and
                      challenges through in-depth consultations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 relative">
                    <span className="font-bold">2</span>
                    <div className="absolute h-full w-0.5 bg-red-100 top-10 left-1/2 -translate-x-1/2 h-[calc(100%+1.5rem)]"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Design</h3>
                    <p className="text-slate-500 mt-2">
                      Our team creates detailed plans and designs tailored to
                      your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 relative">
                    <span className="font-bold">3</span>
                    <div className="absolute h-full w-0.5 bg-red-100 top-10 left-1/2 -translate-x-1/2 h-[calc(100%+1.5rem)]"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Develop</h3>
                    <p className="text-slate-500 mt-2">
                      We build your solution using cutting-edge technologies and
                      best practices.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 relative">
                    <span className="font-bold">4</span>
                    <div className="absolute h-full w-0.5 bg-red-100 top-10 left-1/2 -translate-x-1/2 h-[calc(100%+1.5rem)]"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Deploy</h3>
                    <p className="text-slate-500 mt-2">
                      We implement your solution seamlessly into your existing
                      infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <span className="font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Support</h3>
                    <p className="text-slate-500 mt-2">
                      We provide ongoing maintenance and support to ensure your
                      solution continues to perform optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <div className="bg-[#F3F4F6] py-12 ">
        <div className="container mx-auto ">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium mt-4 ">
              Our Services
              <div className="w-28 h-1 bg-red-800 mb-4   mt-2"></div>
            </h2>
            <h2 className="text-lg md:text-lg text-black">
              Specialized networking solutions for every industry
            </h2>
          </div>

          <div className="py-12">
            <h3 className="text-xl font-semibold mb-2  text-black">
              Hardware Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
              {hardwareservice.map((hardware, index) => (
                <div key={hardware} className="">
                  {/* Image */}
                  <img
                    src={hardware.image}
                    alt={hardware.title}
                    className="w-full h-[300px] object-cover mb-4"
                  />

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
            <h3 className="text-xl font-semibold mb-2  text-black">
              Software Level Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
              {softwareservice.map((service, index) => (
                <div key={index} className="">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover mb-4"
                  />

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
              <button className="group bg- hover:bg-red-800 hover:text-white outline-1 outline-gray-400 text-red-900 font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do */}
      {/* <div className="bg-white text-black py-12 px-4">
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
      </div> */}

      {/* Our Portfolio */}

      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-20 ">
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
            <Link to="/services">
              <button className="group bg- hover:bg-red-800 hover:text-white outline-1 outline-gray-400 text-red-900 font-medium py-3 px-8 rounded-full transition-all flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
