"use client";
import { Check, ThumbsUp, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Nav from "./nav";
import Footer from "./footer";
import {
  fadeIn,
  slideIn,
  fadeUp,
  zoomIn,
  staggerContainer,
  bounceIn,
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
      <Footer />
    </div>
  );
};

export default License;
