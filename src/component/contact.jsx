"use client";

import { useState } from "react";
import contactimg from "../image/contact.jpg";
import Nav from "./nav";
import Footer from "./footer";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const contactItems = [
  {
    icon: <IoMdCall className="text-2xl sm:text-3xl" />,
    title: "Call for inquiry",
    text: "+977 1-4782849",
  },
  {
    icon: <MdEmail className="text-2xl sm:text-3xl" />,
    title: "Send us email",
    text: "info@dnstech.com.np",
  },
  {
    icon: <IoTime className="text-2xl sm:text-3xl" />,
    title: "Opening hours",
    text: "Mon - Fri: 10AM - 6PM",
  },
  {
    icon: <IoLocationSharp className="text-2xl sm:text-3xl" />,
    title: "Office",
    text: "New Baneshwor, Kathmandu",
  },
];

const faqData = [
  {
    question: "What IT services do you provide for businesses?",
    answer:
      "We offer comprehensive IT solutions including network infrastructure setup, cloud migration, cybersecurity implementation, managed IT support, system monitoring, data backup and recovery, software installation and maintenance, and 24/7 technical support. Our services are tailored to meet the specific needs of small to enterprise-level businesses.",
  },
  {
    question:
      "How quickly can you respond to network outages or technical issues?",
    answer:
      "We provide 24/7 monitoring and support with guaranteed response times. For critical issues, we respond within 15 minutes, and for standard support requests, within 2 hours during business hours. Our remote monitoring systems often detect and resolve issues before they impact your operations, ensuring maximum uptime for your business.",
  },
  {
    question:
      "Do you offer cybersecurity solutions and data protection services?",
    answer:
      "Yes, we provide comprehensive cybersecurity services including firewall configuration, antivirus deployment, security audits, vulnerability assessments, employee training, multi-factor authentication setup, and compliance consulting. We also offer secure data backup solutions with encrypted storage and disaster recovery planning to protect your business from cyber threats.",
  },
  {
    question: "Can you help migrate our systems to the cloud?",
    answer:
      "We specialize in cloud migration services for businesses of all sizes. Our team will assess your current infrastructure, recommend the best cloud solutions (AWS, Azure, Google Cloud), handle the complete migration process, and provide ongoing cloud management. We ensure minimal downtime and enhanced security throughout the transition.",
  },
  {
    question: "What are your service packages and pricing options?",
    answer:
      "We offer flexible service packages including basic monitoring and support, comprehensive managed IT services, and enterprise-level solutions. Our pricing is transparent with monthly subscription options starting from $99/month for small businesses. We provide free consultations to assess your needs and recommend the most cost-effective solution for your organization.",
  },
];

const Contact = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 relative">
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={contactimg}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50"></div>
          <motion.div
            variants={fadeIn("up", 0.4, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <motion.h1
                variants={slideUp(0.5, 0.8)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
              >
                Contact Us
              </motion.h1>
              <motion.p
                variants={fadeUp(0.7, 0.6)}
                className="text-sm sm:text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, magni quam eligendi ex corporis eum reprehenderit
                sapiente blanditiis ipsa nulla quis quidem.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn("up", 0.2, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <motion.div
              variants={scaleIn(0.3, 0.6)}
              className="w-20 sm:w-24 h-1 bg-red-600 mx-auto mt-4"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              variants={slideIn("left", 0.3, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                variants={staggerContainer(0.1, 0.4)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={zoomIn(index * 0.1, 0.6)}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-red-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="font-medium text-xs sm:text-sm lg:text-base text-gray-700">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Section */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Our Location
                </h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.588953931806!2d85.33417710942105!3d27.693047176091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854352dab33%3A0x6ccf7b5fa93ba745!2sD.N.S%20Technology%20Pvt.%20Ltd!5e1!3m2!1sen!2sus!4v1745391999780!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="sm:h-[300px]"
                    title="DNS Technology Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={slideIn("right", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                variants={zoomIn(0.5, 0.8)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                  Send Us a Message
                </h3>
                <p className="mb-6 text-sm sm:text-base text-gray-600">
                  We'll get back to you within 24 hours
                </p>

                <form
                  variants={staggerContainer(0.1, 0.8)}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block font-semibold mb-2 text-sm sm:text-base text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Your name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block font-semibold mb-2 text-sm sm:text-base text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Your last name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-semibold mb-2 text-sm sm:text-base text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-semibold mb-2 text-sm sm:text-base text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-2 text-sm sm:text-base text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base resize-none sm:rows-5"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - FAQ */}
            <motion.div
              variants={slideIn("left", 0.2, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Header */}
              <motion.div
                variants={fadeUp(0.3, 0.6)}
                className="text-center lg:text-left"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
                <motion.div
                  variants={scaleIn(0.4, 0.6)}
                  className="w-20 sm:w-24 h-1 bg-red-600 mx-auto lg:mx-0 mb-4"
                ></motion.div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Get answers to common questions about our comprehensive IT and
                  network services. We're here to help your business stay
                  connected and secure.
                </p>
              </motion.div>

              {/* FAQ Items */}
              <motion.div
                variants={staggerContainer(0.1, 0.5)}
                className="space-y-3 sm:space-y-4"
              >
                {faqData.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={flip(index * 0.1, 0.6)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <motion.button
                      onClick={() => toggleItem(index)}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors rounded-lg"
                    >
                      <span className="font-medium text-sm sm:text-base text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openItem === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openItem === index ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        )}
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openItem === index && item.answer && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                            <div className="pt-2 border-t border-gray-200">
                              <motion.p
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                              >
                                {item.answer}
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              variants={slideIn("right", 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="order-first lg:order-last"
            >
              <motion.div variants={zoomIn(0.5, 0.8)} className="relative">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740"
                    alt="IT professional working on network infrastructure and servers"
                    className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
