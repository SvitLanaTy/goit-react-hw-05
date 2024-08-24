import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api";
import css from "./MovieCast.module.css";
import Loader from "../../components/Loader/Loader";

function MovieCast() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <div className={css.castSection}>
      {loading && <Loader />}
      <ul className={css.castList}>
        {cast.map((actor) => {
          return (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={250}
                className={css.castImg}
              />

              <h4 className={css.castName}>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieCast;
