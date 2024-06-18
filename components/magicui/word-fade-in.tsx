"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.25,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ");
  const _withBreak = [];

  for (let i = 0; i < _words.length; i++) {
    _withBreak.push(_words[i]);
    if (i === 2) {
      _withBreak.push(<br key="br" />);
    }
  }

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}
    >
      {_withBreak.map((item, i) =>
        typeof item === "string" ? (
          <motion.span key={item} variants={variants} custom={i}>
            {item}{" "}
          </motion.span>
        ) : (
          item
        )
      )}
    </motion.h1>
  );
}
