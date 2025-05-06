import React from "react";
import logo from "../image/logo.png";
const login = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center items-center  sm:p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2 items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            <img src={logo} alt="Company Logo" className="w-10 h-10" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
            <p className="text-sm text-gray-500 mt-1">
              Powered and Secured by DNS Technology Pvt. Ltd
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-6">
          {/* Username Field */}
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-800 focus:border-blue-800 outline-none transition"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm text-blue-800 hover:text-blue-800 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-800 focus:border-blue-800 outline-none transition"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember Password
            </label>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Login
          </button>
        </div>

        {/* Optional Footer */}
        {/* <div className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Sign up
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default login;
