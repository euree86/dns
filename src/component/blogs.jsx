import React from "react";
import { Calendar, ArrowRight } from "lucide-react";

import Nav from "./nav";
import Footer from "./footer";
const BlogLayout = () => {
  const blogPosts = [
    {
      id: 1,
      title: "From Ideas to Impact in a Startup's Journey",
      date: "November 23, 2023",
      image: "/api/placeholder/300/200",
      category: "BRAINSTORMING",
      featured: false,
    },
    {
      id: 2,
      title: "Navigating the Tech Landscape with Insights",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
    {
      id: 3,
      title: "Behind the Scenes of Crafting Our Startup",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
    {
      id: 4,
      title: "Behind the Scenes of Crafting Our Startup",
      date: "November 20, 2023",
      image: "/api/placeholder/300/200",
      featured: false,
    },
  ];

  const featuredPost = {
    id: 4,
    title: "Exploring Future Renewable Energy Innovations",
    date: "December 11, 2023",
    description:
      "Embark on a journey with us as we delve into the realms of innovation, share insights, and explore the transformative power of technology. Our...",
    image: "/api/placeholder/600/400",
    featured: true,
  };

  // Recent posts data similar to the image
  const recentPosts = [
    {
      id: 1,
      title:
        "10 Best Nolt.io Alternatives & Competitors for Feedback Management Tool",
      category: "Customer Feedback",
      date: "Jan 08, 2024",
      description:
        "Explore 10 top Nolt alternatives: Supahub, Canny.io, Savio, FeatureOS, Productboard, Aha!, Upvoty, Fider, Feedbear, and Sleekplan.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "25 Best Product Management Books for 2024 for Product Managers",
      category: "Product Management",
      date: "Jan 06, 2024",
      description:
        "Discover the top 25 best product management books for 2024 and gain essential insights for...",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title:
        "10 Best Beamer Alternatives for Publishing Changelogs and Customer Feedback",
      category: "Customer Feedback",
      date: "Jan 04, 2024",
      description:
        "Discover the top 10 best alternatives to Beamer for managing customer feedback, changelogs...",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title:
        "How to Write Release Notes: Best Practices, Template, Tools, and Examples ",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    },

     {
      id: 4,
      title:
        "How to Write Release Notes: Best Practices, Template, Tools, and Examples ",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2017/01/18/11/54/wifi-1989627_640.png",
    },

     {
      id: 4,
      title:
        "How to Write Release Notes: Best Practices, Template, Tools, and Examples ",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2020/07/25/09/08/modem-5436146_640.jpg",
    },

     {
      id: 4,
      title:
        "How to Write Release Notes: Best Practices, Template, Tools, and Examples ",
      category: "Product Management",
      date: "Jan 02, 2024",
      description:
        "Learn how to write release notes for product releases. Follow best practices and find tools...",
      image:
        "https://cdn.pixabay.com/photo/2020/02/25/09/26/technology-4878380_640.png",
    },
  ];

  // Helper function to get different images for each post
  const getPostImage = (id) => {
    const images = [
      "https://cdn.pixabay.com/photo/2017/06/18/23/10/cctv-2417559_640.jpg",
      "https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_640.png",
      "https://cdn.pixabay.com/photo/2017/04/04/17/20/linksys-2202250_640.jpg",
    ];
    return images[id - 1] || images[0];
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <div className="pt-16 sm:pt-20 md:pt-24 bg-gray-100 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* heading text */}
          <div className="text-center">
            <h1 className="text-5xl font-bold pb-4">Our Insightful Blog</h1>
            <p className="pb-8 font-normal text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, et?
              Blanditiis nulla omnis veritatis voluptatibus doloribus dolorem
              possimus aperiam quod esse, soluta adipisci? Explicabo vel
              voluptatum hic dolores qui at!
            </p>
          </div>

          {/* hero section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post - Large */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-[32rem]">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center mb-4 text-gray-200">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <p className="text-gray-200 leading-relaxed mb-4">
                      {featuredPost.description}
                    </p>
                    <button className="inline-flex items-center text-white hover:text-blue-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Posts */}
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex justify-between">
                    <div className="w-24 h-28 flex-shrink-0">
                      <img
                        src={getPostImage(post.id)}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-xs mb-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <button className="inline-flex items-center text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8 border-b border-gray-300 pb-2">
            RECENT POSTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => {
              // First post gets special treatment (larger)
              if (index === 0 ) {
                return (
                  <div key={post.id} className="md:col-span-3">
                    <div className=" overflow-hidden group ">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover rounded-xl"
                          />
                        </div>
                        <div className="md:w-1/2 p-8 text-black">
                          <div className="flex items-center text-gray-500 text-sm mb-4">
                            <span className="mr-4">{post.category}</span>
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 leading-tight ">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 ">{post.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Regular posts
              return (
                <div key={post.id}>
                  <div className="bg-white  overflow-hidden shadow-lg ">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span className="mr-4">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
