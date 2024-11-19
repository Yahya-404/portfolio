import { cn } from "@/lib/utils";
import { EmailCopy, InfiniteMovingCards } from "./routes";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNpmjsLine,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

// Grid Container
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Item
export const BentoGridItem = ({
  id,
  title,
  description,
  className,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
}) => {
  const topTechs = [
    {
      name: "HTML",
      icon: <RiHtml5Fill color="#e34f26" />,
    },
    {
      name: "CSS",
      icon: <RiCss3Fill color="#002561" />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill color="#f7df1e" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill color="#0ea5e9" />,
    },
    {
      name: "NPM",
      icon: <RiNpmjsLine color="#cb3837" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178c6" />,
    },
  ];
  const bottomTechs = [
    {
      name: "ReactJS",
      icon: <RiReactjsFill color="#00d8ff" />,
    },
    {
      name: "NextJS",
      icon: <RiNextjsFill color="#26313b" />,
    },
    {
      name: "Bootstrap",
      icon: <RiBootstrapFill color="#712cf9" />,
    },
    {
      name: "Github",
      icon: <RiGithubFill color="#fff" />,
    },
  ];

  return id === 3 ? (
    <EmailCopy />
  ) : (
    <div
      className={cn(
        "group/bento relative overflow-hidden rounded-xl p-8 row-span-1 col-span-3 border border-white/[0.1] hover:shadow-xl shadow-input dark:shadow-none space-y-4",
        className,
        id === 1
          ? "bg-[url('/assets/icons/labtop-img-svg.svg')] bg-cover bg-no-repeat pt-32 md:pt-0"
          : ""
      )}
    >
      {id === 1 && (
        <div className="group-hover/bento:translate-x-2 transition duration-200 max-w-md">
          <p className="font-sans font-bold md:text-xl lg:text-3xl dark:text-neutral-200">
            {title}
          </p>
        </div>
      )}
      {id === 2 && (
        <>
          <div className="font-sans font-bold md:text-xl lg:text-3xl dark:text-neutral-200 mb-8">
            <p className="text-gray-400 text-xs lg:text-sm tracking-wide">
              {title}
            </p>
            <p>{description}</p>
          </div>
          <InfiniteMovingCards items={topTechs} pauseOnHover={false} />
          <InfiniteMovingCards items={bottomTechs} pauseOnHover={false} />
        </>
      )}
    </div>
  );
};
