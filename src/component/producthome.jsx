"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const ProductHome = () => {
  const products = [
    {
      image: "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_960_720.jpg",
      title: "FireWalls Devices and Licences",
      description: "From new installations to repairs, we ensure your network is safe and fully protected.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_1280.jpg",
      title: "Network Cables",
      description: "From new installations to repairs, we ensure your network is safe and fully connected.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_1280.jpg",
      title: "CCTV and Surveillance",
      description: "From new installations to repairs, we ensure your home is safe and fully monitored.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/05/21/15/35/photographer-349871_1280.jpg",
      title: "Server and Network Rack",
      description: "From new installations to repairs, we ensure your infrastructure is safe and fully optimized.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/11/12/09/03/proxy-4620559_1280.jpg",
      title: "Network Switches",
      description: "From new installations to repairs, we ensure your connectivity is safe and fully managed.",
    },
    {
      image: "https://cdn.pixabay.com/photo/2014/12/18/13/53/raspberry-pi-572481_960_720.jpg",
      title: "AP (Access Point Devices)",
      description: "From new installations to repairs, we ensure your wireless coverage is safe and fully reliable.",
    },
  ]

  return (
    <div className="bg-[#F3F4F6] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Our Products
            <div className="w-20 sm:w-24 md:w-28 h-1 bg-red-800 mb-4 mt-2"></div>
          </h2>
          <h2 className="text-base sm:text-lg font-medium text-black mb-4">
            Specialized networking solutions for every industry
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl text-black font-medium mb-2">{product.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3">{product.description}</p>
                <Link
                  to="/products"
                  className="text-red-800 font-medium hover:text-red-900 transition-colors flex items-center text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 sm:pt-12 md:pt-16 text-center">
          <p className="text-black text-sm sm:text-base md:text-lg mb-4">
            Professional networking solutions for every need.
            <Link to="/contact" className="font-bold ml-2 hover:underline hover:text-red-800">
              Contact Us Today!
            </Link>
          </p>

          <Link to="/products">
            <button
              className="group bg-transparent hover:bg-red-800 text-black hover:text-white font-medium py-2 sm:py-3 px-6 sm:px-8
             rounded-full transition-all border-2 border-red-800 flex items-center mx-auto text-sm sm:text-base"
            >
              Explore More
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductHome
