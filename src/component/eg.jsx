import { Clock, Mail, Zap } from "lucide-react";
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
];

const companies = [
  { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google", url: "https://logo.clearbit.com/google.com" },
  { name: "IBM", url: "https://logo.clearbit.com/ibm.com" },
  { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
  { name: "Cisco", url: "https://logo.clearbit.com/cisco.com" },
];
export default function ITSolutionsSection() {
  return (
    <div>
      <Nav />
      <div className="pt-24 bg-[#F2F2F2]">
        <div className="container mx-auto px-4 py-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-black space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Perfect IT and Network Solution For Your Business
              </h1>

              <p className="text-md text-black leading-relaxed max-w-2xl italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-6 bg-red-700 hover:bg-red-700 text-white font-semibold transition-all group rounded-md flex items-center py-2">
                  Read More
                </button>
                <button
                  className="px-8 hover:outline-red-600 hover:bg-gray-100 hover:text-red-600 transition-all outline-1
                 outline-red-800 rounded-md font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Content - Device Mockups */}
            <div className="relative flex justify-center ">
              <div className="relative w-full max-w-lg">
                <img
                  src={vector}
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,
                 18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
            fill="#F2F2F2"
          />
        </svg>
      </div>

      {/* Introduction */}
      <div className="container mx-auto py-16 mb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden max-w-2xl h-full">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/14/07/18/woman-5653501_1280.jpg"
                alt="Business team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="shadow-4xl bg-gray-100 px-4 py-2 w-fit rounded-lg font-medium">
              About DNS
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 ">
              Provide the most{" "}
              <span className="text-red-800">Impressive Solutions</span>
            </h1>

            <div className="space-y-4 text-gray-600 text-justify ">
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
              <button className="bg-[#1E2939] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
          <div className="text-center pb-12 flex flex-col items-center gap-4 ">
            <div className="shadow-4xl bg-gray-100 px-4 py-2 w-fit rounded-lg font-medium ">
              About DNS
            </div>
            <h2 className="text-5xl font-bold text-white ">
              Our Core Services
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto mt-2"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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
                  <button className="text-red-800 font-medium flex items-center hover:text-red-800 transition-colors">
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

      {/* IT Solutions Section */}
      <div className="bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Experience Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          Suspendisse potenti.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 ">
        {/* Team Member 1 */}
        <div className="text-center">
          <div className="mb-3 rounded-lg overflow-hidden h-full">
            <img
              src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_960_720.jpg"
              alt="Sophia Lee"
              className="w-full h-full object-cover "
            />
          </div>
          <h3 className="font-semibold text-gray-900">Sophia Lee</h3>
          <p className="text-sm text-gray-600">CEO & Co-Founder</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <div className="mb-3 rounded-lg overflow-hidden h-full">
            <img
              src="https://cdn.pixabay.com/photo/2024/11/22/13/20/man-9216455_1280.jpg"
              alt="Olivia Kim"
              className="w-full h-full  object-cover h-full"
            />
          </div>
          <h3 className="font-semibold text-gray-900">Olivia Kim</h3>
          <p className="text-sm text-gray-600">Co-Founder</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <div className="mb-3 rounded-lg overflow-hidden h-full">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/02/18/35/man-7428188_1280.jpg"
              alt="Mark Martin"
              className="w-full h-full  object-cover"
            />
          </div>
          <h3 className="font-semibold text-gray-900">Mark Martin</h3>
          <p className="text-sm text-gray-600">Business Developer</p>
        </div>
      </div>

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
                  className="h-12 object-contain transition-all"
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
            <div className="flex flex-col sm:flex-row ga p-4 justify-center">
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
      <Footer />
    </div>
  );
}
{
  /* <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="grid grid-cols-1 gap-4">
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
          </div> */
}
