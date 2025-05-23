import { WorkExperienceItem } from "@/components/WorkExperienceItem";
import { workExperiences } from "../utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Jingqiao",
  description:
    "Discover my work experience and the companies I've collaborated with.",

};

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full md:w-[75%] lg:w-[50%] p-3 md:p-5 mx-auto">
      <div>
        {workExperiences.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
