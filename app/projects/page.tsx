import { allProjects } from "../utils/constants";
import { ProjectItem } from "@/components/ProjectItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Jingqiao",
  description: "Explore my featured, academic, and personal coding projects.",
};

export default function Page() {
  return (
    <main className="flex flex-col items-start justify-start px-3 md:px-5 max-w-full md:max-w-[75%] lg:max-w-[50%] mx-auto">
      <div className="grid mt-8">
        {allProjects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
