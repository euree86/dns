import React from "react";
import { BiSolidCctv } from "react-icons/bi";

const About = () => {
  return (
    <div>
      {/* top hero */}
      <div>
        <h1 className="text-3xl md:text-3xl font-bold flex justify-center my-4">
          ABOUT US
        </h1>
        <img
          src="https://img.freepik.com/free-photo/gradient-technology-background_23-2151895850.jpg?t=st=1744708528~exp=1744712128~hmac=c36d3a064bc25d8bcc80a28c5717390d944255113baedc307f5143676ea5c164&w=1060"
          alt=""
          className="w-full h-[500px] object-"
        />
      </div>
      {/* introduction */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full py-6 px-4 ">
          <h1 className="text-xl font-bold  mb-6">Introduction</h1>
          <p className="text-sm">
            DNS Technology is a premier provider of network solutions and IT
            services, dedicated to empowering businesses with innovative and
            reliable technology. With decades of expertise and a team of
            seasoned professionals, we specialize in delivering end-to-end
            solutions tailored to meet the unique needs of businesses across
            diverse industries. <br /> <br />
            Our comprehensive offerings include network design, implementation,
            optimization, and managed services, ensuring seamless connectivity
            and peak performance for organizations of all sizes. With years of
            industry expertise, our team of dedicated professionals is committed
            to delivering customized solutions that align with your business
            goals. From cutting-edge network architecture to comprehensive IT
            support, we help organizations of all sizes optimize their
            operations, enhance security, and stay ahead of the competition.{" "}
            <br /> <br />
            Our mission is simple :to be your trusted partner in achieving
            technological excellence. Whether you're seeking seamless
            connectivity, advanced cybersecurity, or cloud integration, DNS
            Technology has the expertise and tools to make it happen. <br />{" "}
            <br />
            At DNS Technology, we pride ourselves on staying ahead of the curve,
            leveraging the latest advancements in technology to provide
            cutting-edge solutions that drive growth and efficiency.
          </p>
        </div>
      </div>
      {/* explore our best services */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="w-full bg-gray-200 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Explore Our Best Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 lg:px-4 xl:px-16">
            {/* Service Card 1 */}
            <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4 sm:gap-6">
              <BiSolidCctv className="w-12 h-12 sm:w-16 sm:h-16" />
              <h1 className="text-lg sm:text-xl font-semibold text-center">
                CCTV Installations
              </h1>
              <p className="text-sm sm:text-base text-center">
                Protect your property and enhance security with our expert CCTV
                installation services. Whether you need surveillance for your
                home, office, or commercial premises, we provide tailored
                solutions designed to meet your unique security needs.
              </p>
              <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-4 rounded-full transition-colors text-sm sm:text-base">
                Explore More
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4 sm:gap-6">
              <BiSolidCctv className="w-12 h-12 sm:w-16 sm:h-16" />
              <h1 className="text-lg sm:text-xl font-semibold text-center">
                CCTV Installations
              </h1>
              <p className="text-sm sm:text-base text-center">
                Protect your property and enhance security with our expert CCTV
                installation services. Whether you need surveillance for your
                home, office, or commercial premises, we provide tailored
                solutions designed to meet your unique security needs.
              </p>
              <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-4 rounded-full transition-colors text-sm sm:text-base">
                Explore More
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-md gap-4 sm:gap-6">
              <BiSolidCctv className="w-12 h-12 sm:w-16 sm:h-16" />
              <h1 className="text-lg sm:text-xl font-semibold text-center">
                CCTV Installations
              </h1>
              <p className="text-sm sm:text-base text-center">
                Protect your property and enhance security with our expert CCTV
                installation services. Whether you need surveillance for your
                home, office, or commercial premises, we provide tailored
                solutions designed to meet your unique security needs.
              </p>
              <button className="bg-gray-400 hover:bg-gray-500 text-gray-800 font-medium py-2 px-4 rounded-full transition-colors text-sm sm:text-base">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* recent portfolio */}
      <div className="container mx-auto px-4 sm:px-6 py-8 mb-8">
        <div className="w-full bg-gray-200 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Checkout Recent Portfolio
          </h1>
        </div>
      </div>
      {/* OUR TEAM and ceo */}
      <div className="bg-gray-100">
        <div className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-16 ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Our <span className="text-indigo-600">Team</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the passionate individuals driving our success forward
              </p>
            </div>

            {/* CEO Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-24 mb-16 lg:mb-20">
              <div className="relative group w-full max-w-md lg:max-w-none">
                <div
                  className="relative overflow-hidden rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] 
                mx-auto border-4 border-white shadow-xl "
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2021/11/19/00/12/man-6807759_1280.jpg"
                    alt="Dipesh Silwal"
                    className="object-cover w-full h-full "
                  />
                </div>
              </div>

              <div className="max-w-lg mt-8 lg:mt-0 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Dipesh Silwal
                  </h1>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
                  Founder and CEO
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 rounded-full"></div>

                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Visionary leader with over 10 years of experience in
                  technology and business strategy. Dipesh founded the company
                  with a mission to revolutionize the industry through
                  innovation and customer-centric solutions.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  His expertise in scaling startups and building
                  high-performance teams has been instrumental in our rapid
                  growth and market success.
                </p>

                <div className="mt-8 flex space-x-5">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 "
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 "
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-indigo-600 "
                    aria-label="GitHub"
                  >
                    <svg
                      className="h-7 w-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.313-1.756-1.313-1.756-1.071-.732.083-.718.083-.718 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team members */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-16 ">       
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Our Talented Team
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals working together to deliver exceptional
                results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {/* Team Member 1 */}
              <div
                className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md
                 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative mb-5 overflow-hidden rounded-full w-48 h-48 border-4 border-white shadow-lg">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/03/10/16/39/woman-6084994_1280.jpg"
                    alt="Sarah Johnson"
                    className="object-cover w-full h-full "
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  Lead Developer
                </p>
                <p className="text-gray-600 mb-4 px-2">
                  Full-stack developer with expertise in modern JavaScript
                  frameworks.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative mb-5 overflow-hidden rounded-full w-48 h-48 border-4 border-white">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083379_1280.jpg"
                    alt="Michael Chen"
                    className="object-cover w-full h-full "
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Michael Chen
                </h3>
                <p className="text-indigo-600 font-medium mb-4">UX Designer</p>
                <p className="text-gray-600 mb-4 px-2">
                  Creating intuitive user experiences with a focus on
                  accessibility.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative mb-5 overflow-hidden rounded-full w-48 h-48 border-4 border-white">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg"
                    alt="Emma Rodriguez"
                    className="object-cover w-full h-full "
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Emma Rodriguez
                </h3>
                <p className="text-indigo-600 font-medium mb-4">
                  Marketing Director
                </p>
                <p className="text-gray-600 mb-4 px-2">
                  Driving brand growth through innovative digital marketing
                  strategies.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          
        </div>
      </div>

      {/* our trusted clients and company */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Our Trusted Company & Clients
        </h1>
        <div className="w-full bg-gray-200 py-16 px-4 md:px-8 lg:px-16 ">
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
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
