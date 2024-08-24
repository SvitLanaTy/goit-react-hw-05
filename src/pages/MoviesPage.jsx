import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container/Container";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";
import SearchBar from "../components/SearchBar/SearchBar";

import { fetchSearchMovie } from "../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { data } = await fetchSearchMovie(query);
        setMovies(data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = (searchValue) => {
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <Section>
      <Container>
        <SearchBar defaultSearchValue={query} onSubmit={handleSearch} />
        {loading && <Loader />}
        {movies.length > 0 && <MovieList movies={movies} query={query} />}
        {movies.length === 0 && query && !loading && (
          <p>Not found movies...try againe</p>
        )}
      </Container>
    </Section>
  );
};

export default MoviesPage;
