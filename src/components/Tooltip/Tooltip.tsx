import React, { useState } from "react";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};
const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [show, setShow] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
  top: "left-1/2 top-full -translate-x-1/2 -translate-y-1/2",
  bottom: "left-1/2 bottom-full -translate-x-1/2 translate-y-1/2",
  left: "left-full top-1/2 -translate-y-1/2 -translate-x-1/2",
  right: "right-full top-1/2 -translate-y-1/2 translate-x-1/2",
};

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

     {show && (
     <span
       className={`absolute ${positionClasses[position]} whitespace-nowrap rounded bg-black px-3 py-1.5 text-sm text-white transition-opacity duration-200`}
     >
       {content}
        <span
        className={`absolute h-2 w-2 rotate-45 bg-black ${arrowClasses[position]}`}
          />
        </span>
     )}
    </div>
  );
};

export default Tooltip;