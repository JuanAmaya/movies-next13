"use client";
import Link from "next/link";
import Image from "next/image";
import noPoster from "../../public/imgs/No_posterL.png";
import { useState } from "react";
import { motion } from "framer-motion";
import WallaceLoading from "./WallaceLoading";

export default function MovieCard({ id, title, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [imageReady, setImageReady] = useState(false);

  let latestImg;
  let movieTitle;
  if (poster_path === null) {
    latestImg = noPoster;
    movieTitle = title;
  } else {
    latestImg = imagePath + poster_path;
  }

  const imageLoaded = () => {
    setImageReady(true);
  };

  return (
    <motion.div
      className="relative flex justify-center overflow-hidden max-w-max rounded-xl"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
    >
      <div className="max-w-max flex justify-center rounded-xl">
        <Link href={`/${id}`}>
          <div className="crt">
            <Image
              src={latestImg}
              width={213}
              height={400}
              alt={title}
              className="h-72 rounded-xl pointer-events-none object-cover"
              onLoad={imageLoaded}
            />
            {!imageReady && <WallaceLoading />}
            <h2 className="text-2xl absolute top-1/2 w-full text-center">
              {movieTitle}
            </h2>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
