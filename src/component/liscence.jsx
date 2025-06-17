import React from "react";
("use client");
import Nav from "./nav";
import Footer from "./footer";
import portfolio from "../image/portfolio.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeUp,
  zoomIn,
  slideIn,
  fadeIn,
  staggerContainer,
  scaleIn,
  rotateIn,
  bounceIn,
  slideUp,
  flip,
} from "../variants";
const liscence = () => {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={zoomIn(0.2, 0.8)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="relative flex justify-center order-2 lg:order-1"
            >
              <div className="relative w-2/3 max-w-lg">
                <img
                  src={portfolio || "/placeholder.svg"}
                  alt="IT Solutions on multiple devices"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.3, 0.8)}
              initial="hidden"
              animate="show"
              viewport={{ once: false, amount: 0.3 }}
              className="text-black space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <motion.h1
                variants={slideUp(0.4, 0.8)}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                Enterprise-grade software, hardware, and network services for
                businesses of all sizes
              </motion.h1>
              <motion.p
                variants={fadeUp(0.6, 0.6)}
                className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus corporis laboriosam illo voluptas quisquam
                quo eum.
              </motion.p>
              <motion.div variants={fadeUp(0.6, 0.6)} className="pt-4">
                <Link to="/contact">
                  {" "}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 sm:px-6 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all rounded-md flex items-center py-2 sm:py-3 text-sm sm:text-base"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#F2F2F2"
          />
        </svg>
      </div>


      
      <Footer />
    </div>
  );
};

export default liscence;
