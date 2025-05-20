"use client";

import { motion } from "framer-motion";

export default function ChatbotPlaceholder() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <h1 className="text-center text-2xl font-semibold">
        Chatbot still under construction, feature online soon{" "}
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          :&gt;
        </motion.span>
      </h1>
    </main>
  );
}