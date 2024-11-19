import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { GridBgDemo } from "./ui/GridBgDemo";
import ContactSection from "./ContactSection";

const Footer = () => {
  const t = useTranslations("FooterData");
  return (
    <footer
      id="contact"
      className="relative h-[450px] pt-24 flex justify-between flex-col"
    >
      <GridBgDemo />
      <ContactSection />
      {/* Footer Content */}
      <div className="w-full flex justify-between items-center max-sm:flex-col gap-4 pt-16 pb-10">
        <p>{t("text")}</p>
        <div className="socials flex gap-3 *:p-2 *:rounded-md *:border *:border-white/[0.2] *:text-[19px] *:bg-[#101226]">
          <a href="https://wa.me/+201113855879" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/Yahya-404" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yahya-hm-portfolio/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
