"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function HeroSection() {
  return (
    <section className="relative  bg-[#fffafc] px-2 md:px-12 lg:px-24 py-16 overflow-hidden">
      <div className="flex container mx-auto flex-col lg:flex-row items-center justify-between ">
        {/* ✅ Left Section */}
        <div className="flex-1">
          {/* Tagline */}
          <div className="flex items-center   mb-6">
            <span className="w-14 h-14 rounded-full bg-[#FFC7CF]"></span>
            <span className="w-14 h-14 -ml-3 rounded-full bg-[#CE4E61]"></span>
            <p className="text-[18px] -ml-3 font-medium text-black">
              New Spring 2025 <br /> Collections
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold leading-tight ">
            Fashion That <br />
            Feels As Good As <br />
            It <span className="text-pink-500 italic">Looks</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 mt-6 max-w-md">
            Streetwear-inspired and flavor-packed, every drop celebrates
            individuality, freedom,and effortless style—where comfort meets
            cultural edge
          </p>

          {/* Button */}
          <button className="mt-8 px-6 py-3 bg-[#CE4E61] hover:bg-pink-600 text-white font-medium rounded flex items-center gap-2">
            Get Started <FaLongArrowAltRight />
          </button>
        </div>

        {/* ✅ Right Section */}
        <div className="flex-1 relative  mt-5 md:mt-0 flex justify-center">
          {/* Main Image */}
          <Image
            src="/HeroImage.png"
            alt="Fashion Model"
            width={500}
            height={600}
            className=" object-cover custom-glow-shadow"
          />

          {/* ✅ Testimonial Box */}
          <div className="absolute top-0 right-0 md:top-6 md:right-6 bg-white shadow-lg rounded-2xl p-2 md:p-4 w-30 lg:w-60">
            <p className="text-gray-700 italic text-[10px]">
              “Style is a way to say who you are without having to speak.”
            </p>
            <p className="mt-3 text-sm font-medium text-gray-500">
              — Rachel Green
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
