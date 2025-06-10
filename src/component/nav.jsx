
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

// Mega menu data structure for better maintainability
const megaMenuData = {
  about: {
    Company: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Our Team", href: "/about/team" },
      { label: "Vision & Mission", href: "/about/vision" },
      { label: "Careers", href: "/about/careers" }
    ],
    "What We Do": [
      { label: "Our Services", href: "/about/services" },
      { label: "Our Partners", href: "/about/partners" },
      { label: "Client Testimonials", href: "/about/testimonials" }
    ],
    "IT Solutions": [
      { label: "Software Development", href: "/about/software-development" },
      { label: "Networking & Security", href: "/about/networking" },
      { label: "Cloud & Hosting Services", href: "/about/cloud-services" }
    ],
    "Hardware Solutions": [
      { label: "Hardware Sales", href: "/about/hardware-sales" },
      { label: "Maintenance & Repair", href: "/about/maintenance" },
      { label: "Device Installations", href: "/about/installations" }
    ]
  },
  products: {
    Hardware: {
      sections: [
        {
          title: "Networking",
          items: ["Switch (Brand)", "POE / Non-POE", "Full Gig Switch", "Non-Gig Switch"]
        },
        {
          title: "Security",
          items: [
            "CCTV & Surveillance (2MP, 4MP, 5MP, 8MP)",
            "Recorder: DVR / NVR / XVR (4CH, 8CH, 16CH, 32CH)",
            "Firewalls & Security (Brands, Models)"
          ]
        }
      ]
    },
    "Servers & Racks": {
      sections: [
        {
          title: "Servers (Brand)",
          items: ["Rack Server", "Tower Server", "NAS Server"]
        },
        {
          title: "Racks (Brand)",
          items: ["Server Rack", "CCTV Rack"]
        }
      ]
    },
    "Computing & Accessories": {
      sections: [
        {
          title: "Computer / Laptop / Monitor (Brand)",
          items: ["Core i3", "Core i5", "Core i7"]
        },
        {
          title: "Accessories",
          items: ["Keyboard", "Mouse", "HDMI Cables", "Power Bank", "Storage", "RAM"]
        }
      ]
    },
    "Software & Licensing": {
      sections: [
        {
          title: "Software",
          items: ["ERP", "Courier", "Cheque Recorder"]
        },
        {
          title: "License",
          items: []
        },
        {
          title: "SMS Services",
          items: []
        }
      ]
    }
  },
  services: [
    {
      title: "IT Services",
      items: [
        "Network Setup & Configuration",
        "System Integration",
        "Cloud Solutions",
        "IT Support & Maintenance"
      ]
    },
    {
      title: "Hardware Services",
      items: [
        "Server Installation & Setup",
        "CCTV & Security System Installation",
        "Networking Equipment Installation",
        "Hardware Troubleshooting & Repair"
      ]
    },
    {
      title: "Software Solutions",
      items: [
        "Custom Software Development",
        "ERP System Implementation",
        "Software Installation & Configuration",
        "Software Support & Maintenance"
      ]
    },
    {
      title: "Consulting Services",
      items: [
        "IT Strategy & Planning",
        "Cybersecurity Consulting",
        "System Audits & Reviews",
        "Digital Transformation Consulting"
      ]
    },
    {
      title: "Cloud Services",
      items: [
        "Cloud Infrastructure Management",
        "Cloud Backup Solutions",
        "Cloud Migration & Setup",
        "Virtualization Services"
      ]
    },
    {
      title: "Managed IT Services",
      items: [
        "24/7 Monitoring",
        "Managed Network Security",
        "Data Backup & Disaster Recovery",
        "IT Helpdesk Support"
      ]
    }
  ],
  portfolio: [
    {
      title: "Networking Projects",
      items: [
        "Enterprise Network Setup",
        "Campus Wi-Fi Solutions",
        "Secure VPN Deployment",
        "Data Center Networking"
      ]
    },
    {
      title: "Surveillance Projects",
      items: [
        "City-Wide CCTV Installation",
        "Corporate Surveillance Systems",
        "Warehouse Monitoring Solutions",
        "Smart Surveillance Integration"
      ]
    },
    {
      title: "Software Development",
      items: [
        "Custom ERP Systems",
        "Courier Management Apps",
        "Inventory Systems",
        "Business Automation Tools"
      ]
    },
    {
      title: "Server & Cloud Projects",
      items: [
        "Server Infrastructure Deployment",
        "Hybrid Cloud Setup",
        "Data Migration to AWS",
        "Disaster Recovery Solutions"
      ]
    },
    {
      title: "Access Control Systems",
      items: [
        "Biometric Integration",
        "RFID Entry Systems",
        "Multi-Site Access Management",
        "Time Attendance Solutions"
      ]
    },
    {
      title: "Web & Mobile Apps",
      items: [
        "E-Commerce Platforms",
        "Educational Portals",
        "Mobile CRM Solutions",
        "Job Portals & Listings"
      ]
    }
  ]
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
  <div >
    <h2 className="font-semibold text-base mb-3 text-gray-900 ">{title}</h2>
    <ul className="space-y-2 text-sm text-gray-700">
      {isProductSection ? (
        items.sections?.map((section, idx) => (
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
      ) : (
        items.map((item, idx) => (
          <li key={idx} className="hover:underline cursor-pointer">
            {typeof item === 'string' ? item : (
              <a href={item.href} className="hover:text-blue-600">
                {item.label}
              </a>
            )}
          </li>
        ))
      )}
    </ul>
  </div>
);

const MegaMenu = ({ type, data }) => {
  const baseClasses = `absolute top-full bg-gray-100 shadow-lg p-6 left-1/10 w-[80%] 
    z-50 opacity-0 invisible translate-y-2 group-hover:translate-y-0 
    group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-gray-100`;

  if (type === 'about') {
    return (
      <div className={`${baseClasses} grid grid-cols-4 gap-6`}>
        {Object.entries(data).map(([title, items]) => (
          <MegaMenuSection key={title} title={title} items={items} />
        ))}
      </div>
    );
  }

  if (type === 'products') {
    return (
      <div className={`${baseClasses} grid grid-cols-4 gap-8`}>
        {Object.entries(data).map(([title, items]) => (
          <MegaMenuSection key={title} title={title} items={items} isProductSection={true} />
        ))}
      </div>
    );
  }

  // For services and portfolio (array-based data)
  const columns = type === 'services' ? 'grid-cols-3' : 'grid-cols-3';
  return (
    <div className={`${baseClasses} grid ${columns} gap-8`}>
      {data.map((section, idx) => (
        <MegaMenuSection key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

const NavItem = ({ to, label, hasDropdown = false, megaMenuType = null }) => (
  <div className="group">
    <Link
      to={to}
      className="flex gap-1 items-center cursor-pointer"
    >
      <h1 className="font-semibold">{label}</h1>
      {hasDropdown && <IoChevronDown className="font-semibold" />}
    </Link>
    {hasDropdown && megaMenuType && (
      <MegaMenu type={megaMenuType} data={megaMenuData[megaMenuType]} />
    )}
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo = [
    { icon: IoIosCall, text: "+977 1-4782849" },
    { icon: MdEmail, text: "dnstechnology@gmail.com" },
    { icon: CiLocationOn, text: "New Baneshwor, Kathmandu" }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FiInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" }
  ];

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About Us", hasDropdown: true, megaMenuType: "about" },
    { to: "/products", label: "Product", hasDropdown: true, megaMenuType: "products" },
    { to: "/services", label: "Services", hasDropdown: true, megaMenuType: "services" },
    { to: "/portfolio", label: "Portfolio", hasDropdown: true, megaMenuType: "portfolio" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`top-0 left-0 w-full z-50 fixed transition-colors duration-300 ${
      isScrolled ? "bg-white" : "bg-gray-100"
    }`}>
      {/* Top info bar */}
      <div className="text-gray-700 text-sm border-b border-gray-200 py-1">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          {/* Contact info */}
          <div className="flex items-center space-x-4">
            {contactInfo.map(({ icon: Icon, text }, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <Icon className="text-black" />
                <span>{text}</span>
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
        <div className="w-[80%] mx-auto flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="DNS Technology Logo" className="w-10" />
            <span className="text-base font-semibold text-gray-700">
              DNS Technology Pvt Ltd.
            </span>
          </div>

          {/* Navigation items */}
          <div className="flex justify-between items-center gap-12">
            {navItems.map((item, idx) => (
              <NavItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
