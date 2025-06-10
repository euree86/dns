import { Clock, Mail, Zap } from 'lucide-react';
import {
  BiSolidCctv,
  BiNetworkChart,
  BiServer,
  BiShieldAlt,
  BiCloud,
  BiCodeAlt,
} from "react-icons/bi";
import { FaUserTie, FaChartLine, FaLightbulb } from "react-icons/fa";
import vector from "../image/1.png";
import about from "../image/aboutus.jpg";
import Nav from "./nav";
import Footer from "./footer";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserTie className="text-red-600 text-xl sm:text-2xl mr-3" />,
    value: "50+",
    label: "Experts",
    bgColor: "bg-red-50",
  },
  {
    icon: <FaChartLine className="text-red-700 text-xl sm:text-2xl mr-3" />,
    value: "15 Years",
    label: "Experience",
    bgColor: "bg-red-100",
  },
  {
    icon: <FaLightbulb className="text-red-600 text-xl sm:text-2xl mr-3" />,
    value: "200+",
    label: "Projects",
    bgColor: "bg-red-50",
  },
  {
    icon: <BiServer className="text-red-700 text-xl sm:text-2xl mr-3" />,
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
    icon: <BiSolidCctv className="text-red-600 text-2xl sm:text-3xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Network Solutions",
    description:
      "From design to implementation, we provide robust network infrastructure that ensures seamless connectivity and optimal performance.",
    icon: <BiNetworkChart className="text-red-700 text-2xl sm:text-3xl" />,
    bgColor: "bg-red-200",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving threats in today's complex cyber landscape.",
    icon: <BiShieldAlt className="text-red-600 text-2xl sm:text-3xl" />,
    bgColor: "bg-red-100",
  },
  {
    title: "Cloud Services",
    description:
      "Scalable cloud solutions that enhance flexibility, reduce costs, and improve collaboration across your organization.",
    icon: <BiCloud className="text-red-700 text-2xl sm:text-3xl" />,
    bgColor: "bg-red-200",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Sophia Lee",
    position: "CEO & Co-Founder",
    image:
      "https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_960_720.jpg",
    bio: "Visionary leader with 12+ years in tech innovation and strategic business development.",
    skills: ["Leadership", "Strategy", "Innovation"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sophia@company.com",
    },
  },
  {
    id: 2,
    name: "Olivia Kim",
    position: "Co-Founder & CTO",
    image:
      "https://cdn.pixabay.com/photo/2024/11/22/13/20/man-9216455_1280.jpg",
    bio: "Technical architect specializing in scalable solutions and emerging technologies.",
    skills: ["Full-Stack", "Cloud", "AI/ML"],
    social: {
      linkedin: "#",
      github: "#",
      email: "olivia@company.com",
    },
  },
  {
    id: 3,
    name: "Mark Martin",
    position: "Business Developer",
    image:
      "https://cdn.pixabay.com/photo/2022/09/02/18/35/man-7428188_1280.jpg",
    bio: "Growth expert focused on partnerships and market expansion strategies.",
    skills: ["Sales", "Partnerships", "Growth"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mark@company.com",
    },
  },
  {
    id: 4,
    name: "Sarah Chen",
    position: "Head of Design",
    image:
      "https://img.freepik.com/free-photo/business-owner-working-their-strategy_23-2149241318.jpg?semt=ais_hybrid&w=740",
    bio: "Creative designer passionate about user experience and visual storytelling.",
    skills: ["UI/UX", "Branding", "Product"],
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@company.com",
    },
  },
];

const getSocialIcon = (platform) => {
  switch (platform) {
    case "linkedin":
      return <FaLinkedin />;
    case "github":
      return <FaGithub />;
    case "twitter":
      return <FaTwitter />;
    case "email":
      return <FaEnvelope />;
    default:
      return null;
  }
};

