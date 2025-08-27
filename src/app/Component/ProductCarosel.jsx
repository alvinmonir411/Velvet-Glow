// components/ProductCarouselSection.jsx
"use client"; // Next.js 15 এর জন্য ক্লায়েন্ট কম্পোনেন্ট

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const carouselItems = [
  { id: 1, src: "/carosel1.png", alt: "Floral Perfume Bottle" },
  { id: 2, src: "/carosel2.png", alt: "Purple Perfume Bottle" },
  { id: 3, src: "/Collection1.png", alt: "Another Perfume Bottle" },
  { id: 4, src: "/Collection2.png", alt: "Fourth Perfume Bottle" },
];

const ProductCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Swiper Carousel Section */}
          <div className="relative w-full lg:w-3/6 h-[450px] rounded-lg">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // Swiper নেভিগেশন রেফ ঠিক করা
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className="w-full h-full"
            >
              {carouselItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative w-full h-full rounded-lg shadow-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      quality={85}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <button
              ref={prevRef}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md hover:bg-opacity-100 transition z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* CTA Card */}
          <div className="w-full lg:w-1/3 h-[450px] bg-gray-900 text-white p-8 md:p-10 flex flex-col justify-center rounded-lg shadow-xl">
            <p className="text-orange-300 text-sm md:text-base mb-2 uppercase tracking-wide font-semibold">
              Ready to Shop
            </p>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Revolutionizing Your Skins Journey to Radiance
            </h3>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              SHOP NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
