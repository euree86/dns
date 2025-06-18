"use client";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  slideUp,
} from "../variants";

const BlogLayout = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Connecting the Future: Insights from the World of IT & Networking",
      date: "November 23, 2023",
      image: "/api/placeholder/300/200",
      category: "BRAINSTORMING",
      featured: false,
    },
    {
      id: 2,
      title: "The Wired World: Trends, Tips & Tech from the IT Experts",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
    {
      id: 3,
      title: "Beyond the Network: Innovations in IT Solutions",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
    {
      id: 4,
      title: "Smart Connections: Your Gateway to IT and Network Intelligence",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
  ];

  const featuredPost = {
    id: 4,
    title: "TechPulse: Navigating Networks and IT Trends",
    date: "December 11, 2023",
    description:
      "Embark on a journey with us as we delve into the realms of innovation, share insights, and explore the transformative power of technology. Our...",
    image: "/api/placeholder/600/400",
    featured: true,
  };

  const recentPosts = [
    {
      id: 1,
      title: "Latest in IT & Networking | News, Solutions, and Innovations",
      category: "Customer Feedback",
      date: "Jan 08, 2024",
      description:
        "Explore 10 top Nolt alternatives: Supahub, Canny.io, Savio, FeatureOS, Productboard, Aha!, Upvoty, Fider, Feedbear, and Sleekplan.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Your IT Partner in Progress: Network Solutions & Beyond",
      category: "Product Management",
      date: "Jan 06, 2024",
      description:
        "Discover the top 25 best product management books for 2024 and gain essential insights for...",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "IT Simplified: Powering Networks, Securing Futures",
      category: "Customer Feedback",
      date: "Jan 04, 2024",
      description:
        "Discover the top 10 best alternatives to Beamer for managing customer feedback, changelogs...",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Digital Backbone: The Blog for Network & IT Enthusiasts",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "From Cables to Cloud: Complete IT & Network Insights",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2017/01/18/11/54/wifi-1989627_640.png",
    },
    {
      id: 6,
      title: "From Cables to Cloud: Complete IT & Network Insights",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2020/07/25/09/08/modem-5436146_640.jpg",
    },
    {
      id: 7,
      title: "From Cables to Cloud: Complete IT & Network Insights",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2020/02/25/09/26/technology-4878380_640.png",
    },
  ];

  const getPostImage = (id) => {
    const images = [
      "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_640.jpg",
      "https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_640.png",
      "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_640.jpg",
    ];
    return images[id - 1] || images[0];
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Animated heading text */}
          <motion.div
            className="text-center"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold pb-4"
              variants={fadeUp(0.3)}
            >
              Our Insightful Blog
            </motion.h1>
            <motion.p
              className="pb-8 font-normal text-sm sm:text-base"
              variants={fadeUp(0.4)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, et?
              Blanditiis nulla omnis veritatis voluptatibus doloribus dolorem
              possimus aperiam quod esse, soluta adipisci? Explicabo vel
              voluptatum hic dolores qui at!
            </motion.p>
          </motion.div>

          {/* Animated hero section */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
           animate="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Featured Post - Large */}
            <motion.div
              className="lg:col-span-2"
              variants={slideIn("left", 0.2)}
            >
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="cursor-pointer">
                  <Link to="/blogdetail">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem]">
                      <motion.img
                        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white"
                        variants={fadeUp(0.5)}
                      >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 leading-tight">
                          {featuredPost.title}
                        </h2>
                        <div className="flex items-center mb-2 sm:mb-4 text-gray-200">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          <span className="text-xs sm:text-sm">
                            {featuredPost.date}
                          </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base">
                          {featuredPost.description}
                        </p>
                        <motion.button
                          className="inline-flex items-center text-white hover:text-blue-300 transition-colors text-sm sm:text-base"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Side Posts */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={slideIn("right", 0.3)}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  variants={fadeUp(0.1 * index)}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <Link to="/blogdetail">
                    <div className="cursor-pointer">
                      <div className="flex gap-2 sm:gap-3 p-2 sm:p-0">
                        <div className="w-20 sm:w-24 h-24 sm:h-32 flex-shrink-0">
                          <motion.img
                            src={getPostImage(post.id)}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <div className="flex-1 py-2 sm:py-4 pr-2 sm:pr-0">
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight mb-1 sm:mb-2 group-hover:text-red-800 transition-colors">
                            {post.title}
                          </h3>
                          <div className="flex items-center text-gray-500 text-xs mb-2 sm:mb-3">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <motion.button
                            className="inline-flex items-center text-xs text-gray-600 hover:text-red-800 transition-colors font-medium"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 sm:mb-8 border-b border-gray-300 pb-2"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            RECENT POSTS
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer(0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {recentPosts.map((post, index) => {
              // First post gets special treatment (larger)
              if (index === 0) {
                return (
                  <motion.div
                    key={post.id}
                    className="md:col-span-3"
                    variants={zoomIn(0.2)}
                  >
                    <motion.div
                      className="overflow-hidden group"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <Link to="/blogdetail">
                        <div className="cursor-pointer">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 relative overflow-hidden rounded-xl">
                              <motion.img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 sm:h-64 md:h-96 object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                              />
                            </div>
                            <motion.div
                              className="md:w-1/2 p-4 sm:p-6 md:p-8 text-black"
                              variants={fadeUp(0.3)}
                            >
                              <div className="flex items-center text-gray-500 text-sm mb-3 sm:mb-4">
                                <span className="mr-4">{post.category}</span>
                                <span>{post.date}</span>
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                                {post.title}
                              </h3>
                              <p className="text-gray-500 text-sm sm:text-base">
                                {post.description}
                              </p>
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              }

              // Regular posts
              return (
                <motion.div key={post.id} variants={slideUp(0.1 * index)}>
                  <Link to="/blogdetail">
                    <motion.div
                      className="cursor-pointer"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <div className="bg-white overflow-hidden shadow-lg rounded-xl">
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <motion.img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <motion.div
                          className="p-4 sm:p-6"
                          variants={fadeUp(0.2)}
                        >
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <span className="mr-4">{post.category}</span>
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {post.description}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogLayout;
