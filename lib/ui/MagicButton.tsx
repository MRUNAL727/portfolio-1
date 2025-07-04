import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] 
      focus:outline-non w-full md:w-60 md:mt-10"
        onClick={handleClick}
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-base font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && <span>{icon}</span>}
          {title}
          {position === "right" && <span>{icon}</span>}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
