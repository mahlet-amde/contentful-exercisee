"use client"

import ImageOne from "@/../public/image_one.avif";
import ImageTwo from "@/../public/image_two.avif";
import ImageThree from "@/../public/image_three.avif";
import {
  AppWindowIcon,
  ChartNoAxesCombinedIcon,
  HomeIcon,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const LandingCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cards = [
    {
      icon: HomeIcon,
      description:
        "Sell on-demand content globally and accept payment in over 100 currencies.",
      image: ImageOne,
    },
    {
      icon: AppWindowIcon,
      description:
        "Sell on-demand content globally and accept payment in over 100 currencies.",
      image: ImageTwo,
    },
    {
      icon: ChartNoAxesCombinedIcon,
      description:
        "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
      image: ImageThree,
    },
    {
        icon: ChartNoAxesCombinedIcon,
        description:
          "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
        image: ImageThree,
      },
    //   {
    //     icon: ChartNoAxesCombinedIcon,
    //     description:
    //       "Offer incentives like free trials, exclusive content, and promotions to grow your following.",
    //     image: ImageThree,
    //   },
  ];

  return (
    <div className=" flex justify-center gap-6 mt-10 px-6 flex-wrap md:flex-nowrap">
      {cards.map((card, index) => (
        <motion.div key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs cursor-pointer transition-all flex-grow"
        initial={{ scaleX: 1 }}
        animate={{
            scaleX: hoveredIndex === index ? 1.3 : hoveredIndex !== null ? 0.7 : 1,
        }}
        // transition={{ type: "spring", stiffness: 200, damping: 10}}
        style={{
            flex: hoveredIndex === index ? 2: 1,
            transition: "flex 0.3s ease-in-out",
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}>
          <div
            className={`relative bg-[#141a20] rounded-3xl w-[464px] h-[464px] flex flex-col-reverse shadow-2xl shadow-black`}
          >
            <div className="flex flex-col justify-between  z-index-10">
              <div className="w-full ">
                <p className="text-xl text-[#d1d9e1] ">{card.description}</p>
              </div>
            </div>
            <div className="relative md:w-full  h-full rounded-3xl">
              <Image
                fill
                src={card.image}
                alt="image"
                className="object-cover absolute top-0 left-0 w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LandingCard;
