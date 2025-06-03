import React from "react";
import logo from "../image/logo.png";
import Nav from "./nav"
import Footer from "./footer"
const services = [
  {
    id: 1,
    title: "Custom Software Development",
    description:
      "Tailored business solutions built with modern technologies to streamline your operations.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Hardware Solutions",
    description:
      "Enterprise-grade hardware infrastructure with optimal performance and scalability.",
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Network Services",
    description:
      "Secure, high-speed network architecture design, implementation, and maintenance.",
    icon: "🌐",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description:
      "Migration, management, and optimization of cloud infrastructure.",
    icon: "☁️",
  },
];

// Projects data
const projects = [
  {
    id: 1,
    title: "Banking System Modernization",
    client: "First National Bank",
    services: ["Software", "Security"],
    image:
      "https://cdn.pixabay.com/photo/2019/06/20/17/59/online-banking-4287719_1280.jpg",
  },
  {
    id: 2,
    title: "Hospital Network Infrastructure",
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

// Clients data
const clients = [
  { name: "First National Bank", logo: "🏦" },
  { name: "City Medical Center", logo: "🏥" },
  { name: "Urban Retail Chain", logo: "🛒" },
  { name: "State University", logo: "🎓" },
  { name: "Metro Transportation", logo: "🚆" },
];

// Team members
const team = [
  {
    id: 1,
    name: "Ranjit Dai",
    role: "Developer",
    expertise: "Dot Net Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarad Bhatta",
    role: "Developer",
    expertise: "Java Script Developer",
    image:
      "https://media.istockphoto.com/id/2172166252/photo/a-software-developer-is-thinking-on-improving-the-efficiency-of-the-ai-system.jpg?s=2048x2048&w=is&k=20&c=tbPbWNyMrcx2Vk5DEng5ZBTW6xFEv-omJFWfrg43kUI=",
  },
  {
    id: 3,
    name: "Sailesh Kandel",
    role: "Developer",
    expertise: "Next Js Developer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

// Skills data
const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "UI/UX Design", level: 70 },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    quote: "Exceptional work delivered on time with great attention to detail.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    quote: "Transformed our web presence with a stunning redesign.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Portfolio = () => {
  return (
    <div>
      <Nav/>
      {/* Hero div */}
      <div className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white mt-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR PORTFOLIO</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Enterprise-grade software, hardware, and network services for
            businesses of all sizes
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Our Services
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      {/* Services div */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end technology solutions tailored to your business
              requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects div */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Successful implementations across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden  hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
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
                    View Case Study →
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted By
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations across multiple sectors
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-2">{client.logo}</div>
                <p className="text-gray-700 font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team div */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Experts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals with deep technical expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white p-6 rounded-lg  text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact div */}
      <div className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Technology?
              </h2>
              <p className="text-red-100 max-w-2xl mx-auto">
                Contact our solutions team for a free consultation
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded bg-red-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-red-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded bg-red-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-red-300"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded bg-red-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-red-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded bg-red-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-red-300"
                  placeholder="Phone number"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded bg-red-800 border border-red-600 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-red-300"
                  placeholder="Describe your technology needs"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;
