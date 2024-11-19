import { useTranslations } from "next-intl";
import { BentoGrid, BentoGridItem } from "./ui/routes";

const AboutSection = () => {
  const t = useTranslations("AboutSectionData");

  return (
    <section id="about" className="py-14">
      <BentoGrid>
        <BentoGridItem
          id={1}
          title={t("box1.title")}
          className="row-span-2 flex items-end"
        />
        <BentoGridItem
          id={2}
          title={t("box2.title")}
          description={t("box2.description")}
          className="md:col-span-2 text-center"
        />
        <BentoGridItem id={3} />
      </BentoGrid>
    </section>
  );
};

export default AboutSection;
