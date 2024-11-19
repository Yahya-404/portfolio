"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Image from "next/image";

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    img: string;
    btnLabel: string;
    btnDir: string;
    step: number;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;
  const [step, setStep] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--rose-500), var(--blue-500))",
    "linear-gradient(to bottom right, #9b4dca, #1abc9c)",
  ];
  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );
  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useEffect(() => {
    const scrollPositions = [0, 323, 650]; // المواضع الخاصة بكل خطوة
    if (ref.current) {
      ref.current.scrollTo({
        top: scrollPositions[step - 1], // استخدام الموضع المرتبط بالخطوة
        left: 0,
        behavior: "smooth",
      });
    }
  }, [ref, step]);

  return (
    <motion.div
      animate={{
        backgroundImage: backgroundGradient,
      }}
      className="scroll-snap-y snap-y snap-mandatory relative h-[20rem] flex flex-col gap-6 overflow-y-auto px-10 rounded-md"
      ref={ref}
    >
      {content.map((item, index) => (
        <div
          key={item.title + index}
          className="snap-start h-[20rem] gap-16 flex items-center lg:justify-around"
        >
          {/* Text */}
          <div className="max-w-2xl pt-5">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-xl md:text-2xl font-bold text-slate-100 h-[45px]"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="text-base text-gray-300 max-w-sm mt-5 h-[135px]"
            >
              {item.description}
            </motion.p>
            <button
              onClick={() => setStep(item.step)}
              className="mt-5 flex gap-2 items-center border-2 font-bold p-3 rounded-lg border-white/[0.3] text-purple hover:text-white"
            >
              {item.btnDir === "down" ? (
                <FaAngleDown fontSize={19} />
              ) : (
                <FaAngleUp fontSize={19} />
              )}
              {item.btnLabel}
            </button>
          </div>
          {/* banner */}
          <div className={cn("hidden md:block", contentClassName)}>
            <Image
              src={item.img}
              alt="linear board demo"
              width={200}
              height={200}
              className="max-h-full max-w-full my-auto"
            />
          </div>
        </div>
      ))}
      <div className="h-10"></div>
    </motion.div>
  );
};
