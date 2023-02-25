import MovieCard from "../components/UI/MovieCard";

export default function ResultsList({ movies }) {
  return (
    <div className="grid grid-cols-fluid justify-items-center max-w-screen-xl mx-auto">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="min-w-max m-5 rounded-xl overflow-hidden w-fit"
        >
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        </div>
      ))}
    </div>
  );
}
