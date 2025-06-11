"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Blocks,
  Brain,
  Bot,
  Code,
  ArrowRight,
  Globe,
  Smartphone,
  FileText,
  Users,
  Settings,
  Palette,
  TestTube,
  Star,
} from "lucide-react";
import Nav from "./nav";
import Footer from "./footer";
import ServiceDetailed from "./servicedetailed";

// Tech Stack Component
const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("Databases");

  const techCategories = {
    Frontend: [
      { name: "React", logo: "⚛️", color: "text-cyan-500" },
      { name: "Angular", logo: "🅰️", color: "text-red-600" },
      { name: "Vue.js", logo: "V", color: "text-green-500" },
      { name: "JavaScript", logo: "JS", color: "text-yellow-500" },
      { name: "TypeScript", logo: "TS", color: "text-blue-600" },
      { name: "HTML5", logo: "🌐", color: "text-orange-500" },
      { name: "CSS3", logo: "🎨", color: "text-blue-500" },
      { name: "Bootstrap", logo: "B", color: "text-purple-600" },
      { name: "Tailwind CSS", logo: "🎯", color: "text-teal-500" },
    ],
    Backend: [
      { name: "Node.js", logo: "📗", color: "text-green-600" },
      { name: "Python", logo: "🐍", color: "text-yellow-600" },
      { name: "Java", logo: "☕", color: "text-orange-600" },
      { name: "PHP", logo: "🐘", color: "text-purple-600" },
      { name: "C#", logo: "#️⃣", color: "text-blue-600" },
      { name: "Ruby", logo: "💎", color: "text-red-600" },
      { name: "Go", logo: "🔵", color: "text-cyan-600" },
      { name: "Express.js", logo: "E", color: "text-gray-700" },
      { name: "Spring Boot", logo: "🍃", color: "text-green-600" },
    ],
    Databases: [
      { name: "MySQL", logo: "🐬", color: "text-blue-600" },
      { name: "SQL Server", logo: "🗄️", color: "text-red-600" },
      { name: "PostgreSQL", logo: "🐘", color: "text-blue-700" },
      { name: "MongoDB", logo: "🍃", color: "text-green-600" },
      { name: "Oracle Database", logo: "🔴", color: "text-red-600" },
      { name: "MariaDB", logo: "🐋", color: "text-blue-500" },
      { name: "Amazon DynamoDB", logo: "⚡", color: "text-orange-500" },
    ],
    "Mobile Development": [
      { name: "React Native", logo: "📱", color: "text-cyan-500" },
      { name: "Flutter", logo: "🐦", color: "text-blue-500" },
      { name: "Swift", logo: "🍎", color: "text-orange-500" },
      { name: "Kotlin", logo: "K", color: "text-purple-600" },
      { name: "Ionic", logo: "⚡", color: "text-blue-600" },
      { name: "Xamarin", logo: "🔷", color: "text-blue-600" },
      { name: "PhoneGap", logo: "📲", color: "text-green-600" },
    ],
    Blockchain: [
      { name: "Ethereum", logo: "⟠", color: "text-gray-700" },
      { name: "Bitcoin", logo: "₿", color: "text-orange-500" },
      { name: "Solidity", logo: "◆", color: "text-gray-600" },
      { name: "Web3.js", logo: "🌐", color: "text-blue-500" },
      { name: "Hyperledger", logo: "🔗", color: "text-blue-600" },
      { name: "Smart Contracts", logo: "📋", color: "text-green-600" },
      { name: "IPFS", logo: "🌍", color: "text-purple-600" },
    ],
    "Emerging Tech": [
      { name: "Artificial Intelligence", logo: "🤖", color: "text-blue-600" },
      { name: "Machine Learning", logo: "🧠", color: "text-purple-600" },
      { name: "IoT", logo: "📡", color: "text-green-600" },
      { name: "AR/VR", logo: "🥽", color: "text-orange-600" },
      { name: "Cloud Computing", logo: "☁️", color: "text-blue-500" },
      { name: "DevOps", logo: "⚙️", color: "text-gray-600" },
      { name: "Microservices", logo: "🔧", color: "text-indigo-600" },
    ],
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tools & Tech Stack
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-12 border-b border-gray-200 overflow-x-auto">
          {Object.keys(techCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`pb-3 sm:pb-4 px-2 text-xs sm:text-sm md:text-lg font-medium transition-colors duration-200 whitespace-nowrap ${
                activeTab === category
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {techCategories[activeTab]?.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="text-xl sm:text-2xl md:text-4xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-200">
                {tech.logo}
              </div>
              <h3
                className={`text-center font-semibold text-xs sm:text-sm md:text-base ${tech.color} group-hover:text-gray-900 transition-colors duration-200`}
              >
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Component
const OptimizedITServices = () => {
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

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      initials: "JD",
      content:
        "The team completely transformed our online presence. Negative content that had plagued us for years was removed within weeks. Their expertise is unmatched.",
    },
    {
      name: "Alice Smith",
      role: "Marketing Director, Global Inc",
      initials: "AS",
      content:
        "Their rapid response to our crisis situation saved our brand reputation. The strategic approach and attention to detail were impressive.",
    },
    {
      name: "Robert Johnson",
      role: "Founder, Startup Ventures",
      initials: "RJ",
      content:
        "The comprehensive reporting and transparency throughout the process gave us complete confidence in their work. Exceptional service!",
    },
  ];

  const topSteps = processSteps.filter((step) => step.position === "top");
  const bottomSteps = processSteps.filter((step) => step.position === "bottom");

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 md:pt-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-black space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                From Robust Hardware Installation To Innovative Software
                <span className="text-red-800"> Solutions</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </p>

              <div className="pt-4">
                <Link to="/contact">
                  {" "}
                  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all rounded-md text-sm sm:text-base">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="w-2/3 max-w-lg">
                <img
                  src="https://cdn.pixabay.com/photo/2024/04/25/02/23/ai-generated-8718795_640.png"
                  alt="IT Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved SVG Divider */}
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

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                Why Choose Our IT Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 italic">
                We combine technical expertise with business understanding to
                deliver solutions that drive your success. Our commitment to
                excellence ensures you get the best service every time.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Service ${index + 1}`}
                      className="w-full h-24 sm:h-32 md:h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10 order-1 lg:order-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl hover:shadow-md transition-all duration-300 border-t-4 border-red-600"
                >
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="bg-red-100 text-red-600 font-bold text-sm sm:text-base md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full flex-shrink-0">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
              Unlock The Future Of Tomorrow
            </h2>
            <div className="w-20 md:w-26 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  {/* Gradient Background Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-2 md:p-3 mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-purple-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  />
                  <div className="absolute inset-0.5 rounded-2xl bg-slate-900/90 backdrop-blur-md -z-10" />
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          {/* <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
            <button className="group bg-red-600 hover:bg-red-700 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all flex items-center text-sm sm:text-base">
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
        </div>
      </section>

      {/* Detailed Service */}
      <ServiceDetailed />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-red-800 font-semibold mb-2 text-sm sm:text-base">
              CLIENT TESTIMONIALS
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted By <span className="text-red-800">Businesses</span>{" "}
              Worldwide
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="bg-red-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white font-bold mr-3 sm:mr-4 text-xs sm:text-sm md:text-base">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-white font-medium text-xs sm:text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Execution Process
            </h2>
            <div className="w-20 md:w-26 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto"></div>
          </div>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {topSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-800" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting Lines */}
          <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
            <div className="hidden md:flex items-center">
              <div className="w-20 sm:w-24 h-px bg-gray-900"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-800 rounded-full mx-2"></div>
              <div className="w-20 sm:w-24 h-px bg-gray-900"></div>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-800 rounded-full mx-2"></div>
              <div className="w-20 sm:w-24 h-px bg-gray-900"></div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {bottomSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-red-800" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OptimizedITServices;
