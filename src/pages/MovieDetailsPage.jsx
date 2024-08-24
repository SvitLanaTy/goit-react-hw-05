import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";
import { fetchMovieDetails } from "../services/api";
import { GoBackBtn } from "../components/GoBackBtn/GoBackBtn";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {!loading && <GoBackBtn />}
        {movie && <MovieDetails movie={movie} />}
      </Container>
    </Section>
  );
};
export default MovieDetailsPage;
