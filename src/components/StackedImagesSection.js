"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imagePairs = [
  {
    images: ["/img1.jpg", "/img2.jpg"],
    positions: ["top-20 left-20 w-60", "bottom-24 right-24 w-72"],
  },
  {
    images: ["/img3.jpg", "/img4.jpg"],
    positions: ["top-32 right-16 w-64", "bottom-20 left-32 w-56"],
  },
  {
    images: ["/img5.jpg", "/img6.jpg"],
    positions: ["top-24 left-1/3 w-72", "bottom-32 right-1/4 w-60"],
  },
  {
    images: ["/img7.jpg", "/img8.jpg"],
    positions: ["top-1/4 right-1/3 w-64", "bottom-1/4 left-1/4 w-56"],
  },
];

export default function FloatingStackSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative h-[800vh] bg-black text-white"
      style={{ perspective: "1600px" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* CENTER TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-30 text-center pointer-events-none">
          <div>
            <h2 className="text-6xl font-light">
              Future-Ready Systems.
            </h2>
            <p className="text-5xl text-gray-500 mt-4">
              Built by Urbanzi
            </p>
          </div>
        </div>

        {imagePairs.map((pair, pairIndex) => {
          const segment = 1 / imagePairs.length;
          const start = pairIndex * segment;
          const end = start + segment;

          const nextPair = imagePairs[pairIndex + 1];

          // FRONT ACTIVE PAIR
          const frontOpacity = useTransform(
            scrollYProgress,
            [start, start + 0.15, end - 0.2, end],
            [0, 1, 1, 0]
          );

          const frontScale = useTransform(
            scrollYProgress,
            [start, end],
            [0.95, 1.4]
          );

          // BACK PREVIEW PAIR
          const backOpacity = useTransform(
            scrollYProgress,
            [start, start + 0.1],
            [0.4, 0.8]
          );

          const backScale = useTransform(
            scrollYProgress,
            [start, end],
            [0.8, 1]
          );

          return (
            <div key={pairIndex}>

              {/* BACK PREVIEW */}
              {nextPair && (
                <motion.div
                  style={{
                    opacity: backOpacity,
                    scale: backScale,
                  }}
                  className="absolute inset-0 z-10"
                >
                  {nextPair.images.map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      className={`absolute ${nextPair.positions[i]} rounded-xl blur-md opacity-70`}
                    />
                  ))}
                </motion.div>
              )}

              {/* FRONT ACTIVE */}
              <motion.div
                style={{
                  opacity: frontOpacity,
                  scale: frontScale,
                }}
                className="absolute inset-0 z-20"
              >
                {pair.images.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    className={`absolute ${pair.positions[i]} rounded-xl shadow-2xl`}
                  />
                ))}
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}