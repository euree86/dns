import React from "react";
import { ArrowRight } from "lucide-react";
import { StarIcon } from "lucide-react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const products = [
  {
    title: "Firewall Devices",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "Network Cables",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "CCTV and Surveillance",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "Wireless Device",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "Network Switches",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "AP Devices",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "Server & Network Rack",
    price: "XXXXX",
    inStock: true,
  },
  {
    title: "Servers and Computers",
    price: "XXXXX",
    inStock: true,
  },
];

const features = [
  {
    title: "Quality Assurance",
    description:
      "We ensure every aspect of your product is thoroughly tested, covering functionality, performance, usability, and security.",
    logo: <VscWorkspaceTrusted className="w-12 h-12" />,
  },
  {
    title: "Competitive Pricing",
    description:
      "We ensures that your product offers great value without compromising on quality, helping you stand out in the market.",
    logo: null,
  },
  {
    title: "Trusted And Reliable",
    description:
      "Choosing our company means partnering with a trusted and reliable provider committed to delivering high-quality products and services.",
    logo: null,
  },
  {
    title: "Innovation Features",
    description:
      "We incorporate the latest technologies and innovative features, giving you a competitive edge and an enhanced user experience.",
    logo: null,
  },
];

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mary Smith",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    id: 2,
    name: "Victoria Wotton",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.",
  },
  {
    id: 3,
    name: "Mary Smith",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.",
  },
];

const Products = () => {
  return (
    <div>
      {/* top hero */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          OUR PRODUCTS
        </h1>

        <div className="flex md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="w-full md:w-3/4 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className="relative w-12 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-1
               peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-black
                peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] 
                after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 
                after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
              ></div>
              <span className="ms-3 text-sm font-medium text-gray-700">
                In Stock Only
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* feature product */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full bg-gray-200 py-12 px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-8">
            Featured Product
          </h1>

          {/* featured product */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-12 gap-4 p-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-6 flex flex-col relative shadow-sm"
              >
                <h3 className="font-medium text-lg mb-4">{product.title}</h3>
                <div className="mt-auto">
                  <p className="text-sm">Price Rs {product.price}</p>
                  <div className="flex items-center mt-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs mr-0.5">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm">In Stock</p>
                </div>
                <div className="absolute bottom-2 right-4">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Product */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full  px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl md:text-3xl text-center font-bold text-gray-800 mb-12">
            Why Choose Our Product
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4">
            {features.map((features, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-12 flex flex-col gap-4 shadow-sm items-center justify-center"
              >
                {features.logo}
                <h3 className="font-medium text-lg ">{features.title}</h3>
                <p className="text-sm text-center">{features.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* customer review */}
      <div className="w-full bg-gray-50 px-4 md:px-8 lg:px-16 py-16 mb-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from those who've experienced
            our service
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative"
              data-aos={index % 2 ? "fade-left" : "fade-right"}
            >
              <div
                className={`flex flex-col ${
                  index % 2 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 py-8 px-6 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300`}
              >
                {/* Profile Image  */}
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4
                     border-white shadow-md group-hover:border-primary-100 transition-all duration-300"
                  /> 
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  {/* Name and Rating */}
                  <div
                    className={`flex ${
                      index % 2 ? "md:justify-end" : "md:justify-start"
                    } items-center justify-center gap-2 mb-2`}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-gray-600 italic mb-4 max-w-2xl mx-auto md:mx-0">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </div>

              {/* Divider */}
              {index < testimonials.length - 1 && (
                <div className="border-t border-gray-200 w-3/4 mx-auto opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* trusted by industry leaders */}
      <div className="w-full bg-gray-200 px-4 md:px-8 lg:px-16 my-12">
        <h1 className="text-3xl md:text-3xl text-center font-bold text-gray-800 py-8">
          Trusted By Industry Leaders
        </h1>
        <div className="flex items-center justify-center p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-24 ">
            <img
              src="https://cdn.pixabay.com/photo/2021/03/23/03/51/woman-6116284_960_720.jpg"
              alt=""
              className="w-46 h-46 object-cover"
            />
            <img
              src="https://cdn.pixabay.com/photo/2021/03/23/03/51/woman-6116284_960_720.jpg"
              alt=""
              className="w-46 h-46 object-cover"
            />
            <img
              src="https://cdn.pixabay.com/photo/2021/03/23/03/51/woman-6116284_960_720.jpg"
              alt=""
              className="w-46 h-46 object-cover"
            />
            <img
              src="https://cdn.pixabay.com/photo/2021/03/23/03/51/woman-6116284_960_720.jpg"
              alt=""
              className="w-46 h-46 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
