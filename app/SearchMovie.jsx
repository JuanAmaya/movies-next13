"use client";

import { useRef } from "react";

export default function SearchMovie({ onSearchedMovie }) {
  const movieInputRef = useRef();

  const searchMovieHandler = (e) => {
    console.log(movieInputRef.current.value);
    const enteredMovie = movieInputRef.current.value;
    onSearchedMovie(enteredMovie);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        onChange={searchMovieHandler}
        ref={movieInputRef}
        className="p-2 rounded-lg"
      />
    </div>
  );
}
