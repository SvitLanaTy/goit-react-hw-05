import { Link, useLocation } from "react-router-dom";
import Grid from "../../components/Grid/Grid";
import GridItem from "../../components/GridItem/GridItem";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {movies.map((movie) => (
          <GridItem key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
                  }
                  alt={movie.title}
                  className={css.img}
                />
                <p className={css.title}>{movie.title}</p>
              </div>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
