"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import AnimatedText from "./AnimatedText";

export default function HeroBanner({ ...props }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [path, setPath] = useState("");

  // Generate wave path on mount
  useEffect(() => {
    const points = 8;
    const segments = [];
    const height = 600;
    const width = 1200;

    for (let i = 0; i <= points; i++) {
      const x = (width * i) / points;
      const y = height / 2 + Math.sin(i * 0.5) * 50;
      segments.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }

    setPath(segments.join(" "));
  }, []);

    // Floating sphere configurations
  const spheres = [
    { size: 60, x: "50%", y: "5%", delay: 0 },
    { size: 60, x: "20%", y: "30%", delay: 0 },
    { size: 40, x: "80%", y: "20%", delay: 1 },
    { size: 30, x: "60%", y: "70%", delay: 2 },
    { size: 50, x: "10%", y: "60%", delay: 1.5 },
    { size: 35, x: "90%", y: "40%", delay: 0.5 },
  ];

  return (
    <section className="p-4 h-screen z-40">
      <div
        className="relative h-full overflow-hidden rounded-3xl shadow-xl"
        ref={containerRef}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-primary-gradient" />

        {/* Grid patterns */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-1/3 h-1/3 opacity-10">
            <div className="w-full h-full grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-white/20" />
              ))}
            </div>
          </div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 opacity-10">
            <div className="w-full h-full grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-white/20" />
              ))}
            </div>
          </div>
        </div>

        {/* Animated wave mesh */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="w-full h-full opacity-30"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            <motion.path
              d={path}
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.path
              d={path}
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.5,
                pathOffset: [1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Floating spheres */}
        <div className="absolute inset-0">
          {spheres.map((sphere, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                width: sphere.size,
                height: sphere.size,
                left: sphere.x,
                top: sphere.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: sphere.delay,
                },
                opacity: { duration: 1, delay: sphere.delay },
                scale: { duration: 1, delay: sphere.delay },
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-300/30 to-pink-300/30 backdrop-blur-sm" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          style={{ opacity, y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <AnimatedText />
            {props.children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
