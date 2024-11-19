"use client";
import { useEffect } from "react";
import { useLocale } from "next-intl";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const locale = useLocale();
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, locale]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`
                ${locale === "en" && idx > 3 ? "text-purple" : ""}
                ${locale === "ar" && idx > 4 ? "text-purple" : ""}
                ${
                  !(locale === "en" && idx > 3) && !(locale === "ar" && idx > 4)
                    ? "dark:text-white text-black"
                    : ""
                }
                opacity-0
              `}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={cn("font-bold", className)}>{renderWords()}</div>;
};
