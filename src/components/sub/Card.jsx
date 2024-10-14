"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ItemLayout from "./ItemLayout";

const Card = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Ngăn chặn cuộn trang khi modal mở
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Ngăn cuộn
    } else {
      document.body.style.overflow = "auto"; // Cho phép cuộn
    }

    // Dọn dẹp khi component unmount
    return () => {
      document.body.style.overflow = "auto"; // Đảm bảo cuộn được khôi phục
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      {/* Phần card */}
      <ItemLayout className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden w-full max-w-7xl mx-auto h-[350px] mb-10 border-2 border-transparent ">
        {/* Phần hình ảnh */}
        <div className="w-full md:w-2/5 relative h-48 md:h-full">
          <Image
            src={item.image}
            alt={item.title}
            priority
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="rounded-l-lg"
          />
        </div>
        <div className="w-3/5 p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between">
              <span className="text-red-500 text-sm">{item.category}</span>
              <span className="text-gray-500 text-sm">
                Posted on {item.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold mt-2">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-sm line-clamp-5">
              {item.description}
            </p>
          </div>
          <button
            onClick={handleReadMore}
            className="mt-4 text-blue-500 font-semibold hover:underline "
          >
            Read More
          </button>
        </div>
      </ItemLayout>

      {/* Modal hiển thị khi bấm Read More */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] ">
          <div className="bg-white mt-[80px] mb-[40px] p-6 rounded-lg shadow-lg w-[90%] max-w-8xl h-[90%] relative overflow-hidden flex flex-col md:flex-row ">
            <button
              className="absolute top-4 right-4 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-700 hover:shadow-lg transition-all"
              onClick={handleCloseModal}
            >
              X
            </button>

            <div className="w-1/3 p-4 mt-10">
              <div className="relative w-full h-[300px] mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  priority
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              <div className="flex items-center mb-4">
                <Image
                  src="/navbarIcons/avatar.png"
                  alt="Author Avatar"
                  priority
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1 ml-4 flex flex-col">
                  <span className="text-gray-700 font-semibold">
                    Diu Nguyen
                  </span>
                  <span className="text-gray-500 text-sm">
                    Posted on {item.date}
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-2">
                Chủ đề: {item.category}
              </p>
              <p className="text-gray-500 text-sm">
                Số lượt xem: {item.views || 0}
              </p>
            </div>

            <div className="w-2/3 p-4 flex flex-col mt-8">
              <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
              <div className="flex-1 mt-4 overflow-y-auto max-h-[85%]">
                <p className="text-gray-600">
                  {item.fullDescription
                    ? item.fullDescription.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))
                    : "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
