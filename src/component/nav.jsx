import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import Home from "./home";
import About from "./about";
import Products from "./products";
import Services from "./services";
import Portfolio from "./portfolio";

export default function Navbar() {
  return (
    <nav className=" top-0 left-0 w-full z-50 fixed bg-gray-100">
      {/* Top info bar */}
      <div className=" text-gray-700    text-sm  border-b border-gray-200 py-1">
        <div className="w-[80%] mx-auto flex justify-between items-center ">
          {/* number email */}
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center space-x-1">
              <IoIosCall className="text-black   " />
              <span>+977 1-4782849</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdEmail className="text-black " />
              <span>dnstechnology@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <CiLocationOn className="text-black " />
              <span>New Baneshwor, Kathmandu</span>
            </div>
          </div>

          {/* social media */}
          <div className="flex space-x-1">
            <a
              href="#"
              className="text-gray-700 hover:text-white hover:bg-red-800 rounded-full w-8 h-8
                 flex items-center justify-center transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-700  hover:text-white hover:bg-red-800 rounded-full w-8 h-8
                 flex items-center justify-center transition-colors"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-white hover:bg-red-800 rounded-full w-8 h-8
                 flex items-center justify-center transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}

      <div className=" text-gray-700 border-b border-gray-200 py-1">
        <div className="  w-[80%] mx-auto flex justify-between items-center h-14 ">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="DNS Technology Logo" className="w-10" />
            <span className="text-base font-semibold text-gray-700">
              DNS Technology Pvt Ltd.
            </span>
          </div>
          <div className="flex justify-between items-center gap-12 ">
            <div>
              {/* <Home/> */}

              <Link to="/home">
                <h1 className=" font-semibold  ">Home</h1>
              </Link>
            </div>

            {/* about us */}
            <div className=" group">
              <div>
                <Link
                  to="/about"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className="  font-semibold   ">About Us</h1>
                  <IoChevronDown className="  font-semibold  " />
                </Link>
              </div>

              {/* about us mega menu */}
              <div
                className=" absolute top-full left-1/10 bg-[#101828] text-white shadow-lg p-6 w-[80%] grid grid-cols-4 gap-6 
                  z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 ease-in-out"
              >
                {/* Company Section */}
                <div>
                  <h2 className="font-semibold mb-2">Company</h2>
                  <ul className="space-y-1 text-sm text-white">
                    <li>
                      <a
                        href="/about/our-story"
                        className="hover:text-blue-600"
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a href="/about/team" className="hover:text-blue-600">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/about/vision" className="hover:text-blue-600">
                        Vision & Mission
                      </a>
                    </li>
                    <li>
                      <a href="/about/careers" className="hover:text-blue-600">
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>

                {/* What We Do Section */}
                <div>
                  <h2 className="font-semibold mb-2">What We Do</h2>
                  <ul className="space-y-1 text-sm text-white">
                    <li>
                      <a href="/about/services" className="hover:text-blue-600">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="/about/partners" className="hover:text-blue-600">
                        Our Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/testimonials"
                        className="hover:text-blue-600"
                      >
                        Client Testimonials
                      </a>
                    </li>
                  </ul>
                </div>

                {/* IT Solutions Section */}
                <div>
                  <h2 className="font-semibold mb-2">IT Solutions</h2>
                  <ul className="space-y-1 text-sm text-white">
                    <li>
                      <a
                        href="/about/software-development"
                        className="hover:text-blue-600"
                      >
                        Software Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/networking"
                        className="hover:text-blue-600"
                      >
                        Networking & Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/cloud-services"
                        className="hover:text-blue-600"
                      >
                        Cloud & Hosting Services
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Hardware Solutions Section */}
                <div>
                  <h2 className="font-semibold mb-2">Hardware Solutions</h2>
                  <ul className="space-y-1 text-sm text-white">
                    <li>
                      <a
                        href="/about/hardware-sales"
                        className="hover:text-blue-600"
                      >
                        Hardware Sales
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/maintenance"
                        className="hover:text-blue-600"
                      >
                        Maintenance & Repair
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about/installations"
                        className="hover:text-blue-600"
                      >
                        Device Installations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* product */}
            <div className=" group">
              <div>
                <Link
                  to="/products"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className=" font-semibold    "> Product</h1>
                  <IoChevronDown className=" font-semibold    " />
                </Link>
              </div>

              {/* product mega menu */}
              <div
                className="absolute top-full  bg-[#101828] shadow-lg p-6 left-1/10 w-[80%] grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* Hardware Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Hardware
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li>
                      <p className="font-medium text-white">Networking</p>
                      <ul className="ml-4 list-disc space-y-1 ">
                        <li className="hover:underline">Switch (Brand)</li>
                        <li className="hover:underline">POE / Non-POE</li>
                        <li className="hover:underline">Full Gig Switch</li>
                        <li className="hover:underline">Non-Gig Switch</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-white">Security</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">
                          CCTV & Surveillance (2MP, 4MP, 5MP, 8MP)
                        </li>
                        <li className="hover:underline">
                          Recorder: DVR / NVR / XVR (4CH, 8CH, 16CH, 32CH)
                        </li>
                        <li className="hover:underline">
                          Firewalls & Security (Brands, Models)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Servers & Racks */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Servers & Racks
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li>
                      <p className="font-medium text-white">Servers (Brand)</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Rack Server</li>
                        <li className="hover:underline">Tower Server</li>
                        <li className="hover:underline">NAS Server</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-white">
                        Racks (Brand)
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Server Rack</li>
                        <li className="hover:underline">CCTV Rack</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Computing & Accessories */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Computing & Accessories
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li>
                      <p className="font-medium text-white">
                        Computer / Laptop / Monitor (Brand)
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Core i3</li>
                        <li className="hover:underline">Core i5</li>
                        <li className="hover:underline">Core i7</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-white">Accessories</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Keyboard</li>
                        <li className="hover:underline">Mouse</li>
                        <li className="hover:underline">HDMI Cables</li>
                        <li className="hover:underline">Power Bank</li>
                        <li className="hover:underline">Storage</li>
                        <li className="hover:underline">RAM</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* Software & Licensing */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Software & Licensing
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li>
                      <p className="font-medium text-white">Software</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">ERP</li>
                        <li className="hover:underline">Courier</li>
                        <li className="hover:underline">Cheque Recorder</li>
                      </ul>
                    </li>
                    <li className="mt-3">
                      <p className="font-medium text-white">License</p>
                    </li>
                    <li>
                      <p className="font-medium text-white">SMS Services</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* service */}
            <div className=" group">
              <div>
                <Link
                  to="/services"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className="  font-semibold  "> Services</h1>
                  <IoChevronDown className="  font-semibold   " />
                </Link>
              </div>

              {/* service detail page */}
              <div
                className="absolute top-full  bg-[#101828] shadow-lg p-6 left-1/10 w-[80%] grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* IT Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    IT Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Network Setup & Configuration
                    </li>
                    <li className="hover:underline">System Integration</li>
                    <li className="hover:underline">Cloud Solutions</li>
                    <li className="hover:underline">
                      IT Support & Maintenance
                    </li>
                  </ul>
                </div>

                {/* Hardware Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Hardware Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Server Installation & Setup
                    </li>
                    <li className="hover:underline">
                      CCTV & Security System Installation
                    </li>
                    <li className="hover:underline">
                      Networking Equipment Installation
                    </li>
                    <li className="hover:underline">
                      Hardware Troubleshooting & Repair
                    </li>
                  </ul>
                </div>

                {/* Software Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Software Solutions
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Custom Software Development
                    </li>
                    <li className="hover:underline">
                      ERP System Implementation
                    </li>
                    <li className="hover:underline">
                      Software Installation & Configuration
                    </li>
                    <li className="hover:underline">
                      Software Support & Maintenance
                    </li>
                  </ul>
                </div>

                {/* Consulting Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Consulting Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">IT Strategy & Planning</li>
                    <li className="hover:underline">
                      Cybersecurity Consulting
                    </li>
                    <li className="hover:underline">System Audits & Reviews</li>
                    <li className="hover:underline">
                      Digital Transformation Consulting
                    </li>
                  </ul>
                </div>

                {/* Cloud Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Cloud Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Cloud Infrastructure Management
                    </li>
                    <li className="hover:underline">Cloud Backup Solutions</li>
                    <li className="hover:underline">Cloud Migration & Setup</li>
                    <li className="hover:underline">Virtualization Services</li>
                  </ul>
                </div>

                {/* Managed IT Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Managed IT Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">24/7 Monitoring</li>
                    <li className="hover:underline">
                      Managed Network Security
                    </li>
                    <li className="hover:underline">
                      Data Backup & Disaster Recovery
                    </li>
                    <li className="hover:underline">IT Helpdesk Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* what we do */}
            <div className=" group">
              <div>
                <Link
                  to="/whatwedo"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  {" "}
                  <h1 className=" font-semibold    "> What we do</h1>
                  <IoChevronDown className=" font-semibold    " />
                </Link>
              </div>

              {/* what we do mega mneu */}
              <div
                className="absolute top-full  bg-[#101828] shadow-lg p-6  left-1/10 w-[80%] grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                <div>
                  <h2 className="font-semibold text-base mb-3 ">
                    Core Expertise
                  </h2>
                  <ul className="space-y-2 text-sm ">
                    <li className="hover:underline">
                      IT Infrastructure Management
                    </li>
                    <li className="hover:underline">
                      Network Design & Implementation
                    </li>
                    <li className="hover:underline">Cybersecurity Solutions</li>
                    <li className="hover:underline">Cloud Architecture</li>
                  </ul>
                </div>

                {/* Solutions We Deliver */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Solutions We Deliver
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">End-to-End IT Solutions</li>
                    <li className="hover:underline">
                      Custom Enterprise Software
                    </li>
                    <li className="hover:underline">
                      Surveillance & Security Systems
                    </li>
                    <li className="hover:underline">
                      Business Automation Tools
                    </li>
                  </ul>
                </div>

                {/* Technologies We Use */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Technologies We Use
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Microsoft & Linux Platforms
                    </li>
                    <li className="hover:underline">Cloud (AWS, Azure, GCP)</li>
                    <li className="hover:underline">
                      Networking Devices (Cisco, MikroTik)
                    </li>
                    <li className="hover:underline">
                      Virtualization (VMware, Hyper-V)
                    </li>
                  </ul>
                </div>

                {/* How We Help */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    How We Help
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Consulting & Roadmapping
                    </li>
                    <li className="hover:underline">System Integration</li>
                    <li className="hover:underline">
                      Technical Support & Maintenance
                    </li>
                    <li className="hover:underline">Training & Onboarding</li>
                  </ul>
                </div>

                {/* Specialized Services */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Specialized Services
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">Firewall & VPN Setup</li>
                    <li className="hover:underline">Data Center Design</li>
                    <li className="hover:underline">
                      Biometric & Access Control
                    </li>
                    <li className="hover:underline">
                      Performance Optimization
                    </li>
                  </ul>
                </div>

                {/* Industries We Serve */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Industries We Serve
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">Corporate & Enterprise</li>
                    <li className="hover:underline">
                      Government & Public Sector
                    </li>
                    <li className="hover:underline">Education & Research</li>
                    <li className="hover:underline">
                      Healthcare & Hospitality
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* portfolio */}
            <div className="group">
              <div>
                <Link
                  to="/portfolio"
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <h1 className="  font-semibold    "> Portfolio</h1>
                  <IoChevronDown className="  font-semibold    " />
                </Link>
              </div>

              <div
                className="absolute top-full bg-[#101828] shadow-lg p-6 left-1/10 w-[80%] grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* Networking Projects */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Networking Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Enterprise Network Setup
                    </li>
                    <li className="hover:underline">Campus Wi-Fi Solutions</li>
                    <li className="hover:underline">Secure VPN Deployment</li>
                    <li className="hover:underline">Data Center Networking</li>
                  </ul>
                </div>

                {/* Surveillance Projects */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Surveillance Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      City-Wide CCTV Installation
                    </li>
                    <li className="hover:underline">
                      Corporate Surveillance Systems
                    </li>
                    <li className="hover:underline">
                      Warehouse Monitoring Solutions
                    </li>
                    <li className="hover:underline">
                      Smart Surveillance Integration
                    </li>
                  </ul>
                </div>

                {/* Software Development */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Software Development
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">Custom ERP Systems</li>
                    <li className="hover:underline">Courier Management Apps</li>
                    <li className="hover:underline">Inventory Systems</li>
                    <li className="hover:underline">
                      Business Automation Tools
                    </li>
                  </ul>
                </div>

                {/* Server & Cloud Projects */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Server & Cloud Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">
                      Server Infrastructure Deployment
                    </li>
                    <li className="hover:underline">Hybrid Cloud Setup</li>
                    <li className="hover:underline">Data Migration to AWS</li>
                    <li className="hover:underline">
                      Disaster Recovery Solutions
                    </li>
                  </ul>
                </div>

                {/* Access Control Systems */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Access Control Systems
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">Biometric Integration</li>
                    <li className="hover:underline">RFID Entry Systems</li>
                    <li className="hover:underline">
                      Multi-Site Access Management
                    </li>
                    <li className="hover:underline">
                      Time Attendance Solutions
                    </li>
                  </ul>
                </div>

                {/* Web & Mobile Apps */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-white">
                    Web & Mobile Apps
                  </h2>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="hover:underline">E-Commerce Platforms</li>
                    <li className="hover:underline">Educational Portals</li>
                    <li className="hover:underline">Mobile CRM Solutions</li>
                    <li className="hover:underline">Job Portals & Listings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-1 items-center ">
              <h1 className=" font-semibold    "> Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
