import { Link, useLocation } from "react-router-dom";
import css from './GoBackBtn.module.css';
import { useRef } from "react";

export const GoBackBtn = () => {
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/");
  
  return <Link to={goBack.current} className={css.link}>⬅ Go back</Link>;
};
