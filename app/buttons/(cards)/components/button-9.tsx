import React from "react";

export const Button9 = () => {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-200 px-6 font-medium text-neutral-950 transition hover:scale-110">
      <span>Hover me</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-black/20"></div>
      </div>
    </button>
  );
};
