import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjAyYmUxY2NhNjJkZTZkY2UyOWVkYmJhNTM2MWM5NiIsIm5iZiI6MTcyMzc5OTA1OC45NTk3NjYsInN1YiI6IjY0NzllYzRkMGUyOWEyMDEzM2MyZTUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rhSiqsjQ7OPCkAfeNhfjOl1DI8oFxx9fdUsKC5-TAZk'
  }
};

export const getTrendingMovies = async () => {
  try {
    const { data }  = await axios.get(      
      '/trending/movie/day?language=en-US',
      options
    );
    return data;
  } catch (error) {
    console.error('error:' + error);
  }
};

export const fetchSearchMovie = async query => {
  try {
    const response = await axios.get(      
      '/search/movie',
      {
        ...options,
        params: {
          query: query,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('error:' + error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error('error:' + error);
    throw error;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(      
      `/movie/${movieId}/credits`,
      options
    );
    return response.data;
  } catch (error) {
    console.error('error:' + error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews`,
      options
    );
    return response.data;
  } catch (error) {
    console.error('error:' + error);
    throw error;
  }
};
