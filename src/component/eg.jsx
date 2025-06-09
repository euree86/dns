import React from "react";

import Nav from "./nav";
import Footer from "./footer";
import { Blocks, Brain, Bot, Code, ArrowRight, Cpu } from "lucide-react";

import {
  Globe,
  Server,
  Clipboard,
  Database,
  Smartphone,
  HardDrive,
  Wifi,
  MonitorSpeaker,
} from "lucide-react";

import { FileText, Users, Settings, Palette, TestTube } from "lucide-react";

import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaServer, FaShieldAlt, FaNetworkWired, FaVideo } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const services = [
  {
    id: 1,
    title: "IT Services",
    description:
      "We offer secure and scalable blockchain development services to build decentralized apps, smart contracts, and enterprise blockchain ecosystems tailored to your business needs.",
    icon: Blocks,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Cloud Services",
    description:
      "Our Web3 development services empower your business with decentralized platforms, including dApps, wallets, DAOs, and NFT marketplaces—engineered for seamless performance and experience.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Hardware Services",
    description:
      "We specialize in Generative AI solutions that automate creativity and intelligence, ranging from content generation and virtual assistants to code and design generation.",
    icon: Brain,
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Our AI development services are designed to help you build intelligent systems that learn, predict, and enhance decision-making across your operations.",
    icon: Bot,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Software Solutions",
    description:
      "We cater to unique business needs through fully customized software development—our team builds reliable, scalable, and business-aligned solutions from scratch.",
    icon: Code,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Consulting Services",
    description:
      "Our team develops high-performance mobile web applications with sleek UI, robust backend architecture, and cross-platform functionality to deliver seamless user experiences.",
    icon: Smartphone,
    gradient: "from-pink-500 to-rose-500",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Requirement Gathering",
    icon: FileText,
    description:
      "The initial phase involves thorough communication with stakeholders to comprehend the needs and expectations. A detailed analysis of the gathered information helps in creating a clear and concise set of requirements that will serve as the foundation for the entire software development process.",
    position: "top",
  },
  {
    id: 2,
    title: "Development",
    icon: Users,
    description:
      "Developers follow coding standards, utilize chosen technologies, and work collaboratively to build the solution iteratively. Regular check-ins and code reviews are essential to maintain code quality and ensure adherence to the design specifications.",
    position: "top",
  },
  {
    id: 3,
    title: "Maintenance & Support",
    icon: Settings,
    description:
      "Post-deployment, the software enters the maintenance and support phase. This involves monitoring the system's performance, addressing any issues that may arise, and releasing updates or patches as needed. User feedback is crucial during this phase, guiding the development of future enhancements or features.",
    position: "top",
  },
  {
    id: 4,
    title: "Design and UI/UX",
    icon: Palette,
    description:
      "The design phase focuses on translating the gathered information into a blueprint for the software solution. This includes creating system architecture, database design, and user interface mock-ups. The design phase also involves making decisions about technologies, platforms, and frameworks that will be utilized in the development process.",
    position: "bottom",
  },
  {
    id: 5,
    title: "Testing and Deployment",
    icon: TestTube,
    description:
      "Quality assurance is paramount in the testing phase. Bugs and issues are identified, addressed, and retested before moving to the deployment phase. Continuous monitoring during and after deployment allows for prompt identification and resolution of any unforeseen issues.",
    position: "bottom",
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

const topSteps = processSteps.filter((step) => step.position === "top");
const bottomSteps = processSteps.filter((step) => step.position === "bottom");



const eg = () => {
  return (
    <div>
      <Nav />
      <div className="pt-24 bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-black space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                From Robust Hardware Installation To Innovative Software
                <span className="text-red-800"> Solutions</span>
              </h1>

              <p className="text-md text-black leading-relaxed max-w-2xl italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 bg-red-700 hover:bg-red-700 text-white font-semibold transition-all group rounded-md flex items-center py-2">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Device Mockups */}
            <div className="relative flex justify-center ">
              <div className="relative w-full max-w-lg">
                <img
                  src="https://cdn.pixabay.com/photo/2024/04/25/02/23/ai-generated-8718795_640.png"
                  alt="School Management System on multiple devices"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved SVG Divider */}
      <div className="w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            fill="#F2F2F2"
          ></path>
        </svg>
      </div>

      {/* Execution Process */}
      <div className="max-w-7xl mx-auto p-8 mb-12 min-h-screen">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1E2939] mb-2">
            Our Execution Process
          </h1>
          <div className="w-26 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mt-2"></div>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {topSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting Lines */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center">
            <div className="w-24 h-px bg-[#1E2939]"></div>
            <div className="w-3 h-3 bg-red-800 rounded-full mx-2"></div>
            <div className="w-24 h-px bg-[#1E2939]"></div>
            <div className="w-3 h-3 bg-red-800 rounded-full mx-2"></div>
            <div className="w-24 h-px bg-[#1E2939]"></div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bottomSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Arrows */}
        <div className="hidden md:block absolute">
          <svg className="w-full h-full" style={{ zIndex: -1 }}>
            {/* You can add connecting arrows here if needed */}
          </svg>
        </div>
      </div>

      {/* services */}
      <div className="min-h-screen bg-gray-100 ">
        <div className="container px-4 mx-auto py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#1E2939]  ">
              Unlock The Future Of Tomorrow
            </h1>
            <div className="w-26 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mt-2"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  ></div>
                  <div className="absolute inset-0.5 rounded-2xl bg-slate-900/90 backdrop-blur-md -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-center  mt-16">
            <button
              className="group  hover:bg-red-800 hover:text-white outline-1 outline-gray-400 text-red-900 font-medium py-3 px-8 rounded-full transition-all
             flex items-center"
            >
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 min-h-screen items-center flex ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side */}
            <div>
              <h2 className="text-5xl  font-bold text-gray-800 mb-4">
                Why Choose Our IT Services
              </h2>
              <p className="text-sm text-gray-600 mb-8 italic">
                We combine technical expertise with business understanding to
                deliver solutions that drive your success. Our commitment to
                excellence ensures you get the best service every time.
              </p>

              <div className="grid grid-cols-2 gap-10">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

     

      <Footer />
    </div>
  );
};

export default eg;
