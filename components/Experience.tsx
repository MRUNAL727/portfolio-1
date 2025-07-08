import React from "react";
import { Timeline } from "./ui/Timeline";
import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={experienceData} />
    </div>
  );
}
