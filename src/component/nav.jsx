import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Logo */}
      <div className="mx-auto  px-4 py-2 sm:px-6 lg:px-36">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 h-12">
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-8" />
            <p className="font-medium text-normal text-center md:text-left">
              DNS Technology Pvt Ltd.
            </p>
          </div>

          <div className="w-full md:w-[300px] relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-8 py-1 rounded-lg bg-gray-200 text-gray-800 focus:outline-none"
            />
            <CiSearch className="absolute right-5 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          <div className="flex flex-row gap-24 sm:gap-8">
            <div className="flex items-center gap-1">
              <IoIosCall />
              <span className="text-normal font-medium">9851155538</span>
            </div>

            <div className="flex items-center gap-1">
              <MdEmail />
              <span className="text-normal font-medium hidden sm:inline">
                info@dnstech.com.np
              </span>
              <span className="text-normal font-medium sm:hidden">Email</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-red-800 h-12 flex items-center justify-center ">
        <div className="w-[60%] px-12 relative">
          <div className="flex justify-between items-center gap-12 ">
            <div>
              <h1 className="text-white  ">Home</h1>
            </div>

            {/* about us */}
            <div className=" group">
              <div className="flex gap-1 items-center cursor-pointer">
                <h1 className="text-white  ">About Us</h1>
                <IoChevronDown className="text-white " />
              </div>

              {/* about us mega menu */}
              <div
                className="absolute top-full left-0 bg-white shadow-lg p-6 mt-4 w-full grid grid-cols-4 gap-6 
  z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
  transition-all duration-300 ease-in-out"
              >
                {/* Company Section */}
                <div>
                  <h2 className="font-semibold mb-2">Company</h2>
                  <ul className="space-y-1 text-sm text-gray-700">
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
                  <ul className="space-y-1 text-sm text-gray-700">
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
                  <ul className="space-y-1 text-sm text-gray-700">
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
                  <ul className="space-y-1 text-sm text-gray-700">
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
              <div className="flex gap-1 items-center ">
                <h1 className="text-white f "> Product</h1>
                <IoChevronDown  className="text-white  " />
              </div>

              {/* product mega menu */}
              <div
                className="absolute top-full left-0 bg-white shadow-lg p-6 mt-4 w-full grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* Hardware Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Hardware
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <p className="font-medium text-gray-900">Networking</p>
                      <ul className="ml-4 list-disc space-y-1 ">
                        <li className="hover:underline">Switch (Brand)</li>
                        <li className="hover:underline">POE / Non-POE</li>
                        <li className="hover:underline">Full Gig Switch</li>
                        <li className="hover:underline">Non-Gig Switch</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-gray-900">Security</p>
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Servers & Racks
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <p className="font-medium text-gray-900">
                        Servers (Brand)
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Rack Server</li>
                        <li className="hover:underline">Tower Server</li>
                        <li className="hover:underline">NAS Server</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-gray-900">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Computing & Accessories
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <p className="font-medium text-gray-900">
                        Computer / Laptop / Monitor (Brand)
                      </p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">Core i3</li>
                        <li className="hover:underline">Core i5</li>
                        <li className="hover:underline">Core i7</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium mt-3 text-gray-900">
                        Accessories
                      </p>
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Software & Licensing
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <p className="font-medium text-gray-900">Software</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li className="hover:underline">ERP</li>
                        <li className="hover:underline">Courier</li>
                        <li className="hover:underline">Cheque Recorder</li>
                      </ul>
                    </li>
                    <li className="mt-3">
                      <p className="font-medium text-gray-900">License</p>
                    </li>
                    <li>
                      <p className="font-medium text-gray-900">SMS Services</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" group">
              <div className="flex gap-1 items-center ">
                <h1 className="text-white "> Services</h1>
                <IoChevronDown  className="text-white  " />
              </div>

              {/* service detail page */}
              <div
                className="absolute top-full left-0 bg-white shadow-lg p-6 mt-4 w-full grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* IT Services Section */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    IT Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Hardware Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Software Solutions
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Consulting Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Cloud Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Managed IT Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
              <div className="flex gap-1 items-center ">
                <h1 className="text-white  "> What we do</h1>
                <IoChevronDown  className="text-white  " />
              </div>

              {/* what we do mega mneu */}
              <div
                className="absolute top-full left-0 bg-white shadow-lg p-6 mt-4 w-full grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                <div>
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Core Expertise
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Solutions We Deliver
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Technologies We Use
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    How We Help
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Specialized Services
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Industries We Serve
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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

            <div className="group">
              <div className="flex gap-1 items-center ">
                <h1 className="text-white  "> Portfolio</h1>
                <IoChevronDown  className="text-white  " />
              </div>

              <div
                className="absolute top-full left-0 bg-white shadow-lg p-6 mt-4 w-full grid grid-cols-4 gap-8 
                z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible 
                transition-all duration-300 ease-in-out"
              >
                {/* Networking Projects */}
                <div>
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Networking Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Surveillance Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Software Development
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Server & Cloud Projects
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Access Control Systems
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
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
                  <h2 className="font-semibold text-base mb-3 text-gray-800">
                    Web & Mobile Apps
                  </h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="hover:underline">E-Commerce Platforms</li>
                    <li className="hover:underline">Educational Portals</li>
                    <li className="hover:underline">Mobile CRM Solutions</li>
                    <li className="hover:underline">Job Portals & Listings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-1 items-center ">
              <h1 className="text-white  "> Contact</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="lg:hidden hidden">
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold">Logo</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </a>
                <a
                  href="/product"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
