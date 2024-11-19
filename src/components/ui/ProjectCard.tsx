"use client";
import { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  ar_description: string;
  icons: string[];
}

export const ProjectCard = ({
  image,
  title,
  description,
  ar_description,
  icons,
  link,
}: ProjectCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const locale = useLocale();
  const displayHandler = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="group border border-white/[0.1] rounded-xl overflow-hidden p-5 flex flex-col max-w-xs sm:max-w-sm">
      {/* Image */}
      <Image
        src={`/assets/images/${image}`}
        width={1000}
        height={750}
        alt="Project"
        className="max-w-full rounded-xl overflow-hidden"
      />
      {/* Description */}
      <div className="mt-5 mb-7">
        <h1 className="mb-2 font-semibold text-lg md:text-2xl" dir="ltr">
          {title}
        </h1>
        <div>
          <p
            className={`text-gray-500 text-sm sm:text-base overflow-hidden ${
              !showMore ? "line-clamp-3" : ""
            }`}
          >
            {locale == "en" ? description : ar_description}
          </p>
          {(description.length > 150 || ar_description.length > 150) && (
            <button
              onClick={displayHandler}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {locale == "en"
                ? showMore
                  ? "show less"
                  : "show more"
                : showMore
                ? "عرض أقل"
                : "عرض المزيد"}
            </button>
          )}
        </div>
      </div>
      {/* Icons & Links */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
          {icons?.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black w-9 h-9 flex justify-center items-center"
              style={{
                transform: `translateX(${
                  locale === "en" ? -(5 * index + 2) : 5 * index + 2
                }px)`,
              }}
            >
              <Image
                src={`/assets/icons/${icon}`}
                width={50}
                height={50}
                alt="icon"
                className="w-8 h-8  p-2"
              />
            </div>
          ))}
        </div>
        {link && (
          <a
            target="_blank"
            href={link}
            className="flex gap-2 items-center w-fit text-purple cursor-pointer ms-auto"
          >
            {locale == "en" ? (
              <span>Live Preview</span>
            ) : (
              <span>معاينة الموقع</span>
            )}
            <MdArrowOutward />
          </a>
        )}
      </div>
    </div>
  );
};
