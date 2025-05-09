"use client";

import { Link } from "react-router-dom";

import {
  Shield,
  Cable,
  Cctv,
  Server,
  Monitor,
  Wifi,
  Network,
  ArrowRight,
} from "lucide-react";

const ProductHome = () => {
  const products = [
    {
      image:
        "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_960_720.jpg",
      title: "FireWalls Devices and Licences",

      description:
        "From new installations to repairs, we ensure your network is safe and fully protected.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_1280.jpg",
      title: "Network Cables",

      description:
        "From new installations to repairs, we ensure your network is safe and fully connected.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_1280.jpg",
      title: "CCTV and Surveillance",

      description:
        "From new installations to repairs, we ensure your home is safe and fully monitored.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/05/21/15/35/photographer-349871_1280.jpg",
      title: "Server and Network Rack",

      description:
        "From new installations to repairs, we ensure your infrastructure is safe and fully optimized.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2019/11/12/09/03/proxy-4620559_1280.jpg",
      title: "Network Switches",

      description:
        "From new installations to repairs, we ensure your connectivity is safe and fully managed.",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/12/18/13/53/raspberry-pi-572481_960_720.jpg",
      title: "AP (Access Point Devices)",

      description:
        "From new installations to repairs, we ensure your wireless coverage is safe and fully reliable.",
    },
  ];

  return (
    <div className="bg-[#F3F4F6] py-12 ">
      <div className="container mx-auto ">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium mt-4 ">
            Our Products
            <div className="w-28 h-1 bg-red-800 mb-4   mt-2"></div>
          </h2>
          <h2 className="text-lg md:text-lg font-medium text-black mb-4">
            Specialized networking solutions for every industry
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {products.map((product, index) => (
            <div key={index} className="">
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-cover mb-4"
              />

              {/* Text Content */}
              <h3 className="text-xl text-black font-medium ">
                {product.title}
              </h3>
              <p className="text-sm text-black mb-2">{product.description}</p>
              <h1 className=" text-red-800">Learn More .....</h1>
            </div>
          ))}
        </div>

        <div className=" pt-16 text-center">
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
