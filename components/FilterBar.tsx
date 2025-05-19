"use client";

import {
  Select,
  MenuItem,
  Slider,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useMemo } from "react";

type FilterBarProps = {
  category: string;
  setCategory: (value: string) => void;
  range: number[];
  setRange: (value: number[]) => void;
};

const menuItems = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "AI/ML",
  "Tools & Platforms",
  "Data Science",
  "Bioinformatics",
  "Programming Language",
  "Human Language",
  "Soft Skills",
  "Sports/Hobbies",
];

export default function FilterBar({
  category,
  setCategory,
  range,
  setRange,
}: FilterBarProps) {
  // Detect light vs dark via next-themes
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Memoized slider style
  const sliderSx = useMemo(
    () => ({
      color: isDark ? "#a3a3a3" : "#4b5563", // thumb/range color
      height: 4,
      "& .MuiSlider-thumb": {
        bgcolor: isDark ? "#d1d5db" : "#4b5563",
        "&:hover, &.Mui-focusVisible": {
          boxShadow: "0 0 0 6px rgba(0,0,0,0.1)",
        },
      },
      "& .MuiSlider-track": {
        bgcolor: isDark ? "#6b7280" : "#6b7280",
      },
      "& .MuiSlider-rail": {
        opacity: 0.3,
        bgcolor: isDark ? "#374151" : "#d1d5db",
      },
    }),
    [isDark]
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Category dropdown */}
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800 py-2 px-3"
        >
          {menuItems.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {/* Dual-thumb range slider */}
      <div>
        <label className="block mb-1 font-medium">Proficiency Range</label>
        <Slider
          value={range}
          onChange={(e, v) => setRange(v as number[])}
          valueLabelDisplay="auto"
          min={1}
          max={5}
          disableSwap
          sx={sliderSx}
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Showing skills rated between {range[0]} and {range[1]}
        </p>
      </div>
    </div>
  );
}
