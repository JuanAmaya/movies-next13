import Link from "next/link";
import MovieCover from "./MovieCover";
import PageWrapper from "../../components/UI/PageWrapper";
import DataCard from "./DataCard";
import SmallMovieDetails from "./SmallMovieDetails";
import MovieCard from "../../components/UI/MovieCard";
import ShowCast from "./ShowCast";
import Section from "./Section";
import Image from "next/image";
import noPoster from "../../public/imgs/No_poster.jpg";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  const videoData = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${process.env.API_KEY}&language=en-US`
  );
  const videoRes = await videoData.json();

  const castData = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );
  const castRes = await castData.json();

  const recommendationsData = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const recommendationsRes = await recommendationsData.json();
  console.log("recomendaciones", recommendationsRes);

  const imagePath = "https://image.tmdb.org/t/p/original";

  let latestImgPoster;
  let altTitlePoster;

  if (res.poster_path === null || res.adult) {
    latestImgPoster = noPoster;
    altTitlePoster = "No Image";
  } else {
    latestImgPoster = imagePath + res.poster_path;
    altTitlePoster = res.title;
  }

  // const MOVIE_INFO = [
  //   {
  //     title: "STATUS",
  //     movieData: await res.status,
  //     bgColor: "bg-emerald-600",
  //     iconD:
  //       "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5",
  //   },
  //   {
  //     title: "RUNTIME",
  //     movieData: await res.runtime,
  //     bgColor: "bg-rose-600",
  //     iconD: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  //   },
  // ];

  return (
    <PageWrapper>
      <div className="relative">
        <MovieCover
          imgCover={res.backdrop_path}
          imgPoster={res.poster_path}
          title={res.title}
          genres={res.genres}
        />
        <div className="absolute top-0 max-w-screen-xl w-full right-1/2 -mr-8">
          <Link href={"/"}>
            <DataCard
              iconD={"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"}
              bgColor={"bg-zinc-900"}
              cardW={
                "w-16 h-8 py-5 hover:bg-zinc-700 ease-in-out duration-200 top-2 left-2"
              }
            />
          </Link>
        </div>

        <div className="md:flex justify-center mx-4 gap-2">
          <div className="flex justify-center">
            <Image
              className="w-52 rounded-xl"
              src={latestImgPoster}
              alt={altTitlePoster}
              width={1000}
              height={720}
              priority
            />
          </div>

          <div className="mx-2 flex justify-center pt-6">
            <DataCard
              title={"OVERVIEW"}
              movieData={res.overview}
              bgColor={"bg-teal-400"}
              cardW={"w-full max-w-2xl"}
              fontSize={"text-lg"}
            />
          </div>
        </div>
        <SmallMovieDetails res={res} />

        {videoRes.results[0] !== undefined && (
          <Section
            title={"TRAILER"}
            content={
              <div className="flex justify-center mb-4 rounded-2xl w-10/12 m-auto overflow-hidden tvShutDown relative max-w-max">
                <div className="crt">
                  <iframe
                    width="560"
                    height="300"
                    className="rounded-2xl"
                    src={`https://www.youtube.com/embed/${videoRes.results[0].key}?autoplay=1&mute=1&loop=1&showinfo=0&controls=0&autohide=1&loop=1&playlist=${videoRes.results[0].key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            }
          />
        )}

        {castRes.cast[0] !== undefined && (
          <Section
            title={"ACTORS"}
            content={<ShowCast data={castRes.cast} />}
          />
        )}

        {recommendationsRes.results[0] !== undefined && (
          <Section
            title={"RECOMMENDATIONS"}
            content={
              <div className="mx-auto grid gap-4 justify-center grid-cols-cards mt-6 max-w-screen-xl">
                {recommendationsRes.results
                  .slice(0, 4)
                  .map((recommendation) => (
                    <MovieCard
                      key={recommendation.id}
                      id={recommendation.id}
                      title={recommendation.title}
                      poster_path={recommendation.poster_path}
                    />
                  ))}
              </div>
            }
          />
        )}
      </div>
    </PageWrapper>
  );
}
