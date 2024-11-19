import { useTranslations } from "next-intl";
import { StickyScrollReveal } from "./ui/StickyScrollReveal";

const WorkProcessSection = () => {
  const t = useTranslations("WorkProcessSectionData");
  const content = [
    {
      title: t("stage1.title"),
      description: t("stage1.description"),
      img: "/assets/images/step1.png",
      btnLabel: t("next-button"),
      btnDir: "down",
      step: 2,
    },
    {
      title: t("stage2.title"),
      description: t("stage2.description"),
      img: "/assets/images/step2.png",
      btnLabel: t("next-button"),
      btnDir: "down",
      step: 3,
    },
    {
      title: t("stage3.title"),
      description: t("stage3.description"),
      img: "/assets/images/step3.png",
      btnLabel: t("prev-button"),
      btnDir: "up",
      step: 1,
    },
  ];

  return (
    <section id="process" className="pt-24">
      <h1 className="text-center font-bold text-4xl md:text-5xl mb-16">
        {t("title.partOne")}{" "}
        <span className="text-purple">{t("title.partTwo")}</span>
      </h1>
      <StickyScrollReveal content={content} />
    </section>
  );
};

export default WorkProcessSection;
