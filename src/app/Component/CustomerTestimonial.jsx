// components/CustomerTestimonial.jsx
"use client";

import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Afiya Zaman Sinigdha",
    title: "Designer",
    avatar: "/testimonial/testimonialuser.svg",
    text: "Explore our collection of carefully chosen products expert advice and inspiring stories designed to help you discover your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.",
  },
  {
    id: 2,
    name: "Afiya Zaman Sinigdha",
    title: "Designer",
    avatar: "/testimonial/testimonialuser2.svg",
    text: "Explore our collection of carefully chosen products expert advice and inspiring stories designed to help you discover your full potential. Whether you are seeking inspiration advice or the perfect product to elevate your routine.",
  },
];

const CustomerTestimonial = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Testimonial
        </h2>

        <div className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:items-start h-auto md:h-[550px] lg:h-[450px] mt-8 overflow-hidden">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full md:w-[700px] h-[300px] md:h-[400px]  z-0">
            <Image
              src="/testimonial/testimonialHero.png"
              alt="Makeup brushes and beauty products"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
              quality={85}
            />
          </div>

          <div className="relative z-10 top-30 flex flex-col md:flex-row gap-6 lg:gap-8 max-w-full md:max-w-3xl lg:max-w-none lg:w-fit lg:mr-0 xl:mr-60">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-[400px] bg-white p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-5">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 object-cover"
                    quality={75}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
