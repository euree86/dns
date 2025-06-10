import logo from "../image/logo.png"
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  const productLinks = [
    { title: "Firewall Devices" },
    { title: "Network Cables" },
    { title: "CCTV and Surveillance" },
    { title: "Server and Network Rack" },
    { title: "Network Switches" },
    { title: "AP (Access Point Devices)" },
    { title: "Wireless Devices" },
    { title: "Servers and Computers" },
  ]

  const serviceLinks = [
    { title: "Hardware level Services" },
    { title: "Server and Computer Installation" },
    { title: "CCTV Installation" },
    { title: "Networking and Troubleshooting" },
    { title: "Firewall Configuration and Security" },
    { title: "Software and Application Services" },
  ]

  const whatToDoLinks = [
    { title: "Software Expertise" },
    { title: "Hardware Expertise" },
    { title: "Highlighted Success meter" },
  ]

  const portfolioLinks = [{ title: "Recent Project" }, { title: "View All Project" }]

  const contactInfo = [
    { icon: <IoCall className="text-[#38DA54]" />, info: "9851155538" },
    {
      icon: <MdEmail className="text-[#08B1F0]" />,
      info: "info@dnstech.com.np",
    },
    {
      icon: <FaLocationDot className="text-[#FA5B5A]" />,
      info: "Baneshwor,Kathmandu",
    },
  ]

  const socialLinks = [
    {
      icon: <FaFacebook className="text-[#1A77F3] text-lg sm:text-xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/dns.tech1",
    },
    {
      icon: <FaInstagram className="text-[#EF1488] text-lg sm:text-xl" />,
      name: "Instagram",
      url: "https://www.instagram.com/dns_tech1/",
    },
    {
      icon: <FaLinkedin className="text-[#1A77F3] text-lg sm:text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/d-n-s-technolgoy-pvt-ltd/posts/?feedView=all",
    },
  ]

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src={logo || "/placeholder.svg"}
                alt="DNS Technology Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2 sm:mr-3"
              />
              <div className="font-bold text-lg sm:text-xl text-white">DNS Technology Pvt.Ltd</div>
            </div>
            <p className="text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Your trusted partner for comprehensive IT solutions and network infrastructure services.
            </p>

            {/* Newsletter */}
            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3">Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-gray-700 bg-gray-800 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded sm:rounded-l sm:rounded-r-none w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 text-xs sm:text-sm rounded sm:rounded-r sm:rounded-l-none transition duration-200 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3">Follow Us</h3>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-700 rounded-full flex items-center justify-center transition duration-200"
                    aria-label={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-1 sm:space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm hover:text-white transition duration-200 block">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Portfolio */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm hover:text-white transition duration-200 block">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3">Portfolio</h3>
            <ul className="space-y-1 sm:space-y-2">
              {portfolioLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm hover:text-white transition duration-200 block">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg text-white mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li>
                <a href="#" className="text-xs sm:text-sm hover:text-white transition duration-200 block">
                  About DNS
                </a>
              </li>
              {whatToDoLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs sm:text-sm hover:text-white transition duration-200 block">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-base sm:text-lg text-white mb-2 sm:mb-3">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 text-sm sm:text-base">{item.icon}</span>
                  <span className="text-xs sm:text-sm leading-relaxed">{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} DNS Technology Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
