"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homehero from "./homehero";
import Producthome from "./producthome";
import { ArrowRight, Globe, Code, Smartphone, Palette } from "lucide-react";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  scaleIn,
  bounceIn,
} from "../variants";

const Home = () => {
  // Data arrays
  const hardwareServices = [
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

  const softwareServices = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/08/05/07/17/laptop-1571702_1280.jpg",
      title: "Website and Software Development",
      icon: <Code className="w-6 h-6 text-white" />,
      description: "Custom digital solutions",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_1280.jpg",
      title: "Domain and Hosting",
      icon: <Globe className="w-6 h-6 text-white" />,
      description: "Reliable web infrastructure",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/22/16/10/dj-2089814_1280.jpg",
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      description: "Native and cross-platform apps",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2015/10/21/08/22/media-998990_1280.jpg",
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6 text-white" />,
      description: "Intuitive user experiences",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discover",
      description:
        "We start by understanding your business needs and challenges through in-depth consultations.",
    },
    {
      number: "2",
      title: "Design",
      description:
        "Our team creates detailed plans and designs tailored to your specific requirements.",
    },
    {
      number: "3",
      title: "Develop",
      description:
        "We build your solution using cutting-edge technologies and best practices.",
    },
    {
      number: "4",
      title: "Deploy",
      description:
        "We implement your solution seamlessly into your existing infrastructure.",
    },
    {
      number: "5",
      title: "Support",
      description:
        "We provide ongoing maintenance and support to ensure your solution continues to perform optimally.",
    },
  ];

  const portfolioItems = [
    {
      image:
        "https://img.freepik.com/free-vector/business-plan-presentation-template-cover-page_53876-114880.jpg?t=st=1744700759~exp=1744704359~hmac=224a4d89fbcf681a02f54ebfc600d9e9bd169e649d7732a25504c8fad28e577c&w=826",
      title: "Corporate Network Solution",
      description: "Enterprise security implementation",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/26/10/47/businessman-2682712_1280.jpg",
      title: "Financial Sector Security",
      description: "Advanced protection systems",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637_1280.jpg",
      title: "Data Center Infrastructure",
      description: "High-performance networking",
    },
  ];

  // Reusable components
  const SectionHeader = ({ title, subtitle, className = "" }) => (
    <motion.div
      className={`mb-12 sm:mb-16 ${className}`}
      variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
        {title}
      </h2>
      <div className="w-20 sm:w-28 h-1 bg-red-800 mb-2"></div>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );

  const ServiceCard = ({ service, index }) => (
    <motion.div
      key={index}
      className="group w-full"
      variants={fadeUp(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        className="w-full h-48 sm:h-64 lg:h-[300px] object-cover mb-4 transition-transform duration-300 group-hover:scale-105 rounded-lg"
      />
      <h3 className="text-base sm:text-lg font-semibold text-center mb-2">
        {service.title}
      </h3>
      <p className="text-gray-500 text-center text-xs sm:text-sm font-medium">
        {service.description}
      </p>
    </motion.div>
  );

  const ProcessStep = ({ step, index, isLast }) => (
    <motion.div
      key={index}
      className="flex gap-3 sm:gap-4 w-full"
      variants={slideIn("left", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 relative">
        <span className="font-bold text-sm sm:text-base">{step.number}</span>
        {!isLast && (
          <div className="absolute w-0.5 bg-red-100 top-8 sm:top-10 left-1/2 -translate-x-1/2 h-[calc(100%+1.5rem)] hidden sm:block"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold">{step.title}</h3>
        <p className="text-slate-500 mt-2 text-sm sm:text-base break-words">
          {step.description}
        </p>
      </div>
    </motion.div>
  );

  const PortfolioCard = ({ item, index }) => (
    <motion.div
      key={index}
      className="group relative overflow-hidden rounded-xl shadow-xl w-full"
      variants={zoomIn(index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end p-4 sm:p-6">
        <div>
          <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
            {item.title}
          </h3>
          <p className="text-gray-200 text-sm sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const LearnMoreButton = ({ to = "/services" }) => (
    <motion.div
      className="flex justify-center mt-8 sm:mt-12"
      variants={fadeUp(0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Link to={to}>
        <button className="group hover:bg-red-800 hover:text-white outline-1 outline-gray-400 text-red-900 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all flex items-center text-sm sm:text-base">
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <Homehero />

      {/* About Us Section */}
      <section className="bg-white py-20 sm:py-28 lg:py-36 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
            <motion.div
              className="relative w-full lg:w-1/2 order-2 lg:order-1"
              variants={slideIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
            >
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-gray-100 rounded-lg transform -rotate-3 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full bg-gray-100 rounded-lg transform rotate-3 -z-10"></div>
              <img
                src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
                alt="DNS Technology"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-xl relative z-10"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 order-1 lg:order-2"
              variants={slideIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <SectionHeader title="About DNS" />
              <div className="space-y-4 sm:space-y-6">
                <motion.p
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  DNS Technology is a premier provider of network solutions and
                  IT services, dedicated to empowering businesses with
                  innovative and reliable technology. With decades of expertise
                  and a team of seasoned professionals, we specialize in
                  delivering end-to-end solutions tailored to meet the unique
                  needs of businesses across diverse industries.
                </motion.p>
                <motion.p
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  variants={fadeUp(0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Our comprehensive offerings include network design,
                  implementation, optimization, and managed services, ensuring
                  seamless connectivity and peak performance for organizations
                  of all sizes.
                </motion.p>
                <motion.p
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  variants={fadeUp(0.5)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  At DNS Technology, we pride ourselves on staying ahead of the
                  curve, leveraging the latest advancements in technology to
                  provide cutting-edge solutions that drive growth and
                  efficiency.
                </motion.p>
              </div>
              <Link to="/about">
                <motion.button
                  className="group text-base sm:text-lg outline-1 outline-gray-400 hover:bg-red-800 hover:text-white text-red-700 font-semibold py-2 px-4 sm:px-6 rounded-full transition-all flex items-center mt-6 sm:mt-8"
                  variants={slideIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <Producthome />

      {/* What We Do Section */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center">
            <motion.div
              className="relative order-2 lg:order-1 w-full"
              variants={slideIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                src="https://cdn.pixabay.com/photo/2017/07/20/09/25/businessman-2521703_1280.jpg"
                alt="What We Do"
                className="w-full rounded-xl overflow-hidden h-80 sm:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-float">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium whitespace-nowrap">Agile Development</p>
                    <p className="text-xs text-slate-500 whitespace-nowrap">Iterative approach</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 w-full"
              variants={slideIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
                Our Process
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-6">
                What We Do
              </h2>
              <motion.div
                className="space-y-4 sm:space-y-6"
                variants={staggerContainer(0.1, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    step={step}
                    index={index}
                    isLast={index === processSteps.length - 1}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-[#F3F4F6] py-12 sm:py-16 lg:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <SectionHeader
            title="Our Services"
            subtitle="Specialized networking solutions for every industry"
          />

          {/* Hardware Services */}
          <div className="mb-12 sm:mb-16">
            <motion.h3
              className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-black"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Hardware Level Services
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {hardwareServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Software Services */}
          <div className="mb-8 sm:mb-12">
            <motion.h3
              className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-black"
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Software Level Services
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {softwareServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>

          <Link to="/services">
            <LearnMoreButton />
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-16 sm:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <SectionHeader
            title="Our Portfolio"
            subtitle="Explore our successful projects and implementations across various industries."
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </motion.div>
          <Link to="/portfolio">
            <LearnMoreButton />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;