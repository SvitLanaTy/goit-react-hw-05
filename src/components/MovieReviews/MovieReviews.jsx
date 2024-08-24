import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import Loader from "../../components/Loader/Loader";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const gethMovieReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    gethMovieReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {reviews && reviews.length > 0 && (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!loading && reviews.length === 0 && (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </div>
  );
}

export default MovieReviews;
