"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { MagicBtn, ProjectCard } from "./ui/routes";
import { projects } from "@/data/projects";
import { HiMiniFolderPlus } from "react-icons/hi2";

const RecentProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations("RecentProjectsSectionData");
  const [paginationProjects, setPaginationProjects] = useState(
    projects.slice(0, 4)
  );

  const displayHandler = () => {
    setShowMore((prev) => !prev);
    if (showMore) {
      setPaginationProjects(projects.slice(0, 4));
    } else {
      setPaginationProjects(projects);
    }
  };

  return (
    <section id="projects" className="relative py-14">
      <h1 className="mb-16 text-center font-bold text-4xl md:text-5xl">
        {t("title.partOne")}{" "}
        <span className="text-purple">{t("title.partTwo")}</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {paginationProjects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              ar_description={project.ar_description}
              image={project.image}
              icons={project.icons}
              link={project.link}
            />
          );
        })}
      </div>
      {projects.length > 4 && (
        <div className="w-full flex justify-center mt-6">
          <MagicBtn
            magicButton={true}
            handleClick={displayHandler}
            text={
              showMore ? t("buttonText.showLess") : t("buttonText.showMore")
            }
            icon={<HiMiniFolderPlus fontSize={18} />}
            position="right"
            otherClasses="w-fit"
          />
        </div>
      )}
    </section>
  );
};

export default RecentProjectsSection;
