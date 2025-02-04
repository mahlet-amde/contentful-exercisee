"use client";
import Image from "next/image";
import styles from "../styles/style.module.css";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface CardProps {
  i?: number;
  title?: string;
  description: string;
  src?: string;
  url?: string;
  color: string;
  progress: any;
  range: any;
  targetScale: any;
  transform: any;
  style?: React.CSSProperties;
}

const Card = ({
  i,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  transform,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  console.log("Image link: ", url);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer} style={{ transform }}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(5vh - ${i * 75}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
              <Image
                src={url}
                alt="Professional in business  attire"
                className="w-full h-auto rounded-md"
                width={200}
                height={300}
              />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
