"use client";

import SearchMovie from "./SearchMovie";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SearchBar({ searchMovie }) {
  const [titleNum, setTitleNum] = useState(0);
  const TIME = 2000;

  const longBarVariants = {
    hidden: {
      opacity: 0,
      // height: 0,
    },
    visible: {
      opacity: 1,
      // height: 60,
      transition: {
        duration: 0.9,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  const centerBarVariants = {
    hidden: {
      opacity: 0,
      // height: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.6,
      },
    },
  };

  const shortBarVariants = {
    hidden: {
      opacity: 0,
      // height: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.3,
      },
    },
  };

  const MOVIE_TITLES = [
    {
      title: "PELICULAS",
      textColor: "text-blue-400",
    },
    {
      title: "映画",
      textColor: "text-pink-300",
    },
    {
      title: "MOVIES",
      textColor: "text-blue-400",
    },
    {
      title: "кино",
      textColor: "text-pink-300",
    },
    {
      title: "FILMES",
      textColor: "text-blue-400",
    },
    {
      title: "电影",
      textColor: "text-pink-300",
    },
    {
      title: "ELOKUVIA",
      textColor: "text-blue-400",
    },
    {
      title: "SCANNÁN",
      textColor: "text-pink-300",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (titleNum < MOVIE_TITLES.length - 1) {
        setTitleNum(titleNum + 1);
      } else {
        setTitleNum(0);
      }
    }, TIME);

    return () => clearInterval(interval);
  }, [titleNum]);

  return (
    <div className="p-6 relative">
      <div className="crt flex items-center max-w-7xl mx-auto justify-between">
        <div className="overflow-hidden whitespace-nowrap select-none relative">
          <div className="flex gap-2 rotate-180">
            <motion.div
              className="h-10 w-3 bg-amber-600 rounded-full"
              variants={shortBarVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="h-10 w-3 bg-amber-600 rounded-full"
              variants={centerBarVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="h-12 w-3 bg-amber-600 rounded-full"
              variants={longBarVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </div>
        </div>
        <SearchMovie onSearchedMovie={searchMovie} />
      </div>
    </div>
  );
}
