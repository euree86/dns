"use client"
import { Monitor, Building2, Smartphone, Check, ArrowRight, ShieldCheck, DollarSign, ThumbsUp, Zap } from "lucide-react"
import product from "../image/product.png"
import Nav from "./nav"
import Footer from "./footer"

const services = [
  {
    id: "01",
    icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
    title: "Digital Experience",
    features: [
      "Fusce venenatis orci quis varius lobortis.",
      "Duis gravida neque vel placerat molestie.",
      "Sed scelerisque massa quis orci ult.",
      "Pellentesque et ante vel tortor dignissim.",
    ],
  },
  {
    id: "02",
    icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
    title: "Business Planning",
    features: [
      "Duis gravida neque vel placerat molestie.",
      "Sed scelerisque massa quis orci ult.",
      "Fusce venenatis orci quis varius lobortis.",
      "Pellentesque et ante vel tortor dignissim.",
    ],
  },
  {
    id: "03",
    icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
    title: "App Development",
    features: [
      "Etiam dignissim purus in varius porttitor.",
      "Proin vitae tellus mollis tellus maximus.",
      "Integer tempus massa nec pellentesque.",
      "Pellentesque et ante vel tortor dignissim.",
    ],
  },
]

const products = [
  {
    title: "Firewall Devices",
    price: "25,000",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Network Cables",
    price: "1,200",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "CCTV and Surveillance",
    price: "15,000",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Wireless Device",
    price: "8,500",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Network Switches",
    price: "12,000",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "AP Devices",
    price: "9,800",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Server & Network Rack",
    price: "35,000",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
  },
  {
    title: "Servers and Computers",
    price: "65,000",
    inStock: true,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
  },
]

const features = [
  {
    title: "Quality Assurance",
    description:
      "We ensure every aspect of your product is thoroughly tested, covering functionality, performance, usability, and security.",
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Competitive Pricing",
    description:
      "We ensures that your product offers great value without compromising on quality, helping you stand out in the market.",
    icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Trusted And Reliable",
    description:
      "Choosing our company means partnering with a trusted and reliable provider committed to delivering high-quality products and services.",
    icon: <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Innovation Features",
    description:
      "We incorporate the latest technologies and innovative features, giving you a competitive edge and an enhanced user experience.",
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
    bgColor: "bg-yellow-50",
  },
]

const productCategories = [
  {
    title: "Hardware",
    subtitle: "Browse our most popular networking solutions",
    products: [
      {
        id: 1,
        name: "Firewall Devices",
        category: "Security",
        price: "Rs 25,000",
        image:
          "https://img.freepik.com/free-vector/server-rack-security-shield-realistic-illustration_1284-12131.jpg?ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
        description: "Advanced firewall protection",
      },
      {
        id: 2,
        name: "Network Cables",
        category: "Networking",
        price: "Rs 1,200",
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
        description: "High-quality networking cables",
      },
      {
        id: 3,
        name: "Full Gig Switch",
        category: "Networking",
        price: "Rs 15,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Enterprise grade switches",
      },
      {
        id: 4,
        name: "POE Switch",
        category: "Networking",
        price: "Rs 8,500",
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop&crop=center",
        description: "Power over Ethernet solutions",
      },
    ],
  },
  {
    title: "Servers & Racks",
    subtitle: "Professional server solutions",
    products: [
      {
        id: 5,
        name: "Rack Server",
        category: "Servers",
        price: "Rs 85,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Enterprise rack servers",
      },
      {
        id: 6,
        name: "Tower Server",
        category: "Servers",
        price: "Rs 65,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Powerful tower servers",
      },
      {
        id: 7,
        name: "NAS Server",
        category: "Storage",
        price: "Rs 45,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Network attached storage",
      },
      {
        id: 8,
        name: "Server Rack",
        category: "Infrastructure",
        price: "Rs 25,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Professional server racks",
      },
    ],
  },
  {
    title: "Computing & Accessories",
    subtitle: "Complete computing solutions",
    products: [
      {
        id: 9,
        name: "Core i3 Computer",
        category: "Desktop",
        price: "Rs 35,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Entry level desktop systems",
      },
      {
        id: 10,
        name: "Core i5 Computer",
        category: "Desktop",
        price: "Rs 55,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Mid-range desktop systems",
      },
      {
        id: 11,
        name: "Core i7 Computer",
        category: "Desktop",
        price: "Rs 85,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "High-performance systems",
      },
      {
        id: 12,
        name: "Accessories Bundle",
        category: "Accessories",
        price: "Rs 5,500",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Keyboard, mouse & cables",
      },
    ],
  },
  {
    title: "Software & Licensing",
    subtitle: "Software solutions and licenses",
    products: [
      {
        id: 13,
        name: "ERP Software",
        category: "Business",
        price: "Rs 125,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Complete ERP solutions",
      },
      {
        id: 14,
        name: "Courier Software",
        category: "Logistics",
        price: "Rs 45,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Delivery management system",
      },
      {
        id: 15,
        name: "Cheque Recorder",
        category: "Finance",
        price: "Rs 25,000",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Financial record keeping",
      },
      {
        id: 16,
        name: "SMS Services",
        category: "Communication",
        price: "Rs 2,500",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
        description: "Bulk SMS solutions",
      },
    ],
  },
]

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
]

