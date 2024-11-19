import { useTranslations } from "next-intl";
import { MagicBtn } from "./ui/MagicBtn";
import { SiMinutemailer } from "react-icons/si";

const ContactSection = () => {
  const t = useTranslations("ContactSectionData");

  return (
    <section className="text-center">
      <h1 className="text-center leading-normal font-bold text-4xl md:text-5xl mb-5">
        {t("title.partOne")}
        <span className="text-purple leading-normal">
          {" "}
          {t("title.partTwo")}
        </span>{" "}
        {t("title.partThree")}
      </h1>
      <p className="text-gray-400 text-base mb-10">{t("smallText")}</p>
      <a href="mailto:yahyahemdan.m@gmail.com">
        <MagicBtn
          text={t("buttonText")}
          icon={<SiMinutemailer className="ms-2" fontSize={17} />}
          position="right"
        />
      </a>
    </section>
  );
};

export default ContactSection;
