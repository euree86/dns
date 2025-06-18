"use client";

import { useState } from "react";
import { Check, ThumbsUp, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  bounceIn,
  flip,
  scaleIn,
} from "../variants";

const PricingCard = ({
  icon: Icon,
  title,
  price,
  description,
  features,
  index,
}) => {
  // Different animation for each card
  const animations = [
    fadeIn("up", 0.2 + index * 0.1),
    slideIn("up", 0.2 + index * 0.1),
    zoomIn(0.2 + index * 0.1),
  ];

  const selectedAnimation = animations[index % animations.length];

  return (
    <motion.div
      variants={selectedAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative bg-gray-800 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow`}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-gray-700 rounded-full p-3 mr-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <motion.div className="mb-6" variants={fadeUp(0.2)}>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 ml-2">/Month</span>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-300 mb-8 leading-relaxed"
        variants={fadeUp(0.3)}
      >
        {description}
      </motion.p>

      <motion.div
        className="space-y-4 mb-8"
        variants={staggerContainer(0.1, 0.4)}
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-center"
            variants={fadeIn("left", idx * 0.05)}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5 + idx * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
            </motion.div>
            <span className="text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className="w-full bg-white text-gray-900 py-3 px-6 rounded-xl font-medium hover:bg-gray-100 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={fadeUp(0.5)}
      >
        Get started
      </motion.button>
    </motion.div>
  );
};

const License = () => {
  const plans = [
    {
      icon: ThumbsUp,
      title: "Basic plan",
      price: "99",
      description:
        "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease",
      features: [
        "Unlimited Invoices",
        "Next-Day Payments",
        "Secure Payment Gateway",
        "Basic Analytics and Reporting",
        "Email Support",
      ],
    },
    {
      icon: Star,
      title: "Pro plan",
      price: "199",
      description:
        "Designed for growing businesses, the Basic Plan expands on our Starter package with additional features",
      features: [
        "Unlimited Invoices",
        "Next-Day Payments",
        "Secure Payment Gateway",
        "Basic Analytics and Reporting",
        "Email Support",
      ],
    },
    {
      icon: Flame,
      title: "Enterprise plan",
      price: "299",
      description:
        "Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.",
      features: [
        "Unlimited Invoices",
        "Next-Day Payments",
        "Secure Payment Gateway",
        "Basic Analytics and Reporting",
        "Email Support",
      ],
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

  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-900">
      <Nav />
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* text section */}
          <motion.div
            className="text-center mb-16"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h1
              className="text-5xl font-bold mb-4 text-gray-900"
              variants={fadeUp(0.3)}
            >
              Simple and Transparent Pricing
            </motion.h1>
            <motion.p
              className="font-normal text-base text-gray-600 max-w-2xl mx-auto"
              variants={fadeUp(0.4)}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              unde aspernatur dolorem optio sequi eligendi consectetur nostrum
              vel, ducimus ipsum quaerat nulla? Nulla voluptatibus autem nisi
              aperiam asperiores a ipsam?
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                icon={plan.icon}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center">
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
                className="text-center  "
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Frequently Asked Questions
                </h2>
              
               
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default License;
