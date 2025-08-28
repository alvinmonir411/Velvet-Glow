"use client";

import Image from "next/image";

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800">
        Latest News and Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3  ">
        <div className="bg-white p-6 rounded-xl  flex flex-col justify-center-safe h-[300px]">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Embrace the Art of Color Harmony
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed  mb-4 line-clamp-4">
            Explore our collection of carefully chosen products, expert advice
            and inspiring stories designed to help you discover your full
            potential. Whether you are seeking inspiration, advice, or the
            perfect product to elevate your routine.
          </p>
          <button className="bg-[#CE4E61] text-white px-4 py-2 rounded-lg hover:bg-[#b84355] transition text-sm self-start">
            Read More
          </button>
        </div>

        <div className="overflow-hidden rounded-xl  h-[300px] ">
          <Image
            src="/blog/Blog1.jpg"
            width={600}
            height={800}
            alt="Woman with face patch"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="bg-white p-6 rounded-xl  flex flex-col justify-center-safe  h-[300px]">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Embrace the Art of Color Harmony
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
            Explore our collection of carefully chosen products, expert advice
            and inspiring stories designed to help you discover your full
            potential. Whether you are seeking inspiration, advice, or the
            perfect product to elevate your routine.
          </p>
          <button className="border border-[#CE4E61] text-[#CE4E61] px-4 py-2 rounded-lg hover:bg-[#CE4E61] hover:text-white transition text-sm self-start">
            Read More
          </button>
        </div>

        <div className="overflow-hidden rounded-xl  h-[300px]">
          <Image
            src="/blog/Blog2.png"
            width={500}
            height={300}
            alt="Woman getting hair washed"
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-500"
          />
        </div>

        <div className="bg-white p-6 rounded-xl  flex flex-col justify-center-safe  h-[300px]">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Embrace the Art of Color Harmony
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
            Explore our collection of carefully chosen products, expert advice
            and inspiring stories designed to help you discover your full
            potential. Whether you are seeking inspiration, advice, or the
            perfect product to elevate your routine.
          </p>
          <button className="border border-[#CE4E61] text-[#CE4E61] px-4 py-2 rounded-lg hover:bg-[#CE4E61] hover:text-white transition text-sm self-start">
            Read More
          </button>
        </div>

        <div className="overflow-hidden rounded-xl  h-[300px]">
          <Image
            src="/blog/Blog3.jpg"
            width={500}
            height={300}
            alt="Skincare products"
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
