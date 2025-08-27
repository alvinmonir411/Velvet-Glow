// components/CollectionSection.jsx (or wherever you'd like to place this component)

import Image from "next/image";
import React from "react";

const collectionsData = [
  {
    id: 1,
    name: "Oil Cleansers",
    items: 5,
    imageSrc: "/Collection1.png",
  },
  {
    id: 2,
    name: "Hand Cream",
    items: 5,
    imageSrc: "/Collection2.png",
  },
  {
    id: 3,
    name: "Toners Skin",
    items: 5,
    imageSrc: "/Collection3.png",
  },
  {
    id: 4,
    name: "Face Mask",
    items: 5,
    imageSrc: "/Collection4.png",
    highlighted: true,
  },
];

const Collection = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Browse by Collection
      </h2>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
        {collectionsData.map((collection) => (
          <div key={collection.id} className="flex flex-col items-center">
            <div
              className={`relative w-50 h-80 rounded-[80px] overflow-hidden 
                         ${
                           collection.highlighted
                             ? "border-2 border-blue-500 border-dotted"
                             : ""
                         }`}
            >
              <Image
                src={collection.imageSrc}
                alt={collection.name}
                layout="fill"
                objectFit=" cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">
              {collection.name}
            </p>
            <p className="text-sm text-[#AE5928]">{collection.items} Items</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
