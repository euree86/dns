"use client";
import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";
import { Calendar, ArrowRight } from "lucide-react";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  scaleIn,
} from "../variants";

const BlogDetail = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Courier Services Work",
      date: "1 May 2026",
      image:
        "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_640.jpg",
    },
    {
      id: 2,
      title: "How Pickups Are Managed",
      date: "1 May 2026",
      image:
        "https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_640.png",
    },
    {
      id: 3,
      title: "How Parcel Care and Handling",
      date: "1 May 2026",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_640.jpg",
    },
    {
      id: 4,
      title: "How Your Parcel Is Delivered",
      date: "1 May 2026",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_640.jpg",
    },
    {
      id: 5,
      title: "Technology Behind Modern Couriers",
      date: "1 May 2026",
      image:
        "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_640.jpg",
    },
  ];

  const keyTakeaways = [
    "What release notes are and why they matter",
    "How to structure your release notes for different types of updates",
    "Best practices for tone, clarity, and consistency",
    "Common mistakes to avoid",
    "Tools and templates that can help automate and streamline the process",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100 overflow-x-hidden">
        <motion.div
          className="flex flex-col lg:flex-row gap-8 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          {/* Main Content */}
          <motion.div
            className="lg:w-2/3 w-full"
            variants={slideIn("left", 0.2)}
          >
            {/* Hero Image */}
            <motion.div className="mb-8" variants={zoomIn(0.3)}>
              <motion.img
                src="https://cdn.pixabay.com/photo/2020/02/25/09/26/technology-4878380_640.png"
                alt="Courier on bicycle delivering packages in urban setting"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Main Article */}
            <motion.article
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8"
              variants={fadeUp(0.4)}
              animate="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
                variants={fadeIn("up", 0.1)}
              >
                Learn how to write release notes for product releases. Follow
                best practices and find tools
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg text-red-800 mb-6 font-medium"
                variants={fadeIn("up", 0.2)}
              >
                From pickup request to final delivery, explore the journey of
                your parcel.
              </motion.p>

              <motion.div
                className="prose text-gray-600 leading-relaxed space-y-4"
                variants={staggerContainer(0.1, 0.3)}
              >
                <motion.p
                  className="text-sm sm:text-base"
                  variants={fadeUp(0.1)}
                >
                  Writing release notes may seem like a small task in the
                  product development cycle, but it's one of the most important
                  ways to communicate value to your users. Whether you're
                  launching a new feature, fixing bugs, or making performance
                  improvements, well-crafted release notes can build trust,
                  improve user engagement, and reduce confusion or support
                  tickets. In this guide, we'll explore how to write clear,
                  user-friendly release notes that strike the right balance
                  between technical accuracy and customer understanding. You'll
                  learn:
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base"
                  variants={fadeUp(0.2)}
                >
                  What release notes are and why they matter How to structure
                  your release notes for different types of updates Best
                  practices for tone, clarity, and consistency Common mistakes
                  to avoid Tools and templates that can help automate and
                  streamline the process Examples from top companies doing it
                  right Whether you're a product manager, developer, marketer,
                  or customer support professional, mastering release note
                  writing can enhance your product's reputation and user
                  experience. Let's dive in and level up your product
                  communication skills.
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base"
                  variants={fadeUp(0.3)}
                >
                  Throughout the journey, real-time tracking updates are
                  generated at key milestones (pickup, sorting, in transit, out
                  for delivery, delivered). This transparency keeps both senders
                  and recipients informed and reassured. On the delivery day,
                  couriers arrive at the recipient's address, verify identity,
                  and obtain an electronic signature or photo proof before
                  handing over the parcel. Any missed deliveries are promptly
                  rescheduled or routed to safe-drop options.
                </motion.p>
              </motion.div>

              {/* Key Takeaways */}
              <motion.div
                className="mt-8 bg-gray-50 rounded-lg p-4 sm:p-6"
                variants={scaleIn(0.5)}
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-4"
                  variants={fadeIn("up", 0.1)}
                >
                  Key Takeaways
                </motion.h3>
                <motion.ul
                  className="space-y-3"
                  variants={staggerContainer(0.1, 0.2)}
                >
                  {keyTakeaways.map((takeaway, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      variants={slideIn("left", index * 0.1)}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span
                        className="inline-block w-2 h-2 bg-red-800 rounded-full mt-2 mr-3 flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                      />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {takeaway}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div className="mt-8 p-2" variants={fadeUp(0.6)}>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  This streamlined process ensures parcels move efficiently and
                  securely from sender to recipient, making courier services an
                  indispensable part of modern commerce and communication.
                </p>
              </motion.div>
            </motion.article>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:w-1/3 w-full"
            variants={slideIn("right", 0.3)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.div className="bg-gray-50" variants={fadeIn("down", 0.1)}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 p-4 sm:p-6">
                  Latest Blog Posts
                </h2>
              </motion.div>

              <motion.div
                className="p-2 sm:p-4"
                variants={staggerContainer(0.1, 0.2)}
              >
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    className="flex items-start space-x-3 p-2 cursor-pointer border-b border-gray-300 hover:bg-gray-50 transition-colors rounded-lg"
                    variants={fadeIn("up", index * 0.1)}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex gap-2 sm:gap-4 w-full">
                      <motion.div
                        className="w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt=""
                          className="w-full object-cover h-20 sm:h-24"
                        />
                      </motion.div>

                      <div className="flex-1 py-1 sm:py-2">
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
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
