"use client";
import React from "react";
import { Server, Shield, ArrowRight } from "lucide-react";
import Nav from "./nav";
import { useEffect, useState, useRef } from "react";

const HomeHero = () => {
  const statsRef = useRef(null);
  const [animatedStats, setAnimatedStats] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedStats(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  return (
    <div className="mt-20 bg-gray-50">
      <Nav />
      {/* Hero Section with Animation */}
      <section className="h-[790px] overflow-hidden relative w-[80%] mx-auto flex justify-between items-center  ">
        <div className=" px-4 md:px-6 relative z-10">
          <div className="grid gap-24 grid-cols-2  ">
            <div className="flex flex-col justify-center space-y-4 w-full animate-fade-in-left animation-delay-800">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
                  Innovative Technology Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-up">
                  Transforming Your{" "}
                  <span className="text-red-700">Digital Presence</span>
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl animate-fade-in-up animation-delay-300">
                  We build cutting-edge software and network solutions that help
                  businesses thrive in the digital era.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up animation-delay-600">
                <button className="px-6 bg-red-700 hover:bg-red-700 text-white font-semibold transition-all group rounded-md flex items-center py-2">
                  Our Solutions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  className="px-8 hover:outline-red-600 hover:bg-gray-100 hover:text-red-600 transition-all outline-1
                 outline-gray-200 rounded-md font-semibold"
                >
                  Contact Us
                </button>
              </div>
              <div className="flex items-center gap-4 mt-8 animate-fade-in-up animation-delay-900">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden"
                    >
                      <img
                        src={`https://via.placeholder.com/50x50?text=${i}`}
                        alt={`Client ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-medium text-slate-900">500+</span>{" "}
                  satisfied clients worldwide
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-xl overflow-hidden animate-move-up-slow">
                <img
                  src="https://img.freepik.com/free-photo/wi-fi-router-with-blue-optical-fiber_23-2148779307.jpg?t=st=1746773496~exp=1746777096~hmac=d43be4068193056dceb6cd4ef724a8fdea4a4559f022e39f3e0eccb203279ed5&w=740"
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last animate-fade-in  h-[600px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-float ">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Security First</p>
                    <p className="text-xs text-slate-500">
                      Enterprise-grade protection
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                    <Server className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">99.9% Uptime</p>
                    <p className="text-xs text-slate-500">
                      Reliable infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 bg-gradient-to-r from-red-800 to-red-700 text-white  ">
        <div className=" mx-auto flex justify-between items-center w-[80%]">
          <div className="container px-4 md:px-6" ref={statsRef}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  {animatedStats ? <CountUp end={500} duration={2} /> : "0"}+
                </h3>
                <p className="text-red-100">Clients Worldwide</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  {animatedStats ? <CountUp end={1000} duration={2} /> : "0"}+
                </h3>
                <p className="text-red-100">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  {animatedStats ? <CountUp end={50} duration={2} /> : "0"}+
                </h3>
                <p className="text-red-100">Team Members</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  {animatedStats ? <CountUp end={10} duration={2} /> : "0"}+
                </h3>
                <p className="text-red-100">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
};

export default HomeHero;
