"use client";
import { Cloud, Shield, ArrowUpDown, Layers } from "lucide-react";
import { Monitor, HardDrive, Headphones } from "lucide-react";
import { Network, Settings } from "lucide-react";
import { Server, Camera, Router, Wrench } from "lucide-react";
import { Code, Database, Download } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  zoomIn,
  slideIn,
  staggerContainer,
  scaleIn,
  rotateIn,
} from "../variants";

const ServiceDetailed = () => {
  const cloudservices = [
    {
      title: "Cloud Infrastructure Management",
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Cloud Backup Solutions",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Cloud Migration & Setup",
      icon: <ArrowUpDown className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Virtualization Services",
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const ITservices = [
    {
      title: "24/7 Monitoring",
      icon: <Monitor className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Managed Network Security",
      icon: <Shield className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Data Backup & Disaster Recovery",
      icon: <HardDrive className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "IT Helpdesk Support",
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const interactiveservices = [
    {
      title: "Network Setup & Configuration",
      icon: <Network className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "System Integration",
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      title: "IT Support & Maintenance",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const hardwareservices = [
    {
      title: "Server Installation & Setup",
      icon: <Server className="w-8 h-8 text-gray-600" />,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      title: "CCTV & Security System Installation",
      icon: <Camera className="w-8 h-8 text-red-500" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      title: "Networking Equipment Installation",
      icon: <Router className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Hardware Troubleshooting & Repair",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const softwareservices = [
    {
      title: "Custom Software Development",
      icon: <Code className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "ERP System Implementation",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Software Installation & Configuration",
      icon: <Download className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Software Support & Maintenance",
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const consultingservices = [
    {
      title: "IT strategy and Planning",
      icon: <Code className="w-8 h-8 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Cyber security ",
      icon: <Database className="w-8 h-8 text-blue-500" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "System Audits & Reviews",
      icon: <Download className="w-8 h-8 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Digital Transformation Consulting",
      icon: <Headphones className="w-8 h-8 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* cloud services */}
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Services Grid */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.3, 0.6)}
              className="text-4xl font-bold mb-6"
            >
              <span className="text-gray-900">Cloud Services</span>
            </motion.h1>

            <motion.div
              variants={staggerContainer(0.1, 0.4)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {cloudservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Cloud Infrastructure Management */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900">
                Cloud Infrastructure Management
              </h2>
              <motion.div
                variants={scaleIn(0.5, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Optimize your cloud infrastructure with our comprehensive
                management services. We ensure scalability, security, and
                cost-effectiveness while maintaining peak performance across all
                your cloud resources and applications.
              </p>
              <motion.img
                variants={zoomIn(0.6, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* IT services */}
      <div className=" bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto p-8">
          {/* left Section - 24/7 Monitoring */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900">
                24/7 Monitoring
              </h2>
              <motion.div
                variants={scaleIn(0.3, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Keep your IT infrastructure running smoothly with our
                round-the-clock monitoring services. We proactively identify and
                resolve issues before they impact your business operations,
                ensuring maximum uptime and performance.
              </p>

              <motion.img
                variants={zoomIn(0.4, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
          {/* right Section - Services Grid */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.5, 0.6)}
              className="text-3xl font-bold mb-8"
            >
              <span className="text-gray-900">Managed IT Services</span>
            </motion.h1>

            <motion.div
              variants={staggerContainer(0.1, 0.6)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {ITservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* interactiveservice */}
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Services Grid */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.3, 0.6)}
              className="text-4xl font-bold mb-8"
            >
              <span className="text-gray-900">IT Services</span>
            </motion.h1>

            <motion.div
              variants={staggerContainer(0.1, 0.4)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {interactiveservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Network Setup & Configuration */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900 ">
                Network Setup & Configuration
              </h2>
              <motion.div
                variants={scaleIn(0.5, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Design and implement robust network infrastructure tailored to
                your business needs. Our expert team ensures secure, scalable,
                and high-performance network solutions that support your growing
                technology requirements.
              </p>

              <motion.img
                variants={zoomIn(0.6, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* hardwareservices */}
      <div className="bg-gray-100 ">
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto p-8">
          {/* left Section - Server Installation & Setup */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900 ">
                Server Installation & Setup
              </h2>
              <motion.div
                variants={scaleIn(0.3, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Professional server installation and configuration services to
                power your business operations. We ensure optimal performance,
                security, and reliability for your critical server
                infrastructure and data management needs.
              </p>

              <motion.img
                variants={zoomIn(0.4, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
          {/* right Section - Services Grid */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.5, 0.6)}
              className="text-4xl font-bold mb-6"
            >
              <span className="text-gray-900">Hardware Services</span>
            </motion.h1>
            <motion.div
              variants={staggerContainer(0.1, 0.6)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {hardwareservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* softwareservice */}
      <div className="container mx-auto p-8 ">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Services Grid */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.3, 0.6)}
              className="text-4xl font-bold mb-6"
            >
              <span className="text-gray-900">Software Solutions</span>
            </motion.h1>

            <motion.div
              variants={staggerContainer(0.1, 0.4)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {softwareservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section - Custom Software Development */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900">
                Custom Software Development
              </h2>
              <motion.div
                variants={scaleIn(0.5, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Transform your business with tailor-made software solutions
                designed specifically for your unique requirements. Our
                development team creates scalable, secure, and user-friendly
                applications that drive efficiency and growth.
              </p>

              <motion.img
                variants={zoomIn(0.6, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* consulting service */}
      <div className="bg-gray-100 ">
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto p-8">
          {/* left Section - Server Installation & Setup */}
          <motion.div
            variants={slideIn("left", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:w-80"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
            >
              <h2 className="text-lg font-bold text-gray-900">
                Server Installation & Setup
              </h2>
              <motion.div
                variants={scaleIn(0.3, 0.6)}
                className="w-12 h-0.5 bg-red-800 mb-4"
              ></motion.div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Professional server installation and configuration services to
                power your business operations. We ensure optimal performance,
                security, and reliability for your critical server
                infrastructure and data management needs.
              </p>

              <motion.img
                variants={zoomIn(0.4, 0.8)}
                src="https://cdn.pixabay.com/photo/2024/08/22/09/07/ai-generated-8988761_640.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
          {/* right Section - Services Grid */}
          <motion.div
            variants={slideIn("right", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <motion.h1
              variants={fadeUp(0.5, 0.6)}
              className="text-4xl font-bold mb-6"
            >
              <span className="text-gray-900">Consulting Service</span>
            </motion.h1>
            <motion.div
              variants={staggerContainer(0.1, 0.6)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {consultingservices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={zoomIn(index * 0.1, 0.6)}
                  whileHover={{ scale: 1.0, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${service.bgColor} ${service.borderColor} border-2 rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailed;
