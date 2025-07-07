import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div
          className="flex h-screen w-full items-center justify-center bg-black-100
        absolute left-0 top-0"
        >
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:50px_50px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.3)_1px,transparent_1px)]"
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
            {/* Backgrounds */}
          </p>
        </div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col ietms-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
            Dynamic web magice with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-8xl lg:text-8xl"
            words="Transforming Concepts Into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Mrunal, a Next.js Developer
          </p>

          <a href="#about" className="flex justify-center">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow className="h-3 w-3" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
