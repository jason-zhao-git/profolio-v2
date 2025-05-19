"use client";
import { RiBriefcase2Line, RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { WorkExperience } from "@/app/utils/constants";
import Link from "next/link";

export function WorkExperienceItem({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const date = new Date(`${month} 1, ${year}`);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
    >
      <div
        className="w-full bg-white/10 dark:bg-white/5
    rounded-2xl shadow-lg border border-white/20 dark:border-white/10
    backdrop-blur-lg backdrop-saturate-150 p-6"
      >
        <RiBriefcase2Line className="text-gray-600 dark:text-gray-400 text-xl" />
        <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
          
          <Link href={experience.websiteLink} target="_blank" rel="noopener noreferrer">
            <span className="underline underline-offset-2 text-lg font-semibold">
              {experience.company}
            </span>
          </Link>
          {experience.logo && (
            <div className="absolute top-4 right-8">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-20 h-10 object-contain rounded-md invert dark:invert-0"
              />
            </div>
          )}
        </h3>

        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-gray-800 font-semibold text-xs md:text-sm mb-1 dark:text-gray-300">
            {experience.role}
          </p>
          <p className="text-gray-500 text-xs md:text-sm mb-1 dark:text-gray-300">
            {formatDate(experience.startDate)} –{" "}
            {experience.currentlyWorking
              ? "Present"
              : formatDate(experience.endDate!)}
          </p>
        </div>

        <div className="text-gray-700 dark:text-gray-400 text-xs md:text-sm mb-3">
          {experience.description}
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {experience.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md border border-gray-500/40 dark:border-gray-400/30 text-gray-800 dark:text-gray-100 bg-white/30 dark:bg-gray-800/40"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex">
          <motion.a
            href={experience.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 dark:text-gray-300 dark:hover:text-gray-200 hover:text-gray-700 text-xs md:text-sm"
            whileHover={{ scale: 1.03 }}
          >
            <RiExternalLinkLine className="mr-1" />
            Company Website
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
