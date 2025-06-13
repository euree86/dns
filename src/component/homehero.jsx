"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, Shield, ArrowRight } from "lucide-react";
import Nav from "./nav";
import { useEffect, useState, useRef } from "react";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  bounceIn,
} from "../variants";

const HomeHero = () => {
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedStats(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100 overflow-x-hidden">
      <Nav />

      {/* Hero Section with Animation */}
      <section className="overflow-hidden relative overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-0"
              variants={slideIn("left", 0.2)}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  className="inline-block rounded-lg bg-red-100 px-3 py-1 text-xs sm:text-sm text-red-700 mb-2 sm:mb-4"
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: true }}
                >
                  Innovative Technology Solutions
                </motion.div>
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight"
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: true }}
                >
                  Transforming Your{" "}
                  <span className="text-red-700">Digital Presence</span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl"
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: true }}
                >
                  We build cutting-edge software and network solutions that help
                  businesses thrive in the digital era.
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={fadeUp(0.6)}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
              >
                <Link to="/services">
                  <motion.button
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-red-700 hover:bg-red-800 text-white font-semibold 
                    transition-all group rounded-md flex items-center justify-center text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Solutions
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    className="px-4 sm:px-6 py-2 sm:py-3 hover:outline-red-600
                    hover:bg-gray-100 hover:text-red-600 transition-all outline-1 outline-gray-200 rounded-md font-semibold text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>

              {/* Client Info */}
              <motion.div
                className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
                variants={fadeUp(0.7)}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white overflow-hidden"
                      variants={fadeIn("up", 0.2 + i * 0.1)}
                      initial="hidden"
                      animate="show"
                      viewport={{ once: true }}
                    >
                      <img
                        src={`https://cdn.pixabay.com/photo/2021/09/12/08/49/headset-6617715_1280.png`}
                        alt={`Client ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  className="text-xs sm:text-sm text-slate-500"
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  animate="show"
                  viewport={{ once: true }}
                >
                  <span className="font-medium text-slate-900">500+</span>{" "}
                  satisfied clients worldwide
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="relative order-0 lg:order-1"
              variants={slideIn("right", 0.3)}
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden"
                variants={zoomIn(0.4)}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
              >
                <img
                  src="https://img.freepik.com/free-photo/wi-fi-router-with-blue-optical-fiber_23-2148779307.jpg?t=st=1746773496~exp=1746777096~hmac=d43be4068193056dceb6cd4ef724a8fdea4a4559f022e39f3e0eccb203279ed5&w=740"
                  alt="Hero Image"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-cover rounded-xl"
                />
              </motion.div>

              {/* Floating Cards */}
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-lg shadow-xl p-2 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-6 w-6 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                    <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Security First</p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      Enterprise-grade protection
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white rounded-lg shadow-xl p-2 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-6 w-6 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-red-100">
                    <Server className="h-3 w-3 sm:h-5 sm:w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">99.9% Uptime</p>
                    <p className="text-xs text-slate-500 hidden sm:block">
                      Reliable infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-6 sm:py-8 bg-gradient-to-r  from-red-800 to-red-700 text-white overflow-x-hidden mt-8">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          ref={statsRef}
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            {[
              { value: 500, label: "Clients Worldwide" },
              { value: 1000, label: "Projects Completed" },
              { value: 50, label: "Team Members" },
              { value: 10, label: "Years of Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-1 sm:space-y-2"
                variants={fadeUp(index * 0.1)}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {animatedStats ? (
                    <CountUp end={stat.value} duration={2} />
                  ) : (
                    "0"
                  )}
                  +
                </h3>
                <p className="text-red-100 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default HomeHero;
