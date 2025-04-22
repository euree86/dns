import React from "react";
import logo from "../image/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
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
  ];

  const serviceLinks = [
    { title: "Hardware level Services" },
    { title: "Server and Computer Installation" },
    { title: "CCTV Installation" },
    { title: "Networking and Troubleshooting" },
    { title: "Firewall Configuration and Security" },
    { title: "Software and Application Services" },
    { title: "Server and Computer Installation" },
    { title: "CCTV Installation" },
    { title: "Networking and Troubleshooting" },
    { title: "Firewall Configuration and Security" },
  ];

  const whatToDoLinks = [
    { title: "Software Expertise" },
    { title: "Hardware Expertise" },
    { title: "Highlighted Success meter" },
  ];

  const portfolioLinks = [
    { title: "Recent Project" },
    { title: "View All Project" },
  ];

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
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-[#1A77F3]" /> },
    { icon: <FaInstagram className="text-[#EF1488]" /> },
    { icon: <FaLinkedin className="text-[#1A77F3]" /> },
  ];

  return (
    <div className="bg-gray-100 px-4 py-8 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-16">
          {/* Logo and company name */}
          <div className="flex flex-col ">
            <img src={logo} alt="" className="w-12 h-12" />
            <div className="font-bold">DNS Technology Pvt.Ltd</div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>

            <div className="flex gap-20">
              {/* Product Section */}
              <div>
                <h3 className="font-semibold mb-2">Product</h3>
                <ul>
                  {productLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm mb-1 hover:text-red-600 cursor-pointer"
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4 mb-2">Who Are We</h3>
                <ul>
                  <li className="text-sm mb-1 hover:text-red-600 cursor-pointer">
                    About DNS
                  </li>
                </ul>
              </div>

              {/* Services Section */}
              <div>
                <h3 className="font-semibold mb-2">Services</h3>
                <ul>
                  {serviceLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm mb-1 hover:text-red-600 cursor-pointer"
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to do Section */}
              <div>
                <h3 className="font-semibold mb-2">What to do</h3>
                <ul>
                  {whatToDoLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm mb-1 hover:text-red-600 cursor-pointer"
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold mt-4 mb-2">Portfolio</h3>
                <ul>
                  {portfolioLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm mb-1 hover:text-red-600 cursor-pointer"
                    >
                      {link.title}
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold mt-4 mb-2">Support</h3>

                <h3 className="font-semibold mt-4 mb-2">Location</h3>
              </div>

              {/* Contact Us Section */}
              <div>
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <ul>
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="w-4 h-4 mr-2 flex items-center justify-center text-gray-600">
                        {item.icon}
                      </span>
                      <span className="text-sm">{item.info}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us Section */}
              <div>
                <h3 className="font-semibold mb-2">Follow Us On</h3>
                <div className="flex mb-4">
                  {socialLinks.map((link, index) => (
                    <div
                      key={index}
                      className="mr-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      {link.icon}
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold mb-2">Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 px-2 py-1 text-sm rounded-l w-full focus:outline-gray-400"
                  />
                  <button className="bg-gray-400 text-white px-2 py-1 text-sm rounded-r">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright footer */}
        <div className="text-center text-sm mt-6 font-bold text-red-700">
          ©2025 DNS Technology All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
