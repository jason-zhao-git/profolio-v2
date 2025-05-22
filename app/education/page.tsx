// app/education/page.tsx
import { EducationItem } from "@/components/EducationItem";
import { educationData } from "@/app/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education – Jingqiao",
  description:
    "Degrees, coursework and academic highlights from UC Berkeley and beyond.",
};

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full md:w-[75%] lg:w-[50%] p-3 md:p-5 mx-auto">
      {educationData.map((edu, index) => (
        <EducationItem key={index} edu={edu} index={index} />
      ))}
    </main>
  );
}
