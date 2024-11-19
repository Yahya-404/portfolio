"use client";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MdLanguage } from "react-icons/md";
import { changeLang } from "@/utils/getCookiesUpdated";

interface NavItem {
  linkName: string;
  link: string;
  icon?: JSX.Element;
}
interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // let
      const direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setShowDropdown(false);
    }
  });

  // Function to close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  async function changeLangHandler(lang: string) {
    setShowDropdown(false);
    if (lang != locale) {
      changeLang(lang, locale);
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex gap-4 max-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              "relative flex justify-between items-center dark:text-neutral-50 text-neutral-600 dark:hover:text-purple hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.linkName}</span>
          </Link>
        ))}

        <div className="relative select-none" ref={dropdownRef}>
          <MdLanguage
            fontSize={19}
            className="cursor-pointer text-white dark:hover:text-purple"
            onClick={() => setShowDropdown((prev) => !prev)}
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              visibility: "hidden",
            }}
            animate={{
              opacity: showDropdown ? 1 : 0,
              scale: showDropdown ? 1 : 0.9,
              visibility: showDropdown ? "visible" : "hidden",
            }}
            transition={{ duration: 0.125 }}
            className="absolute top-7 w-32 border border-white/[0.2] bg-black-100 rounded-md"
          >
            <div
              className="cursor-pointer text-white px-4 py-2 transition hover:bg-gray-800"
              onClick={() => changeLangHandler("ar")}
            >
              {locale == "en" ? "Arabic" : "عربي"}
            </div>
            <div
              className="cursor-pointer text-white px-4 py-2 transition hover:bg-gray-800"
              onClick={() => changeLangHandler("en")}
            >
              {locale == "en" ? "English" : "إنجليزي"}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
