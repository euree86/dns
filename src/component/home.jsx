import React from "react";
import img from "../image/img1.png";
import { Link } from "react-router-dom";
import {
  Shield,
  Cable,
  Cctv,
  Server,
  Monitor,
  Wifi,
  Network,
} from "lucide-react";

const Home = () => {
  const products = [
    {
      title: "FireWalls Devices and Licences ",
      icon: <img src={img} className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "Network Cables",
      icon: <Cable className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "CCTV and Surveillance",
      icon: <Cctv className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "Server and Network Rack",
      icon: <Server className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "Network Switches",
      icon: <Monitor className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "AP (Access Point Devices)",
      icon: <Wifi className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "Wireless Devices",
      icon: <Wifi className="w-12 h-12 mx-auto mb-4" />,
    },
    {
      title: "Server and Computers",
      icon: <Network className="w-12 h-12 mx-auto mb-4" />,
    },
  ];

  const hardwareservice = [
    {
      title: "Server and Computer Installation",
      icon: null,
    },
    {
      title: "CCTV Installation",
      icon: null,
    },

    {
      title: "Networking and Troubleshooting",
      icon: null,
    },

    {
      title: "Firewall Configuration and Security",
      icon: null,
    },
  ];

  const softwareservice = [
    {
      title: "Website and Software Development",
      icon: null,
    },
    {
      title: "Domain and Hosting",
      icon: null,
    },

    {
      title: "Mobile App Development",
      icon: null,
    },

    {
      title: "UI/UX Design",
      icon: null,
    },
  ];

  return (
    <div>
      {/* top header section */}
      <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            WELCOME TO DNS TECHNOLOGY
          </h1>
          <p className="text-gray-600">
            Innovative Solutions For Network Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Firewalls Devices
            </h2>
            <p className="text-gray-600">
              Protect your networks with our advanced firewall solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Firewall Configuration
            </h2>
            <p className="text-gray-600">
              Expert setup and management for optimal security.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Missions
            </h2>
            <p className="text-gray-600">
              Empowering business with cutting-edge network solutions
            </p>
          </div>
        </div>
      </div>
      {/* our product */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl font-bold text-center mb-12">OUR PRODUCTS</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-16 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg 2xl:px-6 2xl:py-12  px-4 py-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
              >
                {product.icon}
                <h3 className="text-center font-medium">{product.title}</h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-8 rounded-full transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </div>
      {/* Our service */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl font-bold text-center mb-12">OUR SERVICES</h1>

          <h1 className="text-lg font-bold mb-4 ">Hardware Level Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-16 gap-8 mb-8">
            {hardwareservice.map((hardware, index) => (
              <div
                key={index}
                className="bg-white rounded-lg 2xl:px-6 2xl:py-12  px-4 py-6 flex flex-col items-center justify-center
                 shadow-md hover:shadow-lg transition-shadow"
              >
                {hardware.icon}
                <h3 className="text-center font-medium">{hardware.title}</h3>
              </div>
            ))}
          </div>

          <h1 className="text-lg font-bold mb-4 ">Software level service</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:gap-16 gap-8 ">
            {softwareservice.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg 2xl:px-6 2xl:py-12  px-4 py-6 flex flex-col items-center justify-center
                 shadow-md hover:shadow-lg transition-shadow"
              >
                {service.icon}
                <h3 className="text-center font-medium">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-8 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8">
        <div>
          <h1 className="text-3xl font-bold text-center mb-12">ABOUT DNS</h1>
          <p className="text-justify">
            DNS Technology is a premier provider of network solutions and IT
            services, dedicated to empowering businesses with innovative and
            reliable technology. With decades of expertise and a team of
            seasoned professionals, we specialize in delivering end-to-end
            solutions tailored to meet the unique needs of businesses across
            diverse industries. <br />
            <br /> Our comprehensive offerings include network design,
            implementation, optimization, and managed services, ensuring
            seamless connectivity and peak performance for organizations of all
            sizes. <br /> <br /> At DNS Technology, we pride ourselves on
            staying ahead of the curve, leveraging the latest advancements in
            technology to provide cutting-edge solutions that drive growth and
            efficiency.
          </p>
          <div className=" mt-10">
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-8 rounded-full transition-colors">
              Who are we
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://img.freepik.com/premium-photo/person-using-laptop-with-dns-domain-name-system-icons-symbols-displayed-screen_973183-53181.jpg?w=900"
            alt=""
            className="w-full h-full object-cover img-responsive rounded-lg "
          />
        </div>
      </div>

      {/* what we  do */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl font-bold text-center mb-12">WHAT WE DO</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Hardware Expertise Card */}
            <div className="bg-white p-8 rounded shadow-sm flex flex-col items-center text-center">
              <div className="mb-4"></div>
              <h3 className="font-medium text-lg">Hardware Expertise</h3>
            </div>

            {/* Software Expertise Card */}
            <div className="bg-white p-8 rounded shadow-sm flex flex-col items-center text-center">
              <div className="mb-4"></div>
              <h3 className="font-medium text-lg">Software Expertise</h3>
            </div>

            {/* Highlighted Services Card */}
            <div className="bg-white p-8 rounded shadow-sm flex flex-col items-center text-center">
              <div className="mb-4"></div>
              <h3 className="font-medium text-lg">Highlighted Services</h3>
            </div>

            <div className="flex items-center justify-center">
              <Link
                href="/services"
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full transition-colors"
              >
                Explore ALL
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* our portfolio */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16 ">
          <h1 className="text-3xl font-bold text-center mb-12">
            OUR PORTFOLIO
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img
                src="https://img.freepik.com/free-vector/business-plan-presentation-template-cover-page_53876-114880.jpg?t=st=1744700759~exp=1744704359~hmac=224a4d89fbcf681a02f54ebfc600d9e9bd169e649d7732a25504c8fad28e577c&w=826"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/08/26/10/47/businessman-2682712_1280.jpg"
                alt=""
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637_1280.jpg"
                alt=""
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
          <div className=" mt-10 flex justify-center">
            <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-8 rounded-full transition-colors">
              View All Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
