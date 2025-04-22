import React from "react";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  DollarSign,
  ThumbsUp,
  Zap,
  Search,
} from "lucide-react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const products = [
  {
    title: "Firewall Devices",
    price: "25,000",
    inStock: true,
    icon: <ShieldCheck className="w-8 h-8 " />,
  },
  {
    title: "Network Cables",
    price: "1,200",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
  {
    title: "CCTV and Surveillance",
    price: "15,000",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Wireless Device",
    price: "8,500",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    title: "Network Switches",
    price: "12,000",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: "AP Devices",
    price: "9,800",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Server & Network Rack",
    price: "35,000",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Servers and Computers",
    price: "65,000",
    inStock: true,
    icon: (
      <svg
        className="w-8 h-8 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Quality Assurance",
    description:
      "We ensure every aspect of your product is thoroughly tested, covering functionality, performance, usability, and security.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Competitive Pricing",
    description:
      "We ensures that your product offers great value without compromising on quality, helping you stand out in the market.",
    icon: <DollarSign className="w-10 h-10 text-green-500" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Trusted And Reliable",
    description:
      "Choosing our company means partnering with a trusted and reliable provider committed to delivering high-quality products and services.",
    icon: <ThumbsUp className="w-10 h-10 text-purple-500" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Innovation Features",
    description:
      "We incorporate the latest technologies and innovative features, giving you a competitive edge and an enhanced user experience.",
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    bgColor: "bg-yellow-50",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Mary Smith",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    text: "The network equipment we purchased has been incredibly reliable. Their products have significantly improved our office infrastructure.",
    role: "IT Manager, TechCorp",
  },
  {
    id: 2,
    name: "Victoria Wotton",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    rating: 5,
    text: "Excellent customer service and high-quality products. The wireless devices we bought have perfect coverage for our entire facility.",
    role: "CTO, Digital Solutions",
  },
  {
    id: 3,
    name: "Robert Johnson",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 4,
    text: "Great value for money. The servers we purchased have been running smoothly without any issues for months now.",
    role: "System Admin, DataSystems",
  },
];

const brands = [
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png",
  },
  {
    name: "TP-Link",
    logo: "https://static-01.daraz.com.np/p/bc29781ba7033c694ac7765ce7048956.jpg",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 py-16 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR PRODUCTS</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            High-quality network and security solutions for your business
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="w-full md:w-2/3 relative ">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-6 py-3 rounded-lg  bg-white   text-gray-800"
              />
              <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-500" />
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center rounded-lg px-4 py-2">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div
                  className="relative w-12 h-6 bg-white peer-focus:outline-none peer-focus:ring-2
                 peer-focus:ring-red-600 rounded-full peer peer-checked:bg-white
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] 
                  after:absolute after:top-[2px] after:start-[2px] after:bg-red-800 after:border-gray-300 
                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                ></div>
                <span className="ms-3 text-sm font-medium">In Stock Only</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="w-full  py-12 px-4 md:px-8 lg:px-16 ">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                Featured Products
              </h2>
              <p className="text-gray-500">
                Browse our most popular networking solutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col relative shadow-md hover:shadow-lg transition duration-300 
                hover:-translate-y-1 bl-2 border-r-4 border-red-600"
              >
                <div className="mb-4 flex justify-center  text-red-600">
                  {product.icon}
                </div>
                <h3 className="font-semibold text-lg mb-4 text-gray-800 text-center">
                  {product.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-gray-600 text-center">Starting at</p>
                  <p className="text-xl font-bold text-center  mb-2">
                    Rs {product.price}
                  </p>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="text-sm text-gray-600">In Stock</p>
                  </div>
                </div>
                <button
                  className="absolute bottom-4 right-4 p-2 rounded-full bg-red-100 text-black hover:bg-red-600
                 transition duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className=" px-6 py-2 bg-red-600  text-white rounded-lg  flex items-center ">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the best networking solutions with unmatched quality and
            service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300`}
            >
              <div className="mb-6 p-4 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-gray-100 to-blue-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from those who've
              experienced our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Brands */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with the best brands to bring you top-quality products
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to find the perfect solution for your business
            needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Browse Products
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
