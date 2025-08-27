// components/PopularProducts.jsx
"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Lipstick",
    brand: "Better Wood and Home",
    price: 120,
    discount: 50,
    image: "/Producs/products1.png",
  },
  {
    id: 2,
    name: "Lip Balm",
    brand: "Better Wood and Home",
    price: 120,
    image: "/Producs/products2.png",
  },
  {
    id: 3,
    name: "Blush",
    brand: "Better Wood and Home",
    price: 120,
    image: "/Producs/products3.png",
  },
  {
    id: 4,
    name: "Eye Shadow",
    brand: "Better Wood and Home",
    price: 120,
    discount: 50,
    image: "/Producs/products4.png",
  },
  {
    id: 5,
    name: "Maskara",
    brand: "Better Wood and Home",
    price: 120,
    discount: 50,
    image: "/Producs/products5.png",
  },
  {
    id: 6,
    name: "Foundation",
    brand: "Better Wood and Home",
    price: 120,
    image: "/Producs/products6.png",
  },
  {
    id: 7,
    name: "Jel",
    brand: "Better Wood and Home",
    price: 120,
    image: "/Producs/products6.png",
  },
  {
    id: 8,
    name: "Cream",
    brand: "Better Wood and Home",
    price: 120,
    image: "/Producs/products7.png",
  },
];

const PopularProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Popular Product
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {product.discount && (
                <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  {product.discount}%
                </span>
              )}
              <div className="w-full aspect-square relative bg-gray-100 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-5"
                />
              </div>
              <div className="p-4 w-full text-center sm:text-start">
                <p className="text-sm text-gray-600">{product.brand}</p>
                <h3 className="text-base font-semibold mt-1">{product.name}</h3>
                <p className="text-red-600 mt-1 font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
