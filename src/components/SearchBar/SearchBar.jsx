import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") {
      return toast.error("Please enter the text for search!", {
        position: "top",
      });
    }

    onSubmit(value);
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={value}
          name="input"
          onChange={handleChange}
          placeholder="Search movies..."
          autoComplete="off"
          autoFocus
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </>
  );
}

export default SearchBar;
