"use client";
import { RiGraduationCapLine, RiExternalLinkLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Link from "next/link";
import { Education } from "@/app/utils/constants";

export function EducationItem({
  edu,
  index,
}: {
  edu: Education;
  index: number;
}) {
  const formatDate = (iso: string) =>
    new Date(`${iso}-15`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });

  // ── Dynamic theme styles ──
  const name = edu.school.toLowerCase();
  const isJHU =
    name.includes("johns hopkins") || edu.logo.toLowerCase().includes("/jhu");
  const isAustin = name.includes("austin prep");

  const isUMich =
    name.includes("michigan") || edu.logo.toLowerCase().includes("/umich");

  const titleGradient = isUMich
    ? "bg-gradient-to-r from-yellow-400 to-blue-500 dark:from-yellow-300 dark:to-blue-400"
    : isJHU
    ? "bg-gradient-to-br from-sky-600 via-blue-500 to-indigo-500 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300"
    : isAustin
    ? "bg-gradient-to-br from-emerald-600 via-green-500 to-lime-500 dark:from-emerald-400 dark:via-green-400 dark:to-lime-300"
    : "bg-gradient-to-br from-amber-700 via-yellow-600 to-yellow-500 dark:from-orange-400 dark:via-yellow-500 dark:to-yellow-400";

  const sealRing = isJHU
    ? "ring-sky-400/70 dark:ring-sky-300/70 shadow-[0_0_15px_3px_rgba(56,189,248,0.45)]"
    : isAustin
    ? "ring-emerald-400/70 dark:ring-emerald-300/70 shadow-[0_0_15px_3px_rgba(52,211,153,0.45)]"
    : "ring-amber-400/60 dark:ring-amber-300/60 shadow-[0_0_15px_3px_rgba(255,191,0,0.4)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className={`mb-8 ${index === 0 ? "mt-4 sm:mt-6" : ""}`}
    >
      <div className="relative w-full rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 shadow-xl p-6 md:p-8 backdrop-blur-lg backdrop-saturate-150">
        {/* ── Seal ── */}
        {isUMich ? (
          <div
            className="absolute -top-6 -right-6 p-[3px] rounded-full 
      bg-[conic-gradient(from_180deg,_#fde047_0deg_180deg,_#3b82f6_180deg_360deg)] 
      shadow-[0_0_15px_3px_rgba(59,130,246,0.4)]"
          >
            <motion.img
              src={edu.logo}
              alt={`${edu.school} seal`}
              className="w-12 h-12 md:w-20 md:h-20 object-contain rounded-full bg-white dark:bg-black"
            />
          </div>
        ) : (
          <img
            src={edu.logo}
            alt={`${edu.school} seal`}
            className={`absolute -top-6 -right-6 object-contain w-12 h-12 md:w-20 md:h-20 rounded-full ring-4 ${sealRing}`}
          />
        )}

        {/* ── Header ── */}
        <div className="min-h-[3rem]">
          <Link
            href={edu.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold text-lg md:text-xl underline underline-offset-2 bg-clip-text text-transparent ${titleGradient}`}
          >
            {edu.school}
          </Link>
        </div>

        {/* ── Degree + GPA + Date ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-y-1">
          <div className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {edu.degree}
            {edu.gpa && (
              <div className="font-normal text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                GPA {edu.gpa}
              </div>
            )}
          </div>

          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
          </div>
        </div>

        {/* ── Description ── */}
        <div className="text-xs md:text-sm leading-relaxed text-gray-700 dark:text-gray-400 mb-4 min-h-[96px]">
          {edu.description}
        </div>

        {/* ── External Link ── */}
        <motion.a
          href={edu.website}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center text-xs md:text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
        >
          <RiExternalLinkLine className="mr-1" />
          School&nbsp;Website
        </motion.a>
      </div>
    </motion.div>
  );
}
