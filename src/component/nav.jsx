"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

// Mega menu data structure for better maintainability
const megaMenuData = {
  about: {
    Company: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Team", href: "/about/team" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Careers", href: "/about/careers" },
    ],
    "What We Do": [
      { label: "Our Services", href: "/about/services" },
      { label: "Our Partners", href: "/about/partners" },
      { label: "Client Testimonials", href: "/about/testimonials" },
    ],
    "IT Solutions": [
      { label: "Software Development", href: "/about/software-development" },
      { label: "Networking & Security", href: "/about/networking" },
      { label: "Cloud & Hosting Services", href: "/about/cloud-services" },
    ],
    "Hardware Solutions": [
      { label: "Hardware Sales", href: "/about/hardware-sales" },
      { label: "Maintenance & Repair", href: "/about/maintenance" },
      { label: "Device Installations", href: "/about/installations" },
    ],
  },
  products: {
    Hardware: {
      sections: [
        {
          title: "Networking",
          items: [
            "Switch (Brand)",
            "POE / Non-POE",
            "Full Gig Switch",
            "Non-Gig Switch",
          ],
        },
        {
          title: "Security",
          items: [
            "CCTV & Surveillance (2MP, 4MP, 5MP, 8MP)",
            "Recorder: DVR / NVR / XVR (4CH, 8CH, 16CH, 32CH)",
            "Firewalls & Security (Brands, Models)",
          ],
        },
      ],
    },
    "Servers & Racks": {
      sections: [
        {
          title: "Servers (Brand)",
          items: ["Rack Server", "Tower Server", "NAS Server"],
        },
        {
          title: "Racks (Brand)",
          items: ["Server Rack", "CCTV Rack"],
        },
      ],
    },
    "Computing & Accessories": {
      sections: [
        {
          title: "Computer / Laptop / Monitor (Brand)",
          items: ["Core i3", "Core i5", "Core i7"],
        },
        {
          title: "Accessories",
          items: [
            "Keyboard",
            "Mouse",
            "HDMI Cables",
            "Power Bank",
            "Storage",
            "RAM",
          ],
        },
      ],
    },
    "Software & Licensing": {
      sections: [
        {
          title: "Software",
          items: ["ERP", "Courier", "Cheque Recorder"],
        },
        {
          title: "License",
          items: [],
        },
        {
          title: "SMS Services",
          items: [],
        },
      ],
    },
  },
  services: [
    {
      title: "IT Services",
      items: [
        "Network Setup & Configuration",
        "System Integration",
        "Cloud Solutions",
        "IT Support & Maintenance",
      ],
    },
    {
      title: "Hardware Services",
      items: [
        "Server Installation & Setup",
        "CCTV & Security System Installation",
        "Networking Equipment Installation",
        "Hardware Troubleshooting & Repair",
      ],
    },
    {
      title: "Software Solutions",
      items: [
        "Custom Software Development",
        "ERP System Implementation",
        "Software Installation & Configuration",
        "Software Support & Maintenance",
      ],
    },
    {
      title: "Consulting Services",
      items: [
        "IT Strategy & Planning",
        "Cybersecurity Consulting",
        "System Audits & Reviews",
        "Digital Transformation Consulting",
      ],
    },
    {
      title: "Cloud Services",
      items: [
        "Cloud Infrastructure Management",
        "Cloud Backup Solutions",
        "Cloud Migration & Setup",
        "Virtualization Services",
      ],
    },
    {
      title: "Managed IT Services",
      items: [
        "24/7 Monitoring",
        "Managed Network Security",
        "Data Backup & Disaster Recovery",
        "IT Helpdesk Support",
      ],
    },
  ],
  portfolio: [
    {
      title: "Networking Projects",
      items: [
        "Enterprise Network Setup",
        "Campus Wi-Fi Solutions",
        "Secure VPN Deployment",
        "Data Center Networking",
      ],
    },
    {
      title: "Surveillance Projects",
      items: [
        "City-Wide CCTV Installation",
        "Corporate Surveillance Systems",
        "Warehouse Monitoring Solutions",
        "Smart Surveillance Integration",
      ],
    },
    {
      title: "Software Development",
      items: [
        "Custom ERP Systems",
        "Courier Management Apps",
        "Inventory Systems",
        "Business Automation Tools",
      ],
    },
    {
      title: "Server & Cloud Projects",
      items: [
        "Server Infrastructure Deployment",
        "Hybrid Cloud Setup",
        "Data Migration to AWS",
        "Disaster Recovery Solutions",
      ],
    },
    {
      title: "Access Control Systems",
      items: [
        "Biometric Integration",
        "RFID Entry Systems",
        "Multi-Site Access Management",
        "Time Attendance Solutions",
      ],
    },
    {
      title: "Web & Mobile Apps",
      items: [
        "E-Commerce Platforms",
        "Educational Portals",
        "Mobile CRM Solutions",
        "Job Portals & Listings",
      ],
    },
  ],
};

// Reusable components
const SocialIcon = ({ href, children, className = "" }) => (
  <a
    href={href}
    className={`text-gray-700 hover:text-white hover:bg-red-800 rounded-full w-8 h-8 
      flex items-center justify-center transition-colors ${className}`}
  >
    {children}
  </a>
);

const MegaMenuSection = ({ title, items, isProductSection = false }) => (
  <div>
    <h2 className="font-semibold text-base mb-3 text-gray-900">{title}</h2>
    <ul className="space-y-2 text-sm text-gray-700">
      {isProductSection
        ? items.sections?.map((section, idx) => (
            <li key={idx}>
              <p className="font-medium text-gray-900">{section.title}</p>
              <ul className="ml-4 list-disc space-y-1">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))
        : items.map((item, idx) => (
            <li key={idx} className="hover:underline cursor-pointer">
              {typeof item === "string" ? (
                item
              ) : (
                <a href={item.href} className="hover:text-blue-600">
                  {item.label}
                </a>
              )}
            </li>
          ))}
    </ul>
  </div>
);

