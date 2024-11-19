interface Props {
  text: string;
  icon?: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  magicButton?: boolean;
}

export const MagicBtn = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
  magicButton,
}: Props) => {
  return (
    <button
      className={`z-10 relative inline-flex h-12 w-52 overflow-hidden rounded-lg p-[1px] focus:outline-none ${otherClasses}`}
      onClick={handleClick}
    >
      {/* Animated background when magicButton is active */}
      <span
        className={`absolute inset-[-1000%] ${
          magicButton && "animate-[spin_2s_linear_infinite]"
        } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
      />
      <span
        className={`inline-flex h-full w-full ${
          magicButton ? "bg-slate-950" : ""
        } cursor-pointer items-center justify-center rounded-lg px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};