const companies = [
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  {
    name: "Google",
    url: "https://images.squarespace-cdn.com/content/v1/5efac47c974baf191ceaead9/1cc21c90-d2fb-4258-ad3f-6922401bb6a0/Jeremy-DV-Boyd-Logo-Designs-1500px-Enerbee.png",
  },
  { name: "IBM", url: "https://logo.clearbit.com/ibm.com" },
  {
    name: "Amazon",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1iqUDZOrXHaod5rHaRvBl1JwwfMs1uBjq1g&s",
  },
  {
    name: "Cisco",
    url: "https://www.shutterstock.com/image-vector/customer-care-icon-social-help-600nw-1921058849.jpg",
  },
  {
    name: "Microsoft",
    url: "https://www.shutterstock.com/image-vector/star-logo-person-shape-yellow-600nw-2234037961.jpg",
  },
  {
    name: "Google",
    url: "https://pbs.twimg.com/media/CoO0h-NWAAAZO5a.jpg:large",
  },
  {
    name: "IBM",
    url: "https://www.identity-international.com/wp-content/uploads/2019/11/ID-International-Blog3-Logos-1.jpg",
  },
  { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
  {
    name: "Cisco",
    url: "https://cdn.dribbble.com/userupload/17111767/file/original-629644334639d45ceadb2bc823c7af3e.jpg?resize=400x0",
  },
];

export default function ITSolutionsSection() {
  return (
    <div className="min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-black space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Perfect IT and Network Solution For Your Business
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </p>

              <div className="pt-4">
                <button className="px-6 py-2 sm:py-3 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all rounded-md text-sm sm:text-base">
                  Contact us
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative w-2/3 max-w-lg">
                <img
                  src={about }
                  alt="School Management System on multiple devices"
                  className="w-full h-auto object-cover "
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
          className="w-full h-auto"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F2F2F2"
          />
        </svg>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/14/07/18/woman-5653501_1280.jpg"
                alt="Business team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="font-bold text-xl sm:text-2xl">About DNS</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Provide the most{" "}
              <span className="text-red-800">Impressive Solutions</span>
            </h1>

            <div className="space-y-4 text-gray-600 text-justify text-sm sm:text-base">
              <p>
                DNS Technology is a premier provider of network solutions and IT
                services, dedicated to empowering businesses with innovative and
                reliable technology. With decades of expertise and a team of
                seasoned professionals, we specialize in delivering end-to-end
                solutions tailored to meet the unique needs of businesses across
                diverse industries. Our comprehensive offerings include network
                design, implementation, optimization, and managed services,
                ensuring seamless connectivity and peak performance for
                organizations of all sizes.
              </p>
            </div>

            <div>
              <button className="bg-[#1E2939] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center pb-16 sm:pb-20 lg:pb-24 flex flex-col items-center gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2939]">
              Our Core Services and Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="flex items-center">
                    <div className={`${service.bgColor} p-3 sm:p-4 rounded-full`}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 py-3 sm:py-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-justify text-sm sm:text-base">
                    {service.description}
                  </p>
                  <button className="text-red-800 font-medium flex items-center hover:text-red-900 transition-colors text-sm sm:text-base">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2939] mb-2">
              Message from Our CEO
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mb-6 mx-auto lg:mx-0"></div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1">
              Dipesh Silwal
            </h3>
            <p className="text-red-600 font-medium mb-6 text-sm sm:text-base">
              Founder and Chief Executive Officer
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              "At DNS Technology, we believe that technology should empower
              businesses, not complicate them. Our mission is to deliver
              innovative solutions that drive growth, enhance security, and
              simplify operations."
            </p>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              With over a decade of experience in the tech industry, I've seen
              firsthand how the right technology can transform businesses.
              That's why we've assembled a team of passionate experts dedicated
              to helping our clients navigate the digital landscape with
              confidence.
            </p>
            <div className="flex justify-center lg:justify-start space-x-3">
              <a
                href="#"
                className="text-[#1E2939] hover:text-red-600 transition-colors text-xl sm:text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-[#1E2939] hover:text-red-600 transition-colors text-xl sm:text-2xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="lg:w-1/3 w-full max-w-sm">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl opacity-75 blur-md group-hover:opacity-100 transition duration-200"></div>
              <img
                src="https://cdn.pixabay.com/photo/2023/12/21/06/23/middle-age-8461306_1280.jpg"
                alt="Dipesh Silwal"
                className="relative rounded-2xl w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-[#F2F2F2] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2939] mb-2">
              Meet Our Amazing Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 mx-auto max-w-3xl">
              Our diverse team of experts brings together years of experience,
              creativity, and passion to deliver exceptional results for our
              clients.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group rounded-lg overflow-hidden"
              >
                {/* Image Container */}
                <div className="overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex items-start flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3 text-sm sm:text-base">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 text-start">
                    {member.bio}
                  </p>

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-3 sm:space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="p-2 rounded-full bg-[#1E2939] text-white hover:bg-red-600 hover:text-white transition-all duration-200 transform hover:scale-110 text-sm"
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="bg-[#1E2939] rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-white mb-6 text-sm sm:text-base">
                We're always looking for talented individuals who share our
                passion for innovation and excellence.
              </p>
              <button className="bg-white text-red-800 px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="pb-8 sm:pb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2939] mb-2">
            Trusted By Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 mx-auto max-w-2xl">
            We're proud to partner with organizations across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 p-4 sm:p-6 hover:shadow-md transition-shadow flex justify-center items-center"
            >
              <img
                src={company.url || "/placeholder.svg"}
                alt={company.name}
                className="h-12 sm:h-16 lg:h-20 object-contain transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
