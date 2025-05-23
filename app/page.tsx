"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { RiArrowRightLine, RiMailLine, RiFilterLine } from "react-icons/ri";
import { skills } from "./utils/constants";
import { TypeAnimation } from "react-type-animation";
import FilterBar from "../components/FilterBar";

const filterVariants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  show: { opacity: 1, height: "auto", y: 0 },
};

export default function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("All");
  const [range, setRange] = useState<number[]>([1, 5]);

  return (
    <section
      className="pb-32
 flex flex-col w-full sm:w-full md:w-[70%] lg:w-[50%] px-5 sm:px-2 md:px-4 lg:px-6 mt-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center sm:text-left"
      >
        <h1 className="font-pixel text-4xl lg:text-6xl leading-tight">
          {/* greeting */}
          <span
            className="block text-transparent bg-clip-text bg-gradient-to-br
        from-blue-700 via-teal-600 to-green-600              /* darker light-mode */
        dark:from-blue-300 dark:via-teal-200 dark:to-emerald-300"
          >
            Hello,&nbsp;I’m
          </span>

          {/* typing sequence */}
          <TypeAnimation
            sequence={[
              "Jingqiao (Jin/Jason)",
              3500,
              "a Software Developer",
              3000,
              "awkwardly social :>",
              1800,
              "into Bioinformatics",
              2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="block mt-4 text-transparent bg-clip-text
        bg-gradient-to-br from-emerald-700 via-sky-700 to-indigo-700   /* darker light-mode */
        dark:from-teal-300 dark:via-blue-300 dark:to-purple-300"
          />
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 dark:bg-black/60 backdrop-blur rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 p-6 lg:p-8"
      >
        <h1 className="font-pixel text-4xl lg:text-5xl text-center mb-6 drop-shadow-sm text-gray-900 dark:text-white">
          About Me
        </h1>

        {/* ——— Paragraphs ——— */}
        <div className="space-y-5 text-gray-800 dark:text-gray-300 text-[15px] sm:text-[17px] leading-relaxed">
          <motion.p
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="font-bold">&gt;</span> I’m a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-teal-600 to-green-600 dark:from-blue-400 dark:via-teal-300 dark:to-green-400">
              Computer Science
            </span>{" "}
            graduate from{" "}
            <a
              href="https://www.blockeley.com/"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-700 via-yellow-600 to-yellow-500 dark:from-orange-400 dark:via-yellow-500 dark:to-yellow-600 hover:underline"
            >
              UC Berkeley
            </a>
            , with a dual major in Computer Science and Molecular & Cell
            Biology. My academic background includes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-700 via-purple-700 to-violet-700 dark:from-pink-200 dark:via-fuchsia-300 dark:to-purple-300">
              OOP, Data Structures, Algorithms, AI/ML, Operating Systems,
              Databases, Cybersecurity, Cryptography, Networking, and Software
              Engineering
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="font-bold">&gt;</span> As a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-teal-600 to-green-600 dark:from-blue-400 dark:via-teal-300 dark:to-green-400">
              software enthusiast
            </span>
            , I love solving tricky problems and building elegant products.
          </motion.p>

          <motion.p
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="font-bold">&gt;</span> My{" "}
            <a
              href="https://en.wikipedia.org/wiki/Inner_Mongolia"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-700 via-yellow-600 to-yellow-500 dark:from-orange-400 dark:via-yellow-500 dark:to-yellow-600 hover:underline"
            >
              Mongolian
            </a>{" "}
            heritage feeds a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-700 via-purple-700 to-violet-700 dark:from-pink-200 dark:via-fuchsia-300 dark:to-purple-300">
              nomad’s spirit
            </span>{" "}
            — adaptability, curiosity, and resilience.
          </motion.p>

          <motion.p
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="font-bold">&gt;</span> I thrive in{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-teal-600 to-green-600 dark:from-blue-400 dark:via-teal-300 dark:to-green-400">
              collaborative teams
            </span>{" "}
            and keep momentum when working solo.
          </motion.p>

          <motion.p
            initial={{ y: 70 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <span className="font-bold">&gt;</span> Forever a{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 via-teal-600 to-green-600 dark:from-blue-400 dark:via-teal-300 dark:to-green-400">
              lifelong learner
            </span>
            , I embrace uncertainty and pick up new tools fast.
          </motion.p>
        </div>

        {/* ——— Contact Row ——— */}
        <div className="flex items-center justify-center sm:justify-start mt-8 text-sm lg:text-base text-gray-900 dark:text-gray-300">
          <RiArrowRightLine className="mx-2 shrink-0" />
          <span
            className="text-gray-900 dark:text-gray-300 
    bg-gradient-to-r from-black via-gray-800 to-black 
    dark:from-gray-300 dark:via-gray-500 dark:to-gray-300
    bg-[length:200%_100%] bg-no-repeat bg-clip-text text-transparent"
          >
            Always open to new projects and roles.
          </span>
          <RiArrowRightLine className="mx-2 shrink-0" />
          <Link
            href="https://mail.google.com/mail/?view=cm&to=zhao.jing.qiao1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <RiMailLine className="inline-block w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        {/* Title with filter icon */}
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
          <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-200">
            Skills&nbsp;&amp;&nbsp;Technologies
          </h2>

          <button
            aria-label="Filter skills"
            onClick={() => setShowFilter(!showFilter)}
            className="p-1 rounded-full transition-all duration-500 ease-in-out
      hover:bg-gray-200 dark:hover:bg-gray-700 hover:rotate-[360deg]"
          >
            <RiFilterLine className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* ——— Animated filter panel ——— */}
        <motion.div
          initial="hidden"
          animate={showFilter ? "show" : "hidden"}
          variants={filterVariants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div
            className="bg-white/70 dark:bg-black/40 backdrop-blur
      border border-gray-300 dark:border-gray-600 rounded-xl shadow-md p-4 mb-6"
          >
            <FilterBar
              category={category}
              setCategory={setCategory}
              range={range}
              setRange={setRange}
            />
          </div>
        </motion.div>

        {/* Skills chips */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {skills
            .filter(
              (skill) =>
                (category === "All" || skill.categories.includes(category)) &&
                skill.proficiency >= range[0] &&
                skill.proficiency <= range[1]
            )
            .map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="border border-gray-400 dark:border-gray-500 
          rounded-xl px-4 py-1.5 text-xs lg:text-sm
          text-gray-800 dark:text-gray-200
          bg-gray-100 dark:bg-white/5
          hover:bg-gray-200 dark:hover:bg-white/20
          hover:scale-[1.08] transition-all duration-200 ease-out shadow-sm"
              >
                <button className="w-full h-full text-inherit">
                  {skill.name}
                </button>
              </motion.span>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
