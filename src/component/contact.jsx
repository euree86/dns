import React from "react";
import contactimg from "../image/contact.jpg";
import Nav from "./nav";
import Footer from "./footer";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const contactItems = [
  {
    icon: <IoMdCall className="text-3xl" />,
    title: "Call for inquiry",
    text: "+257 388-6895",
  },
  {
    icon: <MdEmail className="text-3xl" />,
    title: "Send us email",
    text: "nepwears@gmail.com",
  },
  {
    icon: <IoTime className="text-3xl" />,
    title: "Opening hours",
    text: "Mon - Fri: 10AM - 10PM",
  },
  {
    icon: <IoLocationSharp className="text-3xl" />,
    title: "Office",
    text: "Kathmandu, Nepal",
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
      "Absolutely! We specialize in cloud migration services for businesses of all sizes. Our team will assess your current infrastructure, recommend the best cloud solutions (AWS, Azure, Google Cloud), handle the complete migration process, and provide ongoing cloud management. We ensure minimal downtime and enhanced security throughout the transition.",
  },
  {
    question: "What are your service packages and pricing options?",
    answer:
      "We offer flexible service packages including basic monitoring and support, comprehensive managed IT services, and enterprise-level solutions. Our pricing is transparent with monthly subscription options starting from $99/month for small businesses. We provide free consultations to assess your needs and recommend the most cost-effective solution for your organization.",
  },
];

const contact = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div>
      <Nav />
      <div className="relative">
        <img src={contactimg} alt="" className="w-full h-96 object-cover" />
        <div className=" items-center text-center absolute top-1/2 container right-1/10 py-6 bg-transparent">
          <p className=" text-5xl font-bold ">Contact us</p>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            magni quam eligendi ex corporis eum reprehenderit sapiente
            blanditiis ipsa nulla quis quidem quote.
          </p>
        </div>
        <div className="bg-gray-100/50 inset-0  absolute"></div>
      </div>

      {/* Contact Section */}
      <div className="py-16  text-dark-900 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Ready to Transform Your IT Infrastructure?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-red-600">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-black">
                          {item.title}
                        </h3>
                        <p className="font-medium text-black">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.588953931806!2d85.33417710942105!3d27.693047176091486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1854352dab33%3A0x6ccf7b5fa93ba745!2sD.N.S%20Technology%20Pvt.%20Ltd!5e1!3m2!1sen!2sus!4v1745391999780!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
                <p className="mb-6">We'll get back to you within 24 hours</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block font-semibold mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        placeholder="Your name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block font-semibold mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        placeholder="Your last name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-semibold mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="container  mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - FAQ */}
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Get answers to common questions about our comprehensive IT and
                  network services. We're here to help your business stay
                  connected and secure.
                </p>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <div className="flex-shrink-0">
                        {openItem === index ? (
                          <Minus className="w-5 h-5 text-gray-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </button>

                    {openItem === index && item.answer && (
                      <div className="px-6 pb-4">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:pl-8">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-1850.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740"
                    alt="IT professional working on network infrastructure and servers"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default contact;