const ProductShowcase = () => {
  const ProductCard = ({ product }) => (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <div className="relative">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover bg-gray-200"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-[#1E2939] text-white px-2 py-1 rounded text-xs font-medium">{product.category}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-gray-800 font-bold text-base sm:text-lg">{product.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{product.description}</p>
        <div>
          <div className="text-base sm:text-lg font-bold text-[#1E2939] mb-2">{product.price}</div>
          <button className="bg-red-800 hover:bg-red-700 text-white px-3 sm:px-4 py-1 rounded text-xs sm:text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )

  const CategorySection = ({ category }) => (
    <div className="my-6 sm:my-8 md:my-12">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">{category.title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative  w-2/3 max-w-lg">
                <img
                  src={product }
                  alt="IT Solutions on multiple devices"
                  className="w-full h-auto object-cover "
                />
              </div>
            </div>
            <div className="text-black space-y-6 sm:space-y-8 order-1 lg:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Complete IT & Network Hardware Solutions for Modern Businesses
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore temporibus corporis laboriosam illo
                voluptas quisquam quo eum.
              </p>
              <div className="pt-4">
                <button className="px-4 sm:px-6 bg-red-700 hover:bg-red-800 text-white font-semibold transition-all rounded-md flex items-center py-2 sm:py-3 text-sm sm:text-base">
                  Contact Us
                </button>
              </div>
            </div>
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

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Why Choose Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We provide the best networking solutions with unmatched quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300`}
            >
              <div className="mb-3 sm:mb-4 md:mb-6 p-2 sm:p-3 md:p-4 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Categories Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#101828] mb-2">
            Our Product Categories
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-red-600 to-red-700 mb-3 md:mb-4"></div>
          {productCategories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6 sm:mb-8 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#101828] mb-2">
              Featured Products
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-red-600 to-red-700 mb-3 md:mb-4"></div>
            <p className="text-gray-500 text-sm sm:text-base">Browse our most popular networking solutions</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 flex flex-col gap-2 relative shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-1 rounded-lg overflow-hidden"
            >
              <div className="w-full h-32 sm:h-40 lg:h-48 overflow-hidden">
                <img
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">{product.title}</h3>
                <div className="mt-auto">
                  <p className="text-gray-600 text-xs sm:text-sm">Starting at</p>
                  <p className="text-sm sm:text-base md:text-lg font-medium">Rs {product.price}</p>
                </div>
                <button className="mt-1 md:mt-2">
                  <ArrowRight className="w-4 h-4 text-red-800" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="py-6 sm:py-8 md:py-12">
          <button className="px-4 md:px-6 py-2 md:py-3 bg-red-800 text-white rounded-lg flex items-center text-xs sm:text-sm md:text-base">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-gray-100 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 md:space-y-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-8 pb-6 sm:pb-8 md:pb-16">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-red-800 text-xs md:text-sm font-semibold uppercase"># OUR PRODUCTS</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#101828] mt-1 md:mt-2">
                We Deal With High Quality Network and IT Products
              </h2>
            </div>
            <div className="lg:w-1/2 w-full">
              <p className="text-[#101828] text-sm md:text-base leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
              >
                <div className="absolute top-3 md:top-4 right-4 md:right-6 text-3xl sm:text-4xl md:text-6xl font-bold text-gray-100 group-hover:text-gray-50 transition-colors duration-300">
                  {service.id}
                </div>
                <div className="relative z-10">
                  <div className="mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 md:space-x-3">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2939] mb-2">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            We partner with the best brands to bring you top-quality products
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-2 md:p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-6 sm:h-8 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductShowcase
