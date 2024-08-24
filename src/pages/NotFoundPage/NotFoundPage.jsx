import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.nfp}>
      <h2 className={css.title}>404 Page Not Found</h2>
      <Link className={css.return} to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
