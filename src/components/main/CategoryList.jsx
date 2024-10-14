import React from "react";
import Image from "next/image";

import ItemLayout from "../sub/ItemLayout";

const categories = [
  {
    id: 1,
    title: "travel",
    bgColor: "bg-blue-500/20",
    image: "/categories/airplane.png",
  },
  {
    id: 2,
    title: "coding",
    bgColor: "bg-pink-500/20",
    image: "/categories/binary-code.png",
  },
  {
    id: 3,
    title: "food",
    bgColor: "bg-green-500/20",
    image: "/categories/cake-slice.png",
  },
  {
    id: 4,
    title: "gaming",
    bgColor: "bg-purple-500/20",
    image: "/categories/joystick.png",
  },
  {
    id: 5,
    title: "life",
    bgColor: "bg-yellow-500/20",
    image: "/categories/life.png",
  },
];

const CategoryList = () => {
  return (
    <section id="blog" className="container mx-auto py-20 px-6 ">
      <h5 className="text-center text-lg text-gray-400">
        Recent topics of interest
      </h5>
      <h2 className="text-center text-3xl text-white mb-10">
        Popular Categories
      </h2>

      <div className="flex flex-wrap items-center justify-between gap-5 overflow-x-auto whitespace-nowrap">
        {categories.map((item) => (
          <ItemLayout
            key={item.id}
            className={`flex items-center justify-center text-white text-xl capitalize px-4 py-3 w-60 h-20 rounded-lg cursor-pointer z-[20] ${item.bgColor}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="ml-4">{item.title}</span>
          </ItemLayout>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
