import { useTranslations } from "next-intl";
import {
  About,
  FloatingNav,
  Footer,
  Hero,
  RecentProjects,
  WorkProcess,
} from "@/components/routes";

export default function Home() {
  const t = useTranslations("NavbarItems");
  const navbarItems = [
    { linkName: t("item1"), link: "#" },
    { linkName: t("item2"), link: "#about" },
    { linkName: t("item3"), link: "#projects" },
    { linkName: t("item4"), link: "#contact" },
  ];

  return (
    <main>
      <FloatingNav navItems={navbarItems} />
      <Hero />
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10">
        <About />
        <RecentProjects />
        <WorkProcess />
        <Footer />
      </div>
    </main>
  );
}
