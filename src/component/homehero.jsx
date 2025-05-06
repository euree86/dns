import React from "react";
import { Shield, ArrowRight, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeHero = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const cardData = [
    {
      icon: <Shield />,
      title: "Firewalls Devices",
      description:
        "Protect your networks with our advanced firewall solutions.",
    },
    {
      icon: <Lock />,
      title: "Firewall Configuration",
      description: "Expert setup and management for optimal security.",
    },
    {
      icon: <Globe />,
      title: "Our Mission",
      description: "Empowering businesses with cutting-edge network solutions.",
    },

    {
      icon: <Globe />,
      title: "Our Mission",
      description: "Empowering businesses with cutting-edge network solutions.",
    },
  ];

  return (
    <div className="relative px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="mx-auto grid md:grid-cols-2 gap-8 items-center  relative z-10 min-h-[90vh] ">
        <div className="text-left ps-24">
          <span className="bg-red-100 text-red-800 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Network Solutions
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mt-4 mb-4 leading-tight font-sans">
            WELCOME TO <span className="text-red-800">DNS TECHNOLOGY</span>
          </h1>
          <p className="text-lg md:text-base font-medium text-gray-700 mb-8">
            Innovative Solutions For Your Network Needs
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <button className="bg-red-800 hover:bg-red-900 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform  flex items-center">
                Our Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </Link>
            <button className="bg-transparent border-2 border-red-800 text-red-800 hover:bg-red-800 hover:text-white font-medium py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
        <div className="relative hidden md:block ">
          <div className="absolute -top-10 right-16 w-64 h-64 bg-red-50 rounded-xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-50 rounded-xl"></div>
          <img
            src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
            alt="DNS Technology"
            className="relative rounded-xl max-w-xl mx-auto transform rotate-0"
          />
        </div>
      </div>

      <div className="mx-auto px-4 relative z-10 pb-12 w-[90%]">
        <Slider {...settings}>
          {cardData.map(({ icon, title, description }, index) => (
            <div key={index} className="p-4">
              <div
                className="bg-gray-100 rounded-xl p-8 text-center  text-red-800 shadow-sm
               transition-all duration-300 transform hover:-translate-y-2 h-64 w-full"
              >
                <div className=" rounded-full w-14 h-14 bg-red-800 flex items-center justify-center mx-auto mb-4 text-white ">
                  {icon}
                </div>
                <h2 className="text-xl font-bold mb-4 text-black ">{title}</h2>
                <p className=" text-opacity-90 text-black">{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeHero;
