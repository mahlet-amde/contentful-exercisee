"use client";
import styles from "../styles/page.module.css";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "./data";
import Card from "@/components/Card";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main ref={container} className={styles.main}>
      {projects
        .map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          // const targetScale = 1- i * 0.05
          console.log("Image url in project: ", project.link);
          const translateY = i * 40;
          return (
            <Card
              title={""}
              src={""}
              url={project.link}
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              transform={`translateY(${translateY}px scale(${targetScale}))`}
             
            />
          );
        })}
    </main>
  );
}
