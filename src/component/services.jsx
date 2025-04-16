import React from "react";

const Services = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          OUR SERVICES
        </h1>
      </div>
      {/* hero section */}
      <div className="grid grid-cols-2 bg-[#d9d9df]">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/00/10/laptop-2586933_1280.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div>
          <h1>
            From robust hardware Installation to innovation software solutions,
            we offer a full spectrum of services to meet your business need.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aperiam iusto, esse nam, ut accusantium facilis
            inventore ipsa doloremque ducimus eius quas tempore modi quos dicta
            magnam temporibus maxime provident?
          </p>
        </div>
      </div>

      <div className="flex justify-center  border-b border-black py-8">
        <div className="flex justify-between items-center ">
          {/* Hardware Service */}
          <div className="flex justify-center items-center w-64 border-2">
            <h1 className="text-2xl font-bold p-4">Hardware Service</h1>
          </div>

          {/* Vertical Line */}
          <div className="w-px h-24 bg-gray-300"></div>

          {/* Software Service */}
          <div className="flex justify-center items-center w-64 border-2">
            <h1 className="text-2xl font-bold p-4">Software Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
