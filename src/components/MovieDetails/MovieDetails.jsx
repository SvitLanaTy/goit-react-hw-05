import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

import css from "./MovieDetails.module.css";
import clsx from "clsx";
import Loader from "../Loader/Loader";

const MovieDetails = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div className={css.main}>
      <div className={css.poster}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"
          }
          alt={title}
          className={css.posterImg}
        />
        <div>
          <h2 className={css.posterTitl}>{`${title} (${release_date.substring(
            0,
            4
          )})`}</h2>
          <p className={css.posterInfo}>
            User score: {Math.round(vote_average * 10)}%
          </p>
          <h3 className={css}>Overview</h3>
          <p className={css.posterInfo}>{overview}</p>
          <h3 className={css.posterTitlinfo}>Genres</h3>
          <ul className={css.genresList}>
            {genres.map((genre) => (
              <li className={css.genresItem} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={css.posterTitlinfo}>Additional information</h3>
        <ul className={css.listInfo}>
          <li className={css.itemInfo}>
            <NavLink
              className={({ isActive }) =>
                clsx(css.linkInfo, isActive && css.active)
              }
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li className={css.itemInfo}>
            <NavLink
              className={({ isActive }) =>
                clsx(css.linkInfo, isActive && css.active)
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
