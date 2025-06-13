"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { slideIn, fadeUp, zoomIn, staggerContainer, bounceIn } from "../variants"

const ProductHome = () => {
  const products = [
    {
      image: "https://img.freepik.com/free-vector/server-rack-security-shield-realistic-illustration_1284-12131.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "FireWalls Devices and Licences",
      description: "From new installations to repairs, we ensure your network is safe and fully protected.",
    },
    {
      image: "https://img.freepik.com/free-photo/networking-concept-still-life-composition_23-2149035685.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "Network Cables",
      description: "From new installations to repairs, we ensure your network is safe and fully connected.",
    },
    {
      image: "https://img.freepik.com/free-psd/technological-camera-isolated_23-2151196899.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "CCTV and Surveillance",
      description: "From new installations to repairs, we ensure your home is safe and fully monitored.",
    },
    {
      image: "https://img.freepik.com/free-vector/network-servers-isolated_98292-6502.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "Server and Network Rack",
      description: "From new installations to repairs, we ensure your infrastructure is safe and fully optimized.",
    },
    {
      image: "https://img.freepik.com/free-photo/network-switch-with-cables_1137-6.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "Network Switches",
      description: "From new installations to repairs, we ensure your connectivity is safe and fully managed.",
    },
    {
      image: "https://img.freepik.com/free-photo/man-plugging-ethernet-cable-wireless-router_53876-139544.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      title: "AP (Access Point Devices)",
      description: "From new installations to repairs, we ensure your wireless coverage is safe and fully reliable.",
    },
  ]

  return (
    <div className="bg-[#F3F4F6] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: false }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Our Products
            <div className="w-20 sm:w-24 md:w-28 h-1 bg-red-800 mb-4 mt-2"></div>
          </h2>
          <h2 className="text-base sm:text-lg font-medium text-black mb-4">
            Specialized networking solutions for every industry
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16"
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white"
              variants={zoomIn(index * 0.1)}
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
              <motion.div className="p-4 sm:p-6" variants={fadeUp(0.2)}>
                <h3 className="text-lg sm:text-xl text-black font-medium mb-2">{product.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-3">{product.description}</p>
                <Link
                  to="/products"
                  className="text-red-800 font-medium hover:text-red-900 transition-colors flex items-center text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="pt-8 sm:pt-12 md:pt-16 text-center"
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p className="text-black text-sm sm:text-base md:text-lg mb-4" variants={slideIn("up", 0.2)}>
            Professional networking solutions for every need.
            <Link to="/contact" className="font-bold ml-2 hover:underline hover:text-red-800">
              Contact Us Today!
            </Link>
          </motion.p>

          <Link to="/products">
            <motion.button
              className="group bg-transparent hover:bg-red-800 text-black hover:text-white font-medium py-2 sm:py-3 px-6 sm:px-8
             rounded-full transition-all border-2 border-red-800 flex items-center mx-auto text-sm sm:text-base"
              variants={bounceIn(0.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore More
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductHome
