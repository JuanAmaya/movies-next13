import PageWrapper from "../components/UI/PageWrapper";
import MovieDisplay from "./MovieDisplay";

export default async function Home() {
  const popularData = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const popularRes = await popularData.json();

  const trendingData = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`
  );
  const trendingRes = await trendingData.json();

  const topRatedData = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const topRatedRes = await topRatedData.json();

  const nowPlayingData = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const nowPlayingRes = await nowPlayingData.json();

  return (
    <main>
      <PageWrapper>
        <MovieDisplay
          popularRes={popularRes}
          trendingRes={trendingRes}
          topRatedRes={topRatedRes}
          nowPlayingRes={nowPlayingRes}
          apiKey={process.env.API_KEY}
        />
      </PageWrapper>
    </main>
  );
}
