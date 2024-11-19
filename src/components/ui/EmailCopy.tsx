"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ReactConfetti from "react-confetti";
import { IoCopyOutline } from "react-icons/io5";
import { BgGradientAnimation, MagicBtn } from "./routes";

export const EmailCopy = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const t = useTranslations("AboutSectionData");

  const copyEmail = () => {
    navigator.clipboard.writeText("yahyahemdan.m@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  return (
    <BgGradientAnimation>
      {emailCopied && <ReactConfetti />}
      <div className="flex-center flex-col gap-10 font-sans font-bold text-center md:text-xl lg:text-3xl dark:text-neutral-200">
        {t("box3.title")}
        <MagicBtn
          text={
            emailCopied
              ? t("box3.emailCopiedMessage")
              : t("box3.emailCopyMessage")
          }
          icon={<IoCopyOutline />}
          position="right"
          handleClick={copyEmail}
          otherClasses="!bg-[#161a31] cursor-pointer"
        />
      </div>
    </BgGradientAnimation>
  );
};
