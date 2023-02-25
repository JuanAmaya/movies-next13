import MovieCard from "../components/UI/MovieCard";
import Slider from "../components/Slider/Slider";

export default function MovieList({ movies, listTitle }) {
  return (
    <div className="max-w-screen-xl mx-auto mb-4">
      <h2 className="text-3xl ml-4 mb-2">{listTitle}</h2>
      <Slider
        autoplay={true}
        slidesToShow={5}
        slidesToScroll={5}
        responsive={[
          {
            breakpoint: 1110,
            settings: { slidesToShow: 5, slidesToScroll: 5 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4, slidesToScroll: 4 },
          },
          {
            breakpoint: 900,
            settings: { slidesToShow: 3, slidesToScroll: 3 },
          },
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ]}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="rounded-xl overflow-hidden max-w-fit">
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