const MegaMenu = ({ type, data, isMobile = false }) => {
  const baseClasses = isMobile
    ? `bg-gray-50 p-4 border-t border-gray-200`
    : `absolute top-full left-0 right-0 bg-gray-100 shadow-lg p-6 
 z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 
 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out mx-8`;

  const getGridClasses = () => {
    if (isMobile) return "grid grid-cols-1 gap-4";

    if (type === "about" || type === "products")
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6";
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";
  };

  if (type === "about") {
    return (
      <div className={baseClasses}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={getGridClasses()}>
            {Object.entries(data).map(([title, items]) => (
              <MegaMenuSection key={title} title={title} items={items} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "products") {
    return (
      <div className={baseClasses}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={getGridClasses()}>
            {Object.entries(data).map(([title, items]) => (
              <MegaMenuSection
                key={title}
                title={title}
                items={items}
                isProductSection={true}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For services and portfolio (array-based data)
  return (
    <div className={baseClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={getGridClasses()}>
          {data.map((section, idx) => (
            <MegaMenuSection
              key={idx}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  to,
  label,
  hasDropdown = false,
  megaMenuType = null,
  isMobile = false,
  isOpen = false,
  onToggle = null,
}) => {
  if (isMobile) {
    return (
      <div className="border-b border-gray-200">
        <div
          className="flex justify-between items-center py-3 px-4 cursor-pointer hover:bg-gray-50"
          onClick={hasDropdown ? onToggle : undefined}
        >
          <Link
            to={to}
            className="flex-1 font-semibold text-gray-700"
            onClick={!hasDropdown ? onToggle : undefined}
          >
            {label}
          </Link>
          {hasDropdown && (
            <IoChevronDown
              className={`font-semibold transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {hasDropdown && isOpen && megaMenuType && (
          <MegaMenu
            type={megaMenuType}
            data={megaMenuData[megaMenuType]}
            isMobile={true}
          />
        )}
      </div>
    );
  }

  return (
    <div className="group">
      <Link to={to} className="flex gap-1 items-center cursor-pointer">
        <h1 className="font-semibold">{label}</h1>
        {hasDropdown && <IoChevronDown className="font-semibold" />}
      </Link>
      {hasDropdown && megaMenuType && (
        <MegaMenu type={megaMenuType} data={megaMenuData[megaMenuType]} />
      )}
    </div>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    { icon: IoIosCall, text: "+977 1-4782849" },
    { icon: MdEmail, text: "dnstechnology@gmail.com" },
    { icon: CiLocationOn, text: "New Baneshwor, Kathmandu" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FiInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  const navItems = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Us",
      hasDropdown: true,
      megaMenuType: "about",
    },
    {
      to: "/products",
      label: "Product",
      hasDropdown: true,
      megaMenuType: "products",
    },

    {
      to: "/services",
      label: "Services",
      hasDropdown: true,
      megaMenuType: "services",
    },
    {
      to: "/portfolio",
      label: "Portfolio",
      hasDropdown: true,
      megaMenuType: "portfolio",
    },
    { to: "/liscence", label: "Liscence" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  return (
    <nav
      className={`top-0 left-0 w-full z-50 fixed transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-gray-100"
      }`}
    >
      {/* Top info bar - Hidden on mobile */}
      <div className="text-gray-700 text-sm border-b border-gray-200 py-1 hidden lg:block">
        <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact info */}
          <div className="flex items-center space-x-4">
            {contactInfo.map(({ icon: Icon, text }, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <Icon className="text-black" />
                <span className="hidden xl:inline">{text}</span>
                <span className="xl:hidden">{text.split(" ")[0]}</span>
              </div>
            ))}
          </div>

          {/* Social media */}
          <div className="flex space-x-1">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <SocialIcon key={idx} href={href}>
                <Icon />
              </SocialIcon>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="text-gray-700 border-b border-gray-200 py-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src={logo || "/placeholder.svg"}
              alt="DNS Technology Logo"
              className="w-8 sm:w-10"
            />
            <span className="text-sm sm:text-base font-semibold text-gray-700">
              DNS Technology Pvt Ltd.
            </span>
          </div>

          {/* Desktop Navigation items */}
          <div className="hidden lg:flex justify-between items-center gap-6 xl:gap-12">
            {navItems.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            {/* Mobile contact info - Hidden on screens smaller than md (768px) */}
            <div className="hidden md:block lg:hidden px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-col space-y-1 text-xs">
                {/* First line: Phone and Email */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <IoIosCall className="text-black w-4 h-4" />
                    <span>+977 1-4782849</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdEmail className="text-black w-4 h-4" />
                    <span>dnstechnology@gmail.com</span>
                  </div>
                </div>

                {/* Second line: Location and Social Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CiLocationOn className="text-black w-4 h-4" />
                    <span>New Baneshwor, Kathmandu</span>
                  </div>
                  <div className="flex space-x-2">
                    {socialLinks.map(({ icon: Icon, href }, idx) => (
                      <SocialIcon key={idx} href={href} className="w-6 h-6">
                        <Icon className="w-3 h-3" />
                      </SocialIcon>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile navigation items */}
            <div className="max-h-96 overflow-y-auto">
              {navItems.map((item, idx) => (
                <NavItem
                  key={idx}
                  {...item}
                  isMobile={true}
                  isOpen={openMobileDropdown === idx}
                  onToggle={() =>
                    item.hasDropdown
                      ? toggleMobileDropdown(idx)
                      : toggleMobileMenu()
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
