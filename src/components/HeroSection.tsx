import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import {
  FlipWords,
  GridBgDemo,
  MagicBtn,
  SpotlightContainer,
  TextGenerateEffect,
} from "./ui/routes";
import { FaLocationArrow } from "react-icons/fa6";
import { RiDownloadCloud2Line } from "react-icons/ri";

const HeroSection = () => {
  const locale = useLocale();
  const t = useTranslations("HeroSectionData");
  return (
    <section className="relative h-screen w-full overflow-hidden pt-48 sm:pt-52">
      <GridBgDemo />
      <SpotlightContainer />

      <div className="flex-center flex-col text-center mx-auto max-w-[87vw] sm:max-w-[73vw] md:max-w-[65vw] lg:max-w-[65vw]">
        <div className="w-full uppercase tracking-widest text-[10px] md:text-xs text-center text-blue-100">
          {t("description")}
          {locale == "en" && (
            <FlipWords words={["Responsive", "Awesome", "Intuitive"]} />
          )}
        </div>
        <TextGenerateEffect
          words={t("title")}
          className=" mt-3 text-center text-3xl md:text-4xl lg:text-5xl"
        />
        <p className="mt-6 mb-10 dark:text-white text-black leading-sung text-sm md:text-base lg:text-lg tracking-widest rtl:tracking-normal">
          {t("whoIAm")}
        </p>

        {/* Interactive buttons */}
        <div className="flex-center gap-4 flex-col sm:flex-row">
          {/* Download CV Button */}
          <a href="/assets/cv/Yahya-HM.pdf" download="Yahya-HM">
            <MagicBtn
              text={t("primaryBtnText")}
              icon={<RiDownloadCloud2Line fontSize={19} />}
              position="right"
            />
          </a>
          {/* Link to Projects Button */}
          <Link href="#projects">
            <MagicBtn
              text={t("secondaryBtnText")}
              icon={<FaLocationArrow />}
              position="right"
              magicButton={true}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
