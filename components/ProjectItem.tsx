"use client";
import { motion } from "framer-motion";
import {
  RiExternalLinkLine,
  RiGithubLine,
  RiFileTextLine,
} from "react-icons/ri";
import Image from "next/image";

type Project = {
  name: string;
  description: React.ReactNode;
  tag: string;
  image: string;
  tech: string[];
  demo?: string;
  code?: string;
  spec?: string;
  course?: string;
};

export function ProjectItem({ project, index }: { project: Project; index: number }) {
  const isCourseProject = !!project.course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative mb-10 w-full rounded-xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 shadow-xl overflow-hidden"
    >
      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tag */}
        <span className="inline-block text-xs font-semibold px-2 py-1 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-500 text-white shadow-md">
          {project.tag}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>

        {/* Description */}
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-3 text-sm flex-wrap">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <RiExternalLinkLine className="text-base" />
              Live Demo
            </a>
          )}
          {isCourseProject ? (
            <span className="inline-flex items-center gap-1 text-gray-400 cursor-not-allowed">
              <RiGithubLine className="text-base" />
              Source Restricted
            </span>
          ) : (
            project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <RiGithubLine className="text-base" />
                Source Code
              </a>
            )
          )}
          {project.spec && (
            <a
              href={project.spec}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-600 dark:text-yellow-400 hover:underline"
            >
              <RiFileTextLine className="text-base" />
              Docs
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
