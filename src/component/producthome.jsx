"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Shield,
  Cable,
  Cctv,
  Server,
  Monitor,
  Wifi,
  Network,
  ArrowRight,
  ImageDownIcon,
} from "lucide-react";

const ProductHome = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    {
      id: "01",
      image:
        "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_960_720.jpg",
      title: "FireWalls Devices and Licences",
      icon: <Shield className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your network is safe and fully protected.",
    },
    {
      id: "02",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_1280.jpg",
      title: "Network Cables",
      icon: <Cable className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your network is safe and fully connected.",
    },
    {
      id: "03",
      image:
        "https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_1280.jpg",
      title: "CCTV and Surveillance",
      icon: <Cctv className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your home is safe and fully monitored.",
    },
    {
      id: "04",
      image:
        "https://cdn.pixabay.com/photo/2014/05/21/15/35/photographer-349871_1280.jpg",
      title: "Server and Network Rack",
      icon: <Server className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your infrastructure is safe and fully optimized.",
    },
    {
      id: "05",
      image:
        "https://cdn.pixabay.com/photo/2019/11/12/09/03/proxy-4620559_1280.jpg",
      title: "Network Switches",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your connectivity is safe and fully managed.",
    },
    {
      id: "06",
      image:
        "https://cdn.pixabay.com/photo/2014/12/18/13/53/raspberry-pi-572481_960_720.jpg",
      title: "AP (Access Point Devices)",
      icon: <Wifi className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your wireless coverage is safe and fully reliable.",
    },
    {
      id: "07",
      image:
        "https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_1280.jpg",
      title: "Wireless Devices",
      icon: <Wifi className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your wireless technology is safe and fully functional.",
    },
    {
      id: "08",
      image:
        "https://cdn.pixabay.com/photo/2014/10/23/14/34/network-cables-499792_1280.jpg",
      title: "Server and Computers",
      icon: <Network className="w-6 h-6" />,
      description:
        "From new installations to repairs, we ensure your computing solutions are safe and fully operational.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <div
        className={`w-3 h-3 mx-1 mt-4 rounded-full transition-all duration-300 ${
          activeSlide === i ? "bg-red-800" : "bg-black"
        }`}
      ></div>
    ),
    dotsClass:
      "slick-dots custom-dots flex justify-center items-center mt-8 space-x-2",
  };

  return (
    <div className="bg-[#F3F4F6] py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <div className="w-full h-full border-l-2 border-t-2 border-white"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border-4 border-[#a79d9d] -mr-20 -mb-20"></div>
    

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center ">
            <h2 className="text-3xl md:text-4xl font-bold mt-4 ">
              Our Products
              <div className="w-28 h-1 bg-red-800 mb-4  ml-14 mt-2"></div>
            </h2>
          </div>

          <h2 className="text-lg md:text-lg font-medium text-black mb-4">
            Specialized networking solutions for every industry
          </h2>
        </div>

        <div className="mt-16">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-3">
                <div className="relative h-[400px] rounded-lg overflow-hidden group">
                  {/* Background image */}
                  <div className="absolute inset-0 bg-black">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover  "
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                    <div className="text-3xl font-bold text-black ">
                      {product.id}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-400/10     flex items-end p-6">
                      <div>
                        <div className="bg-gray-200 rounded-full p-3 inline-flex text-red-800 mb-2">
                          {product.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-black">
                          {product.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-16 text-center">
          <p className="text-black text-lg mb-4">
            Professional networking solutions for every need.
            <Link
              to="/contact"
              className=" font-bold ml-2 hover:underline hover:text-red-800"
            >
              Contact Us Today!
            </Link>
          </p>

          <Link to="/products">
            <button
              className="group bg-transparent hover:bg-red-800 text-black hover:text-white font-medium py-3 px-8
             rounded-full transition-all border-2 border-red-800 flex items-center mx-auto"
            >
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
