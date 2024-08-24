import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";

import { getTrendingMovies } from "../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      const data = await getTrendingMovies();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <h2 className="title">Trending today</h2>
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default HomePage;
