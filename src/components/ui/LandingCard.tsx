"use client";


import { useState } from "react";
import Image from "next/image";
import { VideoModal } from "../video-modal";

const LandingCard = ({cards}: any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<number | null>(null)
  const openVideoModal = (index: number) => {
    setModalOpen(index)
  }
  const closeVideoModal = () => {
    setModalOpen(null)
  }
 

  return (
    <div className="flex flex-wrap sm:flex-nowrap sm:justify-between gap-4 max-w-7xl mx-auto ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`block transition-all duration-300 ease-in-out 
        ${
            hoveredIndex === index
            ? "sm:w-[calc(50%-0.5rem)]"
            : "sm:w-[calc(25%-0.75rem)]"
        }
        w-full mb-4 sm:mb-0 cursor-youtube-play`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openVideoModal(index)}
        >
          <div
            className={`relative bg-[#141a20] rounded-3xl  flex flex-col-reverse shadow-2xl shadow-black `}
          >
            <div className="flex flex-col justify-between  z-index-10">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              </div>
              <div className="px-4 pb-4">
                <p className="text-[#d1d9e1]">{card.description}</p>
              </div>
            </div>
            <div className="relative w-full h-96 ">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default LandingCard;
