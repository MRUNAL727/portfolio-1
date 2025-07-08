import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";

const Skills = () => {
  return (
    <div className="mt-60">
      <h2 className="heading">Skills</h2>
      <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Skills;

const testimonials = [
  {
    name: "React",
    img: "/react.svg",
  },
  {
    name: "Next.js",
    img: "/next.svg",
  },
  {
    name: "Javascript",
    img: "/javascript.svg",
  },
  {
    name: "Typescript",
    img: "/typescript.svg",
  },
  {
    name: "HTML",
    img: "/html.svg",
  },
  {
    name: "CSS",
    img: "/css.svg",
  },
  {
    name: "SCSS",
    img: "/scss.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/tailwind.svg",
  },
  {
    name: "Material UI",
    img: "/material-ui.svg",
  },
  {
    name: "Angular",
    img: "/angular.svg",
  },
  {
    name: "Node.js",
    img: "/node-js.svg",
  },
  {
    name: "Express.js",
    img: "/express.svg",
  },
  {
    name: "Redux",
    img: "/redux.svg",
  },
  {
    name: "MongoDB",
    img: "/mongodb.svg",
  },
];
