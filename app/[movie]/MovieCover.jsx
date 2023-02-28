"use client";
import Image from "next/image";
import noPoster from "../../public/imgs/No_poster.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import WallaceLoading from "../../components/UI/WallaceLoading";

export default function MovieCover({
  imgCover,
  imgPoster,
  title,
  adult,
  genres,
}) {
  const [imageReady, setImageReady] = useState(false);

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
        repeatDelay: 3,
      },
    },
  };

  const imagePath = "https://image.tmdb.org/t/p/original";
  let latestImgCover;
  let altTitleCover;
  let latestImgPoster;
  let altTitlePoster;

  if (imgCover === null || adult) {
    latestImgCover = noPoster;
    altTitleCover = "No Image";
  } else {
    latestImgCover = imagePath + imgCover;
    altTitleCover = title;
  }

  if (imgPoster === null || adult) {
    latestImgPoster = noPoster;
    altTitlePoster = "No Image";
  } else {
    latestImgPoster = imagePath + imgPoster;
    altTitlePoster = title;
  }

  const imageLoaded = () => {
    setImageReady(true);
  };

  return (
    <div className="relative select-none">
      <Image
        className="w-full object-cover h-64 blur-sm"
        src={latestImgCover}
        alt={altTitleCover}
        width={1000}
        height={720}
        onLoad={imageLoaded}
        priority
      />

      {!imageReady && <WallaceLoading />}

      <div className="absolute top-24 w-full mx-auto text-center">
        <motion.h2
          className="md:text-5xl text-4xl font-bold strokeText italic mt-2"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>

      <div className="flex justify-center w-full">
        <div className="max-w-max gap-2 my-8 flex absolute top-0">
          {genres !== undefined &&
            genres.map((genre) => (
              <span
                key={genre.id}
                className="text-lg bg-slate-900/20 px-1 rounded-md"
              >
                {genre.name}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
