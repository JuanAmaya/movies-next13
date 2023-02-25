"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "../components/Slider/Slider";
import ArrowButton from "../components/UI/ArrowButton";
import noPoster from "../public/imgs/No_poster.jpg";

export default function MovieSlider({ movies }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <Slider
        autoplay={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoPlay={5000}
      >
        {movies.map((movie) => (
          <div className="relative max-h-96 overflow-hidden">
            <div className="crt">
              <Link href={`/${movie.id}`}>
                <Image
                  src={
                    movie.backdrop_path !== null
                      ? imagePath + movie.backdrop_path
                      : noPoster
                  }
                  width={400}
                  height={400}
                  alt={movie.title}
                  className="w-screen pointer-events-none right-1/2"
                />
                <h2 className="absolute text-2xl md:text-4xl z-50 top-1/2 w-full text-center">
                  {movie.title}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
