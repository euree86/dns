import React from "react";
import {
  BiSolidCctv,
  BiNetworkChart,
  BiServer,
  BiShieldAlt,
  BiCloud,
  BiCodeAlt,
} from "react-icons/bi";
import { FaUserTie, FaChartLine, FaLightbulb } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserTie className="text-red-600 text-2xl mr-3" />,
    value: "50+",
    label: "Experts",
    bgColor: "bg-red-50",
  },
  {
    icon: <FaChartLine className="text-red-700 text-2xl mr-3" />,
    value: "15 Years",
    label: "Experience",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaLightbulb className="text-red-600 text-2xl mr-3" />,
    value: "200+",
    label: "Projects",
    bgColor: "bg-red-50",
  },
  {
    icon: <BiServer className="text-red-700 text-2xl mr-3" />,
    value: "24/7",
    label: "Support",
    bgColor: "bg-red-100",
  },
];

const services = [
  {
    title: "CCTV Installations",
    description:
      "Protect your property with our expert CCTV installation services. We provide tailored surveillance solutions for homes, offices, and commercial premises.",
    icon: <BiSolidCctv className="text-red-600 text-2xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Network Solutions",
    description:
      "From design to implementation, we provide robust network infrastructure that ensures seamless connectivity and optimal performance.",
    icon: <BiNetworkChart className="text-red-700 text-2xl" />,
    bgColor: "bg-red-200",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving threats in today's complex cyber landscape.",
    icon: <BiShieldAlt className="text-red-600 text-2xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Cloud Services",
    description:
      "Scalable cloud solutions that enhance flexibility, reduce costs, and improve collaboration across your organization.",
    icon: <BiCloud className="text-red-700 text-2xl" />,
    bgColor: "bg-red-200",
  },
  {
    title: "IT Infrastructure",
    description:
      "End-to-end IT infrastructure solutions designed to support your business operations and drive digital transformation.",
    icon: <BiServer className="text-red-600 text-2xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Custom Software",
    description:
      "Bespoke software development tailored to your specific business requirements and operational workflows.",
    icon: <BiCodeAlt className="text-red-700 text-2xl" />,
    bgColor: "bg-red-200",
  },
];

const teamMembers = [
  {
    name: "Sarad Bhatta",
    title: " Developer",
    image:
      "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg",
    description:
      "Full-stack developer with expertise in modern JavaScript frameworks and cloud architecture.",
  },
  {
    name: "Ranjit dai",
    title: "Dot Net Developer",
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/07/31/employee-7366214_1280.jpg",
    description:
      "Creating intuitive user experiences with a focus on accessibility and human-centered design principles.",
  },
  {
    name: "Sailesh Kandel",
    title: "Next JS",
    image:
      "https://cdn.pixabay.com/photo/2021/04/26/09/30/man-6208470_1280.jpg",
    description:
      "Strategic marketer with expertise in digital campaigns, brand development, and customer engagement.",
  },
];

const companies = [
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google", url: "https://logo.clearbit.com/google.com" },
  { name: "IBM", url: "https://logo.clearbit.com/ibm.com" },
  { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
  { name: "Cisco", url: "https://logo.clearbit.com/cisco.com" },
];
const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-black opacity-80"></div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
          alt="Technology background"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-red-300">DNS Technology</span>
          </h1>
          <p className="text-xl text-red-100 max-w-2xl">
            Innovating the future of network solutions and IT services
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Story & Mission
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Founded with a vision to transform the technology landscape, DNS
            Technology has grown from a small startup to a trusted industry
            leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-600 mb-4">
              DNS Technology is a premier provider of network solutions and IT
              services, dedicated to empowering businesses with innovative and
              reliable technology. With decades of expertise and a team of
              seasoned professionals, we specialize in delivering end-to-end
              solutions tailored to meet the unique needs of businesses across
              diverse industries.
            </p>
            <p className="text-gray-600 mb-4">
              Our comprehensive offerings include network design,
              implementation, optimization, and managed services, ensuring
              seamless connectivity and peak performance for organizations of
              all sizes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} p-4 rounded-lg flex items-center`}
                >
                  {item.icon}
                  <div>
                    <p className="font-bold text-gray-800">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${service.bgColor} p-3 rounded-full mr-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-red-600 font-medium flex items-center hover:text-red-800 transition-colors">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2">
              <div className="relative group">
                <div
                  className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-75
                 blur-md group-hover:opacity-100 transition duration-200"
                ></div>
                <img
                  src="https://cdn.pixabay.com/photo/2023/12/21/06/23/middle-age-8461306_1280.jpg"
                  alt="Dipesh Silwal"
                  className="relative rounded-2xl w-full h-auto shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Message from Our CEO
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mb-6"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                Dipesh Silwal
              </h3>
              <p className="text-red-600 font-medium mb-6">
                Founder and Chief Executive Officer
              </p>
              <p className="text-gray-600 mb-4">
                "At DNS Technology, we believe that technology should empower
                businesses, not complicate them. Our mission is to deliver
                innovative solutions that drive growth, enhance security, and
                simplify operations."
              </p>
              <p className="text-gray-600 mb-6">
                With over a decade of experience in the tech industry, I've seen
                firsthand how the right technology can transform businesses.
                That's why we've assembled a team of passionate experts
                dedicated to helping our clients navigate the digital landscape
                with confidence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of passionate professionals dedicated to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-red-200">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex space-x-4">
                    {/* Twitter */}
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253..."></path>
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239..."></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-medium py-3 px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-colors shadow-lg">
              View All Team Members
            </button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted By Industry Leaders
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with organizations across various
              industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-center"
              >
                <img
                  src={company.url}
                  alt={company.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to transform your business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover how DNS Technology can help your organization achieve its
              technology goals with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white font-medium py-3 px-8 rounded-full hover:from-red-700 hover:to-red-800 transition-colors shadow-lg">
                Contact Us
              </button>
              <button className="bg-white text-gray-800 font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;